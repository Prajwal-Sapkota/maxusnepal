import React, { useState } from "react";
import { IoChevronBack, IoChevronForward, IoExpand } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = ({ vehicle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const galleryImages = vehicle.gallery?.length > 0 
    ? vehicle.gallery 
    : [
        { src: vehicle.image, title: "PRIMARY_CHASSIS", desc: "Front 45° Aerodynamic View" },
        { src: vehicle.detailImage, title: "OPTIC_DETAIL", desc: "Matrix LED Hardware Analysis" },
        { src: vehicle.interiorImage, title: "COCKPIT_CORE", desc: "Driver-Centric Interface" },
      ];

  const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  const nextIndex = (currentIndex + 1) % galleryImages.length;

  const nextSlide = () => setCurrentIndex(nextIndex);
  const prevSlide = () => setCurrentIndex(prevIndex);

  const openFullscreen = (image) => {
    setFullscreenImage(image);
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenImage(null);
    document.body.style.overflow = 'auto';
  };

  // Side Card Component - Peeking from sides
  const SideCard = ({ position, data }) => (
    <div className={`absolute ${position === 'left' ? 'left-0 -translate-x-[55%] lg:-translate-x-[65%]' : 'right-0 translate-x-[55%] lg:translate-x-[65%]'} 
      z-10 w-[400px] sm:w-[500px] lg:w-[600px] h-[280px] sm:h-[320px] lg:h-[400px] bg-[#1a2b3c] rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] opacity-40 scale-[0.85] 
      hidden md:flex items-center justify-center p-4 sm:p-6 lg:p-8 pointer-events-none border border-white/10 transition-all duration-500`}>
      <img src={data.src} alt="" className="w-full h-full object-cover rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] grayscale opacity-60" />
    </div>
  );

  return (
    <>
      <section className="bg-[#f5feff] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 font-sans relative overflow-hidden">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-gray-500 text-xs sm:text-sm md:text-3xl mt-2">Explore every angle of precision engineering</p>
        </div>

        <div className="relative flex items-center justify-center max-w-[1600px] mx-auto h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] xl:h-[700px]">

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide} 
            className="absolute left-[5%] sm:left-[8%] lg:left-[12%] xl:left-[15%] z-50 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-[60px] xl:h-[60px] bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#1a2b3c] shadow-lg hover:bg-[#74c34d] hover:text-white hover:border-[#74c34d] transition-all duration-300"
          >
            <IoChevronBack size={20} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>

          <div className="relative flex items-center justify-center w-full h-full">

            {/* Side Cards - Peeking from left and right */}
            <SideCard position="left" data={galleryImages[prevIndex]} />
            <SideCard position="right" data={galleryImages[nextIndex]} />

            {/* ACTIVE CENTER GROUP */}
            <div className="relative z-30 flex items-center justify-center w-[85%] sm:w-[90%] md:w-[95%] lg:w-[900px] h-[380px] sm:h-[420px] md:h-[460px] lg:h-[500px] xl:h-[600px]">

              {/* Back wide card decorative layer */}
              <div className="absolute z-10 w-full h-[85%] bg-[#1a2b3c]/80 rounded-[32px] sm:rounded-[40px] lg:rounded-[48px] shadow-xl" />

              {/* Front main card */}
              <div className="relative z-20 w-[95%] sm:w-[92%] md:w-[90%] lg:w-[850px] h-full bg-white rounded-[32px] sm:rounded-[40px] lg:rounded-[48px] shadow-[0_30px_60px_rgba(0,0,0,0.1)] lg:shadow-[0_50px_100px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="relative w-full h-full"
                  >
                    {/* FULL CENTER IMAGE */}
                    <div className="relative w-full h-full overflow-hidden">
                      <img 
                        src={galleryImages[currentIndex].src} 
                        className="w-full h-full object-cover" 
                        alt="Vehicle" 
                      />
                      
                      {/* Dark Gradient Overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Bottom Info Panel */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
                        <p className="text-white text-base sm:text-lg md:text-xl font-bold uppercase tracking-tighter">
                          {galleryImages[currentIndex].title || "VIEW"}
                        </p>
                        
                        <button 
                          onClick={() => openFullscreen(galleryImages[currentIndex])}
                          className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4 group/btn text-white/80 hover:text-[#74c34d] transition-colors"
                        >
                          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover/btn:bg-[#74c34d] transition-all">
                            <IoExpand size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                          </div>
                          <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest">View Full Screen</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Decorative Corner Elements */}
                <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-l-2 border-t-2 border-[#74c34d]/40 pointer-events-none z-30" />
                <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-r-2 border-b-2 border-[#74c34d]/40 pointer-events-none z-30" />
              </div>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button 
            onClick={nextSlide} 
            className="absolute right-[5%] sm:right-[8%] lg:right-[12%] xl:right-[15%] z-50 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-[60px] xl:h-[60px] bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#1a2b3c] shadow-lg hover:bg-[#74c34d] hover:text-white hover:border-[#74c34d] transition-all duration-300"
          >
            <IoChevronForward size={20} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>
        </div>

        {/* Counter and Indicators */}
        <div className="flex flex-col items-center mt-8 sm:mt-10 md:mt-12">
          <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
            <span className="text-[#1a2b3c] text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter">
              {(currentIndex + 1).toString().padStart(2, '0')}
            </span>
            <div className="w-8 sm:w-10 md:w-12 h-px bg-gray-300" />
            <span className="text-gray-300 text-xl sm:text-2xl md:text-3xl font-light">
              {galleryImages.length.toString().padStart(2, '0')}
            </span>
          </div>
          
          {/* Indicator Dots */}
          <div className="mt-4 sm:mt-5 md:mt-6 flex gap-1.5 sm:gap-2">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  currentIndex === idx 
                    ? "w-6 sm:w-7 md:w-8 bg-[#74c34d]" 
                    : "w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && fullscreenImage && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-lg flex items-center justify-center cursor-pointer"
          onClick={closeFullscreen}
        >
          <button 
            onClick={closeFullscreen}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative max-w-[95vw] max-h-[95vh]">
            <img 
              src={fullscreenImage.src} 
              alt={fullscreenImage.title || "Gallery Image"}
              className="max-w-full max-h-[95vh] w-auto h-auto object-contain"
            />
            {fullscreenImage.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-xl font-bold uppercase tracking-tighter">
                  {fullscreenImage.title}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;