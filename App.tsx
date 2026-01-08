
import React, { useState, useEffect, useCallback } from 'react';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Metrics from './components/Metrics';
import InteractiveTech from './components/InteractiveTech';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// New Pages
import AboutCompany from './pages/AboutCompany';
import TechInAction from './pages/TechInAction';
import CaseStudies from './pages/CaseStudies';
import Team from './pages/Team';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Info, 
  Settings, 
  FileText, 
  Users, 
  Briefcase, 
  Mail, 
  Home,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

type ViewState = 'landing' | 'about-company' | 'how-it-works' | 'case-studies' | 'team' | 'careers' | 'contact';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navigateTo = useCallback((targetView: ViewState) => {
    setView(targetView);
    setIsNavOpen(false);
    window.location.hash = targetView;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      const validViews: ViewState[] = ['landing', 'about-company', 'how-it-works', 'case-studies', 'team', 'careers', 'contact'];
      
      if (validViews.includes(hash as ViewState)) {
        setView(hash as ViewState);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setView('landing');
      }
      setIsNavOpen(false);
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();
    
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        const targetHash = anchor.hash.replace('#', '') as ViewState;
        const validViews: ViewState[] = ['landing', 'about-company', 'how-it-works', 'case-studies', 'team', 'careers', 'contact'];
        if (validViews.includes(targetHash)) {
          e.preventDefault();
          navigateTo(targetHash);
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      window.removeEventListener('hashchange', handleHash);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [navigateTo]);

  const navItems = [
    { id: 'landing' as ViewState, label: 'Home', icon: Home, hash: '#landing', desc: 'Main Dashboard' },
    { id: 'about-company' as ViewState, label: 'About ID Tech', icon: Info, hash: '#about-company', desc: 'Mission & Vision' },
    { id: 'how-it-works' as ViewState, label: 'How We Work', icon: Settings, hash: '#how-it-works', desc: 'Our Engineering Process' },
    { id: 'case-studies' as ViewState, label: 'Case Studies', icon: FileText, hash: '#case-studies', desc: 'Real World Success' },
    { id: 'team' as ViewState, label: 'Founder', icon: Users, hash: '#team', desc: 'The Visionary Behind Tech' },
    { id: 'careers' as ViewState, label: 'Careers', icon: Briefcase, hash: '#careers', desc: 'Join the Impact' },
    { id: 'contact' as ViewState, label: 'Contact Us', icon: Mail, hash: '#contact', desc: 'Start a Partnership' },
  ];

  const renderView = () => {
    switch(view) {
      case 'about-company': return <AboutCompany />;
      case 'how-it-works': return <TechInAction />;
      case 'case-studies': return <CaseStudies />;
      case 'team': return <Team />;
      case 'careers': return <Careers />;
      case 'contact': return <Contact />;
      default: return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Hero />
          <About />
          <section id="solutions-section">
            <Solutions />
          </section>
          <section id="impact-section">
            <Metrics />
            <InteractiveTech />
          </section>
          <Roadmap />
          
          <section id="landing-cta" className="py-32 relative overflow-hidden flex items-center justify-center bg-[#0A1E3F]">
            <div className="absolute inset-0 bg-[#00D6FF]/5 pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto p-12 md:p-20 rounded-[40px] border border-[#00D6FF]/20 bg-[#0D2B55]/50 backdrop-blur-xl"
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Build <br /> <span className="text-[#00D6FF]">The Human Future?</span></h2>
                <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                  Whether you're a multi-national enterprise or a civic leader, ID Tech solutions scale to your vision. Let's create impact together.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    onClick={() => navigateTo('contact')}
                    className="px-10 py-5 bg-[#00D6FF] text-[#0A1E3F] font-bold rounded-full text-lg shadow-[0_0_30px_rgba(0,214,255,0.4)] hover:scale-105 transition-all inline-block"
                  >
                    Request a Solution Demo
                  </button>
                  <button 
                    onClick={() => navigateTo('about-company')}
                    className="px-10 py-5 border border-white/20 font-bold rounded-full text-lg hover:bg-white/5 transition-all inline-block"
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        </motion.div>
      );
    }
  };

  return (
    <div className="bg-[#0A1E3F] text-white selection:bg-[#00D6FF] selection:text-[#0A1E3F] min-h-screen">
      <Cursor />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#00D6FF] origin-left z-[100]"
        style={{ scaleX }}
      />

      <header className="fixed top-0 left-0 right-0 z-[60] px-6 py-6 flex justify-between items-center pointer-events-none">
        <button 
          onClick={(e) => { e.preventDefault(); navigateTo('landing'); }}
          className="flex items-center gap-2 group pointer-events-auto"
        >
          <div className="w-10 h-10 bg-[#00D6FF] rounded-xl flex items-center justify-center text-[#0A1E3F] font-bold text-xl group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,214,255,0.3)]">ID</div>
          <span className="text-2xl font-bold tracking-tighter hidden sm:inline-block">ID TECH</span>
        </button>

        <button 
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="w-14 h-14 bg-[#0D2B55]/80 backdrop-blur-md border border-[#00D6FF]/30 rounded-2xl flex items-center justify-center text-[#00D6FF] hover:bg-[#00D6FF] hover:text-[#0A1E3F] transition-all pointer-events-auto shadow-2xl active:scale-90"
        >
          {isNavOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      <AnimatePresence>
        {isNavOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNavOpen(false)}
              className="fixed inset-0 bg-[#0A1E3F]/80 backdrop-blur-sm z-[70]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0D2B55] z-[80] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] border-l border-[#00D6FF]/20 flex flex-col"
            >
              <div className="flex-1 overflow-y-auto overflow-x-hidden pt-32 pb-12 px-8 custom-scrollbar">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-[#00D6FF] font-bold mb-4 opacity-50 px-4">Navigation Mesh</span>
                  {navItems.map((item) => (
                    <button 
                      key={item.id}
                      onClick={() => navigateTo(item.id)}
                      className={`group flex items-center gap-5 p-5 rounded-[24px] border text-left transition-all duration-300 w-full ${
                        view === item.id 
                        ? 'bg-[#00D6FF] text-[#0A1E3F] border-transparent shadow-[0_0_25px_rgba(0,214,255,0.4)]' 
                        : 'bg-white/5 text-white border-white/5 hover:border-[#00D6FF]/50 hover:bg-white/10'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        view === item.id ? 'bg-[#0A1E3F]/10' : 'bg-[#00D6FF]/10 text-[#00D6FF]'
                      }`}>
                        <item.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-lg">{item.label}</div>
                        <div className={`text-xs opacity-60 ${view === item.id ? 'text-[#0A1E3F]' : 'text-slate-400'}`}>
                          {item.desc}
                        </div>
                      </div>
                      <ChevronRight size={18} className={`transition-transform group-hover:translate-x-1 ${view === item.id ? 'opacity-100' : 'opacity-30'}`} />
                    </button>
                  ))}
                </div>

                <div className="mt-12 p-8 bg-[#0A1E3F]/50 rounded-[32px] border border-white/5">
                  <h4 className="font-bold text-[#00D6FF] mb-2 uppercase tracking-widest text-xs">Emergency Support</h4>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">Our AI nodes are monitored 24/7. Access client portal for real-time mesh diagnostics.</p>
                  <button 
                    onClick={() => navigateTo('contact')}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#00D6FF]/10 border border-[#00D6FF]/30 text-[#00D6FF] rounded-2xl font-bold text-sm hover:bg-[#00D6FF] hover:text-[#0A1E3F] transition-all"
                  >
                    System Portal <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div className="p-8 border-t border-white/5 bg-[#0A1E3F]/20 text-center">
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">ID TECH SYSTEMS © 2024</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Chatbot />
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 214, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 214, 255, 0.5);
        }
      `}} />
    </div>
  );
};

export default App;
