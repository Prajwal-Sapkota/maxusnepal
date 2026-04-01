import React from 'react';

const Specifications = React.forwardRef(({ vehicle }, ref) => {
  return (
    <section ref={ref} id="specs" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#f5feff] overflow-hidden">
      
      {/* Background Tech Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" 
           style={{ backgroundImage: `linear-gradient(#1a2b3c 1px, transparent 1px), linear-gradient(90deg, #1a2b3c 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      {/* Decorative Watermark Shapes - Hidden on mobile */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] hidden sm:block">
        <svg viewBox="0 0 100 100" className="absolute -top-10 -left-10 w-[30vw] sm:w-[40vw] rotate-45">
          <rect x="5" y="5" width="90" height="90" stroke="#1a2b3c" strokeWidth="0.5" fill="none" />
          <rect x="12" y="12" width="76" height="76" stroke="#74c34d" strokeWidth="2" fill="none" />
        </svg>
        <svg viewBox="0 0 100 100" className="absolute -bottom-20 -right-20 w-[25vw] sm:w-[30vw]">
          <circle cx="50" cy="50" r="45" stroke="#1a2b3c" strokeWidth="0.3" fill="none" />
          <circle cx="50" cy="50" r="38" stroke="#74c34d" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Centered like Testimonial */}
        <div className="mb-12 sm:mb-16 md:mb-24 flex flex-col items-center justify-center text-center gap-4 sm:gap-6 md:gap-8 border-b border-gray-200 pb-8 sm:pb-10 md:pb-12">
         
          <h1 className="text-gray-500 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed font-medium uppercase tracking-wider px-4">
            Defining the next generation of electric performance and 4WD capability.
          </h1>
        </div>

        {/* Specs Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {vehicle.specs.map((spec, idx) => (
            <div 
              key={idx} 
              className="group relative p-6 sm:p-8 md:p-10 lg:p-12 border-r border-b border-gray-200 bg-[#1a2b3c] transition-all duration-500 overflow-hidden"
            >
              {/* --- LARGE BACKGROUND SHAPES (Like Testimonial) --- */}
              <div
                className="absolute inset-0 opacity-[0.035] pointer-events-none select-none z-0 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='1000' height='900' viewBox='0 0 1000 900' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='4' stroke-opacity='0.4'%3E%3C!-- Hexagon shape --%3E%3Cpath d='M500 80 L620 150 L620 290 L500 360 L380 290 L380 150 Z' stroke-opacity='0.5' /%3E%3C!-- Large rounded rectangle with rotation --%3E%3Crect x='600' y='400' width='320' height='420' rx='70' transform='rotate(12 760 610)' stroke-opacity='0.35' /%3E%3C!-- Double circle pattern --%3E%3Ccircle cx='200' cy='650' r='120' stroke-opacity='0.45' /%3E%3Ccircle cx='200' cy='650' r='55' stroke-opacity='0.3' stroke-dasharray='8 6' /%3E%3C!-- Organic blob shape --%3E%3Cpath d='M750 120 C800 100, 860 110, 890 150 C920 190, 910 240, 880 270 C850 300, 800 290, 770 260 C740 230, 730 180, 750 120Z' stroke-opacity='0.4' /%3E%3C!-- Elegant wave line --%3E%3Cpath d='M50 280 C150 240, 250 320, 350 300 C450 280, 550 220, 650 240 C750 260, 850 300, 950 280' stroke-width='3' stroke-dasharray='12 8' stroke-opacity='0.3' /%3E%3C!-- Modern abstract shape --%3E%3Crect x='80' y='120' width='220' height='220' rx='50' transform='rotate(-8 190 230)' stroke-opacity='0.38' /%3E%3C!-- Decorative small circles --%3E%3Ccircle cx='850' cy='700' r='32' stroke-opacity='0.42' /%3E%3Ccircle cx='900' cy='780' r='18' stroke-opacity='0.35' /%3E%3Ccircle cx='70' cy='800' r='28' stroke-opacity='0.4' /%3E%3Ccircle cx='920' cy='180' r='24' stroke-opacity='0.38' /%3E%3Ccircle cx='40' cy='400' r='20' stroke-opacity='0.32' /%3E%3C!-- Cross shape pattern --%3E%3Cpath d='M280 720 L340 720 M310 690 L310 750' stroke-width='3' stroke-opacity='0.28' /%3E%3Cpath d='M820 520 L870 520 M845 495 L845 545' stroke-width='2.5' stroke-opacity='0.25' /%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '800px 700px',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              
              {/* Additional Green Accent Shape */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 pointer-events-none opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M20 100 H100 V20 M10 100 H100 V10" stroke="#74c34d" strokeWidth="4.8" fill="none" />
                  <circle cx="100" cy="100" r="15" stroke="#74c34d" strokeWidth="5.3" fill="none" strokeDasharray="4 2" />
                </svg>
              </div>
              
              {/* Background Number */}
              <span className="absolute -bottom-2 -right-1 sm:-bottom-4 sm:-right-2 text-6xl sm:text-8xl md:text-9xl font-black text-white/[0.02] group-hover:text-[#74c34d]/5 transition-colors duration-500 select-none z-0">
                0{idx + 1}
              </span>
              
              {/* Content */}
              <div className="relative z-10 space-y-4 sm:space-y-6 md:space-y-8">
                <div className="text-[#74c34d] text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full border border-[#74c34d] group-hover:bg-[#74c34d] transition-all shadow-[0_0_10px_#74c34d]" />
                  {spec.label}
                </div>
                
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
                    {spec.value}
                    <span className="text-base sm:text-lg md:text-xl ml-0.5 sm:ml-1 text-[#74c34d] font-bold uppercase">{spec.unit}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 group-hover:text-gray-300 text-[10px] sm:text-xs leading-relaxed max-w-[180px] sm:max-w-[200px] font-medium uppercase tracking-tight transition-colors duration-300">
                  {spec.desc || "Optimized for maximum efficiency and durability in varied terrain."}
                </p>
              </div>
              
              {/* Inner Border */}
              <div className="absolute inset-2 sm:inset-3 md:inset-4 border border-white/5 group-hover:border-[#74c34d]/20 transition-all pointer-events-none" />
              
              {/* Bottom Glow Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#74c34d]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Specifications.displayName = 'Specifications';

export default Specifications;