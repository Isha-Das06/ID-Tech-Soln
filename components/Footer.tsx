
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D2B55] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-10 h-10 bg-[#00D6FF] rounded-lg flex items-center justify-center text-[#0A1E3F] font-bold">ID</div>
               <span className="text-2xl font-bold tracking-tighter">ID TECH</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Empowering global industries through ethical AI and human-centric automation. Building the future, one connection at a time.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: 'https://web.facebook.com/IDTECHSOLUTIONS' },
                { icon: Mail, href: 'mailto:isha@idtechsolutionsbd.com' }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#00D6FF] hover:text-[#00D6FF] transition-all"
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#about-company" className="hover:text-[#00D6FF] transition-colors">Our Philosophy</a></li>
              <li><a href="#how-it-works" className="hover:text-[#00D6FF] transition-colors">How We Work</a></li>
              <li><a href="#team" className="hover:text-[#00D6FF] transition-colors">Meet the Team</a></li>
              <li><a href="#careers" className="hover:text-[#00D6FF] transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Impact</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#case-studies" className="hover:text-[#00D6FF] transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#00D6FF] transition-colors">Sustainability Reports</a></li>
              <li><a href="#careers" className="hover:text-[#00D6FF] transition-colors">Educational Outreach</a></li>
              <li><a href="#contact" className="hover:text-[#00D6FF] transition-colors">Contact Inquiry</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-6">Get the latest insights on intelligent automation.</p>
            <div className="flex gap-2">
               <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-[#0A1E3F] border border-white/10 rounded-xl px-4 py-2 w-full focus:outline-none focus:border-[#00D6FF]"
               />
               <button className="bg-[#00D6FF] text-[#0A1E3F] p-2 rounded-xl">
                 <Mail size={20} />
               </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">© 2024 ID Tech Solutions. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            Made with <Heart size={14} className="text-[#00D6FF]" fill="#00D6FF" /> for humanity.
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Ethical AI Charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
