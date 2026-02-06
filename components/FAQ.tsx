import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "How do you auto-verify links?",
    answer: "The extension parses the HTML/text of incoming messages (using `parseLinkFromHtml()`), picks the highest-scored verification link candidate and opens it in a background tab. Once the page loads, `verify_clicker.js` is injected to find a clearly labeled verification button or link and click it. On success we close the tab and mark the account verified."
  },
  {
    question: "What if the verification uses a numeric code?",
    answer: "We run `parseCodeFromHtml()` on the message body. If a code is found we save it as `verificationCode` and show it in the UI for easy copy/paste. For code-only flows the extension surfaces the code rather than clicking anything."
  },
  {
    question: "What if both a link and a code appear?",
    answer: "When both are found your account shows a `manual-choice` state so you can pick whether the extension should click the link or you prefer to copy the code."
  },
  {
    question: "Does Account Genie store my passwords on your servers?",
    answer: "No. All credentials are saved only in `browser.storage.local` within the extension. The server (mail.tm API) is used only to manage ephemeral inbox creation and to fetch message bodies."
  },
  {
    question: "Will sites block this?",
    answer: "Sites sometimes block known temp mail providers. We mitigate this by enforcing a 30s generation rate limit and short TTLs so usage is throttled and obvious abuse patterns are reduced."
  },
  {
    question: "What about CAPTCHAs?",
    answer: "If `verify_clicker.js` detects CAPTCHA frames (reCAPTCHA/hCaptcha) we abort verification and mark the account as failed with a reason. You can view the message HTML/text to follow up manually."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-black relative overflow-hidden">
       {/* Background glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="flex items-center justify-center gap-3 mb-16 reveal-on-scroll">
           <div className="p-3 rounded-full bg-brand-500/10 border border-brand-500/20">
             <HelpCircle className="text-brand-400 w-6 h-6" />
           </div>
           <h2 className="text-4xl font-display font-bold text-white">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            // WRAPPER PATTERN: The outer div handles the 'reveal-domino' animation.
            // Since its props (className, style) don't change when 'openIndex' changes,
            // React preserves the 'visible' class added by the IntersectionObserver, preventing the "disappearing" bug.
            <div 
              key={index} 
              className="reveal-domino"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                  openIndex === index 
                    ? 'bg-white/[0.06] border-brand-500/40 shadow-[0_0_30px_rgba(14,165,233,0.1)]' 
                    : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`font-medium text-lg transition-colors ${openIndex === index ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'}`}>
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-brand-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  )}
                </button>
                
                {/* Smooth Expansion using Grid Template Rows */}
                <div 
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                    openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className={`px-8 pb-8 transition-all duration-700 ${openIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <p className="text-slate-400 leading-relaxed text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;