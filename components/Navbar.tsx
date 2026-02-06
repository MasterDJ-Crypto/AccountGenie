import React, { useState } from 'react';
import { Menu, X, Chrome } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group relative" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="absolute -inset-4 bg-brand-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-2">
             <div className="relative p-2 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:border-brand-500/30 transition-colors overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Logo className="w-5 h-5 text-white group-hover:text-brand-300 transition-colors relative z-10" />
             </div>
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-white group-hover:text-brand-100 transition-colors">
            Account<span className="text-brand-400">Genie</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {['Features', 'How It Works', 'Specs', 'FAQ'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group overflow-hidden"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-brand-500 to-accent-500 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            </button>
          ))}
          
          {/* Fixed CTA Button */}
          <a 
            href="https://chromewebstore.google.com/detail/blcmhgdfaajieaiokjoienclhgobjabe?utm_source=item-share-cb"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-2.5 text-sm font-bold text-black rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:scale-105 active:scale-95 bg-white isolate flex items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-200 via-white to-brand-200 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-all duration-300 -z-10" style={{ backgroundSize: '200% auto' }}></div>
            
            <span className="relative z-10 flex items-center gap-2">
              <Chrome className="w-4 h-4" />
              Get Extension
            </span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top ${isOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-4 pointer-events-none'}`}>
        {['Features', 'How It Works', 'Specs', 'FAQ'].map((item) => (
          <button 
            key={item}
            onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
            className="text-lg font-medium text-slate-400 hover:text-white text-left"
          >
            {item}
          </button>
        ))}
        <a 
          href="https://chromewebstore.google.com/detail/blcmhgdfaajieaiokjoienclhgobjabe?utm_source=item-share-cb"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 font-bold text-black bg-brand-400 rounded-xl mt-2 shadow-[0_0_20px_rgba(56,189,248,0.3)] flex items-center justify-center gap-2"
        >
          <Chrome className="w-5 h-5" />
          Get Extension
        </a>
      </div>
    </nav>
  );
};

export default Navbar;