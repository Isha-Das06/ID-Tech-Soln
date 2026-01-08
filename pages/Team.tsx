
import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';
import { Linkedin, Twitter, Mail, ChevronRight } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Section 1 — Hero with Live Video Background */}
      <section className="py-24 md:py-48 bg-[#0A1E3F] relative overflow-hidden flex items-center justify-center min-h-[70vh]">
        {/* Live Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40 grayscale contrast-125"
          >
            <source src="https://cdn.pixabay.com/video/2020/09/24/50454-461320490_large.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlays for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3F] via-transparent to-[#0A1E3F] z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E3F] via-transparent to-[#0A1E3F] z-10" />
          <div className="absolute inset-0 bg-[#0A1E3F]/30 z-10" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
             <span className="text-[#00D6FF] font-bold text-xs uppercase tracking-[0.4em] mb-6 block drop-shadow-lg">The Visionary</span>
             <h1 className="text-6xl md:text-8xl font-bold mb-8 text-glow">
                The Face Behind <br /> 
                <span className="text-[#00D6FF]">ID Tech</span>
             </h1>
             <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
               Pioneering a new era where industrial efficiency meets human ethics.
             </p>
          </motion.div>
        </div>

        {/* Floating tech elements */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
           {[...Array(5)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute w-px h-32 bg-gradient-to-b from-transparent via-[#00D6FF]/30 to-transparent"
               initial={{ top: '-20%', left: `${20 * i + 10}%` }}
               animate={{ top: '120%' }}
               transition={{ repeat: Infinity, duration: 4 + i, ease: "linear", delay: i }}
             />
           ))}
        </div>
      </section>

      {/* Section 2 — Founder Profile */}
      <section className="py-24 bg-[#0A1E3F]">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-20 border-b border-white/10 pb-10">
            <div>
               <h2 className="text-4xl font-bold mb-4">The Founder</h2>
               <p className="text-slate-400 max-w-lg">Driven by the belief that technology should empower humanity.</p>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            {TEAM.map((member, idx) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative mb-8 overflow-hidden rounded-[50px] aspect-[4/5] bg-[#0D2B55] border border-white/5 transition-all duration-500 group-hover:border-[#00D6FF]/50 shadow-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Bio Hover reveal */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                      {member.bio}
                    </p>
                    <div className="flex gap-4 mb-4">
                       <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D6FF] hover:text-[#0A1E3F] transition-all"><Linkedin size={18} /></a>
                       <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D6FF] hover:text-[#0A1E3F] transition-all"><Twitter size={18} /></a>
                    </div>
                  </div>
                </div>
                <div className="text-center group-hover:translate-y-[-10px] transition-transform">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#00D6FF] font-bold text-xs uppercase tracking-widest">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
