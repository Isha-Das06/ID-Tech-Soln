
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Tech Patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D6FF] opacity-5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00D6FF] opacity-5 blur-[150px] rounded-full" />
        
        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#00D6FF 1px, transparent 1px), linear-gradient(90deg, #00D6FF 1px, transparent 1px)', backgroundSize: '50px 50px' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#0D2B55] border border-[#00D6FF]/30 text-[#00D6FF] text-sm font-medium tracking-widest mb-6 uppercase">
            Innovating for Impact
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] text-glow">
            Empowering Industries with <br />
            <span className="text-[#00D6FF]">Intelligent Tech Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Advanced technology that drives enterprise growth while creating meaningful human impact across global communities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#landing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#00D6FF] text-[#0A1E3F] rounded-full font-bold text-lg flex items-center gap-2 shadow-[0_0_20px_rgba(0,214,255,0.4)] transition-all cursor-pointer"
            >
              Explore Our Solutions <ChevronRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-white/20 rounded-full font-bold text-lg transition-all cursor-pointer"
            >
              Request a Demo
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00D6FF] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
