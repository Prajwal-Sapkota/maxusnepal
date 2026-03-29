import React from 'react';
import { FiChevronRight } from "react-icons/fi";

const Intro = () => {
  return (
    <section className="relative w-full bg-[#f5feff] py-20 lg:py-32 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-10 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-0">

          {/* --- LEFT COLUMN: Branding & Anniversary --- */}
          <div className="lg:col-span-7 relative">
            <div className="flex items-center gap-6 mb-10">
              <div className="flex items-baseline">
                <span className="text-8xl font-black text-[#1a1a1c] tracking-tighter">fatcars</span>
                <div className="ml-1 w-8 h-8 bg-[#6bcf50] rounded-full flex items-center justify-center text-[10px] font-black text-[#1a1a1c]">
                  .ru
                </div>
              </div>
              <span className="text-2xl font-light text-gray-400 tracking-[0.2em] pl-14"> — IS</span>
            </div>

            <p className="text-gray-400 text-sm max-w-xs leading-relaxed mb-16 text-left">
              A civilized market for new cars <br /> and pre-owned cars in Ufa
            </p>

            <div className="relative h-[320px]">
              <div
                className="absolute -top-4 -left-10 text-[320px] font-black leading-none select-none pointer-events-none opacity-80 text-transparent"
                style={{
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  backgroundColor: '#cce3f0',

                  // Layered background with nicer technical shapes
                  backgroundImage: `
      linear-gradient(rgba(204, 227, 240, 0.75), rgba(204, 227, 240, 0.75)),
      url("data:image/svg+xml,%3Csvg width='280' height='280' viewBox='0 0 280 280' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%237da0b5' stroke-width='3.5' stroke-opacity='0.7'%3E%3C!-- Rounded hexagon --%3E%3Cpath d='M70 40 L100 25 L130 40 L130 70 L100 85 L70 70 Z' /%3E%3C!-- Double rectangle with rotation --%3E%3Crect x='160' y='30' width='45' height='75' rx='12' transform='rotate(12 182 67)' /%3E%3Crect x='165' y='40' width='35' height='55' rx='8' transform='rotate(12 182 67)' /%3E%3C!-- Circle with inner pattern --%3E%3Ccircle cx='220' cy='180' r='28' /%3E%3Ccircle cx='220' cy='180' r='15' stroke-dasharray='4 3' /%3E%3C!-- Modern abstract shape --%3E%3Cpath d='M35 150 L65 135 L95 150 L85 185 L45 185 Z' /%3E%3C!-- Crosshair element --%3E%3Cpath d='M195 225 L235 225 M215 205 L215 245' stroke-width='3' /%3E%3C!-- Rounded square with inset --%3E%3Crect x='10' y='195' width='48' height='48' rx='12' /%3E%3Crect x='18' y='203' width='32' height='32' rx='6' stroke-width='2.5' /%3E%3C!-- Diagonal line pattern --%3E%3Cpath d='M245 85 L270 110 M250 95 L275 120' stroke-width='2.5' stroke-dasharray='5 3' /%3E%3C!-- Small geometric dots --%3E%3Ccircle cx='50' cy='30' r='6' /%3E%3Ccircle cx='180' cy='220' r='5' /%3E%3Ccircle cx='95' cy='185' r='7' /%3E%3Ccircle cx='250' cy='165' r='5.5' /%3E%3Ccircle cx='25' cy='110' r='4.5' /%3E%3C/g%3E%3C/svg%3E")
    `,
                  backgroundSize: 'cover, 280px 280px',
                  backgroundRepeat: 'no-repeat, repeat',
                }}
              >
                10
              </div>

              <div className="relative z-10 pt-12 pl-48">
                <h2 className="text-5xl font-bold text-[#1a1a1c] leading-none">years</h2>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mt-4">
                  presence in the auto market
                </p>
              </div>

              {/* THE CAR: Increased Z-index and width to bleed into the grid */}
              <div className="absolute top-30 left-0 z-40 w-[130%] max-w-none">
                <img
                  src="/images/introcar.png"
                  alt="Tesla"
                  className="w-full relative z-10"
                />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-black/10 blur-2xl rounded-[100%] z-0"></div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: SERVICE GRID --- */}
          {/* Removed background color here to prevent covering the car */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-0 relative z-40 border-t  border-gray-100">

            {/* 01: Sales */}
            <div className="bg-white p-6 border-b border-r border-gray-100 flex flex-col justify-between h-[150px] relative overflow-hidden">
              <div>
                <h4 className="text-[12px] font-bold text-[#1a1a1c] mb-2 uppercase leading-tight text-left">
                  Sale of cars <br /> in stock with Title
                </h4>
                <p className="text-[10px] text-gray-400 leading-snug text-left">
                  More than 100 new cars in stock with Title and over 100 pre-owned cars.
                </p>
              </div>
              <span className="absolute -bottom-2 right-6 text-5xl text-gray-400/50 translate-x-1/4 translate-y-1/4">
                01
              </span>
            </div>

            {/* 02: Commission */}
            <div className="bg-[#1a1a1c] p-6 border-b border-gray-100 flex flex-col justify-between h-[150px] relative overflow-hidden">
              <div>
                <h4 className="text-[12px] font-bold text-white mb-2 uppercase leading-tight text-left">
                  Free listing of <br /> cars for commission
                </h4>
                <p className="text-[10px] text-gray-500 leading-snug text-left">
                  Fast sale of your car — in average from 3 to 23 days.
                </p>
              </div>
              <span className="absolute -bottom-2 right-6 text-5xl text-white/20 translate-x-1/4 translate-y-1/4">
                02
              </span>
            </div>

            {/* 03: Trade-In */}
            <div className="bg-[#cce3f0] p-6 border-b border-r border-gray-100 flex flex-col justify-between h-[150px] relative overflow-hidden">
              <div>
                <h4 className="text-[12px] font-bold text-[#1a1a1c] mb-2 uppercase leading-tight text-left">
                  Adequate TRADE-IN <br /> or car buyout
                </h4>
                <p className="text-[10px] text-gray-500 leading-snug text-left">
                  We honestly evaluate your car based on objective criteria.
                </p>
              </div>
              <span className="absolute -bottom-2 right-6 text-5xl text-gray-300/50 translate-x-1/4 translate-y-1/4">
                03
              </span>
            </div>

            {/* 04: Credit */}
            <div className="bg-white p-6 border-b border-gray-100 flex flex-col justify-between h-[150px] relative overflow-hidden">
              <div>
                <h4 className="text-[12px] font-bold text-[#1a1a1c] mb-2 uppercase leading-tight text-left">
                  Purchase of a car <br /> on credit
                </h4>
                <p className="text-[10px] text-gray-400 leading-snug text-left">
                  Convenient loan application in one place without down payment.
                </p>
              </div>
              <span className="absolute -bottom-2 right-6 text-5xl text-gray-400/50 translate-x-1/4 translate-y-1/4">
                04
              </span>
            </div>

            {/* 05: THE EMPTY SPACE (Window for the Car) */}
            <div className="h-[150px] bg-transparent pointer-events-none"></div>

            {/* 06: Pricing */}
            <div className="bg-[#6bcf50] p-6 border-b border-gray-100 flex flex-col justify-between h-[150px] group cursor-pointer hover:bg-[#5dbd44] transition-all relative overflow-hidden">
              <div>
                <h4 className="text-[11px] font-bold text-white mb-2 uppercase leading-tight text-left">
                  The cost of new cars <br /> is below dealer prices by
                </h4>
                <div className="flex items-center justfy-center text-white">
                  <FiChevronRight className="text-4xl -ml-2 group-hover:translate-x-1 transition-transform" />
                  <span className="text-7xl font-black tracking-tighter">3-5%</span>
                </div>
              </div>
              <span className="absolute -bottom-2 right-6 text-5xl text-white/20 translate-x-1/4 translate-y-1/4">
                05
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;