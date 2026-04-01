import React, { useEffect, useRef } from 'react';
import { FiStar, FiGlobe, FiTruck, FiUsers } from 'react-icons/fi';

const Hero = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const statsRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('hero-title')) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
            if (entry.target.classList.contains('hero-content')) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
            if (entry.target.classList.contains('stats-item')) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    statsRefs.current.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Top Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] flex items-center overflow-hidden bg-[#f5feff]">
        {/* Background Decorative Elements - Responsive */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f5feff] via-[#f5feff]/20 to-[#f5feff]" />
          
          {/* Geometric Shapes - Responsive sizing */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10">
            <svg className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-64 sm:w-96 h-64 sm:h-96 text-[#74c34d]" fill="currentColor" viewBox="0 0 100 100">
              <path d="M50 0 L100 50 L50 100 L0 50 Z" />
            </svg>
            <svg className="absolute bottom-0 left-0 w-60 sm:w-80 h-60 sm:h-80 text-[#74c34d]" fill="currentColor" viewBox="0 0 100 100">
              <path d="M20 20 L80 20 L50 80 Z" fillOpacity="0.3" />
            </svg>
          </div>
          
          {/* Subtle Grid Pattern - Responsive */}
          <div className="absolute inset-0 opacity-[0.02]" 
               style={{ backgroundImage: `linear-gradient(#1a2b3c 1px, transparent 1px), linear-gradient(90deg, #1a2b3c 1px, transparent 1px)`, backgroundSize: '40px 40px sm:60px 60px' }} />
          
          {/* Blurred Light Effect - Responsive */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-[#74c34d]/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 w-full py-12 sm:py-16 md:py-20">
          <div className="text-center max-w-4xl mx-auto px-2 sm:px-0">
            {/* Decorative Line Above */}
            <div 
              ref={titleRef}
              className="hero-title opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-[#74c34d]" />
                <span className="text-[#74c34d] text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase font-bold">Our Story</span>
                <div className="w-8 sm:w-12 h-px bg-[#74c34d]" />
              </div>
            </div>
            
            {/* Main Title */}
            <h1 
              ref={titleRef}
              className="hero-title opacity-0 translate-y-8 transition-all duration-700 ease-out text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light text-[#1a2b3c] leading-[1.2] sm:leading-[1.1] tracking-tight mb-4 sm:mb-6"
              style={{ transitionDelay: '100ms' }}
            >
              Driving the <span className="font-bold text-[#74c34d] relative">
                Future_
               
              </span> of Mobility
            </h1>
            
            {/* Description */}
            <p 
              ref={contentRef}
              className="hero-content opacity-0 translate-y-8 transition-all duration-700 ease-out text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
              style={{ transitionDelay: '200ms' }}
            >
              From Shanghai to Kathmandu, we're bringing world-class electric vehicles 
              powered by innovation, built on trust, and driven by ambition.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Integrated Below Hero */}
      <section className="relative z-10 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-20 text-white overflow-visible">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('/images/brandbg.png')`,
            backgroundPosition: 'center 40%'
          }}
        >
          {/* Top Gradient Blend to #f5feff */}
          <div className="absolute inset-x-0 top-0 h-[20%] sm:h-[25%] bg-gradient-to-b from-[#f5feff] via-[#f5feff]/50 to-transparent z-10" />
          {/* Bottom Gradient Blend to #f5feff */}
          <div className="absolute inset-x-0 bottom-0 h-[20%] sm:h-[25%] bg-gradient-to-t from-[#f5feff]/60 via-[#f5feff]/20 to-transparent z-10" />
          {/* Dark Overlay for text contrast */}
          <div className="absolute inset-0 bg-[#1a2b3c]/40 z-5" />
        </div>

        {/* Watermark MAXUS - Responsive positioning */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] sm:text-[14rem] md:text-[16rem] lg:text-[18rem] font-black text-black/[0.03] leading-none select-none pointer-events-none whitespace-nowrap z-30">
          MAXUS
        </div>

        <div className="max-w-[1400px] mx-auto relative z-20">
          <div
            ref={el => statsRefs.current[0] = el}
            className="stats-item opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            {/* Header text removed as per your design */}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 border-t border-white/20 pt-10 sm:pt-12 md:pt-14 lg:pt-16 mt-4 sm:mt-6 md:mt-8">
            {[
              { val: "15+", label: "Years of Tech", icon: FiStar },
              { val: "100+", label: "Global Markets", icon: FiGlobe },
              { val: "3M+", label: "Units Delivered", icon: FiTruck },
              { val: "5k+", label: "Innovators", icon: FiUsers },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  ref={el => statsRefs.current[i + 1] = el}
                  className="stats-item opacity-0 translate-y-8 transition-all duration-700 ease-out group text-center sm:text-left"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <p className="text-4xl sm:text-5xl md:text-6xl font-black text-[#74c34d] mb-2 group-hover:scale-110 transition-transform duration-500 origin-left tabular-nums">
                    {s.val}
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                    <div className="w-3 sm:w-4 h-px bg-white/40 group-hover:w-5 sm:group-hover:w-8 transition-all duration-300" />
                    <p className="text-white/80 uppercase text-[8px] sm:text-[9px] md:text-[10px] tracking-widest font-bold">{s.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        @keyframes scroll-down {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(10px); }
        }
        .animate-scroll-down {
          animation: scroll-down 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;