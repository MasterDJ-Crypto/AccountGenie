import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TechnicalSpecs from './components/TechnicalSpecs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ComplianceSection from './components/ComplianceSection';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Inject scroll variable for parallax effects
      document.body.style.setProperty('--scroll-y', window.scrollY.toString());
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    // Observe all elements with any class starting with 'reveal-'
    // This is more robust than listing individual classes and ensures 3D cards, masks, etc. are caught.
    const elements = document.querySelectorAll('[class*="reveal-"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-slate-200 selection:bg-brand-500/30 selection:text-brand-200 overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <TechnicalSpecs />
        <ComplianceSection />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;