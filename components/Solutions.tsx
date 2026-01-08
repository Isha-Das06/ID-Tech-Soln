
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BrainCircuit, GraduationCap, Cpu, Building2, ShieldCheck, ArrowRight } from 'lucide-react';
import { SOLUTIONS } from '../constants';

const iconMap: any = {
  BrainCircuit, GraduationCap, Cpu, Building2, ShieldCheck
};

const Solutions: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <div ref={containerRef} className="h-[300vh] relative bg-[#0D2B55]/20 z-10">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-24 md:pt-32">
        <div className="container mx-auto px-6 mb-12 relative z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-glow"
          >
            Core Technology Ecosystem
          </motion.h2>
          <p className="text-slate-400 mt-4 max-w-xl text-lg">
            Bridging the gap between industrial necessity and human well-being through integrated tech.
          </p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 relative z-10">
          {SOLUTIONS.map((solution) => {
            const Icon = iconMap[solution.icon];
            return (
              <div key={solution.id} className="min-w-[400px] md:min-w-[500px] h-[450px] md:h-[500px] bg-[#0A1E3F] border border-white/10 rounded-3xl p-10 flex flex-col group hover:border-[#00D6FF]/50 transition-all duration-500 relative shadow-2xl">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                   <div className="w-12 h-12 rounded-full border border-[#00D6FF] flex items-center justify-center text-[#00D6FF]">
                     <ArrowRight size={20} />
                   </div>
                </div>
                
                <div className="w-16 h-16 rounded-2xl bg-[#00D6FF]/10 flex items-center justify-center text-[#00D6FF] mb-8">
                  <Icon size={32} />
                </div>
                
                <h3 className="text-3xl font-bold mb-4">{solution.title}</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">{solution.description}</p>
                
                <div className="mt-auto space-y-4">
                  <div className="p-4 rounded-xl bg-white/5 border-l-2 border-[#00D6FF]">
                    <span className="text-[10px] uppercase tracking-widest text-[#00D6FF] block mb-1">Industrial Impact</span>
                    <p className="text-sm font-medium">{solution.industrialImpact}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border-l-2 border-white/20">
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 block mb-1">Human Impact</span>
                    <p className="text-sm font-medium">{solution.humanImpact}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Solutions;
