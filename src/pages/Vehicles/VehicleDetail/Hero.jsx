import React, { useRef, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Hero = React.forwardRef(({ vehicle, quickSpecs, setShowForm, scrollToSection, specsRef }, ref) => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollPosition = window.scrollY;
        const heroHeight = window.innerHeight;
        const progress = Math.min(scrollPosition / heroHeight, 1);
        imageRef.current.style.transform = `scale(${1 + progress * 0.1})`;
        if (contentRef.current) {
          contentRef.current.style.opacity = `${1 - progress * 0.5}`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.getElementById('hero-section')?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x: x * 20, y: y * 15 });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Add CSS animations to the document head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes fadeInScale {
        from {
          opacity: 0;
          transform: scale(0.9);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes scrollDown {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100%); }
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(5px); }
      }
      .animate-bounce {
        animation: bounce 1s ease-in-out infinite;
      }
      .fade-in-up {
        animation: fadeInUp 0.8s ease forwards;
      }
      .fade-in-scale {
        animation: fadeInScale 1s ease forwards;
      }
      .fade-in {
        animation: fadeIn 1s ease forwards;
      }
      .delay-200 { animation-delay: 0.2s; }
      .delay-300 { animation-delay: 0.3s; }
      .delay-400 { animation-delay: 0.4s; }
      .delay-500 { animation-delay: 0.5s; }
      .delay-1500 { animation-delay: 1.5s; }

      /* Responsive Typography */
      @media (max-width: 768px) {
        .fade-in-up, .fade-in-scale, .fade-in {
          animation-duration: 0.6s;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen w-full overflow-hidden bg-[#faf8f3] py-12">
      {/* Background Layers - Responsive */}
      <div className="absolute inset-0">
        {/* Base Layer - Main Background */}
        <div className="absolute inset-0 bg-[#f5feff]" />
        
        {/* Soft Ambient Glow from Top Right - Adjusted for mobile */}
        <div className="absolute top-0 right-0 h-full w-full pointer-events-none" style={{
          background: `radial-gradient(circle at 80% 30%, rgba(204,217,191,0.4) 0%, rgba(220,228,213,0.2) 50%, transparent 80%)`
        }} />
        
        {/* Soft Green Blend Layer - Responsive width */}
        <div className="absolute top-0 right-0 h-full w-[60%] md:w-[50%] lg:w-[45%] bg-gradient-to-l from-[#ccd9bf] via-[#ccd9bf]/50 to-transparent" style={{
          clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
          filter: 'blur(40px)'
        }} />
        
        {/* Bottom fade for smooth transition */}
        <div className="absolute bottom-0 right-0 w-full h-[30%] md:h-[35%] pointer-events-none" style={{
          background: `linear-gradient(0deg, 
            #f5feff 0%, 
            rgba(204,217,191,0.03) 30%, 
            rgba(204,217,191,0.08) 50%, 
            transparent 100%)`
        }} />
        
        {/* Radial Accent at Bottom Right */}
        <div className="absolute bottom-0 right-0 w-[50%] md:w-[40%] h-[20%] md:h-[25%] pointer-events-none" style={{
          background: `radial-gradient(ellipse at 100% 100%, 
            rgba(116,195,77,0.05) 0%, 
            transparent 70%)`
        }} />
        
        {/* Subtle Diagonal Light Line - Hidden on mobile */}
        <div className="absolute bottom-0 right-0 w-[30%] md:w-[40%] h-[8%] md:h-[12%] pointer-events-none border-t border-[#74c34d]/8 hidden sm:block" style={{ transform: 'rotate(-2deg)', transformOrigin: 'bottom left' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 w-full">
          
          {/* Grid Layout - Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center  mb-8 md:mb-12">
            
            {/* Left Title */}
            <div 
              ref={contentRef} 
              className="pl-2 sm:pl-4 lg:pl-8 transition-all duration-300 text-center "
              style={{ 
                transform: `translateX(${mousePosition.x * 0.5}px) translateY(${mousePosition.y * 0.3}px)`,
                opacity: 1
              }}
            >
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[120px] font-black text-[#1a2b3c] leading-[0.85] sm:leading-[0.8] tracking-tighter fade-in-up">
                {vehicle.name.split(' ')[0]}
              </h1>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#74c34d] leading-[1.2] sm:leading-[1.1] mt-3 sm:mt-4 tracking-tight fade-in-up delay-200">
                {vehicle.name.split(' ').slice(1).join(' ')}
              </h2>
            </div>

            {/* Right Image - Responsive sizing */}
            <div className="relative flex justify-center items-center mt-8 sm:mt-12 lg:mt-0 fade-in-scale delay-200">
              <div className="relative z-10 w-full max-w-4xl lg:max-w-7xl px-2 sm:px-4">
                <img 
                  ref={imageRef} 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-auto object-contain relative z-20" 
                />
                {/* Shadow Layers - Responsive */}
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[85%] h-[10px] sm:h-[15px] bg-black/90 blur-[10px] sm:blur-[15px] rounded-full z-10" />
                <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[95%] h-[40px] sm:h-[60px] bg-black/40 blur-[30px] sm:blur-[45px] rounded-full z-0" />
                <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[110%] h-[100px] sm:h-[150px] opacity-40 pointer-events-none z-0"
                     style={{ background: 'radial-gradient(50% 50% at 50% 0%, rgba(0,0,0,0.8) 0%, transparent 100%)', filter: 'blur(20px) sm:blur(30px)' }} />
                <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[75%] h-[6px] sm:h-[8px] bg-[#74c34d]/40 blur-[15px] sm:blur-[20px] rounded-full" />
              </div>
            </div>
          </div>

          {/* Bottom Section - Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center justify-center">
            
            {/* Left: Description and CTA */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 fade-in-up delay-400">
              <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-sm leading-relaxed font-medium px-4 sm:px-0">
                {vehicle.shortDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={() => setShowForm(true)}
                  className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-b from-[#92d950] to-[#71b536] text-white rounded-full font-bold text-[10px] sm:text-[11px] uppercase tracking-widest shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                >
                  Book Test Drive
                </button>
                <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 border-2 border-gray-200 text-gray-500 rounded-full font-bold text-[10px] sm:text-[11px] uppercase tracking-widest hover:border-[#74c34d] hover:text-[#74c34d] transition-all">
                  Watch Film
                </button>
              </div>
            </div>

            {/* Right: Spec Card - Responsive grid */}
            <div className="lg:col-span-6 fade-in-up delay-500">
              <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-4 sm:p-6 md:p-8 rounded-[24px] sm:rounded-[32px] shadow-2xl">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                  {quickSpecs.map((spec, idx) => (
                    <div key={idx} className="flex flex-col items-start px-2 sm:px-4 border-r border-gray-200/50 last:border-0">
                      <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2 text-[#74c34d]">
                        <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest opacity-60">{spec.label}</span>
                      </div>
                      <div className="text-xl sm:text-3xl md:text-4xl font-black text-[#1a2b3c] tracking-tighter">
                        {spec.value}<span className="text-[8px] sm:text-xs ml-0.5 sm:ml-1 text-gray-400 uppercase font-bold">{spec.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Responsive positioning */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 fade-in delay-1500">
        <div
          className="flex flex-col items-center gap-1 sm:gap-2 cursor-pointer transition-all hover:-translate-y-1"
          onClick={() => scrollToSection(specsRef, 'specs')}
        >
          <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-[#74c34d] via-gray-300 to-transparent overflow-hidden">
            <div className="w-full h-2 sm:h-3 bg-gradient-to-b from-[#74c34d] to-transparent" style={{
              animation: 'scrollDown 1.8s ease infinite'
            }} />
          </div>
          <FiChevronDown className="text-gray-400 text-xs sm:text-sm animate-bounce" />
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;