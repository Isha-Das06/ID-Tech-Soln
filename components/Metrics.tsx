
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { METRICS, COLORS } from '../constants';

const chartData = [
  { name: 'Q1 2024', gain: 45 },
  { name: 'Q2 2024', gain: 58 },
  { name: 'Q3 2024', gain: 72 },
  { name: 'Q4 2024', gain: 85 },
];

const Metrics: React.FC = () => {
  return (
    <section id="metrics" className="py-24 bg-[#0A1E3F]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Driving Global Progress</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Tangible metrics showcasing our dedication to industrial growth and human empowerment.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#0D2B55]/30 border border-white/5 text-center hover:bg-[#0D2B55]/50 transition-colors"
            >
              <div className="text-5xl font-bold text-[#00D6FF] mb-2">
                {metric.value}{metric.suffix}
              </div>
              <div className="text-lg font-semibold mb-2">{metric.label}</div>
              <div className="text-sm text-slate-400">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 bg-[#0D2B55]/30 rounded-3xl p-8 border border-white/5">
            <h4 className="text-xl font-bold mb-8">Efficiency Gains over Lifecycle (%)</h4>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0A1E3F', border: '1px solid #00D6FF', borderRadius: '12px' }}
                    cursor={{ fill: 'rgba(0, 214, 255, 0.05)' }}
                  />
                  <Bar dataKey="gain" radius={[8, 8, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS.neon} fillOpacity={0.5 + (index * 0.15)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Predictive ROI</h3>
            <p className="text-slate-400">Our enterprise dashboard provides real-time forecasting for both financial return and environmental footprint impact.</p>
            <ul className="space-y-4">
              {['Real-time emission tracking', 'Predictive maintenance alerts', 'Resource optimization engine'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D6FF]" />
                  <span className="text-sm text-slate-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
