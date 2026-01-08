
import React from 'react';
import { motion } from 'framer-motion';
import { CASE_STUDIES, COLORS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { ArrowUpRight, Check, Database, TrendingUp } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const summaryData = [
    { name: 'Operational ROI', val: 88, color: '#00D6FF' },
    { name: 'Human Safety', val: 92, color: '#00FF95' },
    { name: 'Energy Reduction', val: 65, color: '#FF3D71' },
    { name: 'Skill Uplift', val: 74, color: '#A066FF' },
  ];

  return (
    <div className="pt-20">
      {/* Section 1 — Hero */}
      <section className="py-24 bg-[#0A1E3F]">
        <div className="container mx-auto px-6 text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
          >
            Real Results. <br />
            <span className="text-[#00D6FF]">Real Human Impact.</span>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Measurable data is just half the story. See how ID Tech solutions transform operational capacity while empowering individual lives.
          </p>
        </div>

        {/* Section 2 — Individual Case Studies */}
        <div className="container mx-auto px-6 space-y-40">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid lg:grid-cols-2 gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="flex gap-3 mb-8">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-[#00D6FF]/10 text-[#00D6FF] text-[10px] uppercase font-bold rounded-full border border-[#00D6FF]/20 tracking-widest">{tag}</span>
                  ))}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{study.title}</h2>
                <h4 className="text-[#00D6FF] font-bold mb-8 uppercase tracking-widest text-sm flex items-center gap-2">
                  <TrendingUp size={16} /> {study.subtitle}
                </h4>
                <p className="text-slate-300 text-lg mb-10 leading-relaxed font-light">{study.description}</p>
                
                <div className="space-y-8">
                  <div className="p-8 bg-[#0D2B55]/40 rounded-[32px] border-l-4 border-red-500/50 backdrop-blur-md">
                    <h5 className="font-bold mb-3 text-white text-xl">The Challenge</h5>
                    <p className="text-slate-400 leading-relaxed">{study.problem}</p>
                  </div>
                  <div className="p-8 bg-[#0D2B55]/40 rounded-[32px] border-l-4 border-[#00D6FF] backdrop-blur-md">
                    <h5 className="font-bold mb-3 text-[#00D6FF] text-xl">The ID Tech Solution</h5>
                    <p className="text-slate-400 leading-relaxed">{study.solution}</p>
                  </div>
                </div>
                
                <button className="mt-12 flex items-center gap-3 px-8 py-4 border border-white/10 rounded-full font-bold hover:border-[#00D6FF] hover:text-[#00D6FF] transition-all group">
                  Download Full Report <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>

              <div className={`relative ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="absolute inset-0 bg-[#00D6FF] opacity-10 blur-[100px] rounded-full animate-pulse" />
                <div className="relative z-10 p-4 bg-[#0D2B55]/20 rounded-[50px] border border-white/5 backdrop-blur-sm shadow-2xl">
                   <motion.img 
                    src={study.image} 
                    alt={study.title}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-[40px] w-full object-cover aspect-[4/3] shadow-inner"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-[#00D6FF] text-[#0A1E3F] p-8 rounded-3xl shadow-xl">
                    <span className="text-4xl font-bold block mb-1">99.9%</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">System Reliability</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3 — Summary Metrics */}
      <section className="py-32 bg-[#0D2B55]/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold mb-6">Aggregate Project Performance</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Quantifying the impact of the ID Tech ecosystem across all active global deployments.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 bg-[#0A1E3F] p-10 rounded-[40px] border border-white/5 shadow-2xl">
              <h4 className="text-xl font-bold mb-10 flex items-center gap-2">
                <Database className="text-[#00D6FF]" /> Cumulative Efficiency Gains (%)
              </h4>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={summaryData} layout="vertical" margin={{ left: 40 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 14}} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0D2B55', border: '1px solid #00D6FF', borderRadius: '15px' }}
                      cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                    />
                    <Bar dataKey="val" radius={[0, 10, 10, 0]} barSize={40}>
                      {summaryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 bg-[#0A1E3F] rounded-[32px] border border-white/5">
                <h4 className="text-2xl font-bold mb-4 text-[#00D6FF]">200k+</h4>
                <p className="text-slate-400 text-sm">Industrial events processed annually through the ID Mesh framework.</p>
              </div>
              <div className="p-8 bg-[#0A1E3F] rounded-[32px] border border-white/5">
                <h4 className="text-2xl font-bold mb-4 text-[#00FF95]">150,000+</h4>
                <p className="text-slate-400 text-sm">Worker hours reclaimed from high-risk manual tasks every single month.</p>
              </div>
              <div className="p-8 bg-[#0A1E3F] rounded-[32px] border border-[#00D6FF]/30 shadow-[0_0_20px_rgba(0,214,255,0.1)]">
                <h4 className="text-2xl font-bold mb-4 text-white">Ethical Score: 9.8</h4>
                <p className="text-slate-400 text-sm">Avg. third-party audit score for data transparency and algorithmic fairness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
