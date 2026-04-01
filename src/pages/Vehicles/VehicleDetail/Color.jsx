import React, { useState, useEffect } from 'react';

const Color = React.forwardRef(({ vehicle, selectedColor, setSelectedColor }, ref) => {
  const [isChanging, setIsChanging] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsChanging(true);
    setImageLoaded(false);
    
    // Get the image for selected color
    const colorImage = vehicle.colorImages?.[selectedColor];
    const fallbackImage = vehicle.detailImage || vehicle.image;
    setCurrentImage(colorImage || fallbackImage);
    
    const timer = setTimeout(() => setIsChanging(false), 500);
    return () => clearTimeout(timer);
  }, [selectedColor, vehicle]);

  // Light studio background that blends with #f5feff
  const studioBackground = "/images/gallerybg.png";

  return (
    <section ref={ref} id="color" className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] bg-[#f5feff] overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-24">
      
      {/* Background Texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent opacity-50" />
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `radial-gradient(#74c34d 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px sm:40px 40px' }} />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 xl:gap-24 items-center">
          
          {/* LEFT: CONTROL PANEL */}
          <div className="lg:col-span-4 space-y-8 sm:space-y-10 md:space-y-12">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1a2b3c] leading-[0.9] sm:leading-[0.85] tracking-tighter uppercase">
                Define Your <br/> <span className="text-[#74c34d]">Aesthetic_</span>
              </h2>
            </div>

            {/* Color Swatches - Enhanced for better visibility */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <p className="text-gray-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                Select External Finish // {vehicle.colors.length}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {vehicle.colors.map((color) => {
                  // Add a subtle border for white color to make it visible
                  const isWhite = color === "#FFFFFF" || color === "#ffffff" || color === "white";
                  return (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className="relative group focus:outline-none"
                    >
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full transition-all duration-500 transform 
                        ${selectedColor === color ? 'ring-2 ring-[#74c34d] ring-offset-2 scale-110' : 'hover:scale-110'}`}
                        style={{ 
                          backgroundColor: color,
                          boxShadow: isWhite ? 'inset 0 0 0 1px rgba(0,0,0,0.1)' : 'none'
                        }}
                      />
                      <span className="absolute -bottom-6 sm:-bottom-7 md:-bottom-8 left-1/2 -translate-x-1/2 bg-[#1a2b3c] text-white text-[7px] sm:text-[8px] font-black px-1.5 sm:px-2 py-0.5 sm:py-1 opacity-0 group-hover:opacity-100 transition-opacity uppercase whitespace-nowrap z-20 rounded-full">
                        {vehicle.colorNames?.[color] || "Finish"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Technical Readout */}
            <div className="p-4 sm:p-6 md:p-8 bg-white/80 backdrop-blur-sm border border-[#74c34d]/20 relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#74c34d]/20">
                <div className="h-full bg-[#74c34d] w-1/3 animate-scan-slow" />
              </div>
              <div className="flex justify-between items-start relative z-10 gap-3 sm:gap-4">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase italic tracking-tighter text-[#1a2b3c]">
                    {vehicle.colorNames?.[selectedColor] || "Metallic Custom"}
                  </h3>
                  <p className="text-gray-400 text-[8px] sm:text-[9px] uppercase tracking-widest mt-1 sm:mt-2 font-bold">
                    Reflectivity: High-Gloss // Grade A
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[#74c34d] text-base sm:text-lg md:text-xl font-black leading-none">{vehicle.price}</p>
                  <p className="text-gray-400 text-[7px] sm:text-[8px] uppercase font-bold mt-1">MSRP Unit</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT: LIGHT STUDIO VEHICLE CONTAINER */}
          <div className="lg:col-span-8 relative mt-8 sm:mt-10 lg:mt-0">
            {/* Light Halo Effect - Soft Green */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#74c34d]/8 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />

            {/* Uniform Container - Light Studio Environment */}
            <div className="relative bg-white/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-white/60">
              
              {/* Studio Background Image - Light and Airy */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={studioBackground}
                  alt="Studio Background"
                  className="w-full h-full object-cover opacity-30"
                />
                {/* Light Gradient Overlay - Keeps it bright */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-[#f5feff]/30" />
                {/* Soft Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.04]" 
                     style={{ backgroundImage: `linear-gradient(#74c34d 1px, transparent 1px), linear-gradient(90deg, #74c34d 1px, transparent 1px)`, backgroundSize: '40px 40px sm:50px 50px' }} />
              </div>
              
              {/* Vehicle Display Area */}
              <div className="relative aspect-[16/9] w-full flex items-center justify-center p-4 sm:p-6 md:p-8 z-10">
                
                {/* Soft Ambient Light */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#74c34d]/5 blur-[80px] sm:blur-[100px] rounded-full" />
                
                {/* Floating Shadow - Light and subtle */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[30%] bg-gradient-to-t from-black/15 via-black/5 to-transparent rounded-full blur-xl sm:blur-2xl" />

                {/* Vehicle Image with Transition */}
                <div className={`relative z-20 w-full h-full flex items-center justify-center transition-all duration-700 transform 
                  ${isChanging ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                  
                  <img 
                    key={selectedColor}
                    src={currentImage}
                    alt={`${vehicle.name} - ${vehicle.colorNames?.[selectedColor] || selectedColor}`}
                    className={`max-w-full max-h-full w-auto h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)] sm:drop-shadow-[0_30px_50px_rgba(0,0,0,0.15)] transition-opacity duration-300
                      ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImageLoaded(true)}
                    onError={(e) => {
                      if (e.target.src !== vehicle.image) {
                        e.target.src = vehicle.image;
                      }
                    }}
                  />
                </div>

                {/* Loading Skeleton */}
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center z-30">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-2 border-[#74c34d]/30 border-t-[#74c34d] rounded-full animate-spin" />
                  </div>
                )}

                {/* HUD Elements - Light and Elegant */}
                <div className="absolute inset-0 border border-[#74c34d]/15 pointer-events-none rounded-2xl sm:rounded-3xl z-30">
                  <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-[#74c34d]/30 to-transparent" />
                  <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-[#74c34d]/30 to-transparent" />
                  <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-[#74c34d]/30 to-transparent" />
                  <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-[#74c34d]/30 to-transparent" />
                  
                  {/* Corner brackets - Soft Green */}
                  <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 border-l-2 border-t-2 border-[#74c34d]/40" />
                  <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 border-r-2 border-t-2 border-[#74c34d]/40" />
                  <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 border-l-2 border-b-2 border-[#74c34d]/40" />
                  <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 border-r-2 border-b-2 border-[#74c34d]/40" />
                </div>

                {/* Top Lighting Effect - Soft */}
                <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 md:h-24 bg-gradient-to-b from-white/20 to-transparent pointer-events-none z-30" />
              </div>

              {/* Ground Reflection Plate - Light */}
              <div className="relative z-10 h-12 sm:h-14 md:h-16 w-full overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-100/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#74c34d]/40 to-transparent" />
                
                {/* Subtle reflection */}
                <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 w-[50%] h-4 sm:h-6 bg-gradient-to-t from-black/10 to-transparent blur-md rounded-full" />
              </div>
            </div>

            {/* Color Info Badge - Light Theme */}
            <div className="absolute -bottom-3 sm:-bottom-4 left-0 bg-white/80 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#74c34d]/20 shadow-sm z-20">
              <p className="text-gray-500 text-[7px] sm:text-[8px] font-mono uppercase tracking-wider whitespace-nowrap">
                CURRENT_CONFIG: <span className="text-[#74c34d] font-bold">{vehicle.colorNames?.[selectedColor] || "Metallic"}</span>
              </p>
            </div>

            {/* Floating Spec Tag - Hidden on mobile */}
            <div className="absolute top-1/2 -right-4 sm:-right-6 md:-right-8 -translate-y-1/2 bg-white shadow-lg rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border-l-4 border-[#74c34d] z-20 hidden md:block">
              <p className="text-[7px] sm:text-[8px] text-gray-400 uppercase tracking-wider">Premium</p>
              <p className="text-[8px] sm:text-[10px] font-bold text-[#1a2b3c]">Metallic Finish</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan-slow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        .animate-scan-slow {
          animation: scan-slow 3s linear infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
});

Color.displayName = 'Color';

export default Color;