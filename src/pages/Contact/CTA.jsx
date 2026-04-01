import React, { useEffect, useRef } from 'react';
import { FiArrowRight, FiCalendar, FiDownload } from 'react-icons/fi';

const CTA = () => {
  const ctaRef = useRef(null);

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

    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pb-18 -pt-18 px-4 sm:px-6 lg:px-20 overflow-hidden">
      {/* Background Card */}
      <div className="max-w-[1200px] mx-auto relative">
        
        <div 
          ref={ctaRef}
          className="relative opacity-0 translate-y-8 transition-all duration-700 ease-out bg-gradient-to-r from-[#1a2b3c] to-[#0f1a24] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-2xl overflow-hidden"
        >
          {/* Background Shapes - Responsive sizing */}
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96" viewBox="0 0 100 100">
              <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="1" />
            </svg>
          </div>
          
          {/* Double Line Border - Responsive */}
          <div className="absolute inset-2 sm:inset-3 md:inset-4 rounded-xl sm:rounded-2xl border border-white/10 pointer-events-none" />
          <div className="absolute inset-4 sm:inset-5 md:inset-6 lg:inset-8 rounded-lg sm:rounded-xl border border-white/5 pointer-events-none" />
          
          {/* Corner Accents - Responsive */}
          <div className="absolute top-3 sm:top-4 md:top-5 lg:top-6 left-3 sm:left-4 md:left-5 lg:left-6 w-6 sm:w-7 md:w-8 lg:w-10 h-6 sm:h-7 md:h-8 lg:h-10 border-l-2 border-t-2 border-[#74c34d]/30 rounded-tl-lg sm:rounded-tl-xl" />
          <div className="absolute top-3 sm:top-4 md:top-5 lg:top-6 right-3 sm:right-4 md:right-5 lg:right-6 w-6 sm:w-7 md:w-8 lg:w-10 h-6 sm:h-7 md:h-8 lg:h-10 border-r-2 border-t-2 border-[#74c34d]/30 rounded-tr-lg sm:rounded-tr-xl" />
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 left-3 sm:left-4 md:left-5 lg:left-6 w-6 sm:w-7 md:w-8 lg:w-10 h-6 sm:h-7 md:h-8 lg:h-10 border-l-2 border-b-2 border-[#74c34d]/30 rounded-bl-lg sm:rounded-bl-xl" />
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 right-3 sm:right-4 md:right-5 lg:right-6 w-6 sm:w-7 md:w-8 lg:w-10 h-6 sm:h-7 md:h-8 lg:h-10 border-r-2 border-b-2 border-[#74c34d]/30 rounded-br-lg sm:rounded-br-xl" />
          
          <div className="relative z-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Ready to <span className="text-[#74c34d]">Experience</span> the Future?
            </h2>
            <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
              Book a test drive today and discover the power of electric mobility.
              Our team is ready to assist you with any questions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <button className="group px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-4 bg-[#74c34d] text-white rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <FiCalendar className="text-base sm:text-lg" />
                <span>Book Test Drive</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform text-sm sm:text-base" />
              </button>
            </div>
            
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
              <div className="flex items-center gap-1.5 sm:gap-2 text-white/50 text-[10px] sm:text-xs">
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#74c34d]" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-white/50 text-[10px] sm:text-xs">
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#74c34d]" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-white/50 text-[10px] sm:text-xs">
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#74c34d]" />
                <span>Instant Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;