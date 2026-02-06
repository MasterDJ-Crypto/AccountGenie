import React from 'react';
import { Activity, Search, Fingerprint, CheckCircle2 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-32 bg-black relative overflow-hidden">
      {/* Top Transition - Blends cleanly with Features */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none"></div>

      {/* Animated Background Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(14,165,233,0.03)_50%,transparent_100%)] opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-32 reveal-on-scroll">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">The <span className="text-brand-500">Auto-Verify</span> Pipeline</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From generation to verification in seconds. Watch the flow.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Pipeline Line (Desktop) */}
          <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-1 bg-slate-800/50 rounded-full overflow-hidden reveal-on-scroll delay-700">
             <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-brand-500 to-transparent animate-pipeline-flow opacity-75"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            
            {/* Steps */}
            {[
              { icon: Activity, title: "Generate", desc: "Creates unique email & password locally.", color: "brand" },
              { icon: Search, title: "Monitor", desc: "Polls API for incoming verification emails.", color: "accent" },
              { icon: Fingerprint, title: "Verify", desc: "Clicks links or extracts auth codes.", color: "purple" },
              { icon: CheckCircle2, title: "Success", desc: "Vault updated. Credentials saved securely.", color: "emerald" }
            ].map((step, idx) => (
              <div key={idx} className={`relative group reveal-on-scroll ${idx === 0 ? 'delay-100' : idx === 1 ? 'delay-200' : idx === 2 ? 'delay-300' : 'delay-400'}`}>
                {/* Icon Container */}
                <div className="w-32 h-32 mx-auto bg-[#050505] border border-white/10 rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <div className={`absolute inset-0 bg-${step.color === 'brand' ? 'sky' : step.color}-500/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <step.icon className={`w-12 h-12 text-slate-500 group-hover:text-${step.color === 'brand' ? 'sky' : step.color}-400 transition-colors duration-300`} />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#111] border-2 border-white/10 rounded-full flex items-center justify-center text-white font-bold font-mono shadow-lg z-20">
                    {idx + 1}
                  </div>
                </div>

                {/* Text Info */}
                <div className="text-center px-4">
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Snippet Visual */}
        <div className="mt-32 relative reveal-blur-on-scroll delay-200">
          {/* Replaced linear gradient with soft radial gradient to avoid ugly borders */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-500/20 via-accent-500/10 to-transparent opacity-40 blur-[60px]"></div>
          <div className="relative glass-panel max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
             <div className="flex items-center gap-2 px-6 py-4 bg-white/[0.02] border-b border-white/5">
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                </div>
                <span className="ml-4 text-xs font-mono text-slate-500">src/logic/verifier.ts</span>
             </div>
             <div className="p-8 bg-[#050505]/80 font-mono text-sm leading-relaxed overflow-x-auto">
               <div className="text-slate-500 mb-2">// Core logic for handling verification links</div>
               <div className="text-purple-400">async function <span className="text-yellow-200">handleVerification</span>(message) &#123;</div>
               <div className="pl-6 text-white">const <span className="text-sky-300">link</span> = parseLinkFromHtml(message.html);</div>
               <div className="pl-6 text-purple-400">if <span className="text-white">(link) &#123;</span></div>
               <div className="pl-12 text-slate-400">// Open in background tab without focus</div>
               <div className="pl-12 text-white">await <span className="text-yellow-200">chrome.tabs.create</span>&#123; url: link, active: <span className="text-red-400">false</span> &#125;;</div>
               <div className="pl-12 text-white">await <span className="text-yellow-200">injectScript</span>('verify_clicker.js');</div>
               <div className="pl-6 text-white">&#125; <span className="text-purple-400">else</span> &#123;</div>
               <div className="pl-12 text-white">const <span className="text-sky-300">code</span> = parseCodeFromHtml(message.html);</div>
               <div className="pl-12 text-white">if (code) <span className="text-yellow-200">copyToClipboard</span>(code);</div>
               <div className="pl-6 text-white">&#125;</div>
               <div className="text-purple-400">&#125;</div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"></div>
    </section>
  );
};

export default HowItWorks;