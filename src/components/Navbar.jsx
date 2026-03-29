import React from 'react';
import { IoCall, IoApps } from "react-icons/io5"; // Importing both from Ionicons 5
import Logo from '../../public/images/logo.png';

const Navbar = () => {
  return (
    <nav className="absolute top-0 -left-3 w-full z-20 flex items-start justify-between px-10  bg-transparent">
      {/* --- Top Left: Logo --- */}
      <div className="flex items-center">
        <img 
          src={Logo} 
          alt="FatCars Logo" 
          className="w-32 h-32 lg:w-54 lg:h-32 object-contain" 
        />
      </div>

      {/* --- Right Side: Contact & 9-Dot Menu --- */}
      <div className="flex items-start gap-6 lg:gap-10 pt-12">
        {/* Contact Info Group */}
        <div className="hidden md:flex flex-col items-end text-white">
          <a 
            href="tel:+79870951111" 
            className="flex items-center gap-2 hover:text-[#6bcf50] transition-all duration-300 group"
          >
            <IoCall className="text-md text-white/70 group-hover:text-[#6bcf50] transition-colors" />
            <span className="text-lg lg:text-xl font-bold tracking-tight">
              +7 (987) 095-11-11
            </span>
          </a>

          <button className="text-[9px] font-bold tracking-[0.2em] border-b border-white/20 hover:border-[#6bcf50] hover:text-[#6bcf50] transition-all uppercase mt-1 opacity-80">
            Request a call
          </button>
        </div>
        
        {/* --- 9-Dot Grid Menu Icon --- */}
        <button className="text-white hover:text-[#6bcf50] transition-colors  outline-none">
          {/* IoApps provides the exact 3x3 circular dot grid */}
          <IoApps size={28} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;