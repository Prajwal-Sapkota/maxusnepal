import React from 'react';
import { IoPersonOutline, IoCallOutline } from 'react-icons/io5';

const Footer = () => {
    return (
        <div className="relative font-sans">
            {/* 1. CONTACT SECTION WITH MOUNTAIN BACKGROUND */}
            <section

                className="relative z-30 min-h-[600px] flex items-center justify-center bg-cover bg-center px-4 py-20"
                style={{
                    backgroundColor: '#f5feff',
                    backgroundImage: "url('/images/footerbg.png')",
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)',
                }}
            >
                {/* Frosted Glass Card */}
                <div className="relative z-50 w-full max-w-[1000px] bg-white/20 backdrop-blur-md rounded-[40px] p-8  shadow-2xl border border-white/30 overflow-visible">

                    <div className="max-w-[600px] px-12">
                        <h2 className="text-[#1a2b3c] text-[32px] font-medium mb-4 leading-tight text-left">
                            — Still have questions? Get a free consultation!
                        </h2>
                        <p className="text-[#1a2b3c]/70 text-[16px] mb-12 text-left">
                            A specialist will call you back within 3 minutes and answer your question
                        </p>

                        <form className="space-y-4 ">
                            <div className="flex flex-col md:flex-row gap-4">
                                {/* Name Input */}
                                <div className="relative flex-1">
                                    <IoPersonOutline className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-3xs h-[64px] pl-16 pr-6 bg-white rounded-full text-[#1a2b3c] focus:outline-none shadow-sm"
                                    />
                                </div>

                                {/* Phone Input */}
                                <div className="relative flex-1">
                                    <IoCallOutline className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                                    <input
                                        type="tel"
                                        placeholder="+7 (___) ___ - __ - __"
                                        className="w-3xs h-[64px] pl-16 pr-6 bg-white rounded-full text-[#1a2b3c] focus:outline-none shadow-sm"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className='relative flex items-start '>
                                <button className="h-[64px] w-3xs bg-gradient-to-b from-[#73b53a] to-[#96d65a] text-white rounded-full uppercase text-[13px] font-bold tracking-widest hover:bg-[#7bc74d] transition-all shadow-lg">
                                    Get a consultation
                                </button>
                            </div>

                            {/* Privacy Check */}
                            <div className="flex items-start gap-3 text-[12px] text-[#1a2b3c]/50 pt-4">
                                <div className="w-4 h-4 rounded-full border border-[#88d958] flex items-center justify-center mt-0.5">
                                    <div className="w-2 h-2 bg-[#88d958] rounded-full" />
                                </div>
                                <p>I give my consent to the processing of personal data</p>
                            </div>
                        </form>
                    </div>

                    <div className="absolute -right-[10%] -bottom-[10%] w-[65%] hidden lg:block select-none pointer-events-none transition-all duration-500">
                        <img
                            src="/images/footercar.png"
                            alt="Car branding"
                            className="w-full h-auto drop-shadow-[0_50px_50px_rgba(0,0,0,0.4)]"
                        />
                    </div>
                </div>
            </section>

            {/* 2. MAIN FOOTER DARK AREA */}
           <footer className="bg-[#1e2125] py-1 px-6 lg:px-24 border-t border-white/5">
  <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
    
    {/* Logo - Centered */}
    <div className="flex justify-center ">
      <div className="w-56 h-56 rounded-lg overflow-hidden">
        <img
          src="/images/logo2.png"
          alt="Fatcars Icon"
          className="w-full h-full object-contain"
        />
      </div>
    </div>

    {/* Address - Centered */}
    <div className="text-center">
      <span className="text-white/30 text-[11px] uppercase tracking-widest block mb-2">
        Showroom address:
      </span>
      <p className="text-white text-[16px] font-medium">Ufa, ul. Lenina 52</p>
      <span className="text-white/30 text-[11px] block mt-1">Mon-Fri: 10:00–19:00</span>
    </div>

    {/* Contact - Centered */}
    <div className="text-center ">
      <span className="text-white/30 text-[11px] uppercase tracking-widest block mb-2">
        For all questions:
      </span>
      <p className="text-white text-[20px] font-medium">+7 (987) 095-11-11</p>
      <span className="text-white/30 text-[11px] block mt-1">Mon-Fri: 10:00–19:00</span>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;