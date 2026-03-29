import React from 'react';
import { FiPhone, FiSend } from "react-icons/fi";

const Snippet = ({ label, value, border }) => (
    <div className={`px-6 ${border ? 'border-l border-white/10' : 'pl-0'}`}>
        <span className="text-white block mb-2 text-[11px] font-bold uppercase tracking-wider">
            {label}
        </span>
        <p className="text-gray-400 text-[10px] uppercase tracking-widest">
            {value}
        </p>
    </div>
);

const BrandDNA = () => {
    return (
        <section className="relative w-full min-h-[900px] flex items-center overflow-hidden font-sans bg-[#f2fbfc]">

            {/* 1. WATERMARK - Removed uppercase as requested */}
            <div className="absolute top-0 left-0 w-full flex justify-center pt-12 pointer-events-none z-10 overflow-hidden">
                <span className="text-[22vw] font-black text-black/[0.04] leading-none select-none tracking-tighter">
                    fatcars
                </span>
            </div>

            {/* 2. BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url('/images/brandbg.png')`,
                    backgroundPosition: 'center 40%'
                }}
            >
                <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-[#f2fbfc] via-[#f2fbfc]/80 to-transparent z-10" />
            </div>

            {/* 3. THE "15" - Positioned more reliably behind the vehicle */}
            <div className="absolute bottom-[1%] right-[40%] z-20 pointer-events-none">
                <div className="relative flex items-baseline gap-4">
                    <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[120%] h-20 bg-black/40 blur-[60px] rounded-[100%] pointer-events-none" />
                    <span className="relative text-[180px] lg:text-[220px] font-black leading-none tracking-tighter text-white drop-shadow-[0_20px_15px_rgba(0,0,0,0.5)]">
                        15
                    </span>
                    <div className="text-white uppercase font-black text-[10px] tracking-[0.4em] max-w-[100px] mb-8 leading-tight">
                        minutes for  car selection
                    </div>
                </div>
            </div>

            {/* 4. PINNED VEHICLE */}
            <div className="absolute right-6 bottom-10 w-[50vw] max-w-[950px] z-40 pointer-events-none translate-x-[5%] translate-y-[5%]">
                <img
                    src="/images/brandcar.png"
                    alt="Land Rover"
                    className="w-full h-auto drop-shadow-[0_45px_100px_rgba(0,0,0,0.6)]"
                />

                <div className="absolute top-[35%] left-[25%] w-3 h-3 bg-[#6bcf50] rounded-full shadow-[0_0_20px_#6bcf50] animate-pulse" />
                <div className="absolute top-[55%] left-[70%] w-3 h-3 bg-[#6bcf50] rounded-full shadow-[0_0_20px_#6bcf50] animate-pulse" />
            </div>

            {/* 5. GROUND SHADOW */}

            {/* 6. MAIN CONTENT */}
            <div className="max-w-[1440px] mx-auto pl-10 lg:pl-28 pt-82 relative z-50 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                    <div className="text-white text-left">
                        <h2 className="text-4xl lg:text-[52px] font-light mb-6 leading-[1.15] tracking-tight">
                            Didn't find the right car?
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-300 font-light mb-16 italic opacity-90">
                            — Order a free selection at FatCars
                        </p>

                        <div className="grid grid-cols-3 gap-0 mb-16 max-w-xl">
                            <Snippet label="Consultant Call" value="within 3 minutes" />
                            <Snippet label="Stock Check" value="real-time availability" border />
                            <Snippet label="Custom Order" value="if not in stock" border />
                        </div>

                        <div className="max-w-[420px] space-y-5">
                            <button className="w-xs bg-white/10 backdrop-blur-md border border-white/10 rounded-full py-5 px-8 text-white flex items-center gap-4 hover:bg-white/20 transition-all group">
                                <FiPhone className="text-gray-400 group-hover:text-[#6bcf50] transition-colors" />
                                <span className="text-lg font-light tracking-wider opacity-90">
                                    +7 (921) 123-45-67
                                </span>
                            </button>
                            <button className="w-full max-w-[320px] bg-gradient-to-b from-[#92d950] to-[#71b536] hover:from-[#9ee560] hover:to-[#7fc240] text-white py-5 px-8 rounded-full text-[12px] font-black uppercase tracking-[0.25em] flex items-center justify-center gap-3 shadow-[0_15px_25px_-8px_rgba(107,207,80,0.4)] hover:shadow-[0_20px_30px_-8px_rgba(107,207,80,0.5)] active:scale-[0.98] transition-all duration-300 group">
                                <span>Contact a Consultant</span>
                                <FiSend className="text-[16px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandDNA;