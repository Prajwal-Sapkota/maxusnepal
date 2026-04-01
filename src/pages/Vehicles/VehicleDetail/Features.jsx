import React from 'react';

const Features = React.forwardRef(({ vehicle }, ref) => {
  return (
    <section ref={ref} id="features" className="relative min-h-screen bg-[#f5feff] overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background System */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5feff]/40 via-[#f5feff]/10 to-transparent z-10" />
        <img src={vehicle.interiorImage} className="w-full h-full object-cover opacity-10 grayscale scale-110" alt="" />
        <div className="absolute inset-0 opacity-[0.08] z-10"
          style={{ backgroundImage: `radial-gradient(#74c34d 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />
      </div>

      {/* TOP RIGHT BLEND - Smooth transition from previous section */}
      <div className="absolute top-0 right-0 w-full h-[30%] sm:h-[35%] md:h-[40%] pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5feff] via-[#f5feff]/10 to-transparent" />
        <div className="absolute top-0 right-0 w-[60%] sm:w-[50%] md:w-[40%] h-[50%] bg-gradient-to-l from-[#f5feff] via-[#f5feff]/10 to-transparent blur-xl" />
        <div className="absolute top-0 right-0 w-[40%] sm:w-[35%] md:w-[30%] h-[40%] bg-gradient-to-bl from-[#74c34d]/5 via-transparent to-transparent blur-2xl" />
      </div>

      {/* BOTTOM RIGHT BLEND - Smooth transition to next section */}
      <div className="absolute bottom-0 right-0 w-full h-[30%] sm:h-[35%] md:h-[40%] pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-[#f5feff] via-[#f5feff]/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[60%] sm:w-[50%] md:w-[40%] h-[50%] bg-gradient-to-l from-[#f5feff] via-[#f5feff]/10 to-transparent blur-xl" />
        <div className="absolute bottom-0 right-0 w-[40%] sm:w-[35%] md:w-[30%] h-[40%] bg-gradient-to-tl from-[#74c34d]/5 via-transparent to-transparent blur-2xl" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f5feff] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#f5feff] to-transparent pointer-events-none z-10" />
      <div className="relative z-20 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-24">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 xl:gap-20 items-start">

          {/* LEFT CONTENT - Scrolling Features */}
          <div className="lg:col-span-5 space-y-8 md:space-y-12 lg:space-y-16 max-h-[70vh] md:max-h-[80vh] lg:max-h-[85vh] overflow-y-auto no-scrollbar pb-16 md:pb-24 lg:pb-32">
            <div className="space-y-4 md:space-y-6 sticky top-0 bg-[#f5feff]/80 backdrop-blur-md z-30 pb-6 md:pb-8 lg:pb-10 border-b border-[#74c34d]/20">
              <span className="text-3xl sm:text-4xl md:text-5xl italic">Horizon</span>
              <p className="text-gray-400 text-[9px] sm:text-[10px] uppercase tracking-wider max-w-md">
                Where craftsmanship meets innovation
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {vehicle.features.map((feature, idx) => (
                <div key={idx} className="group relative p-4 sm:p-6 md:p-8 bg-white/40 backdrop-blur-sm border border-[#74c34d]/10 hover:border-[#74c34d]/50 hover:bg-white/80 transition-all duration-500 rounded-sm">
                  <div className="absolute left-0 top-0 w-[2px] h-0 bg-[#74c34d] group-hover:h-full transition-all duration-500" />
                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <div className="flex flex-col gap-1 sm:gap-2 flex-1">

                      <h4 className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-tighter group-hover:translate-x-2 transition-transform break-words">
                        {feature}
                      </h4>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 border border-[#74c34d]/20 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500 shrink-0">
                      <svg width="8" height="8" sm:width="10" sm:height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M0 5H10 M5 0V10" stroke="#74c34d" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT - Sticky Image */}
          <div className="lg:col-span-7 sticky top-16 md:top-20 lg:top-24">
            <div className="relative group">
              <div className="relative aspect-[16/10] bg-white p-1 sm:p-2 shadow-2xl border border-[#74c34d]/10 overflow-hidden">
                <img
                  src={vehicle.interiorImage}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  alt="Interior Focus"
                />



                {/* Marquee Footer - Responsive */}
                <div className="absolute bottom-0 left-0 w-full bg-[#1a2b3c] py-2 sm:py-3 overflow-hidden">
                  <div className="whitespace-nowrap animate-marquee flex gap-6 sm:gap-8 md:gap-12">
                    {[1, 2, 3].map(i => (
                      <span key={i} className="text-white text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] italic opacity-90">
                        PREMIUM CABIN INTEGRATION // AERODYNAMIC FLOW // ERGONOMIC MASTERY //
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Label - Responsive */}
              <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-2 sm:-right-6 md:-right-8 bg-[#1a2b3c] p-4 sm:p-6 md:p-8 lg:p-10 min-w-[180px] sm:min-w-[220px] md:min-w-[260px] shadow-[20px_20px_40px_rgba(0,0,0,0.15)] md:shadow-[30px_30px_60px_rgba(0,0,0,0.15)] group-hover:-translate-x-1 sm:group-hover:-translate-x-2 transition-transform duration-500">
                <div className="w-6 sm:w-8 md:w-10 h-[1px] bg-[#74c34d] mb-2 sm:mb-3 md:mb-4" />
                <p className="text-[#74c34d] text-[7px] sm:text-[8px] md:text-[9px] font-black mb-1 sm:mb-2 tracking-[0.2em] sm:tracking-[0.3em]">INTERIOR_GRADE</p>
                <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-black italic uppercase leading-none tracking-tighter">Elite<br />Mastery_</h3>
                <div className="mt-3 sm:mt-4 md:mt-6 flex gap-1 sm:gap-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#74c34d]" />
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#74c34d]/40" />
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#74c34d]/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee { 
          animation: marquee 25s linear infinite;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { 
          animation: spin-slow 10s linear infinite;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
});

Features.displayName = 'Features';

export default Features;