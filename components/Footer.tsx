import React, { useState } from 'react';
import { X, Lock, Code2, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{title: string, content: React.ReactNode} | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isShake, setIsShake] = useState(false);

  const openModal = (title: string, content: React.ReactNode) => {
    setActiveModal({ title, content });
    setIsClosing(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveModal(null);
      setIsClosing(false);
      document.body.style.overflow = 'unset';
    }, 400);
  };

  const handleSourceCodeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsShake(true);
    setTimeout(() => setIsShake(false), 500);
  };

  const legalContent = {
    privacy: (
      <div className="space-y-6 text-slate-300 leading-relaxed">
        <p>AccountGenie is a <span className="text-white font-medium">privacy-first, local-only</span> extension. We do not collect, store, or transmit your personal data, passwords, or browsing history.</p>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h4 className="text-white font-bold mb-2">Local Storage Only</h4>
            <p className="text-sm text-slate-400">All generated accounts and credentials are saved locally in your browser (<code>browser.storage.local</code>). We physically cannot access your data.</p>
          </div>
          
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h4 className="text-white font-bold mb-2">Server Interaction</h4>
            <p className="text-sm text-slate-400">The backend is strictly a proxy for the <code>mail.tm</code> API to generate ephemeral email addresses and fetch message bodies. We keep no logs and have no database of user information.</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h4 className="text-white font-bold mb-2">No Tracking</h4>
            <p className="text-sm text-slate-400">We do not use Google Analytics, Meta Pixels, or any third-party trackers. Your usage is your own business.</p>
          </div>
        </div>
      </div>
    ),
    terms: (
      <div className="space-y-6 text-slate-300 leading-relaxed">
        <p>AccountGenie is provided "as is" without warranty of any kind. We are not a registered company; this is a free tool built for the developer community.</p>
        
        <ul className="list-disc pl-5 space-y-3 marker:text-brand-500">
            <li><strong className="text-white">Acceptable Use:</strong> You agree not to use this tool for illegal activities, spam, or abuse of the underlying email provider.</li>
            <li><strong className="text-white">Liability:</strong> We are not responsible for any accounts lost or damages incurred. Use at your own risk.</li>
            <li><strong className="text-white">Abuse Prevention:</strong> We enforce strict rate limits (30s cooldowns) to prevent abuse. Circumventing these limits may result in temporary or permanent IP blocking to protect the service reputation.</li>
        </ul>
      </div>
    ),
    cookies: (
      <div className="space-y-6 text-slate-300 leading-relaxed">
        <div className="flex items-center gap-4 p-6 bg-brand-500/10 border border-brand-500/20 rounded-2xl">
           <div className="text-4xl">🍪</div>
           <div>
             <h4 className="text-white font-bold text-lg">We don't use cookies.</h4>
             <p className="text-brand-200">Period.</p>
           </div>
        </div>
        <p>This website and our extension operate without setting any tracking cookies on your device. We respect your digital sovereignty and have no interest in tracking you.</p>
      </div>
    )
  };

  return (
    <footer className="relative py-20 bg-black border-t border-white/5 overflow-hidden">
      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-brand-500/10 blur-[60px]"></div>

      <div className="container mx-auto px-6 relative z-10 reveal-on-scroll">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Logo className="w-5 h-5 text-brand-400" />
                </div>
                <span className="text-2xl font-display font-bold text-white">AccountGenie</span>
             </div>
             <p className="text-slate-400 max-w-sm leading-relaxed">
               The local-first account generator that respects your privacy. Built for developers, power users, and privacy advocates.
             </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Product</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#features" className="hover:text-brand-400 transition-colors">Features</a></li>
              <li><a href="#specs" className="hover:text-brand-400 transition-colors">Security</a></li>
              <li><a href="https://chromewebstore.google.com/detail/blcmhgdfaajieaiokjoienclhgobjabe?utm_source=item-share-cb" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">Download</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>
                <button onClick={() => openModal('Privacy Policy', legalContent.privacy)} className="hover:text-brand-400 transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => openModal('Terms of Service', legalContent.terms)} className="hover:text-brand-400 transition-colors text-left">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => openModal('Cookie Policy', legalContent.cookies)} className="hover:text-brand-400 transition-colors text-left">
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-600 text-sm">
            © {new Date().getFullYear()} AccountGenie. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
             {/* Systems Operational Badge */}
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">All Systems Operational</span>
             </div>

             {/* Classified Source Code Button */}
             <button 
               onClick={handleSourceCodeClick}
               className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all ${isShake ? 'animate-shake bg-red-500/10 border-red-500/30' : ''}`}
             >
               <div className="relative w-4 h-4">
                 <Code2 className={`absolute inset-0 w-4 h-4 text-slate-400 transition-all duration-300 group-hover:opacity-0 group-hover:scale-75 ${isShake ? 'text-red-400' : ''}`} />
                 <Lock className={`absolute inset-0 w-4 h-4 text-brand-400 scale-75 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 ${isShake ? 'text-red-500' : ''}`} />
               </div>
               <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors relative overflow-hidden h-5 w-[5.875rem] block">
                 <span className={`absolute inset-0 flex items-center transition-transform duration-300 group-hover:-translate-y-full ${isShake ? 'text-red-400' : ''}`}>Source Code</span>
                 <span className={`absolute inset-0 flex items-center transition-transform duration-300 translate-y-full group-hover:translate-y-0 font-bold tracking-widest text-brand-400 ${isShake ? 'text-red-500' : ''}`}>
                    {isShake ? 'DENIED' : 'CLASSIFIED'}
                 </span>
               </span>
             </button>
          </div>
        </div>
      </div>

      {/* Legal Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-all duration-400 ${isClosing ? 'animate-backdrop-exit' : 'animate-backdrop-enter'}`}
            onClick={closeModal}
          />
          
          {/* Content */}
          <div className={`relative w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh] ${isClosing ? 'animate-modal-exit' : 'animate-modal-enter'}`}>
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 bg-brand-500 rounded-full"></div>
                <h3 className="text-xl font-display font-bold text-white">{activeModal.title}</h3>
              </div>
              <button 
                onClick={closeModal} 
                className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-8 overflow-y-auto custom-scrollbar">
              {activeModal.content}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/5 bg-white/[0.02] flex justify-end">
               <button 
                 onClick={closeModal}
                 className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors"
               >
                 Close
               </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;