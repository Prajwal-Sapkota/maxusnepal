import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft, FiUser, FiPhone } from "react-icons/fi";

const Lineup = () => {
  const [activeTab, setActiveTab] = useState('new');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Exact data from image_7e681d.jpg
  const cars = [
    {
      id: 1,
      name: "Volkswagen Jetta GLI",
      year: "2017",
      price: "1 622 000 ₽",
      oldPrice: "2 108 000 ₽",
      discount: "-30%",
      specs: [
        { label: "engine volume", value: "2.0 l tfsi" },
        { label: "power", value: "221 hp" },
        { label: "transmission", value: "6 speed DSG" },
        { label: "fuel type", value: "Gasoline" },
      ],
      image: "/images/vehicle1.png"
    },
    {
      id: 2,
      name: "Volkswagen Jetta GLI",
      year: "2017",
      price: "1 622 000 ₽",
      tag: "from 7000 r/mo",
      specs: [
        { label: "engine volume", value: "2.0 l tfsi" },
        { label: "power", value: "221 hp" },
        { label: "transmission", value: "6 speed DSG" },
        { label: "fuel type", value: "Gasoline" },
      ],
      image: "/images/vehicle1.png"
    }
  ];

  const totalSlides = 20;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section className="bg-[#f5feff] py-24 font-sans overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-10 lg:px-21">

        {/* --- HEADER TITLE --- */}
        <h2 className="text-[42px] font-light text-[#1a1a1c] text-center mb-16 tracking-tight">
          Actual cars in stock with Title
        </h2>

        {/* --- FILTER & PAGINATION BAR --- */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-10 mb-2">
          {/* Left: Found Count */}
          <div className="text-gray-300 text-[13px] font-medium">
            Total cars found: <span className="text-[#1a1a1c] font-bold text-2xl ml-2 tracking-tighter">115</span>
          </div>

          {/* Center: Tabs Switcher */}
          <div className="flex bg-white rounded-full p-1 border border-gray-100 shadow-sm">
            <button
              onClick={() => setActiveTab('used')}
              className={`px-9 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-full transition-all duration-300 ${activeTab === 'used' ? 'bg-[#6bcf50] text-white shadow-lg shadow-green-200' : 'text-gray-300 hover:text-gray-400'}`}
            >
              Used cars
            </button>
            <button
              onClick={() => setActiveTab('new')}
              className={`px-9 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-full transition-all duration-300 ${activeTab === 'new' ? 'bg-[#6bcf50] text-white shadow-lg shadow-green-200' : 'text-gray-300 hover:text-gray-400'}`}
            >
              New cars
            </button>
          </div>

          {/* Right: Dynamic Pagination Counter */}
          <div className="flex items-center gap-4">
            <span className="text-[28px] font-black text-[#1a1a1c] tracking-tighter leading-none">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <div className="flex gap-2 text-[11px] font-black tracking-[0.2em] text-gray-200 uppercase">
              <span>02</span> <span>03</span> <span>04</span> <span>...</span> <span>{totalSlides}</span>
            </div>
          </div>
        </div>

        {/* --- SLIDER CONTAINER --- */}
        <div className="relative mt-10">

          {/* Floating Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-0 w-16 h-16 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-300 hover:text-[#6bcf50] transition-all border border-gray-50 active:scale-95 opacity-80 hover:opacity-100"
            style={{ transform: 'translateY(-50%) translateX(-30%)' }}
          >
            <FiChevronLeft className="text-5xl pr-3" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-0 w-16 h-16 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-300 hover:text-[#6bcf50] transition-all border border-gray-50 active:scale-95 opacity-80 hover:opacity-100"
            style={{ transform: 'translateY(-50%) translateX(30%)' }}
          >
            <FiChevronRight className="text-5xl pl-3" />
          </button>

          {/* The Grid Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 bg-white border-l border-t border-gray-100 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] relative z-30">
            {cars.map((car, idx) => (
              <div key={idx} className="p-10  border-b border-gray-100 flex flex-col relative group cursor-pointer overflow-hidden">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] uppercase font-black text-gray-200 tracking-[0.2em]">New Car</span>
                  <div className="text-right">
                    <div className="text-[22px] font-black text-[#1a1a1c] tracking-tight">{car.price}</div>
                    {car.oldPrice && <div className="text-[11px] text-gray-200 line-through font-bold mt-1">{car.oldPrice}</div>}
                    {car.tag && <div className="inline-block text-[9px] text-[#6bcf50] font-black bg-[#6bcf50]/10 px-2.5 py-1 rounded-sm mt-1 uppercase tracking-tighter">{car.tag}</div>}
                  </div>
                </div>

                {car.discount && (
                  <div className="absolute top-24 right-10 w-14 h-14 bg-[#ff7b7b] rounded-full flex items-center justify-center text-white font-black text-[13px] shadow-lg shadow-red-100 z-10">
                    {car.discount}
                  </div>
                )}

                <div className="my-6 transform group-hover:translate-y-[-8px] transition-transform duration-500 ease-out">
                  <img src={car.image} className="w-full h-44 object-contain" alt={car.name} />
                </div>

                <div className="mb-10">
                  <h3 className="text-[18px] font-bold text-[#1a1a1c] leading-tight">
                    {car.name} <span className="text-[#6bcf50] ml-1">{car.year}</span>
                  </h3>
                </div>

                {/* Specs Grid: Exact 2x2 layout */}
                <div className="grid grid-cols-2 border-t border-gray-100 pt-8 gap-y-8">
                  {car.specs.map((spec, sIdx) => (
                    <div key={sIdx} className={sIdx % 2 === 0 ? "border-r border-gray-100 pr-4" : "pl-8"}>
                      <p className="text-[9px] uppercase text-gray-200 font-black mb-1.5 tracking-widest leading-none">{spec.label}</p>
                      <p className="text-[15px] font-black text-[#1a1a1c] leading-none tracking-tight">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* --- THIRD CARD: FORM + SPECS (MATCHES IMAGE) --- */}
            <div className="flex flex-col border-r border-b border-gray-100 h-full">

              {/* TOP PART: DARK FORM SECTION */}
              <div className="relative overflow-hidden bg-[#323238] px-6 flex flex-col justify-center items-center flex-grow min-h-[290px]">
                {/* Blurred Car Background */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none">
                  <img
                    src="/images/vehicle1.png"
                    alt="Background car"
                    className="w-full h-full object-contain opacity-20 blur-sm scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#323238]/40 via-transparent to-[#323238]"></div>
                </div>

                <h4 className="text-white text-center font-bold text-[16px] mb-4 leading-tight z-10 relative">
                  Learn more about the car
                </h4>

                <div className="w-full space-y-3 mb-6 z-10 relative">
                  <div className="relative">
                    <FiUser className="absolute left-18 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-3xs bg-white rounded-full py-3.5 pl-12 pr-6 text-gray-800 text-xs outline-none shadow-inner"
                    />
                  </div>
                  <div className="relative">
                    <FiPhone className="absolute left-18 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="+7 (___) ___-__-__"
                      className="w-3xs bg-white rounded-full py-3.5 pl-12 pr-6 text-gray-800 text-xs outline-none shadow-inner"
                    />
                  </div>
                </div>

                <button className="relative w-3xs py-4 bg-gradient-to-b from-[#94d95b] to-[#79b842] hover:from-[#9ee560] hover:to-[#86c74f] text-white rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 z-10 shadow-[0_8px_20px_-5px_rgba(121,184,66,0.4)] hover:shadow-[0_12px_25px_-6px_rgba(121,184,66,0.5)] active:scale-[0.98] active:shadow-[0_4px_12px_-3px_rgba(121,184,66,0.3)]">
                  Get Consultation
                </button>
              </div>

              {/* BOTTOM PART: WHITE SPEC SECTION */}
              <div className="bg-white p-10">
                <div className="mb-8">
                  <h3 className="text-[18px] font-bold text-[#1a1a1c] leading-tight">
                    Volkswagen Jetta GLI <span className="text-[#6bcf50] ml-1">2017</span>
                  </h3>
                </div>

                {/* Exact 2x2 grid to match other cards */}
                <div className="grid grid-cols-2 border-t border-gray-100 pt-8 gap-y-8">
                  <div className="border-r border-gray-100 pr-4">
                    <p className="text-[9px] uppercase text-gray-300 font-black mb-1.5 tracking-widest">engine volume</p>
                    <p className="text-[15px] font-black text-[#1a1a1c]">2.0 l tfsi</p>
                  </div>
                  <div className="pl-8">
                    <p className="text-[9px] uppercase text-gray-300 font-black mb-1.5 tracking-widest">power</p>
                    <p className="text-[15px] font-black text-[#1a1a1c]">221 hp</p>
                  </div>
                  <div className="border-r border-gray-100 pr-4">
                    <p className="text-[9px] uppercase text-gray-300 font-black mb-1.5 tracking-widest">transmission</p>
                    <p className="text-[15px] font-black text-[#1a1a1c]">6 speed DSG</p>
                  </div>
                  <div className="pl-8">
                    <p className="text-[9px] uppercase text-gray-300 font-black mb-1.5 tracking-widest">fuel type</p>
                    <p className="text-[15px] font-black text-[#1a1a1c]">Gasoline</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>
    </section>
  );
};

export default Lineup;