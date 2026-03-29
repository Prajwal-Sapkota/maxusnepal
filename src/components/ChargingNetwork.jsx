import React from 'react';

const ChargingNetwork = () => {
  return (
    <section className="relative w-full bg-[#f5ffff] font-sans py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto pl-10 lg:pl-24">

        {/* CENTERED HEADING */}
        <div className="text-center ">
          <h2 className="text-[#1a2b3c] text-4xl lg:text-[42px] font-bold leading-tight mb-4">
            Trade-in or express car buyout —
          </h2>
          <h3 className="text-[#1a2b3c] text-3xl lg:text-[38px] font-light">
            with common sense!
          </h3>
        </div>

        {/* FLEX CONTAINER FOR CONTENT */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-24">

          {/* LEFT CONTENT */}
          <div className="lg:w-[40%] z-30">
            <div className="space-y-12">
              {[
                { num: "01", text: "By paying the difference in price, you can exchange your car for a new one under the 'Trade-in' program. Or use the express buyout service and receive cash within 45 minutes of application." },
                { num: "02", text: "Car appraisal is based on objective criteria. According to statistics, the appraisal value at FatCars is 7-9% higher than market offers." },
                { num: "03", text: "We guarantee the legal purity of the transaction at all stages of registration." }
              ].map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  <span className="text-[#d9e2e9] text-[48px] font-bold leading-none transition-colors group-hover:text-[#74c34d]">{step.num}</span>
                  <p className="text-[#7c8b9a] text-[14px] leading-relaxed pt-2">{step.text}</p>
                </div>
              ))}
            </div>

            <button className="mt-16 flex items-center gap-3 text-[#1a2b3c] font-bold text-[14px] hover:text-[#74c34d] transition-colors border-b border-[#8fc758] pb-1 uppercase tracking-wider">
              <span className="bg-[#74c34d]/10 p-2 rounded-md">📈</span>
              Appraise car in 3 clicks
            </button>
          </div>

          {/* RIGHT CONTENT - CAR VISUAL */}
          <div className="lg:w-[50%] relative flex justify-end items-end h-[600px]">

            {/* LAYER 1: The Left Half of the Car (BEHIND the circle) */}
            <div className="absolute right-0 w-[120%] max-w-[650px] z-0 pointer-events-none">
              <img
                src="/images/cover.png"
                alt=""
                className="w-full h-auto ml-auto"
                style={{ clipPath: 'inset(0 50% 0 0)' }} // Only shows the LEFT 50%
              />
            </div>

            {/* LAYER 2: The Big Green Circle */}
            <div className="relative w-[550px] h-[550px] rounded-full border-[40px] border-[#74c34d] flex items-center justify-center z-10 mr-0">

              {/* Floating Labels (Z-30 to stay above everything) */}
              <div className="absolute top-[20%] -left-10 bg-white shadow-xl px-4 py-2 rounded-sm text-[10px] font-bold text-[#1a2b3c] border-l-4 border-[#74c34d] z-30">
                EXCHANGE IN 1 HOUR
              </div>
              <div className="absolute top-[40%] -right-16 bg-white shadow-xl px-4 py-2 rounded-sm text-[10px] font-bold text-[#1a2b3c] border-l-4 border-[#74c34d] z-30">
                ADDITIONAL BENEFITS
              </div>
              <div className="absolute bottom-[20%] -left-16 bg-white shadow-xl px-4 py-2 rounded-sm text-[10px] font-bold text-[#1a2b3c] border-l-4 border-[#74c34d] z-30">
                VALUATION ABOVE MARKET
              </div>
            </div>

            {/* LAYER 3: The Right Half of the Car (IN FRONT of the circle) */}
            <div className="absolute right-0 w-[120%] max-w-[650px] z-20 pointer-events-none">
              <img
                src="/images/cover.png"
                alt="Covered Car"
                className="w-full h-auto ml-auto"
                style={{ clipPath: 'inset(0 0 0 50%)' }} // Only shows the RIGHT 50%
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChargingNetwork;