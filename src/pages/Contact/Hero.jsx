// components/MaxusNepal/Contact/HeroSection.jsx
import React, { useEffect, useRef } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const Hero = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center overflow-hidden bg-[#f5feff]">
      {/* Background Elements - Responsive */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5feff] via-[#f5feff]/20 to-[#f5feff]" />
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <svg className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-64 sm:w-96 h-64 sm:h-96 text-[#74c34d]" fill="currentColor" viewBox="0 0 100 100">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" />
          </svg>
        </div>
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: `linear-gradient(#1a2b3c 1px, transparent 1px), linear-gradient(90deg, #1a2b3c 1px, transparent 1px)`, backgroundSize: '40px 40px sm:60px 60px' }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 w-full py-12 sm:py-14 md:py-16">
        <div className="text-center max-w-4xl mx-auto px-2 sm:px-0">
          <div 
            ref={titleRef}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-px bg-[#74c34d]" />
              <span className="text-[#74c34d] text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase font-bold">Connect With Us</span>
              <div className="w-8 sm:w-12 h-px bg-[#74c34d]" />
            </div>
          </div>
          
          <h1 
            ref={titleRef}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#1a2b3c] leading-[1.2] sm:leading-[1.1] tracking-tight mb-4 sm:mb-6"
            style={{ transitionDelay: '100ms' }}
          >
            Let's <span className="font-bold text-[#74c34d]">Drive_</span> Together
          </h1>
          
          <p 
            ref={contentRef}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
            style={{ transitionDelay: '200ms' }}
          >
            Have questions about our electric vehicles? Need assistance with test drives or service?
            Our team is here to help you navigate the future of mobility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;