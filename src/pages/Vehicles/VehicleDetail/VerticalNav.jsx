// components/VehicleDetail/VerticalNav.jsx
import React, { useEffect, useState } from 'react';
import { FiHome, FiZap, FiStar, FiCpu, FiSettings, FiImage } from 'react-icons/fi';

const VerticalNav = ({ activeSection, scrollToSection, sections }) => {
  const [mounted, setMounted] = useState(false);
  
  const sectionIcons = {
    hero: FiHome,
    specs: FiZap,
    features: FiStar,
    technology: FiCpu,
    customize: FiSettings,
    gallery: FiImage
  };

  const handleClick = (section) => {
    if (scrollToSection && section.ref && section.ref.current) {
      scrollToSection(section.ref, section.id);
    } else {
      const element = document.getElementById(section.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    setMounted(true);
  }, [sections]);

  if (!mounted) return null;

  return (
    <>
      {/* Desktop Version - Hidden on mobile */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block pl-2 transition-all duration-500">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#74c34d]/30 to-transparent" />
          
          {/* Navigation Items */}
          <div className="relative flex flex-col gap-6 py-12">
            {sections.map((section, idx) => {
              const Icon = sectionIcons[section.id];
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => handleClick(section)}
                  className="group relative flex items-center transition-all duration-300 hover:translate-x-1"
                  aria-label={`Navigate to ${section.label}`}
                >
                  {/* Active Indicator Dot */}
                  {isActive && (
                    <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-[#74c34d] rounded-full shadow-[0_0_10px_#74c34d] animate-pulse" />
                  )}
                  
                  {/* Icon Circle */}
                  <div className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive ? 'bg-[#74c34d] text-white shadow-lg shadow-[#74c34d]/30' : 'bg-white text-gray-400 hover:text-[#74c34d] hover:shadow-md'
                  }`}>
                    <Icon size={18} />
                  </div>
                  
                  {/* Label - ONLY SHOWS ON HOVER */}
                  <div className="absolute left-14 whitespace-nowrap text-[10px] font-bold uppercase tracking-wider transition-all duration-300 opacity-0 group-hover:opacity-100 text-gray-700">
                    {section.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Version - Compact Horizontal Bar at Bottom */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden">
        <div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200 px-3 py-2 flex items-center gap-2">
          {sections.map((section) => {
            const Icon = sectionIcons[section.id];
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => handleClick(section)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#74c34d] text-white shadow-md' 
                    : 'text-gray-500 hover:text-[#74c34d] hover:bg-gray-100'
                }`}
                aria-label={`Navigate to ${section.label}`}
              >
                <Icon size={14} />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default VerticalNav;