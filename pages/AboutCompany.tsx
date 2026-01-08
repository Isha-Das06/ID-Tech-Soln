
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Heart, Shield, Compass, Target, Lightbulb, History, Scale, Leaf, Network, GraduationCap, ArrowRight } from 'lucide-react';

const AboutCompany: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Section 1 — Hero */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1E3F] via-[#0D2B55] to-[#00D6FF]/20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block px-4 py-1 rounded-full border border-[#00D6FF]/30 text-[#00D6FF] text-[10px] uppercase font-bold tracking-widest mb-6">Our Narrative</span>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-glow leading-[1.1]">
              Innovative Technology <br />
              <span className="text-[#00D6FF]">with a Human Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              ID Tech was born from a simple belief: that progress isn't measured in gigahertz or throughput alone, but in the quality of the lives it enriches.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-10 py-4 bg-[#00D6FF] text-[#0A1E3F] rounded-full font-bold shadow-[0_0_20px_rgba(0,214,255,0.4)]">Discover Our Story</button>
              <button className="px-10 py-4 border border-white/20 rounded-full font-bold hover:bg-white/5 transition-all">The ID Tech Way</button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Animation */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-[#00D6FF] to-transparent"
              initial={{ top: -100, left: `${Math.random() * 100}%` }}
              animate={{ top: '120%' }}
              transition={{ repeat: Infinity, duration: 2 + Math.random() * 5, ease: 'linear' }}
            />
          ))}
        </div>
      </section>

      {/* Section 2 — Mission & Vision */}
      <section className="py-32 bg-[#0A1E3F] relative overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="relative">
              <div className="absolute -left-10 top-0 w-1 h-full bg-[#00D6FF]/50 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
                <Compass className="text-[#00D6FF]" /> Our Mission
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                To build a resilient technological backbone for global industry that prioritizes safety, sustainability, and equity. We believe automation should be the great leveler, removing drudgery while empowering people to do their most creative, meaningful work.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-10 top-0 w-1 h-full bg-white/20 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
                <Target className="text-[#00D6FF]" /> Our Vision
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                A world where "smart cities" are truly compassionate cities. Where industrial hubs are carbon-negative, and where every technological advancement is vetted against its ability to foster social good and environmental longevity.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-[#0D2B55] rounded-[60px] border border-[#00D6FF]/20 flex items-center justify-center relative z-10 shadow-2xl overflow-hidden">
               <svg width="400" height="400" viewBox="0 0 100 100" className="w-full h-full opacity-60">
                 <motion.path 
                    d="M 50,50 m -40,0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0" 
                    fill="none" stroke="#00D6FF" strokeWidth="0.1" strokeDasharray="1 3"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                 />
                 <motion.circle cx="50" cy="50" r="15" fill="#00D6FF" fillOpacity="0.05" animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 4 }} />
                 <circle cx="50" cy="50" r="2" fill="#00D6FF" />
                 {[...Array(6)].map((_, i) => (
                    <motion.g key={i} animate={{ rotate: i * 60 + 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }}>
                      <line x1="50" y1="50" x2="50" y2="10" stroke="#00D6FF" strokeWidth="0.1" />
                      <circle cx="50" cy="10" r="1.5" fill="#00D6FF" />
                    </motion.g>
                 ))}
               </svg>
            </div>
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute -top-10 -right-10 w-32 h-32 bg-[#00D6FF] opacity-10 blur-3xl rounded-full" />
            <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 7 }} className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#00D6FF] opacity-10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Section 3 — Philosophy Cards */}
      <section className="py-32 bg-[#0D2B55]/10 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Our Foundational Values</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">These aren't just posters on a wall; they are the architectural principles of every line of code we write.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                title: 'Innovation with Purpose', 
                desc: 'We refuse to innovate for innovations sake. Every new project begins with the question: "Whose life will this make better?"', 
                icon: Lightbulb,
                color: '#00D6FF'
              },
              { 
                title: 'Community & User First', 
                desc: 'Our design sessions include factory operators, civic leaders, and community activists. We build for the people on the front lines.', 
                icon: Heart,
                color: '#FF3D71'
              },
              { 
                title: 'Sustainable & Ethical', 
                desc: 'From net-zero data clusters to bias-proofed AI algorithms, our commitment to ethics is non-negotiable and legally audited.', 
                icon: Shield,
                color: '#00FF95'
              }
            ].map((p, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, borderColor: p.color }}
                className="p-12 bg-[#0A1E3F] rounded-[40px] border border-white/5 transition-all duration-500 group relative"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-[#00D6FF]/50 transition-all" />
                <div 
                  className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${p.color}10`, color: p.color }}
                >
                  <p.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-6">{p.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">{p.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00D6FF] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <Globe size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 5 — The Ethical Code */}
      <section className="py-32 bg-[#0D2B55]/20 relative">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#00D6FF]/10 border border-[#00D6FF]/20 rounded-2xl text-[#00D6FF] text-xs font-bold uppercase tracking-widest">
              <Scale size={16} /> Ethical Governance
            </div>
            <h2 className="text-5xl font-bold leading-tight">Our Algorithm <br /> <span className="text-[#00D6FF]">Transparency Code</span></h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              We believe AI should not be a "black box." Every decision loop in the ID-Mesh is logged, auditable, and built on privacy-preserving decentralized logic.
            </p>
            <div className="space-y-6">
              {[
                'Bias Mitigation: Continuous auditing of all neural kernels.',
                'Human Override: Critical actions require 50ms manual verification paths.',
                'Privacy First: No personal citizen data is ever stored on local nodes.'
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#00D6FF]" />
                  <span className="text-slate-400 font-medium">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 bg-[#0A1E3F] rounded-[50px] border border-white/5 shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D6FF]/5 to-transparent rounded-[50px]" />
            <div className="relative z-10 text-center">
              <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500 mb-8">Mesh Security Index</h4>
              <div className="w-48 h-48 mx-auto relative mb-8">
                 <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.1" />
                    <motion.circle 
                      cx="50" cy="50" r="45" fill="none" stroke="#00D6FF" strokeWidth="4" strokeDasharray="283"
                      initial={{ strokeDashoffset: 283 }}
                      whileInView={{ strokeDashoffset: 28.3 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">9.8</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Ethical Score</span>
                 </div>
              </div>
              <p className="text-slate-400 text-sm italic">"The gold standard for industrial AI safety." — Global Tech Audit 2024</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION 6 — Sustainable Infrastructure */}
      <section className="py-32 bg-[#0A1E3F] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-video bg-[#0D2B55] rounded-[40px] border border-white/10 flex items-center justify-center p-12 overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80')] bg-cover opacity-20 group-hover:scale-110 transition-transform duration-1000" />
                 <div className="relative z-10 text-center space-y-4">
                    <Leaf className="text-[#00FF95] w-12 h-12 mx-auto" />
                    <h4 className="text-2xl font-bold">Net-Zero Data Clusters</h4>
                    <p className="text-slate-400 max-w-sm mx-auto">Operating on 100% renewable energy with circular hardware recovery protocols.</p>
                 </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2"
            >
              <span className="text-[#00FF95] font-bold text-xs uppercase tracking-[0.4em]">Our Footprint</span>
              <h2 className="text-5xl font-bold">Sustainability <br /> as a Service</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                We design our hardware and cloud clusters with a "Cradle-to-Cradle" philosophy. Every sensor we deploy is part of a net-zero operational lifecycle.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                  <span className="text-2xl font-bold text-[#00FF95]">100%</span>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Renewable Sourced</p>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                  <span className="text-2xl font-bold text-[#00FF95]">0.0kg</span>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Landfill Target</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 7 — Global Operations */}
      <section className="py-32 bg-[#0D2B55]/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#00D6FF]/10 border border-[#00D6FF]/20 rounded-2xl text-[#00D6FF] text-xs font-bold uppercase tracking-widest mb-6">
              <Network size={16} /> Connectivity Map
            </div>
            <h2 className="text-5xl font-bold mb-6">Global Resilience Hubs</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Strategically located support and innovation nodes ensuring localized expertise for every client.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { city: 'Dhaka', role: 'HQ & AI Hub' },
              { city: 'San Francisco', role: 'Robotics Design' },
              { city: 'London', role: 'Ethics Auditing' },
              { city: 'Tokyo', role: 'Edge Hardware' },
              { city: 'Berlin', role: 'Impact Strategy' },
              { city: 'Singapore', role: 'Logistics Mesh' }
            ].map((hub, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, borderColor: '#00D6FF' }}
                className="p-8 bg-[#0A1E3F] rounded-[32px] border border-white/5 text-center transition-all group"
              >
                <div className="w-3 h-3 rounded-full bg-[#00D6FF] mx-auto mb-6 shadow-[0_0_10px_#00D6FF]" />
                <h4 className="font-bold text-xl mb-1">{hub.city}</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{hub.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 8 — Community Impact Hubs */}
      <section className="py-32 bg-[#0A1E3F] relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto p-12 md:p-20 bg-gradient-to-br from-[#0D2B55] to-[#0A1E3F] rounded-[60px] border border-[#00D6FF]/20 relative overflow-hidden text-center shadow-3xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            
            <GraduationCap className="text-[#00D6FF] w-16 h-16 mx-auto mb-10" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Empowering Beyond Industry</h2>
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-12">
              We reinvest 10% of our global enterprise revenue into "Social Impact Nodes"—community centers that provide free technical education and adaptive learning tools to underserved regions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-10">
               <div className="text-center">
                  <span className="text-4xl font-bold text-[#00D6FF] block mb-2">250k+</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Students Empowered</span>
               </div>
               <div className="text-center">
                  <span className="text-4xl font-bold text-[#00D6FF] block mb-2">1,200</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Scholarships Awarded</span>
               </div>
               <div className="text-center">
                  <span className="text-4xl font-bold text-[#00D6FF] block mb-2">35%</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Literacy Increase</span>
               </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-16 px-12 py-5 bg-[#00D6FF] text-[#0A1E3F] rounded-full font-bold shadow-[0_0_30px_rgba(0,214,255,0.3)] flex items-center gap-3 mx-auto"
            >
              Get Involved with Impact <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* NEW SECTION 9 — Featured In */}
      <section className="py-24 bg-[#0A1E3F] border-t border-white/5">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Global Media Coverage</span>
            <h2 className="text-3xl font-bold text-white/80">Recognized by the World's Leading Outlets</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8 items-center justify-items-center opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
            {[
              'Forbes', 'Fortune', 'India.com', 'Outlook', 'Times of India', 
              'Economic Times', 'India Today', 'The Hindu', 'Hindustan Times'
            ].map((outlet, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-lg md:text-xl font-black tracking-tight text-center px-4 cursor-default hover:text-[#00D6FF] transition-colors"
              >
                {outlet.toUpperCase()}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCompany;
