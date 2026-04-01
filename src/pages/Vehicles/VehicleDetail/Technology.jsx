import React, { useState, useEffect } from 'react';
import { FiCpu, FiZap, FiShield, FiBluetooth, FiWind, FiPackage, FiArrowRight } from 'react-icons/fi';

const Technology = React.forwardRef(({ vehicle }, ref) => {
  const icons = [FiCpu, FiZap, FiShield, FiBluetooth, FiWind, FiPackage];
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredTechnologies = vehicle.technology || [];

  // Auto-rotate through technologies every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % featuredTechnologies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredTechnologies.length]);

  const currentTech = featuredTechnologies[currentTechIndex];
  const currentIcon = icons[currentTechIndex % icons.length];

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentTechIndex((prev) => (prev - 1 + featuredTechnologies.length) % featuredTechnologies.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentTechIndex((prev) => (prev + 1) % featuredTechnologies.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section ref={ref} id="technology" className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#f5feff] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] sm:text-[18vw] md:text-[20vw] font-black text-[#74c34d]/[0.03] uppercase select-none tracking-tighter">
          Innovation_
        </div>
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: `linear-gradient(#74c34d 1px, transparent 1px), linear-gradient(90deg, #74c34d 1px, transparent 1px)`, backgroundSize: '30px 30px sm:40px 40px md:50px 50px' }} />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">

        {/* Main Green Section - TOP */}
        <div className="bg-[#74c34d] mb-6 sm:mb-8 overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">

            {/* Left Content - Performance Optimized */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between relative group min-h-[350px] sm:min-h-[380px] md:min-h-[400px]">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 animate-pulse" style={{ backgroundImage: `repeating-linear-gradient(45deg, #000, #000 1px, transparent 1px, transparent 10px)` }} />
              </div>
              <div className="relative z-10 space-y-4 sm:space-y-5 md:space-y-6">

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase leading-[1.1] tracking-tighter text-[#1a2b3c]">
                  Performance<br />Optimized
                </h3>
                
                {/* Technology Tags - Responsive Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3 items-center justify-center">
                  {vehicle.technology.slice(0, 6).map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-tighter px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all duration-300 cursor-pointer text-center whitespace-nowrap ${
                        idx === currentTechIndex
                          ? 'bg-[#1a2b3c] text-[#74c34d] shadow-lg'
                          : 'bg-[#1a2b3c]/10 text-[#1a2b3c]/70 hover:bg-[#1a2b3c]/20'
                      }`}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCurrentTechIndex(idx);
                        setTimeout(() => setIsAutoPlaying(true), 10000);
                      }}
                    >
                      {tech.title}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Stats Section */}
              <div className="relative z-10 flex items-end justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#1a2b3c]/20">
                <div className="flex gap-4 sm:gap-6 md:gap-8">
                  <div>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-black leading-none text-[#1a2b3c]">99.2%</p>
                    <p className="text-[#1a2b3c]/60 text-[7px] sm:text-[8px] font-bold uppercase tracking-widest mt-1">Accuracy</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-black leading-none text-[#1a2b3c]">0.02s</p>
                    <p className="text-[#1a2b3c]/60 text-[7px] sm:text-[8px] font-bold uppercase tracking-widest mt-1">Latency</p>
                  </div>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#1a2b3c] flex items-center justify-center">
                  <FiZap className="text-[#1a2b3c] text-base sm:text-xl" />
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT - Image with Rotating Text Overlay */}
            <div className="lg:col-span-2 group relative min-h-[350px] sm:min-h-[380px] md:min-h-[400px] bg-[#1a2b3c] overflow-hidden">
              {/* Background Image */}
              <img
                src={vehicle.detailImage}
                className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000"
                alt="X-Ray View"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b3c] via-transparent to-transparent" />

              {/* Rotating Content Overlay - ON TOP OF IMAGE */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8">
                {/* Navigation Arrows */}
                <div className="absolute top-0 right-0 flex gap-1 sm:gap-2">
                  <button
                    onClick={goToPrev}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-black/50 hover:bg-[#74c34d] flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                  >
                    <FiArrowRight className="rotate-180 text-white text-[10px] sm:text-xs md:text-sm" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-black/50 hover:bg-[#74c34d] flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                  >
                    <FiArrowRight className="text-white text-[10px] sm:text-xs md:text-sm" />
                  </button>
                </div>

                {/* Rotating Content */}
                <div className="keyframes-fadeIn mt-8 sm:mt-10 md:mt-12">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-black uppercase italic mb-1 sm:mb-2">
                    {currentTech?.title || "Central Intelligence"}
                  </h3>

                  <div className="h-[2px] w-8 sm:w-10 md:w-12 bg-[#74c34d] mb-2 sm:mb-3" />

                  <p className="text-white/60 text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest leading-relaxed max-w-3xl line-clamp-3 sm:line-clamp-none">
                    {currentTech?.desc || "Real-time processing and adaptive response systems integrated directly into the chassis."}
                  </p>
                </div>

                {/* Indicator Dots */}
                <div className="flex gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                  {featuredTechnologies.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCurrentTechIndex(idx);
                        setTimeout(() => setIsAutoPlaying(true), 10000);
                      }}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        idx === currentTechIndex
                          ? 'w-4 sm:w-5 md:w-6 bg-[#74c34d]'
                          : 'w-2 sm:w-2.5 md:w-3 bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .keyframes-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (min-width: 640px) {
          .line-clamp-3 {
            -webkit-line-clamp: unset;
            overflow: visible;
          }
        }
      `}</style>
    </section>
  );
});

Technology.displayName = 'Technology';

export default Technology;