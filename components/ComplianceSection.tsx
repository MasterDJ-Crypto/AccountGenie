import React, { useState } from 'react';
import { FileText, ChevronDown, ChevronUp } from 'lucide-react';

const ComplianceSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-12 bg-black border-y border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-slate-500" />
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-wider">
              Store Reviewer & Developer Notes
            </h3>
          </div>
          {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
        </div>

        {isOpen && (
          <div className="mt-6 p-6 bg-[#111] rounded-xl border border-white/10 font-mono text-sm text-slate-400 leading-relaxed">
            <p className="mb-4 font-bold text-slate-200">Review note — Account Genie</p>
            <p className="mb-4">
              Account Genie creates disposable mailboxes using mail.tm and runs verification logic locally in the user's browser. Our server only provides ephemeral message bodies (text + HTML) so the extension can parse verifications; we do not receive or store user passwords. 
            </p>
            <p className="mb-4">
              When a verification <strong>link</strong> is detected, the extension opens the link in a browser tab and injects a small script to click the button locally; when a <strong>verification code</strong> is detected the extension extracts and presents it in the UI. We enforce a 30-second rate limit on address generation and TTLs on inboxes to prevent automated abuse. Privacy policy + demo attached.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ComplianceSection;