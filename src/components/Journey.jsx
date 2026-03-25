import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FiArrowRight, FiCompass, FiStar, FiNavigation, FiUser, FiPhone, FiMapPin } from "react-icons/fi";

const Journey = () => {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 1.08]),
    { stiffness: 35, damping: 22 }
  );
  
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0, 1, 1, 0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const isMobile = windowWidth < 768;

  return (
    <section ref={containerRef} className="relative h-[70vh] min-h-[550px] md:min-h-[600px] w-full overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ scale: imageScale }} className="w-full h-full">
          <img 
            src="/images/journey.jpg"
            alt="Himalayan Journey"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        
        {/* TOP BLEND */}
        <div className="absolute top-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-b from-[#F8F6F2] to-transparent" />
        
        {/* MODERN GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* GOLDEN ACCENT LIGHT */}
        <motion.div
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-[#C7A86D]/20 via-transparent to-transparent"
        />
        
        {/* MODERN GRID OVERLAY */}
        <div className="absolute inset-0 bg-[url('/images/grid-light.png')] opacity-10" />
      </div>

      {/* FLOATING PARTICLES - Reduced on mobile */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {[...Array(isMobile ? 15 : 30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
            animate={{ y: ["0%", "-20%"], opacity: [0, 0.2, 0] }}
            transition={{ duration: Math.random() * 10 + 8, repeat: Infinity, ease: "linear" }}
            className="absolute w-[1px] h-[1px] bg-[#C7A86D]/40 rounded-full"
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-30 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className={`flex ${isMobile ? 'justify-center' : 'justify-end'}`}>
            
            {/* MODERN FORM CARD */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={`w-full ${isMobile ? 'max-w-sm' : 'max-w-md'}`}
            >
              <div className={`bg-white/5 backdrop-blur-2xl border border-white/15 rounded-2xl md:rounded-3xl ${isMobile ? 'p-5' : 'p-8'} shadow-2xl`}>
                
                {/* Header */}
                <div className="text-center mb-4 md:mb-6">
                  <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 md:px-4 py-1 md:py-1.5 mb-3 md:mb-4">
                    <FiMapPin className="text-[#C7A86D] text-[8px] md:text-[10px]" />
                    <span className="text-[#C7A86D] text-[8px] md:text-[9px] font-bold uppercase tracking-wider">Begin Your Adventure</span>
                  </div>
                  <h3 className={`${isMobile ? 'text-xl' : 'text-2xl md:text-3xl'} font-bold text-white`}>Start Your Journey</h3>
                  <p className="text-white/40 text-xs md:text-sm mt-1 md:mt-2">Get expert advice & exclusive offers</p>
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  <div>
                    <div className="flex items-center gap-2 md:gap-3 bg-white/5 border border-white/10 rounded-xl px-3 md:px-4 py-2.5 md:py-3.5 focus-within:border-[#C7A86D] focus-within:bg-white/10 transition-all duration-300">
                      <FiUser className="text-[#C7A86D] text-xs md:text-sm" />
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="flex-1 bg-transparent text-white placeholder:text-white/40 outline-none text-xs md:text-sm"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 md:gap-3 bg-white/5 border border-white/10 rounded-xl px-3 md:px-4 py-2.5 md:py-3.5 focus-within:border-[#C7A86D] focus-within:bg-white/10 transition-all duration-300">
                      <FiPhone className="text-[#C7A86D] text-xs md:text-sm" />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="flex-1 bg-transparent text-white placeholder:text-white/40 outline-none text-xs md:text-sm"
                        required
                      />
                    </div>
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-2.5 md:py-3.5 bg-gradient-to-r from-[#C7A86D] to-[#E5B85C] text-black rounded-xl font-bold text-xs md:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 group`}
                  >
                    Start Journey
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    >
                      <FiArrowRight className="text-xs md:text-sm" />
                    </motion.div>
                  </motion.button>
                </form>
                
                {/* Trust Badge - Responsive */}
                <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-white/10">
                  <div className="flex items-center justify-center gap-2 md:gap-4 text-center">
                    <div>
                      <div className="text-[#C7A86D] text-xs md:text-sm font-bold">5,000+</div>
                      <div className="text-white/30 text-[7px] md:text-[8px] uppercase">Happy Travelers</div>
                    </div>
                    <div className="w-px h-5 md:h-6 bg-white/20" />
                    <div>
                      <div className="text-[#C7A86D] text-xs md:text-sm font-bold">98%</div>
                      <div className="text-white/30 text-[7px] md:text-[8px] uppercase">Satisfaction</div>
                    </div>
                    <div className="w-px h-5 md:h-6 bg-white/20" />
                    <div>
                      <div className="text-[#C7A86D] text-xs md:text-sm font-bold">5 min</div>
                      <div className="text-white/30 text-[7px] md:text-[8px] uppercase">Response</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;