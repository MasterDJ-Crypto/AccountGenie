import React, { useState } from 'react';

const TechnicalSpecs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'permissions' | 'privacy' | 'tech'>('permissions');

  return (
    <section id="specs" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar / Header */}
          <div className="lg:w-1/3 reveal-on-scroll">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              Total <br /> Transparency.
            </h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              No hidden servers. No data harvesting. Here is exactly what we ask for and why.
            </p>
            
            <div className="flex flex-col gap-2">
              {[
                { id: 'permissions', label: 'Permissions' },
                { id: 'privacy', label: 'Privacy Architecture' },
                { id: 'tech', label: 'Developer Docs' }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`text-left px-6 py-4 rounded-xl transition-all duration-300 border ${
                    activeTab === tab.id 
                      ? 'bg-white/10 border-white/10 text-white font-bold shadow-lg' 
                      : 'bg-transparent border-transparent text-slate-500 hover:text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3 reveal-scale-on-scroll delay-200">
             <div className="glass-panel p-8 md:p-12 rounded-3xl min-h-[500px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-[80px] pointer-events-none"></div>
                
                {activeTab === 'permissions' && (
                  <div className="animate-fade-in-up">
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                      <span className="w-2 h-8 bg-brand-500 rounded-full"></span>
                      Extension Permissions
                    </h3>
                    <ul className="space-y-6">
                      <li className="group">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 pb-6 border-b border-white/5">
                           <span className="font-mono text-brand-400 text-sm min-w-[140px]">storage</span>
                           <span className="text-slate-400">To save generated emails & passwords locally within your browser profile.</span>
                        </div>
                      </li>
                      <li className="group">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 pb-6 border-b border-white/5">
                           <span className="font-mono text-brand-400 text-sm min-w-[140px]">alarms</span>
                           <span className="text-slate-400">Used to wake up the background worker to poll for new emails.</span>
                        </div>
                      </li>
                      <li className="group">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 pb-6 border-b border-white/5">
                           <span className="font-mono text-brand-400 text-sm min-w-[140px]">scripting</span>
                           <span className="text-slate-400">Injects <code>verify_clicker.js</code> only into verification pages to perform the click action.</span>
                        </div>
                      </li>
                      <li className="group">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 pb-6 border-b border-white/5">
                           <span className="font-mono text-brand-400 text-sm min-w-[140px]">host_permissions</span>
                           <span className="text-slate-400">
                             <code>https://api.mail.tm/*</code> for API access. <br/>
                             <code>&lt;all_urls&gt;</code> required to inject verification scripts into random confirmation pages.
                           </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === 'privacy' && (
                  <div className="animate-fade-in-up">
                     <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                      <span className="w-2 h-8 bg-accent-500 rounded-full"></span>
                      Privacy Architecture
                    </h3>
                     <div className="space-y-8">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Local Storage Only</h4>
                          <p className="text-slate-400 leading-relaxed">Generated credentials are stored only in the extension’s local storage (<code>browser.storage.local</code>). This area is often encrypted by your browser if you use a master password.</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">No Password Transmission</h4>
                          <p className="text-slate-400 leading-relaxed">We never transmit passwords or credential backups to our servers. The backend only handles ephemeral email message bodies from mail.tm. We cannot recover your lost passwords.</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Client-Side Execution</h4>
                          <p className="text-slate-400 leading-relaxed">All auto-verify actions run in your active browser instance. The extension opens tabs and clicks buttons just like you would, but faster.</p>
                        </div>
                     </div>
                  </div>
                )}

                 {activeTab === 'tech' && (
                  <div className="animate-fade-in-up">
                     <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                      <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                      Technical Implementation
                    </h3>
                     <div className="space-y-4">
                        <div className="p-6 bg-black/40 rounded-xl border border-white/10 font-mono text-sm">
                          <div className="text-slate-500 mb-2">// Tech Stack</div>
                          <div className="text-white">React, Tailwind, WebExtensions API, mail.tm REST API</div>
                        </div>
                        <div className="p-6 bg-black/40 rounded-xl border border-white/10 font-mono text-sm">
                          <div className="text-slate-500 mb-2">// Parsing Logic</div>
                          <div className="text-purple-400">link = parseLinkFromHtml(html); <span className="text-slate-500">// Score based keyword analysis</span></div>
                          <div className="text-purple-400">code = parseCodeFromHtml(html); <span className="text-slate-500">// RegEx heuristics</span></div>
                        </div>
                        <div className="p-6 bg-black/40 rounded-xl border border-white/10 font-mono text-sm">
                          <div className="text-slate-500 mb-2">// Abuse Prevention</div>
                          <div className="text-white">Client-side 30s rate limit + Server-side IP reputation checks + Inbox TTLs.</div>
                        </div>
                     </div>
                  </div>
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;