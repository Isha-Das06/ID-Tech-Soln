
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const InteractiveTech: React.FC = () => {
  const [nodes, setNodes] = useState<{ x: number, y: number, id: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newNodes = Array.from({ length: 15 }, (_, i) => ({
      x: Math.random() * 80 + 10, // 10% to 90%
      y: Math.random() * 80 + 10,
      id: i
    }));
    setNodes(newNodes);
  }, []);

  return (
    <section className="py-24 bg-[#0A1E3F] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="order-2 lg:order-1 relative aspect-square bg-[#0D2B55]/50 rounded-[40px] border border-[#00D6FF]/20 overflow-hidden"
            ref={containerRef}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Lines connecting nodes */}
              {nodes.map((node, i) => (
                nodes.slice(i + 1, i + 3).map((target, j) => (
                  <motion.line
                    key={`${i}-${j}`}
                    x1={node.x} y1={node.y}
                    x2={target.x} y2={target.y}
                    stroke="#00D6FF" strokeWidth="0.1" strokeOpacity="0.3"
                  />
                ))
              ))}
              {/* Pulsing Nodes */}
              {nodes.map((node) => (
                <g key={node.id}>
                  <motion.circle
                    cx={node.x} cy={node.y} r="0.8" fill="#00D6FF"
                    animate={{ r: [0.8, 1.2, 0.8] }}
                    transition={{ repeat: Infinity, duration: 2 + Math.random() * 2 }}
                  />
                  <motion.circle
                    cx={node.x} cy={node.y} r="3" fill="#00D6FF" fillOpacity="0.1"
                    animate={{ scale: [1, 2, 1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  />
                </g>
              ))}
              
              {/* Floating Data Packets */}
              {nodes.slice(0, 5).map((node, i) => (
                 <motion.circle
                    key={`packet-${i}`}
                    r="0.5" fill="#fff"
                    initial={{ cx: node.x, cy: node.y }}
                    animate={{ 
                      cx: [node.x, nodes[(i + 1) % nodes.length].x],
                      cy: [node.y, nodes[(i + 1) % nodes.length].y]
                    }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                 />
              ))}
            </svg>
          </motion.div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold mb-6">Technology in Action</h2>
            <p className="text-slate-300 text-lg mb-8">
              Experience the pulse of our decentralized AI mesh. We leverage distributed computing and low-latency IoT frameworks to ensure that data moves at the speed of human thought.
            </p>
            <div className="space-y-4">
               {[
                 { label: 'Real-time sync', val: '24ms latency' },
                 { label: 'Data security', val: 'End-to-end encryption' },
                 { label: 'Energy use', val: 'Net-zero hardware clusters' }
               ].map((item, idx) => (
                 <div key={idx} className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/10">
                   <span className="font-semibold text-slate-300">{item.label}</span>
                   <span className="text-[#00D6FF] font-mono">{item.val}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTech;
