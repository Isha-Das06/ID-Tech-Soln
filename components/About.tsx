
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#00D6FF]">The ID Tech Philosophy</h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Founded at the intersection of enterprise efficiency and social ethics, ID Tech specializes in industry-focused AI, robotics, and automation solutions that don't just replace—they augment.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: ShieldCheck, title: "Ethical Deployment", desc: "Every algorithm is audited for human safety and bias mitigation." },
                { icon: Zap, title: "Scalable Efficiency", desc: "Built for high-throughput environments that demand 99.9% uptime." },
                { icon: Users, title: "Social Impact", desc: "We reinvest 10% of revenue into community technical education." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-[#0D2B55]/50 border border-white/5 hover:border-[#00D6FF]/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#00D6FF]/10 flex items-center justify-center text-[#00D6FF] flex-shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Animated SVG Abstract Tech Shape */}
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00D6FF]/20 to-transparent rounded-3xl rotate-6 animate-pulse" />
              <div className="absolute inset-0 bg-[#0D2B55] rounded-3xl border border-[#00D6FF]/20 overflow-hidden flex items-center justify-center p-8">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <motion.circle 
                    cx="200" cy="200" r="100" 
                    stroke="#00D6FF" strokeWidth="2" fill="none"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                  />
                  <motion.path 
                    d="M100 200 Q 200 100 300 200 T 500 200" 
                    stroke="#00D6FF" strokeWidth="2" fill="none" strokeDasharray="10 10"
                    animate={{ strokeDashoffset: [0, -100] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                  />
                  <rect x="150" y="150" width="100" height="100" rx="20" fill="#0A1E3F" stroke="#00D6FF" strokeWidth="1" />
                  <motion.circle 
                    cx="200" cy="200" r="5" fill="#00D6FF"
                    animate={{ opacity: [0, 1, 0], scale: [1, 15, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
