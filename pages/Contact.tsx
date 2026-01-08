
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, ExternalLink, CheckCircle2, RefreshCcw } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    industry: 'Select Industry Type',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // INTEGRATION NOTE: 
    // To send actual emails to aarush-hr@idtechsolutionsbd.com:
    // 1. Sign up at emailjs.com
    // 2. Use their SDK: emailjs.send("service_id", "template_id", formData, "public_key")
    // For now, we simulate the network request.
    
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-20">
      {/* Section 1 — Hero / Intro */}
      <section className="py-24 bg-[#0A1E3F] relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
             <h1 className="text-6xl md:text-8xl font-bold mb-8">Get in <span className="text-[#00D6FF]">Touch</span></h1>
             <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
               Ready to discuss a large-scale enterprise transformation or a local community pilot? Our specialists are standing by to engineer your success.
             </p>
          </motion.div>
        </div>
        {/* Animated Particle field */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           {[...Array(40)].map((_, i) => (
             <motion.div 
               key={i} 
               className="absolute w-1 h-1 bg-[#00D6FF] rounded-full" 
               initial={{ 
                 top: `${Math.random()*100}%`, 
                 left: `${Math.random()*100}%`,
                 opacity: Math.random() 
               }} 
               animate={{
                 y: [0, -50, 0],
                 opacity: [0.2, 0.6, 0.2],
               }}
               transition={{
                 duration: 3 + Math.random() * 5,
                 repeat: Infinity,
                 ease: "easeInOut",
                 delay: Math.random() * 5
               }}
             />
           ))}
        </div>
      </section>

      <section className="py-24 bg-[#0A1E3F]">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div>
               <h2 className="text-4xl font-bold mb-8">Let's start the <br /> <span className="text-[#00D6FF]">Conversation</span></h2>
               <p className="text-slate-400 text-lg leading-relaxed mb-10">
                 We respond to all verified inquiries within 24 hours. For urgent industrial support, please use our secure client portal.
               </p>
               
               <div className="space-y-10">
                 {[
                   { icon: Mail, label: 'Inquiries', val: 'aarush-hr@idtechsolutionsbd.com' },
                   { icon: Phone, label: 'Enterprise Support', val: '+8801715670790' },
                   { icon: MapPin, label: 'Global HQ', val: 'Gareeb-E-Newaaz-Avenue,Sector#11,Uttara,Dhaka-1230' }
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-8 group cursor-pointer">
                      <div className="w-16 h-16 rounded-3xl bg-[#0D2B55] border border-white/5 flex items-center justify-center text-[#00D6FF] group-hover:scale-110 group-hover:bg-[#00D6FF] group-hover:text-[#0A1E3F] transition-all duration-300">
                        <item.icon size={28} />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-2">{item.label}</span>
                        <span className="text-xl font-bold text-white group-hover:text-[#00D6FF] transition-colors">{item.val}</span>
                      </div>
                   </div>
                 ))}
               </div>
            </div>

            <div>
               <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-8">Digital Presence</h4>
               <div className="grid grid-cols-2 gap-4 max-w-sm">
                  {[
                    { icon: Facebook, name: 'Facebook' },
                    { icon: Mail, name: 'Gmail' }
                  ].map((s, i) => (
                    <a key={i} href="#" className="p-4 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center gap-3 hover:border-[#00D6FF] hover:bg-[#00D6FF]/5 transition-all group">
                       <s.icon size={24} className="text-slate-400 group-hover:text-[#00D6FF]" />
                       <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-white">{s.name}</span>
                    </a>
                  ))}
               </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 bg-[#0D2B55]/30 rounded-[60px] border border-[#00D6FF]/20 backdrop-blur-xl relative overflow-hidden shadow-2xl min-h-[600px] flex flex-col justify-center"
          >
            {/* Form Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D6FF] opacity-5 blur-3xl rounded-full" />
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center space-y-8 py-12"
                >
                  <div className="w-24 h-24 bg-[#00D6FF]/10 rounded-full flex items-center justify-center mx-auto text-[#00D6FF] relative">
                    <motion.div 
                      className="absolute inset-0 rounded-full border-2 border-[#00D6FF]"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                    <CheckCircle2 size={48} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold">Inquiry Transmitted</h3>
                    <p className="text-slate-400 max-w-sm mx-auto">
                      Thank you for contacting ID Tech. Your message has been routed to our enterprise specialists. Verification email sent to: <br />
                      <span className="text-[#00D6FF] font-bold">{formData.email}</span>
                    </p>
                  </div>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="flex items-center gap-2 mx-auto text-sm font-bold text-slate-500 hover:text-white transition-colors"
                  >
                    <RefreshCcw size={14} /> Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8 relative z-10"
                >
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 flex items-center gap-2">Full Name <div className="w-1 h-1 bg-[#00D6FF] rounded-full" /></label>
                      <input 
                        required
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full bg-[#0A1E3F] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00D6FF] transition-all text-white placeholder:text-slate-600" 
                        placeholder="E.g. Dr. John Doe" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 flex items-center gap-2">Work Email <div className="w-1 h-1 bg-[#00D6FF] rounded-full" /></label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-[#0A1E3F] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00D6FF] transition-all text-white placeholder:text-slate-600" 
                        placeholder="john@enterprise.com" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400">Industry / Organization</label>
                    <select 
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full bg-[#0A1E3F] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00D6FF] transition-all text-slate-400 appearance-none cursor-pointer"
                    >
                       <option>Select Industry Type</option>
                       <option>Logistics & Warehouse</option>
                       <option>Public Infrastructure</option>
                       <option>Healthcare & Life Sciences</option>
                       <option>Renewable Energy</option>
                       <option>Educational Institution</option>
                       <option>Other / Custom Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400">Project Details</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5} 
                      className="w-full bg-[#0A1E3F] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00D6FF] transition-all text-white placeholder:text-slate-600 resize-none" 
                      placeholder="Tell us about the challenges you're facing..." 
                    />
                  </div>

                  <div className="pt-6">
                    <button 
                      type="submit"
                      disabled={status === 'sending'}
                      className={`w-full py-6 font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl ${
                        status === 'sending' 
                        ? 'bg-slate-700 text-slate-400 cursor-wait' 
                        : 'bg-[#00D6FF] text-[#0A1E3F] hover:shadow-[0_0_30px_rgba(0,214,255,0.4)] hover:scale-[1.02] active:scale-95'
                      }`}
                    >
                      {status === 'sending' ? (
                        <>Processing Transmission... <RefreshCcw size={20} className="animate-spin" /></>
                      ) : (
                        <>Send Your Inquiry <Send size={20} /></>
                      )}
                    </button>
                    <p className="text-center text-[10px] text-slate-500 mt-6 uppercase tracking-widest font-bold">
                      By submitting, you agree to our <a href="#" className="text-[#00D6FF] border-b border-[#00D6FF]/30">Privacy Ethics</a>
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Section 3 — Global Locations Map Preview */}
        <div className="container mx-auto px-6 mt-40">
           <div className="p-20 bg-[#0D2B55]/20 rounded-[80px] border border-white/5 text-center group interactive">
              <h3 className="text-4xl font-bold mb-8">Global Node Network</h3>
              <p className="text-slate-400 max-w-xl mx-auto mb-12 font-light">
                We operate across 12 strategic hubs world-wide, ensuring low-latency support and regional expertise.
              </p>
              <div className="flex flex-wrap justify-center gap-8 opacity-60 group-hover:opacity-100 transition-opacity">
                 {['San Francisco', 'London', 'Singapore', 'Berlin', 'Tokyo', 'Nairobi'].map(city => (
                   <span key={city} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                     <div className="w-2 h-2 rounded-full bg-[#00D6FF]" /> {city}
                   </span>
                 ))}
              </div>
              <button className="mt-16 flex items-center gap-2 mx-auto text-[#00D6FF] font-bold border-b border-[#00D6FF]/20 pb-2 hover:border-[#00D6FF] transition-all">
                View Integrated Map <ExternalLink size={16} />
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
