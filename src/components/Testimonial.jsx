import React, { useState } from 'react';
import { IoChevronBack, IoChevronForward, IoPlay } from 'react-icons/io5';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Andrei Zhukov",
      text: "It has long been found that when evaluating the design and composition, the readable text interferes with concentration. Lorem Ipsum is used because it provides a more or less standard template filling.",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Elena Popova",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Ivan Ivanov",
      text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ];

  // Logic to get circular indices for prev/next content
  const prevIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  const nextIndex = (currentIndex + 1) % reviews.length;

  const nextSlide = () => setCurrentIndex(nextIndex);
  const prevSlide = () => setCurrentIndex(prevIndex);

  // Reusable Side Card Component with actual data
  const SideCard = ({ position, data }) => (
    <div className={`absolute ${position === 'left' ? 'left-0 -translate-x-[65%]' : 'right-0 translate-x-[65%]'} 
      z-10 w-[800px] h-[280px] bg-[#1e2125] rounded-[32px] opacity-50 scale-[0.85] 
      hidden lg:flex items-center p-12 pointer-events-none border border-white/50 transition-all duration-500`}>

      <div className="w-32 h-32 rounded-[32px] overflow-hidden grayscale opacity-40 shrink-0">
        <img src={data.image} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="ml-8 flex-1">
        <h4 className="text-white/60 text-xl font-medium mb-3">{data.name}</h4>
        <p className="text-white/40 text-sm line-clamp-3 leading-relaxed">
          {data.text}
        </p>
      </div>
    </div>
  );

  return (
    <section className="bg-[#f5feff] py-24 px-4 font-sans relative overflow-hidden">
      <h2 className="text-center text-[#1a2b3c] text-[42px] font-normal tracking-tight">
        Satisfied clients about us
      </h2>

      <div className="relative flex items-center justify-center max-w-[1600px] mx-auto h-[550px]">

        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="absolute left-[18%] z-50 w-[60px] h-[60px] bg-[#88d958] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 active:scale-95 transition-all">
          <IoChevronBack size={28} />
        </button>

        <div className="relative flex items-center justify-center w-full h-full">

          {/* Side Cards displaying actual data from the array */}
          <SideCard position="left" data={reviews[prevIndex]} />
          <SideCard position="right" data={reviews[nextIndex]} />

          {/* ACTIVE CENTER GROUP */}
          <div className="relative z-30 flex items-center justify-center w-full lg:w-[740px] h-[420px]">

            {/* Back wide card decorative layer */}
            <div className="absolute z-10 w-full h-[320px] bg-[#393942] rounded-[32px] opacity-40 shadow-xl" />

            {/* Front main card */}
            <div className="relative z-20 w-[75%] lg:w-[680px] h-full bg-[#1e2125] rounded-[32px] p-10 lg:p-16 shadow-[0_50px_100px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row gap-12 items-center border border-white/5 overflow-hidden group">

              {/* --- THE LARGE BACKGROUND SHAPES --- */}
              <div
                className="absolute inset-0 opacity-[0.035] pointer-events-none select-none z-0 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='1000' height='900' viewBox='0 0 1000 900' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='4' stroke-opacity='0.4'%3E%3C!-- Hexagon shape --%3E%3Cpath d='M500 80 L620 150 L620 290 L500 360 L380 290 L380 150 Z' stroke-opacity='0.5' /%3E%3C!-- Large rounded rectangle with rotation --%3E%3Crect x='600' y='400' width='320' height='420' rx='70' transform='rotate(12 760 610)' stroke-opacity='0.35' /%3E%3C!-- Double circle pattern --%3E%3Ccircle cx='200' cy='650' r='120' stroke-opacity='0.45' /%3E%3Ccircle cx='200' cy='650' r='55' stroke-opacity='0.3' stroke-dasharray='8 6' /%3E%3C!-- Organic blob shape --%3E%3Cpath d='M750 120 C800 100, 860 110, 890 150 C920 190, 910 240, 880 270 C850 300, 800 290, 770 260 C740 230, 730 180, 750 120Z' stroke-opacity='0.4' /%3E%3C!-- Elegant wave line --%3E%3Cpath d='M50 280 C150 240, 250 320, 350 300 C450 280, 550 220, 650 240 C750 260, 850 300, 950 280' stroke-width='3' stroke-dasharray='12 8' stroke-opacity='0.3' /%3E%3C!-- Modern abstract shape --%3E%3Crect x='80' y='120' width='220' height='220' rx='50' transform='rotate(-8 190 230)' stroke-opacity='0.38' /%3E%3C!-- Decorative small circles --%3E%3Ccircle cx='850' cy='700' r='32' stroke-opacity='0.42' /%3E%3Ccircle cx='900' cy='780' r='18' stroke-opacity='0.35' /%3E%3Ccircle cx='70' cy='800' r='28' stroke-opacity='0.4' /%3E%3Ccircle cx='920' cy='180' r='24' stroke-opacity='0.38' /%3E%3Ccircle cx='40' cy='400' r='20' stroke-opacity='0.32' /%3E%3C!-- Cross shape pattern --%3E%3Cpath d='M280 720 L340 720 M310 690 L310 750' stroke-width='3' stroke-opacity='0.28' /%3E%3Cpath d='M820 520 L870 520 M845 495 L845 545' stroke-width='2.5' stroke-opacity='0.25' /%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '1100px 1000px',
                  backgroundPosition: '100px -120px',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              {/* --- THE GREEN QUOTES --- */}
              <div className="absolute top-10 right-12 text-[#88d958] opacity-90 z-20">
                <svg width="70" height="50" viewBox="0 0 60 45" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 0H0V22H11C11 31 6 38 0 41V45C13 42 22 30 22 15V0Z" />
                  <path d="M58 0H36V22H47C47 31 42 38 36 41V45C49 42 58 30 58 15V0Z" />
                </svg>
              </div>

              {/* --- CARD CONTENT --- */}
              <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">

                <div className="flex flex-col items-start gap-6 min-w-[240px]">
                  <div className="w-[190px] h-[190px] rounded-[40px] overflow-hidden border-[6px] border-white/5 shadow-2xl transition-all duration-500">
                    <img src={reviews[currentIndex].image} className="w-full h-full object-cover" alt={reviews[currentIndex].name} />
                  </div>

                  <button className="flex items-center gap-3 group/play">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1e2125] group-hover/play:bg-[#88d958] group-hover/play:text-white transition-all">
                      <IoPlay size={18} className="ml-1" />
                    </div>
                    <div className="flex flex-col items-start uppercase leading-none">
                      <span className="text-white text-[13px] font-medium tracking-widest">watch</span>
                      <span className="text-white/40 text-[10px] tracking-[0.2em] border-b border-white/20 mt-1 pb-1">video review</span>
                    </div>
                  </button>
                </div>

                <div className="flex-1 text-left pt-2 transition-all duration-500">
                  <h3 className="text-white text-[28px] font-medium mb-6 tracking-tight">
                    {reviews[currentIndex].name}
                  </h3>
                  <p className="text-gray-400 text-[16px] leading-[1.8] font-light max-w-[480px]">
                    {reviews[currentIndex].text}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        <button onClick={nextSlide} className="absolute right-[18%] z-50 w-[60px] h-[60px] bg-[#88d958] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 active:scale-95 transition-all">
          <IoChevronForward size={28} />
        </button>
      </div>

      <div className="text-center mt-16 text-[#1a2b3c] text-[32px] font-light tracking-tighter">
        <span className="font-semibold">0{currentIndex + 1}</span>
        <span className="text-gray-300 mx-4 font-extralight">/</span>
        <span className="text-gray-300 text-[22px]">0{reviews.length}</span>
      </div>
    </section>
  );
};

export default Testimonial;