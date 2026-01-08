
import React from 'react';
import { motion } from 'framer-motion';
import { JOBS } from '../constants';
import { MapPin, Clock, ArrowUpRight, Heart, Users, ShieldCheck, Sparkles, Globe } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Section 1 — Hero */}
      <section className="py-32 bg-[#0A1E3F] relative overflow-hidden">
        {/* Dynamic Background Animation Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[#00D6FF] opacity-[0.07] blur-[120px] rounded-full"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -100, 0],
              y: [0, -50, 0],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-[#00D6FF] opacity-[0.05] blur-[150px] rounded-full"
          />
          <motion.div 
            animate={{ 
              opacity: [0.03, 0.08, 0.03],
              scale: [0.8, 1.1, 0.8]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-[#00D6FF]/10 to-transparent blur-[100px]"
          />
        </div>

        <div className="container mx-auto px-6 text-center mb-24 relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <span className="text-[#00D6FF] font-bold text-[10px] uppercase tracking-[0.5em] mb-8 block">Talent x Impact</span>
            <h1 className="text-6xl md:text-8xl font-bold mb-10 leading-[1.1]">Join the Future of <br /> <span className="text-[#00D6FF]">Tech with Purpose</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              We're not just looking for "workers." We're looking for architects of a more compassionate future. Build solutions that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#roles" className="px-10 py-5 bg-[#00D6FF] text-[#0A1E3F] font-bold rounded-full shadow-[0_0_20px_rgba(0,214,255,0.4)]">View Open Positions</a>
              <button className="px-10 py-5 border border-white/20 rounded-full font-bold hover:bg-white/5">Our Culture Manifesto</button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating background particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
           {[...Array(15)].map((_, i) => (
             <motion.div 
                key={i}
                className="absolute w-2 h-2 bg-[#00D6FF] rounded-full"
                initial={{ x: `${Math.random()*100}%`, y: `${Math.random()*100}%`, opacity: 0 }}
                animate={{ y: [null, '-20%'], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 5 + Math.random()*5, delay: i }}
             />
           ))}
        </div>
      </section>

      {/* Section 2 — Career Opportunities */}
      <section id="roles" className="py-32 bg-[#0A1E3F]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-end justify-between mb-20 border-b border-white/5 pb-10">
            <div>
               <h2 className="text-4xl font-bold mb-4">Open Roles</h2>
               <p className="text-slate-400">Join a team where your work directly translates to human well-being.</p>
            </div>
            <div className="text-sm font-bold text-[#00D6FF] uppercase tracking-widest hidden sm:block">{JOBS.length} Active Openings</div>
          </div>

          <div className="space-y-8">
            {JOBS.map((job, idx) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 15 }}
                className="p-10 bg-[#0D2B55]/30 rounded-[40px] border border-white/5 hover:border-[#00D6FF]/50 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-10 group"
              >
                <div className="max-w-2xl">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-[#00D6FF] transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-6 text-slate-400 text-sm mb-6">
                     <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full"><MapPin size={14} className="text-[#00D6FF]" /> {job.location}</span>
                     <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full"><Clock size={14} className="text-[#00D6FF]" /> {job.type}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed font-light">{job.description}</p>
                </div>
                <button className="flex items-center gap-3 px-10 py-5 rounded-3xl bg-[#0A1E3F] border border-white/10 hover:bg-[#00D6FF] hover:text-[#0A1E3F] transition-all font-bold whitespace-nowrap shadow-xl">
                  Apply Now <ArrowUpRight size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Volunteer & Community Engagement */}
      <section className="py-32 bg-[#0D2B55]/10 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold mb-6">Impact Beyond the Office</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We reinvest in the people behind the tech. Our community outreach programs are led by staff and external volunteers.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Technical Mentorship',
                desc: 'Every quarter, our engineers volunteer in underserved schools to teach the fundamentals of AI ethics and robotics assembly.',
                icon: Users,
                benefit: 'Direct impact on 5,000+ students'
              },
              {
                title: 'Civic Data Squad',
                desc: 'Contribute to our open-source environmental monitoring datasets. Help us refine the algorithms that track global air quality.',
                icon: Globe,
                benefit: 'Open Source community'
              },
              {
                title: 'Sustainability Taskforce',
                desc: 'Internal initiative focused on making our hardware supply chain 100% circular and carbon-negative by 2030.',
                icon: ShieldCheck,
                benefit: 'Environmental Stewardship'
              },
              {
                title: 'Employee Wellbeing Fund',
                desc: 'A dedicated grant pool for employees to launch their own community-based tech-impact projects.',
                icon: Heart,
                benefit: 'Personal Purpose'
              }
            ].map((v, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02 }}
                className="p-12 bg-[#0A1E3F] rounded-[50px] border border-white/5 relative overflow-hidden group interactive"
              >
                <div className="absolute top-0 right-0 p-8 text-[#00D6FF]/10 group-hover:text-[#00D6FF]/30 transition-colors">
                   <v.icon size={120} />
                </div>
                <div className="w-16 h-16 bg-[#00D6FF]/10 rounded-2xl flex items-center justify-center text-[#00D6FF] mb-8">
                  <v.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-6">{v.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 relative z-10">{v.desc}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D6FF]/5 rounded-xl text-[#00D6FF] text-xs font-bold uppercase tracking-widest">
                  <Sparkles size={14} /> {v.benefit}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
