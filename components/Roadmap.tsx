
import React from 'react';
import { motion } from 'framer-motion';

const ROADMAP_ITEMS = [
  { year: '2025 Q1', title: 'Carbon-Neutral Cloud', desc: 'Deploying our first fully sustainable AI server mesh in the Nordic region.' },
  { year: '2025 Q3', title: 'Global Literacy AI', desc: 'Launching a free adaptive learning platform for developing educational sectors.' },
  { year: '2026 Q1', title: 'Autonomous Civic Waste', desc: 'Smart city robotic fleets for zero-landfill waste management.' },
  { year: '2026 Q4', title: 'Direct Neural UI', desc: 'Non-invasive BCI for industrial operators to enhance safety and focus.' }
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 bg-[#0A1E3F]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Strategic Vision</h2>
          <p className="text-slate-400">Our path toward a harmonious tech-enabled future.</p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D6FF] via-[#00D6FF]/20 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-24">
            {ROADMAP_ITEMS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="text-xs uppercase tracking-widest text-[#00D6FF] mb-2 font-bold">{item.year}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed max-w-md mx-auto md:mx-0 inline-block">{item.desc}</p>
                </div>
                
                <div className="relative z-10 w-12 h-12">
                   <div className="absolute inset-0 bg-[#00D6FF] rounded-full animate-ping opacity-20" />
                   <div className="w-12 h-12 bg-[#0A1E3F] border-2 border-[#00D6FF] rounded-full flex items-center justify-center text-[#00D6FF] font-bold text-xs">
                     0{idx + 1}
                   </div>
                </div>

                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
