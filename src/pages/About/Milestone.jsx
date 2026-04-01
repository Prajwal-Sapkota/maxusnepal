import React, { useEffect, useRef } from 'react';

const Milestones = () => {
  const containerRef = useRef(null);
  const pathRefs = useRef([]);
  const circleRefs = useRef([]);
  const cardRefs = useRef([]);
  const vehicleRef = useRef(null);
  const animationRef = useRef(null);

  const achievements = [
    { year: "2014", title: "Global Expansion", description: "Entered international markets with premium vehicles, establishing presence in over 100 countries.", icon: "🌍", pos: { x: 80, y: 540 } },
    { year: "2018", title: "Electric Revolution", description: "Launched first all-electric vehicles, pioneering sustainable mobility transition.", icon: "⚡", pos: { x: 340, y: 420 } },
    { year: "2024", title: "Arrives in Nepal", description: "Bringing electric mobility to Nepali roads with premium Maxus EV technology.", icon: "🇳🇵", pos: { x: 580, y: 310 } },
    { year: "2025+", title: "Future Horizon", description: "Expanding EV infrastructure, new models, and sustainable mobility solutions across Nepal.", icon: "🚀", pos: { x: 850, y: 190 } }
  ];

  const slopePath = "M80,540 L850,190";

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const path = document.querySelector('#slope-path');
          if (!path) return;

          const length = path.getTotalLength();
          path.style.strokeDashoffset = length;
          path.style.strokeDasharray = length;
          path.style.transition = 'stroke-dashoffset 3.5s cubic-bezier(0.4, 0, 0.2, 1)';
          path.style.strokeDashoffset = '0';

          circleRefs.current.forEach((circle, idx) => {
            if (circle) {
              setTimeout(() => {
                circle.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
                circle.style.transform = 'scale(1)';
              }, idx * 700);
            }
          });

          cardRefs.current.forEach((card, idx) => {
            if (card) {
              setTimeout(() => {
                card.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translate(0, 0)';
              }, idx * 700 + 400);
            }
          });

          if (vehicleRef.current) {
            let startTime = null;
            const duration = 3800;

            const animateVehicle = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const elapsed = timestamp - startTime;
              let progress = Math.min(elapsed / duration, 1);

              const currentLen = progress * length;
              const p1 = path.getPointAtLength(currentLen);

              // Responsive angle based on screen size
              const isMobile = window.innerWidth < 768;
              const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
              let angleDeg = -22; // desktop default

              if (isMobile) angleDeg = -35;
              if (isTablet) angleDeg = -30;

              const xPos = (p1.x / 1500) * 100;
              const yPos = (p1.y / 800) * 100;

              // Adjust offset based on screen size
              let offsetY = 70;
              if (isMobile) offsetY = 60;
              if (isTablet) offsetY = 10;

              const startOffset = progress < 0.15 ? 15 : 0;

              vehicleRef.current.style.left = `${xPos}%`;
              vehicleRef.current.style.top = `calc(${yPos}% - ${offsetY + startOffset}px)`;
              vehicleRef.current.style.transform = `translate(-50%, 0%) rotate(${angleDeg}deg)`;
              vehicleRef.current.style.opacity = '1';

              if (progress < 1) {
                animationRef.current = requestAnimationFrame(animateVehicle);
              }
            };

            setTimeout(() => {
              animationRef.current = requestAnimationFrame(animateVehicle);
            }, 500);
          }
        }
      });
    }, { threshold: 0.1 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-[#f5feff] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1400px]  sm:px-6 lg:px-8 relative">

       

        {/* The Slope Container */}
        <div className="relative h-[380px] sm:h-[480px] md:h-[580px] lg:h-[750px] w-full -pl-18 lg:pl-12">

          {/* SVG Timeline */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 1100 650"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Main Slope Path */}
              <path
                id="slope-path"
                ref={el => pathRefs.current[0] = el}
                d={slopePath}
                stroke="#74c34d"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />

              {/* Dashed Path Background */}
              <path
                d={slopePath}
                stroke="#74c34d"
                strokeWidth="4"
                strokeDasharray="8 6"
                strokeLinecap="round"
                fill="none"
                opacity="0.3"
              />

              {/* Milestone Dots */}
              {achievements.map((item, i) => (
                <g key={i}>
                  <circle
                    ref={el => circleRefs.current[i] = el}
                    cx={item.pos.x} cy={item.pos.y} r="10"
                    fill="white"
                    stroke="#74c34d"
                    strokeWidth="3"
                    style={{ transform: 'scale(0)', transformOrigin: 'center' }}
                  />
                  <circle
                    cx={item.pos.x} cy={item.pos.y} r="5"
                    fill="#74c34d"
                    style={{ transform: 'scale(0)', transformOrigin: 'center' }}
                  />
                </g>
              ))}


            </svg>
          </div>

          {/* Vehicle - Slides along path */}
          <div
            ref={vehicleRef}
            className="absolute z-20 pointer-events-none opacity-0 transition-opacity duration-500"
            style={{
              width: 'clamp(300px, 35vw, 540px)',
              willChange: 'left, top, transform',
              filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.1))'
            }}
          >
            <img src="/images/mifa9.png" alt="Maxus MIFA 9" className="w-full" />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1.5 bg-black/20 blur-md rounded-full" />
          </div>

         {/* Milestone Cards - Tilted Style */}
{achievements.map((item, idx) => (
  <div
    key={idx}
    ref={el => cardRefs.current[idx] = el}
    className="absolute z-30 opacity-0 transition-all duration-500"
    style={{
      left: `${(item.pos.x / 1080) * 100}%`,
      top: `${(item.pos.y / 500) * 100 - 8}%`,
      transform: 'translateX(8px) translateY(-50%)'
    }}
  >
    <div className="bg-white shadow-md hover:shadow-lg transition-all duration-300 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[320px] transform hover:-translate-y-1 relative overflow-hidden group -ml-12 lg:ml-8"
         style={{ 
           transform: 'rotate(-10deg)',
           transformOrigin: 'top left'
         }}>
      
      {/* Slanted Left Border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#74c34d] to-[#5a9a35]" />
      
      {/* Diagonal Corner Cut */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-[#74c34d]/10 transform rotate-45 translate-x-4 -translate-y-4" />
      
      {/* Main Content */}
      <div className="p-2 sm:p-2.5 md:p-3 pl-3 sm:pl-4">
        <div className="flex items-center gap-1 mb-0.5">
          <span className="text-[10px] sm:text-[12px] md:text-sm lg:text-base font-black italic text-[#74c34d]">{item.year}</span>
          <span className="text-[10px] sm:text-[12px] md:text-sm">{item.icon}</span>
        </div>
        <h4 className="font-bold uppercase text-[#1a2b3c] text-[7px] sm:text-[9px] md:text-[12px] lg:text-[14px] mb-0.5 truncate">{item.title}</h4>
        <p className="text-[8px] sm:text-[10px] md:text-[12px] text-slate-500 leading-tight line-clamp-2">
          {item.description}
        </p>
      </div>
      
      {/* Bottom Slanted Edge */}
      <div className="absolute bottom-0 right-0 w-12 h-6 bg-gradient-to-tl from-[#74c34d]/5 to-transparent transform -skew-x-12" />
    </div>
  </div>
))}
        </div>


      </div>
    </section>
  );
};

export default Milestones;