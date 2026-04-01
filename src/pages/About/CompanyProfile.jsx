// components/MaxusNepal/About/CompanyProfile.jsx
import React, { useEffect, useRef } from 'react';
import { FiGlobe, FiUsers, FiTruck, FiStar, FiZap, FiShield, FiTrendingUp, FiAward, FiArrowRight, FiMapPin, FiClock, FiMail, FiPhone } from 'react-icons/fi';

const CompanyProfile = () => {
  const statsRefs = useRef([]);
  const saicRef = useRef(null);
  const maxusRef = useRef(null);
  const valuesRefs = useRef([]);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            if (entry.target.classList.contains('stats-item')) {
              entry.target.style.transform = 'translateX(0)';
            }
            if (entry.target.classList.contains('saic-section')) {
              entry.target.style.transform = 'translateX(0)';
            }
            if (entry.target.classList.contains('maxus-section')) {
              entry.target.style.transform = 'translateX(0)';
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    statsRefs.current.forEach(el => el && observer.observe(el));
    if (saicRef.current) observer.observe(saicRef.current);
    if (maxusRef.current) observer.observe(maxusRef.current);
    valuesRefs.current.forEach(el => el && observer.observe(el));
    if (recognitionRef.current) observer.observe(recognitionRef.current);

    return () => observer.disconnect();
  }, []);

 

  return (
    <div className="bg-[#f5feff] overflow-hidden relative">

      {/* Background Tech Shapes - Responsive */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="absolute -top-20 sm:-top-40 -left-20 sm:-left-40 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] opacity-[0.03]" viewBox="0 0 200 200">
          <path d="M100 0 L180 50 L180 150 L100 200 L20 150 L20 50 Z" fill="none" stroke="#1a2b3c" strokeWidth="1.5" />
          <path d="M100 30 L150 55 L150 105 L100 130 L50 105 L50 55 Z" fill="none" stroke="#1a2b3c" strokeWidth="1" />
        </svg>
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: `linear-gradient(#1a2b3c 1px, transparent 1px), linear-gradient(90deg, #1a2b3c 1px, transparent 1px)`, backgroundSize: '30px 30px sm:40px 40px md:50px 50px lg:60px 60px' }} />
        <div className="absolute top-1/3 right-0 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] bg-[#74c34d]/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-[#74c34d]/[0.02] rounded-full blur-3xl" />
      </div>

      {/* Stats Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/50 backdrop-blur-sm px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 rounded-full shadow-sm mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1a2b3c]">
              Leading the <span className="text-[#74c34d]">Electric Revolution</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 md:mt-4 max-w-2xl mx-auto">Making a difference across 100+ countries worldwide</p>
          </div>

          
        </div>
      </section>

 {/* MAXUS NEPAL - OUR STORY */}
{/* MAXUS NEPAL - OUR STORY */}
<section className="relative z-10 py-0">
  <div className="flex flex-col lg:flex-row min-h-[450px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]">
    
    {/* Image Section */}
    <div className="lg:w-1/2 relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto overflow-hidden group">
      <img
        src="/images/showroom.jpeg"
        alt="Maxus Nepal Showroom"
        className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
        onError={(e) => e.target.src = "https://images.unsplash.com/photo-1565514020179-026b92b2e85a?w=1200"}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b3c]/40 via-transparent to-transparent" />
      
      {/* Location Badge - Centered on mobile */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center lg:justify-start lg:left-8 z-20">
        <div className="inline-block relative">
          <div className="absolute inset-0 bg-[#74c34d] blur-xl opacity-50 rounded-full" />
          <span className="relative bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-[8px] sm:text-[9px] font-black uppercase tracking-widest rounded-full inline-flex items-center gap-1.5 sm:gap-2 shadow-lg whitespace-nowrap">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#74c34d] animate-pulse" />
            Kathmandu, Nepal
          </span>
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div className="lg:w-1/2 bg-white flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 relative">
      <div
        ref={saicRef}
        className="saic-section opacity-0 translate-x-8 transition-all duration-700 ease-out max-w-xl relative z-10 w-full"
      >
      
        
        {/* Title - Centered */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1a2b3c] italic leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-left">
          Electric <span className="text-[#74c34d] relative inline-block">
            Mobility_
            
          </span><br />
          for Nepal
        </h2>
        
        {/* Description - Centered */}
        <div className="space-y-3 sm:space-y-4 text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-left">
          <p>
            Maxus Nepal brings world-class electric vehicles to the Nepali market, offering 
            sustainable mobility solutions for families, businesses, and adventure seekers alike.
          </p>
          <p>
            With a commitment to innovation and quality, we provide premium electric vehicles 
            designed to tackle Nepali roads while reducing carbon footprint.
          </p>
        </div>

        {/* Stats - Centered */}
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <div className="border-l-2 border-[#74c34d] pl-2 sm:pl-3 md:pl-4 text-center lg:text-left hover:translate-x-1 transition-transform duration-300">
            <p className="text-[#1a2b3c] font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl italic">
              2024
            </p>
            <p className="text-gray-400 text-[7px] sm:text-[8px] md:text-[9px] uppercase font-bold tracking-widest mt-0.5 sm:mt-1">Launch Year</p>
          </div>
          <div className="border-l-2 border-[#74c34d] pl-2 sm:pl-3 md:pl-4 text-center lg:text-left hover:translate-x-1 transition-transform duration-300">
            <p className="text-[#1a2b3c] font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl italic">
              100%
            </p>
            <p className="text-gray-400 text-[7px] sm:text-[8px] md:text-[9px] uppercase font-bold tracking-widest mt-0.5 sm:mt-1">Zero Emissions</p>
          </div>
        </div>
        
        {/* Decorative Dots - Centered */}
        <div className="mt-6 sm:mt-8 pt-4 flex justify-center lg:justify-start gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-[#74c34d]/30" />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      

      {/* BENTO-STYLE VALUES */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-20 bg-[#f5feff] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2b3c]">
              CORE_<span className="text-[#74c34d]">VALUES</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 md:mt-4 max-w-2xl mx-auto">
              Three unbreakable pillars that define everything we do at SAIC MAXUS
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {/* Technology */}
            <div
              ref={el => valuesRefs.current[0] = el}
              className="values-item opacity-0 translate-y-8 transition-all duration-700 ease-out md:col-span-6 bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-gray-100"
              style={{ transitionDelay: '0ms' }}
            >
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#74c34d] to-[#5a9a35] rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 shadow-lg">
                  <FiZap className="text-base sm:text-lg md:text-xl lg:text-2xl text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1a2b3c] mb-2 sm:mb-3">TECHNOLOGY</h3>
                <p className="text-gray-500 text-[11px] sm:text-xs md:text-sm leading-relaxed max-w-md">
                  Pioneering the C2B business model. Personalized, digital, and infinitely scalable automotive solutions.
                </p>
              </div>
              <div className="relative z-10 mt-3 sm:mt-4 md:mt-5 lg:mt-6 pt-2 sm:pt-3 md:pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 font-medium uppercase tracking-wider">Innovation Leader</span>
                  <div className="flex items-center gap-2 text-[#74c34d] text-[9px] sm:text-[10px] md:text-xs font-bold group-hover:translate-x-2 transition-transform">
                    Discover <FiArrowRight />
                  </div>
                </div>
              </div>
            </div>

            {/* Trust */}
            <div
              ref={el => valuesRefs.current[1] = el}
              className="values-item opacity-0 translate-y-8 transition-all duration-700 ease-out md:col-span-3 bg-[#1a2b3c] rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500"
              style={{ transitionDelay: '100ms' }}
            >
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  <FiShield className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#74c34d]" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 sm:mb-3">TRUST</h3>
                <p className="text-white/50 text-[11px] sm:text-xs md:text-sm leading-relaxed">
                  Official transport partner for APEC & G20. State-guest level quality control.
                </p>
              </div>
              <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 pt-2 sm:pt-3 md:pt-4 border-t border-white/10">
                <span className="inline-block text-[#74c34d] text-[7px] sm:text-[8px] md:text-[9px] font-black tracking-[0.15em] sm:tracking-[0.2em] uppercase border border-[#74c34d]/30 px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 rounded-full">
                  G20 Approved
                </span>
              </div>
            </div>

            {/* Ambition */}
            <div
              ref={el => valuesRefs.current[2] = el}
              className="values-item opacity-0 translate-y-8 transition-all duration-700 ease-out md:col-span-3 bg-gradient-to-br from-[#74c34d] to-[#5a9a35] rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center items-center text-center group hover:shadow-2xl transition-all duration-500"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-5 group-hover:scale-110 transition-transform duration-500">
                <FiTrendingUp className="text-xl sm:text-2xl md:text-3xl text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-1 sm:mb-2">AMBITION</h3>
              <p className="text-white/80 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider">REDEFINING ZERO EMISSIONS</p>
              <div className="mt-2 sm:mt-3 md:mt-4 flex gap-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-white/40" />
                ))}
              </div>
            </div>

            {/* Recognition Bar */}
            <div
              ref={recognitionRef}
              className="recognition-item opacity-0 translate-y-8 transition-all duration-700 ease-out md:col-span-12 bg-white border border-gray-100 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 hover:shadow-lg transition-all duration-500"
              style={{ transitionDelay: '300ms' }}
            >
              {['APEC SUMMIT', 'G20 SUMMIT', 'YOUTH OLYMPICS'].map((event, i) => (
                <div key={i} className="flex items-center gap-1.5 sm:gap-2 md:gap-3 group cursor-pointer">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-[#74c34d]/10 flex items-center justify-center group-hover:bg-[#74c34d] transition-all duration-300">
                    <FiAward className="text-[10px] sm:text-xs md:text-sm lg:text-base text-[#74c34d] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[#1a2b3c] font-bold text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs uppercase tracking-wider group-hover:text-[#74c34d] transition-colors">
                    {event}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. NEPAL CALLOUT */}
      <section className="relative z-10 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-20 overflow-hidden">
        {/* Background Card Container */}
        <div className="max-w-[1000px] mx-auto relative">
          {/* Back wide card decorative layer */}
          <div className="absolute z-10 w-full h-[85%] top-1/2 -translate-y-1/2 bg-[#1a2b3c]/20 rounded-[32px] sm:rounded-[40px] md:rounded-[48px] opacity-40 shadow-xl blur-xl" />

          {/* Front main card */}
          <div className="relative z-20 bg-gradient-to-br from-[#1a2b3c] to-[#0f1a24] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-2xl overflow-hidden border border-white/10 group">

            {/* Large Background Shapes */}
            <div
              className="absolute inset-0 opacity-[0.035] pointer-events-none select-none z-0 transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='1000' height='900' viewBox='0 0 1000 900' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='4' stroke-opacity='0.4'%3E%3C!-- Hexagon shape --%3E%3Cpath d='M500 80 L620 150 L620 290 L500 360 L380 290 L380 150 Z' stroke-opacity='0.5' /%3E%3C!-- Large rounded rectangle with rotation --%3E%3Crect x='600' y='400' width='320' height='420' rx='70' transform='rotate(12 760 610)' stroke-opacity='0.35' /%3E%3C!-- Double circle pattern --%3E%3Ccircle cx='200' cy='650' r='120' stroke-opacity='0.45' /%3E%3Ccircle cx='200' cy='650' r='55' stroke-opacity='0.3' stroke-dasharray='8 6' /%3E%3C!-- Organic blob shape --%3E%3Cpath d='M750 120 C800 100, 860 110, 890 150 C920 190, 910 240, 880 270 C850 300, 800 290, 770 260 C740 230, 730 180, 750 120Z' stroke-opacity='0.4' /%3E%3C!-- Elegant wave line --%3E%3Cpath d='M50 280 C150 240, 250 320, 350 300 C450 280, 550 220, 650 240 C750 260, 850 300, 950 280' stroke-width='3' stroke-dasharray='12 8' stroke-opacity='0.3' /%3E%3C!-- Modern abstract shape --%3E%3Crect x='80' y='120' width='220' height='220' rx='50' transform='rotate(-8 190 230)' stroke-opacity='0.38' /%3E%3C!-- Decorative small circles --%3E%3Ccircle cx='850' cy='700' r='32' stroke-opacity='0.42' /%3E%3Ccircle cx='900' cy='780' r='18' stroke-opacity='0.35' /%3E%3Ccircle cx='70' cy='800' r='28' stroke-opacity='0.4' /%3E%3Ccircle cx='920' cy='180' r='24' stroke-opacity='0.38' /%3E%3Ccircle cx='40' cy='400' r='20' stroke-opacity='0.32' /%3E%3C!-- Cross shape pattern --%3E%3Cpath d='M280 720 L340 720 M310 690 L310 750' stroke-width='3' stroke-opacity='0.28' /%3E%3Cpath d='M820 520 L870 520 M845 495 L845 545' stroke-width='2.5' stroke-opacity='0.25' /%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '800px 700px sm:900px 800px md:1000px 900px lg:1100px 1000px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />

            {/* Double Line Border Effect */}
            <div className="absolute inset-2 sm:inset-3 md:inset-4 rounded-lg sm:rounded-xl md:rounded-2xl border border-white/5 pointer-events-none" />
            <div className="absolute inset-4 sm:inset-5 md:inset-6 lg:inset-8 rounded-md sm:rounded-lg md:rounded-xl border border-white/5 pointer-events-none" />

            {/* Corner Accents */}
            <div className="absolute top-3 sm:top-4 md:top-5 lg:top-6 left-3 sm:left-4 md:left-5 lg:left-6 w-8 sm:w-9 md:w-10 lg:w-12 h-8 sm:h-9 md:h-10 lg:h-12 border-l-2 border-t-2 border-[#74c34d]/30 rounded-tl-lg sm:rounded-tl-xl md:rounded-tl-2xl" />
            <div className="absolute top-3 sm:top-4 md:top-5 lg:top-6 right-3 sm:right-4 md:right-5 lg:right-6 w-8 sm:w-9 md:w-10 lg:w-12 h-8 sm:h-9 md:h-10 lg:h-12 border-r-2 border-t-2 border-[#74c34d]/30 rounded-tr-lg sm:rounded-tr-xl md:rounded-tr-2xl" />
            <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 left-3 sm:left-4 md:left-5 lg:left-6 w-8 sm:w-9 md:w-10 lg:w-12 h-8 sm:h-9 md:h-10 lg:h-12 border-l-2 border-b-2 border-[#74c34d]/30 rounded-bl-lg sm:rounded-bl-xl md:rounded-bl-2xl" />
            <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 right-3 sm:right-4 md:right-5 lg:right-6 w-8 sm:w-9 md:w-10 lg:w-12 h-8 sm:h-9 md:h-10 lg:h-12 border-r-2 border-b-2 border-[#74c34d]/30 rounded-br-lg sm:rounded-br-xl md:rounded-br-2xl" />

            {/* Green Quote */}
            <div className="absolute top-6 sm:top-7 md:top-8 lg:top-10 right-6 sm:right-7 md:right-8 lg:right-12 text-[#88d958] opacity-80 z-20">
              <svg width="40" height="30" sm:width="50" sm:height="35" md:width="60" md:height="40" viewBox="0 0 60 45" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 0H0V22H11C11 31 6 38 0 41V45C13 42 22 30 22 15V0Z" />
                <path d="M58 0H36V22H47C47 31 42 38 36 41V45C49 42 58 30 58 15V0Z" />
              </svg>
            </div>

            {/* Background Tech Shapes */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="absolute top-5 sm:top-6 md:top-7 lg:top-10 right-5 sm:right-6 md:right-7 lg:right-10 w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 opacity-40" viewBox="0 0 100 100">
                <path d="M50 15 L85 32.5 L85 67.5 L50 85 L15 67.5 L15 32.5 Z" fill="none" stroke="#74c34d" strokeWidth="2.5 sm:3 md:3.5" />
                <path d="M50 25 L75 37.5 L75 62.5 L50 75 L25 62.5 L25 37.5 Z" fill="none" stroke="#74c34d" strokeWidth="2 sm:2.5 md:3" />
              </svg>
              <svg className="absolute bottom-5 sm:bottom-6 md:bottom-7 lg:bottom-10 left-5 sm:left-6 md:left-7 lg:left-10 w-24 sm:w-28 md:w-32 lg:w-40 h-24 sm:h-28 md:h-32 lg:h-40 opacity-45" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="35" fill="none" stroke="#74c34d" strokeWidth="2.5 sm:3 md:3.5" strokeDasharray="4 3" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="#74c34d" strokeWidth="2 sm:2.5 md:3" strokeDasharray="3 2" />
              </svg>
              <div className="absolute inset-0 opacity-8"
                style={{ backgroundImage: `linear-gradient(#74c34d 1px, transparent 1px), linear-gradient(90deg, #74c34d 1px, transparent 1px)`, backgroundSize: '25px 25px sm:30px 30px md:35px 35px lg:40px 40px' }} />
              <div className="absolute inset-0 opacity-4"
                style={{ backgroundImage: `linear-gradient(#74c34d 1px, transparent 1px), linear-gradient(90deg, #74c34d 1px, transparent 1px)`, backgroundSize: '12px 12px sm:15px 15px md:18px 18px lg:20px 20px' }} />
            </div>

            {/* Glow Effects */}
            <div className="absolute -top-16 sm:-top-20 -right-16 sm:-right-20 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-[#74c34d]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 sm:-bottom-20 -left-16 sm:-left-20 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-[#74c34d]/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-72 md:w-80 lg:w-96 h-64 sm:h-72 md:h-80 lg:h-96 bg-[#74c34d]/5 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 md:mb-6 lg:mb-8 border border-white/10">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#74c34d] animate-pulse" />
                <span className="text-[#74c34d] text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase font-bold">Now in Nepal</span>
              </div>

              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black italic mb-4 sm:mb-5 md:mb-6 leading-tight">
                NEPAL,  <br />
                
                  FUTURE_
                 
                 HAS ARRIVED.
              </h2>

              <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[#74c34d]/50 to-transparent mx-auto mb-4 sm:mb-5 md:mb-6" />

              <p className="text-white/40 font-bold tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase text-[9px] sm:text-[10px] md:text-xs">
                Official Brand Launch • 2024
              </p>

              {/* Decorative Dots */}
              <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5 md:mt-6 lg:mt-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-[#74c34d]/30" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CompanyProfile;