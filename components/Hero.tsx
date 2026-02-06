import React, { useEffect, useState } from 'react';
import { Chrome, Play, ShieldCheck, Zap, Lock, MousePointer2, Activity, Check, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [terminalStep, setTerminalStep] = useState(0);
  const [showDemo, setShowDemo] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const interval = setInterval(() => {
      setTerminalStep((prev) => (prev + 1) % 6);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Lock scroll when demo modal is open
  useEffect(() => {
    if (showDemo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showDemo]);

  // Handle closing animation
  const closeDemo = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowDemo(false);
      setIsClosing(false);
    }, 400); // Matches animation-duration of modal-exit
  };

  return (
    <section 
      className="relative min-h-screen pt-32 pb-32 flex flex-col justify-center overflow-hidden bg-black"
    >
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay pointer-events-none z-0"></div>

      {/* SYNCHRONIZED BACKGROUND SPOTLIGHT */}
      {/* w-0 h-0 ensures transform-origin is exactly at the coordinates, matching the cursor tip */}
      {/* USE SPOTLIGHT-TOUR ANIMATIONS (NO ROTATION) TO FIX SWINGING */}
      <div className="absolute left-1/2 top-1/2 z-0 pointer-events-none w-0 h-0 animate-spotlight-tour-mobile md:animate-spotlight-tour-tablet lg:animate-spotlight-tour-desktop">
         {/* Outer Ambient Glow - Reduced size to 400px, moved up significantly more (-mt-96) to fix 'below' issue */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-96 w-[400px] h-[400px] bg-brand-500/20 blur-[80px] rounded-full mix-blend-screen"></div>
         {/* Inner Bright Core - Reduced size to 150px, moved up significantly more (-mt-96), increased opacity for pop */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-96 w-[150px] h-[150px] bg-brand-400/60 blur-[40px] rounded-full mix-blend-screen"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          
          {/* Badge */}
          <div className={`mb-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:bg-white/[0.08] transition-all cursor-pointer group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors tracking-wide uppercase">
                v2.0 Live • Local-First Engine
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="relative font-display font-bold tracking-tight leading-[0.95] mb-10 z-20">
            <div className={`block text-6xl md:text-8xl lg:text-9xl text-white transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Detached Background Highlight Structure */}
              <span className="relative inline-block px-2 -mx-2">
                <span className="absolute top-0 bottom-0 left-0 bg-[#3b82f6] animate-highlight-bar z-0 rounded-lg pointer-events-none"></span>
                <span className="relative z-10">Create</span>
              </span> accounts
            </div>
            <div className="relative inline-block mt-2">
              <span className={`premium-gradient-text text-6xl md:text-8xl lg:text-9xl pb-4 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                in one click.
              </span>
              
              {/* CURSOR ANCHOR: Centered on "in one click" */}
              {/* w-0 h-0 ensures transform-origin is exactly at (0,0) */}
              <div className="absolute left-1/2 top-1/2 z-50 pointer-events-none w-0 h-0 animate-cursor-tour-mobile md:animate-cursor-tour-tablet lg:animate-cursor-tour-desktop">
                {/* absolute top-0 left-0 ensures the TIP of the cursor is at (0,0) */}
                <MousePointer2 className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 text-white fill-black drop-shadow-2xl relative z-10" />
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className={`text-lg md:text-2xl text-slate-400 max-w-3xl mb-12 leading-relaxed font-light transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Generate disposable emails. We <span className="text-brand-400 font-medium glow-text">auto-click verification links</span> locally.
            <br className="hidden md:block"/>
            No passwords ever leave your device.
          </p>

          {/* Buttons */}
          <div className={`flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a 
              href="https://chromewebstore.google.com/detail/blcmhgdfaajieaiokjoienclhgobjabe?utm_source=item-share-cb"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-button-mimic group relative w-full sm:w-auto px-8 py-4 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-3 overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-slate-200 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              <Chrome className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Install on Chrome</span>
            </a>
            <button 
              onClick={() => setShowDemo(true)}
              className="group w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white/20 hover:scale-105"
            >
              <Play className="w-4 h-4 fill-current group-hover:text-brand-400 transition-colors" />
              Watch Workflow
            </button>
          </div>

          {/* Stats */}
          <div className={`mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02]">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Encrypted Vault</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02]">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>30s Rate Limit</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02]">
              <Lock className="w-4 h-4 text-brand-500" />
              <span>Local Storage</span>
            </div>
          </div>
        </div>

        {/* Terminal Visual */}
        <div className={`mt-32 relative max-w-3xl mx-auto perspective-container transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-20 rotate-x-12'}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-500/20 via-accent-600/10 to-transparent rounded-[3rem] blur-[100px] transform translate-y-20 -z-10"></div>
          <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl overflow-hidden transform-style-3d ring-1 ring-white/5">
            <div className="h-10 bg-[#151515] border-b border-white/5 flex items-center px-4 gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
              </div>
              <div className="flex-1 text-center text-[10px] text-slate-600 font-mono tracking-widest uppercase">
                Local_Process_Monitor
              </div>
            </div>
            <div className="relative h-[400px] p-8 font-mono text-sm text-slate-300 bg-black/50 flex flex-col">
               <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/5">
                  <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold">AccountGenie Core</div>
                    <div className="text-xs text-slate-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Daemon Active • v2.1.0
                    </div>
                  </div>
               </div>
               <div className="space-y-3">
                  <div className={`transition-all duration-500 ${terminalStep >= 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <span className="text-slate-500 mr-3">10:42:01</span>
                    <span className="text-brand-400">➜</span> <span className="text-white">Initializing secure session...</span>
                  </div>
                  <div className={`transition-all duration-500 delay-100 ${terminalStep >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <span className="text-slate-500 mr-3">10:42:02</span>
                    <span className="text-brand-400">➜</span> <span className="text-white">Generated identity: </span> 
                    <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded ml-2">user.x92@moakt.cc</span>
                  </div>
                  <div className={`transition-all duration-500 delay-200 ${terminalStep >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <span className="text-slate-500 mr-3">10:42:03</span>
                    <span className="text-blue-400">ℹ</span> <span className="text-slate-400">Waiting for incoming verification email...</span>
                  </div>
                  <div className={`transition-all duration-500 delay-300 ${terminalStep >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <span className="text-slate-500 mr-3">10:42:06</span>
                    <span className="text-brand-400">➜</span> <span className="text-white">Email received: "Confirm your account"</span>
                  </div>
                  <div className={`transition-all duration-500 delay-400 ${terminalStep >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                     <div className="ml-20 p-3 bg-white/5 rounded border-l-2 border-brand-500 text-xs">
                       <span className="text-slate-500">Parsing HTML body...</span><br/>
                       <span className="text-slate-400">Found Link: </span><span className="text-brand-300 underline">https://example.com/verify?token=...</span>
                     </div>
                  </div>
                  <div className={`transition-all duration-500 delay-500 ${terminalStep >= 5 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <span className="text-slate-500 mr-3">10:42:07</span>
                    <span className="text-emerald-500">✔</span> <span className="text-white">Verification URL clicked (Status: 200 OK)</span>
                  </div>
                  {terminalStep === 5 && (
                    <div className="mt-4 inline-flex items-center gap-2 text-emerald-400 animate-pulse">
                      <Check className="w-4 h-4" />
                      <span className="font-bold uppercase tracking-wider text-xs">Process Complete</span>
                    </div>
                  )}
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Transition */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/90 to-transparent z-20 pointer-events-none"></div>

      {/* Demo Modal with Premium Animations */}
      {showDemo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/90 backdrop-blur-md transition-all ${isClosing ? 'animate-backdrop-exit' : 'animate-backdrop-enter'}`}
            onClick={closeDemo}
          />
          {/* Content */}
          <div className={`relative w-full max-w-6xl aspect-video bg-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 ${isClosing ? 'animate-modal-exit' : 'animate-modal-enter'}`}>
            <button 
              onClick={closeDemo}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/20 text-white rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe 
              src="https://app.supademo.com/embed/cmgnwk425049p000i9xypulj9?v_email=EMAIL&utm_source=link&step=2"
              className="w-full h-full"
              title="AccountGenie Workflow Demo"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;