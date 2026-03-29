import React from 'react';

const Journey = () => {
  return (
    <section className="relative w-full bg-[#f5feff] pt-20 overflow-hidden font-sans">
      {/* 1. Header Area - Left Aligned */}
      <div className="max-w-[1400px] mx-auto pl-10 lg:pl-24 mb-36 text-left relative z-50">
        <h2 className="text-[#1a2b3c] text-4xl lg:text-[46px] font-bold leading-tight mb-2">
          Buy a car at a price below
        </h2>
        <h3 className="text-[#1a2b3c] text-3xl lg:text-[40px] font-light">
          official dealers, just as easy as one-two-three..
        </h3>
      </div>

      {/* 2. The Graph/Mountain Section */}
      <div className="relative max-w-[1700px] mx-auto min-h-[600px]">

        {/* Mountain Image (Your transparent version) */}
        <img
          src="/images/mountain1.png" // The same image file
          alt="Mountain peaks"
          className="absolute bottom-0 w-full h-auto object-contain z-40"
          style={{

            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 85%, transparent 100%)',
            maskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 85%, transparent 100%)',


            backgroundImage: `
      linear-gradient(to bottom, #f5feff 10%, transparent 40%, transparent 60%, #f5feff 90%),
      linear-gradient(rgba(245, 254, 255, 0.15), rgba(245, 254, 255, 0.15))
    `,
            backgroundSize: 'cover',
          }}
        />
        <svg
          className="absolute inset-0 w-full h-full z-50 pointer-events-none"
          viewBox="0 0 1400 700"
          preserveAspectRatio="none"
        >
          {/* The Jagged Trail - All X values increased by 100 to shift RIGHT 
      All Y values kept high with a gradual start at Dot 1 
  */}
          <path
            /* M212,420: Starting Dot 1 shifted right (112 + 100)
               Trail follows a jagged ridge pattern exactly like the reference images
            */
            d="M212,420 L300,410 L350,380 L380,345 L440,380 L520,245 L600,300 L700,250 L820,210 L912,185 L1000,230 L1120,200 L1248,50"
            fill="none"
            stroke="#74c34d"
            strokeWidth="5"
            strokeLinejoin="round"
            strokeLinecap="round"
            className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
          />

          {/* DOTS - Shifted Right to match the new path start/end points */}
          {/* Dot 1 - START (Shifted Right to 212) */}
          <circle cx="212" cy="420" r="9" fill="#74c34d" stroke="white" strokeWidth="3" />

          {/* Dot 2 - PEAK (Shifted Right to 520) */}
          <circle cx="520" cy="245" r="9" fill="#74c34d" stroke="white" strokeWidth="3" />

          {/* Dot 3 - RIDGE (Shifted Right to 912) */}
          <circle cx="912" cy="185" r="9" fill="#74c34d" stroke="white" strokeWidth="3" />

          {/* Dot 4 - SUMMIT (Shifted Right to 1248) */}
          <circle cx="1248" cy="50" r="9" fill="#74c34d" stroke="white" strokeWidth="3" />
        </svg>

        {/* 3. INTERACTIVE LABELS (Connecting to the dots) */}

        {/* Step 01 */}
        <div className="absolute left-[10%] top-[15%] z-50 flex flex-col items-center">
          <div className="mb-4 text-center max-w-[140px]">
            <p className="text-[#1a2b3c] text-[13px] font-medium leading-tight">
              Leave an application <br /> for car selection
            </p>
          </div>
          <div className="w-[1px] h-[135px] bg-[#74c34d]/30 mb-2" />
          <div className="w-8 h-8 rounded-full bg-[#74c34d] flex items-center justify-center text-[10px] font-bold text-white shadow-lg">/ 01</div>
        </div>

        {/* Step 02 */}
        <div className="absolute left-[30%] -top-[5%] z-50 flex flex-col items-center">
          <div className="mb-4 text-center max-w-[180px]">
            <p className="text-[#1a2b3c] text-[13px] font-medium leading-tight">
              Receive a consultation <br /> on the chosen car and purchase form.
            </p>
          </div>
          <div className="w-[1px] h-[120px] bg-[#74c34d]/30 mb-2" />
          <div className="w-8 h-8 rounded-full bg-[#74c34d] flex items-center justify-center text-[10px] font-bold text-white shadow-lg">/ 02</div>
        </div>

        {/* Step 03 */}
        <div className="absolute left-[58%] -top-[15%] z-50 flex flex-col items-center">
          <div className="mb-4 text-center max-w-[200px]">
            <p className="text-[#1a2b3c] text-[13px] font-medium leading-tight">
              Our expert will invite you <br /> to a demonstration of the selected car
            </p>
          </div>
          <div className="w-[1px] h-[95px] bg-[#74c34d]/30 mb-2" />
          <div className="w-8 h-8 rounded-full bg-[#74c34d] flex items-center justify-center text-[10px] font-bold text-white shadow-lg">/ 03</div>
        </div>

        {/* Step 04 */}
        <div className="absolute left-[82%] -top-[30%] z-50 flex flex-col items-center">
          <div className="mb-4 text-center max-w-[220px]">
            <p className="text-[#1a2b3c] text-[13px] font-medium leading-tight">
              Signing the contract and purchasing <br /> a new car with a benefit of 3-5%
            </p>
          </div>
          <div className="w-[1px] h-[80px] bg-[#74c34d]/30 mb-2" />
          <div className="w-8 h-8 rounded-full bg-[#74c34d] flex items-center justify-center text-[10px] font-bold text-white shadow-lg">/ 04</div>
        </div>
      </div>

      {/* 4. FOOTER AREA */}
      <div className="max-w-[1100px] mx-auto pl-10 lg:pl-56 flex flex-col md:flex-row items-center justify-between gap-12 mt-[-60px] relative z-50">

        {/* LEFT SIDE: Text and Button Group */}
        <div className="flex flex-col gap-8 max-w-md">
          <p className="text-[#1a2b3c] text-[16px] lg:text-[18px] font-medium leading-relaxed text-left">
            Every car comes with a factory warranty, depending on the make and brand.
          </p>

          <button className="group relative flex items-center justify-between bg-gradient-to-b from-[#94d65a] to-[#6eab38] hover:bg-[#66b142] text-white px-10 py-5 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_12px_20px_-8px_rgba(0,0,0,0.15),0_4px_8px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_25px_-10px_rgba(0,0,0,0.2)] active:scale-[0.98] w-fit">
            <span>Buy a new car</span>
            {/* Plane icon matching image_877486.png */}
            <svg className="ml-4 w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </div>

        {/* RIGHT SIDE: Floating Savings Box */}
        <div className="bg-[#f5feff] p-6 lg:p-8 rounded-[30px] border border-gray-50 flex flex-col items-start min-w-[320px] relative overflow-visible z-50">
          {/* Bottom Line Shadow */}
          <div className="absolute bottom-0 -left-2 -right-2 h-1 bg-black/10"></div>

          {/* Hidden Card Part Effect */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-black/5 blur-xl rounded-[100%]"></div>

          <span className="text-gray-400 text-[11px] uppercase tracking-[0.2em] font-bold mb-4 relative z-10">
            Minimal Savings
          </span>
          <div className="flex items-baseline gap-2 relative z-10">
            <span className="text-[#74c34d] text-[18px] font-bold uppercase">from</span>
            <span className="text-[#74c34d] text-[56px] lg:text-[72px] font-light leading-none tracking-tighter">
              30000
            </span>
            <span className="text-[#74c34d] text-[32px] font-bold ml-1">$</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;