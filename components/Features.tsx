import React, { useState, useRef, useCallback } from 'react';
import { MousePointerClick, Key, Server, Shield, Database, Code2 } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Instant Generation",
    description: "One click creates a disposable email + cryptographically strong password.",
    icon: MousePointerClick,
  },
  {
    title: "Auto-Verify Engine",
    description: "Detects links in emails and clicks them in a background tab automatically.",
    icon: Key,
  },
  {
    title: "Zero-Knowledge Storage",
    description: "Credentials live in browser.storage.local. We never see your data.",
    icon: Database,
  },
  {
    title: "Stateless API",
    description: "Our backend only proxies ephemeral message bodies. No logs kept.",
    icon: Server,
  },
  {
    title: "Anti-Abuse Rate Limits",
    description: "30s generation cooldowns and inbox TTLs keep the IP reputation high.",
    icon: Shield,
  },
  {
    title: "Dev Tools Included",
    description: "View raw HTML/text source of emails for debugging auth flows.",
    icon: Code2,
  },
];

// Memoized Card Component for high-performance tracking
const FeatureCard = React.memo(({ feature, index }: { feature: Feature; index: number }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className={`reveal-card-3d relative h-full rounded-[2rem] bg-[#080808] border border-white/5 overflow-hidden transition-all duration-500 group/card ${
         index % 3 === 0 ? 'delay-100' : index % 3 === 1 ? 'delay-200' : 'delay-300'
      }`}
    >
      {/* 1. Dynamic Spotlight Border (Obsidian Prism Halo) */}
      {/* Changed transparent 40% to 100% to eliminate harsh clipping border */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.1), transparent 100%)`,
        }}
      />
      
      {/* 2. Deep Glass Material & Inner Glow */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
      />
      <div 
        className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-900/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 ease-out"
      />

      {/* 3. Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 p-8 flex flex-col h-full">
        {/* Icon Hologram */}
        <div className="relative w-16 h-16 mb-8">
           {/* Ambient Halo */}
           <div className="absolute inset-0 bg-brand-500/20 rounded-2xl blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
           
           {/* Glass Container */}
           <div className="relative w-full h-full rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center justify-center shadow-2xl overflow-hidden group-hover/card:border-brand-500/30 transition-colors duration-500">
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
             <feature.icon className="w-7 h-7 text-slate-400 group-hover/card:text-brand-300 transition-colors duration-300 relative z-10" />
           </div>
        </div>

        <h3 className="text-xl font-display font-bold text-white mb-3 group-hover/card:text-brand-100 transition-colors">
          {feature.title}
        </h3>
        
        <p className="text-slate-400 leading-relaxed text-sm group-hover/card:text-slate-300 transition-colors">
          {feature.description}
        </p>

        {/* Decorative Tech Elements */}
        <div className="mt-auto pt-8 flex items-center justify-between opacity-40 group-hover/card:opacity-100 transition-opacity duration-500">
           <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-700 origin-left" />
           <div className="ml-4 text-[10px] font-mono text-brand-400 tracking-widest hidden group-hover/card:block whitespace-nowrap">
             0{index + 1}
           </div>
        </div>
      </div>
    </div>
  );
});

const Features: React.FC = () => {
  // Global mouse tracking for the section background only
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleSectionMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      id="features" 
      className="py-32 bg-black relative overflow-hidden"
      onMouseMove={handleSectionMouseMove}
    >
      {/* Top Gradient Transition */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-brand-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-40 animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 max-w-4xl mx-auto text-center reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            System Architecture
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight leading-tight">
            Engineered for <br />
            <span className="premium-gradient-text">
              Speed & Privacy.
            </span>
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto">
            Stop fighting with verification emails. AccountGenie automates the <span className="text-white">"Sign up → Verify"</span> loop entirely within your browser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative">
          {/* Global Hover Spotlight for Background (Behind cards) */}
          <div 
            className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500"
            style={{
              background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.08), transparent 40%)`
            }}
          />

          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
      
      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Features;