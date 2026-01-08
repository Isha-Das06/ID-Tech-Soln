
import React from 'react';
import { motion } from 'framer-motion';
import { Settings, BarChart2, CheckCircle, ArrowRight, Zap, Users, ShieldCheck, Activity } from 'lucide-react';

const TechInAction: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Section 1 — Process Overview */}
      <section className="py-32 bg-[#0A1E3F] relative overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <span className="text-[#00D6FF] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">The Lifecycle</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Engineering Workflow</h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
              We've refined a deployment model that minimizes industrial friction while maximizing human safety and output.
            </p>
          </motion.div>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden md:block" />
          
          {[
            { 
              step: '01', 
              title: 'Synchronization', 
              desc: 'We link legacy industrial hardware with the ID Mesh—our decentralized edge computing framework that allows local processing with 24ms latency.',
              icon: Zap
            },
            { 
              step: '02', 
              title: 'Context-Aware Training', 
              desc: 'Our AI models don\'t just learn data; they learn environment. We simulate billions of safety scenarios specific to your site before the first bot moves.',
              icon: Settings
            },
            { 
              step: '03', 
              title: 'Human-Centered UI', 
              desc: 'We design intuitive control layers that reduce operator cognitive fatigue. Every dashboard is tested against eye-tracking and stress response data.',
              icon: Users
            },
            { 
              step: '04', 
              title: 'Sustainable Scaling', 
              desc: 'Once live, our system optimizes energy consumption across the entire mesh, often reducing power costs by 30% through predictive load balancing.',
              icon: ShieldCheck
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row items-center gap-12 mb-32 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`w-14 h-14 rounded-2xl bg-[#00D6FF]/10 flex items-center justify-center text-[#00D6FF] mb-6 ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
              </div>
              
              <div className="relative z-10 w-16 h-16 bg-[#00D6FF] rounded-full flex items-center justify-center text-[#0A1E3F] font-bold shadow-[0_0_30px_#00D6FF] text-xl">
                <motion.div 
                  className="absolute inset-0 rounded-full border-4 border-[#00D6FF]"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                {item.step}
              </div>
              
              <div className="md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2 — Interactive Tools (The Dashboard Preview) */}
      <section className="py-32 bg-[#0D2B55]/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-[#0A1E3F] p-8 md:p-12 rounded-[50px] border border-[#00D6FF]/20 shadow-2xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                   <div className="flex items-center gap-3">
                     <Activity className="text-[#00D6FF]" />
                     <span className="text-sm font-bold tracking-widest uppercase">System Mesh Pulse</span>
                   </div>
                   <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                     <span className="text-[10px] text-green-400 font-bold">Operational</span>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-10">
                   {[
                     { label: 'Latency', val: '24ms', sub: 'Sub-second real-time' },
                     { label: 'Efficiency', val: '94.2%', sub: 'Optimized node mesh' },
                     { label: 'Energy Save', val: '-12%', sub: 'Active power balancing' },
                     { label: 'Security', val: 'Level 5', sub: 'End-to-end encrypted' }
                   ].map((stat, i) => (
                     <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/5">
                        <span className="text-[10px] uppercase text-slate-500 font-bold block mb-2">{stat.label}</span>
                        <span className="text-3xl font-bold text-[#00D6FF] block mb-1">{stat.val}</span>
                        <span className="text-[10px] text-slate-400">{stat.sub}</span>
                     </div>
                   ))}
                </div>

                <div className="h-40 bg-white/5 rounded-3xl p-6 flex flex-col justify-between">
                   <div className="flex justify-between items-center text-xs text-slate-500">
                      <span>Real-time Throughput</span>
                      <span>3,402 req/sec</span>
                   </div>
                   <div className="flex items-end gap-1.5 h-20">
                      {[...Array(15)].map((_, i) => (
                        <motion.div 
                          key={i} 
                          className="bg-[#00D6FF] w-full rounded-t-sm" 
                          initial={{ height: '10%' }}
                          animate={{ height: [`${20+Math.random()*60}%`, `${30+Math.random()*50}%`] }}
                          transition={{ repeat: Infinity, duration: 1, delay: i*0.1 }}
                        />
                      ))}
                   </div>
                </div>
              </motion.div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">The ID Tech <br /> <span className="text-[#00D6FF]">Control Horizon</span></h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Complexity shouldn't mean confusion. Our proprietary dashboard framework allows even non-technical staff to monitor high-scale industrial robotics with confidence.
              </p>
              <ul className="space-y-6">
                {[
                  { title: 'Zero-Latency Control', desc: 'Hardware-accelerated rendering for instantaneous feedback.' },
                  { title: 'Predictive Alerting', desc: 'AI nodes flag anomalies before they become critical failures.' },
                  { title: 'Human-Verified Logic', desc: 'Every automated action can be manually overridden in 50ms.' }
                ].map((l, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#00D6FF]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle size={14} className="text-[#00D6FF]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{l.title}</h4>
                      <p className="text-sm text-slate-400">{l.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Tech + Human Impact (Micro-stories) */}
      <section className="py-32 bg-[#0A1E3F]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Small Steps, Big Impacts</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Behind every metric is a human story. We design our technology to be the wind in their sails.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { 
                tag: 'Education', 
                title: 'Empowering the Next Gen', 
                desc: 'By automating repetitive administrative tasks in local schools, we gave teachers 5 more hours per week to spend directly with their students.',
                icon: Users
              },
              { 
                tag: 'Safety', 
                title: 'The Zero-Accident Site', 
                desc: 'Our wearable IoT sensors reduced industrial incidents by 88% at the Nexus Port facility, ensuring every worker returns home safely.',
                icon: ShieldCheck
              },
              { 
                tag: 'Efficiency', 
                title: 'Optimizing Global Flow', 
                desc: 'Smart predictive routing reduced carbon emissions from urban delivery fleets by 12,000 tons in the first quarter of deployment.',
                icon: BarChart2
              }
            ].map((story, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="p-10 bg-[#0D2B55]/20 rounded-[40px] border border-white/5 hover:border-[#00D6FF]/30 transition-all"
              >
                <div className="flex justify-between items-start mb-8">
                   <div className="w-12 h-12 bg-[#00D6FF]/10 rounded-2xl flex items-center justify-center text-[#00D6FF]">
                     <story.icon size={24} />
                   </div>
                   <span className="text-[10px] font-bold uppercase tracking-widest py-1 px-3 bg-white/5 rounded-full text-slate-400">{story.tag}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{story.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{story.desc}</p>
                <button className="flex items-center gap-2 text-sm font-bold text-[#00D6FF] group">
                  Full Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechInAction;
