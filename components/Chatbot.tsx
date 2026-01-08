
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Mic, X, Send, User, Bot, Loader2, Volume2, VolumeX } from 'lucide-react';
import { GoogleGenAI, LiveServerMessage, Modality, Blob } from '@google/genai';

// Audio Utility Functions as per Gemini API guidelines
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', type: 'bot', text: 'Hello! I am ID-AI, your intelligent industrial assistant. How can I help you today?', timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isBotThinking, setIsBotThinking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Refs for Live API and Audio
  const sessionRef = useRef<any>(null);
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef(0);
  const activeSourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const chatScrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(scrollToBottom, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages, isBotThinking]);

  // Handle Voice Interaction
  const toggleVoice = async () => {
    if (isVoiceActive) {
      stopVoiceSession();
    } else {
      startVoiceSession();
    }
  };

  const startVoiceSession = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsVoiceActive(true);

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      inputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      outputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        callbacks: {
          onopen: () => {
            console.log('ID-AI Live Session Connected');
            const source = inputAudioContextRef.current!.createMediaStreamSource(stream);
            const scriptProcessor = inputAudioContextRef.current!.createScriptProcessor(4096, 1, 1);
            
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const int16 = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) {
                int16[i] = inputData[i] * 32768;
              }
              const pcmBlob: Blob = {
                data: encode(new Uint8Array(int16.buffer)),
                mimeType: 'audio/pcm;rate=16000',
              };
              sessionPromise.then(session => session.sendRealtimeInput({ media: pcmBlob }));
            };

            source.connect(scriptProcessor);
            scriptProcessor.connect(inputAudioContextRef.current!.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            const audioData = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (audioData && outputAudioContextRef.current) {
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputAudioContextRef.current.currentTime);
              const buffer = await decodeAudioData(decode(audioData), outputAudioContextRef.current, 24000, 1);
              const sourceNode = outputAudioContextRef.current.createBufferSource();
              sourceNode.buffer = buffer;
              sourceNode.connect(outputAudioContextRef.current.destination);
              sourceNode.start(nextStartTimeRef.current);
              nextStartTimeRef.current += buffer.duration;
              activeSourcesRef.current.add(sourceNode);
              sourceNode.onended = () => activeSourcesRef.current.delete(sourceNode);
            }

            if (message.serverContent?.interrupted) {
              activeSourcesRef.current.forEach(s => s.stop());
              activeSourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }
          },
          onerror: (e) => console.error('Voice Session Error:', e),
          onclose: () => stopVoiceSession()
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } } },
          systemInstruction: 'You are ID-AI, a helpful, precise, and tech-forward voice assistant for ID Tech. You specialize in industrial automation, robotics, and ethical AI. Keep responses concise and human-centric.'
        }
      });

      sessionRef.current = sessionPromise;

    } catch (err) {
      console.error('Microphone Access Denied:', err);
      setIsVoiceActive(false);
    }
  };

  const stopVoiceSession = () => {
    setIsVoiceActive(false);
    if (sessionRef.current) {
      sessionRef.current.then((s: any) => s.close());
      sessionRef.current = null;
    }
    inputAudioContextRef.current?.close();
    outputAudioContextRef.current?.close();
    activeSourcesRef.current.forEach(s => s.stop());
    activeSourcesRef.current.clear();
  };

  const handleSendText = async () => {
    if (!inputText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsBotThinking(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: inputText,
        config: {
          systemInstruction: 'You are ID-AI, the official chatbot for ID Tech. Provide high-quality, professional information about the company\'s robotics, AI analytics, and ethical automation solutions. Be helpful and polite.'
        }
      });

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: response.text || 'I apologize, I encountered a brief synchronization error. How else can I assist?',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error('Chat Error:', err);
    } finally {
      setIsBotThinking(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[1000]">
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#00D6FF] text-[#0A1E3F] flex items-center justify-center shadow-[0_0_40px_rgba(0,214,255,0.6)] border-2 border-white/40 relative z-[1001]"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}>
              <MessageSquare size={28} />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && messages.length === 1 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#0A1E3F] pulse-effect" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 30, scale: 0.9, x: 20 }}
            className="absolute bottom-20 md:bottom-24 right-0 w-[calc(100vw-3rem)] md:w-[420px] h-[550px] md:h-[650px] max-h-[calc(100vh-120px)] bg-[#0A1E3F] border-2 border-[#00D6FF] rounded-[24px] md:rounded-[32px] shadow-[0_30px_90px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden backdrop-blur-3xl z-[1000]"
            style={{ 
              boxShadow: '0 0 60px rgba(0, 214, 255, 0.25), 0 30px 90px rgba(0,0,0,0.9)',
            }}
          >
            {/* Header */}
            <div className="p-4 md:p-6 border-b border-[#00D6FF]/20 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00D6FF] rounded-xl flex items-center justify-center text-[#0A1E3F] font-bold shadow-[0_0_15px_rgba(0,214,255,0.4)]">ID</div>
                <div>
                  <h4 className="font-bold text-sm text-white">ID-AI Assistant</h4>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_#22c55e]" />
                    <span className="text-[10px] uppercase tracking-widest text-[#00D6FF] font-bold">Secure Connection</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-lg hover:bg-white/10 text-slate-300 transition-colors"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-2 rounded-lg hover:bg-red-500/20 text-slate-300 hover:text-red-400 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={chatScrollRef}
              className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar scroll-smooth bg-gradient-to-b from-transparent to-[#0D2B55]/20"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[90%] ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md ${
                      msg.type === 'user' ? 'bg-[#00D6FF]/20 text-[#00D6FF] border border-[#00D6FF]/30' : 'bg-white/10 text-slate-300 border border-white/20'
                    }`}>
                      {msg.type === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-xl border ${
                      msg.type === 'user' 
                      ? 'bg-[#00D6FF] text-[#0A1E3F] font-semibold rounded-tr-none border-[#00D6FF]' 
                      : 'bg-white/10 backdrop-blur-md border-white/10 text-slate-100 rounded-tl-none'
                    }`}>
                      {msg.text}
                      <div className={`text-[9px] mt-2 font-bold uppercase tracking-tight opacity-50 ${msg.type === 'user' ? 'text-right text-[#0A1E3F]' : 'text-slate-400'}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              {isBotThinking && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 text-slate-300 flex items-center justify-center border border-white/20">
                      <Bot size={14} />
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none">
                      <div className="flex gap-1.5 items-center">
                        <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1.5 h-1.5 bg-[#00D6FF] rounded-full" />
                        <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#00D6FF] rounded-full" />
                        <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#00D6FF] rounded-full" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 md:p-6 bg-[#0A1E3F] border-t border-[#00D6FF]/20">
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={isVoiceActive ? { 
                    scale: [1, 1.1, 1],
                    boxShadow: '0 0 20px rgba(0,214,255,0.4)'
                  } : {}}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  onClick={toggleVoice}
                  className={`p-3 rounded-xl transition-all border-2 ${
                    isVoiceActive 
                    ? 'bg-[#00D6FF] text-[#0A1E3F] border-[#00D6FF]' 
                    : 'bg-white/5 text-slate-400 border-white/10 hover:text-[#00D6FF] hover:border-[#00D6FF]/50'
                  }`}
                  title="Toggle Voice Assistant"
                >
                  <Mic size={20} />
                </motion.button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendText()}
                    placeholder={isVoiceActive ? "Listening..." : "Type your message..."}
                    className="w-full bg-white/10 border-2 border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00D6FF] focus:bg-white/15 transition-all text-white placeholder:text-slate-500"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendText}
                  disabled={!inputText.trim() || isBotThinking}
                  className="p-3 bg-[#00D6FF] text-[#0A1E3F] rounded-xl shadow-[0_4px_15px_rgba(0,214,255,0.4)] disabled:opacity-30 transition-all border-2 border-[#00D6FF]"
                >
                  <Send size={20} />
                </motion.button>
              </div>
              <div className="mt-4 flex justify-between items-center px-1">
                 <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#00D6FF] shadow-[0_0_5px_#00D6FF]" />
                   <span className="text-[9px] text-[#00D6FF] font-black uppercase tracking-widest">ID-MESH 2.5 ACTIVE</span>
                 </div>
                 {isVoiceActive && (
                   <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                   >
                     <div className="flex gap-1 items-center h-4">
                        {[...Array(5)].map((_, i) => (
                          <motion.div 
                            key={i} 
                            className="w-0.5 bg-[#00D6FF] rounded-full"
                            animate={{ height: ['4px', '14px', '4px'] }}
                            transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                          />
                        ))}
                     </div>
                     <span className="text-[9px] text-[#00D6FF] font-black uppercase tracking-tighter">VOICE ENABLED</span>
                   </motion.div>
                 )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
