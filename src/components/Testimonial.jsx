import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiMessageSquare, FiStar, FiMap, FiArrowRight, FiUser, FiCompass } from "react-icons/fi";
import { TbQuote } from "react-icons/tb";

const Testimonial = () => {
  const containerRef = useRef(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
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

  // Premium scroll effects with spring
  const imageScale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.15]), {
    stiffness: 40,
    damping: 25
  });
  
  const textY = useSpring(useTransform(scrollYProgress, [0, 1], [80, -80]), {
    stiffness: 45,
    damping: 30
  });
  
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]), {
    stiffness: 50,
    damping: 30
  });
  
  const glowOpacity = useSpring(useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.6, 0.6, 0]), {
    stiffness: 45,
    damping: 25
  });

  const testimonials = [
    {
      quote: "The eTerron 9 didn't just handle the Thorang La Pass; it redefined what I thought was possible for an EV in the Himalayas.",
      author: "Utsav Poudel",
      role: "Tech Explorer & EV Enthusiast",
      location: "Upper Mustang, Nepal",
      rating: 5,
      image: "/images/testimonial-1.jpg"
    },
    {
      quote: "Driving through the winding roads of Pokhara, the silence of the MIFA 7 was surreal. Pure luxury meets sustainability.",
      author: "Srijana Thapa",
      role: "Travel Blogger",
      location: "Pokhara, Nepal",
      rating: 5,
      image: "/images/testimonial-2.jpg"
    },
    {
      quote: "As a business owner, the MIFA 9's executive comfort and zero emissions make it the perfect fleet vehicle for Kathmandu.",
      author: "Rajesh Shrestha",
      role: "Business Executive",
      location: "Kathmandu, Nepal",
      rating: 5,
      image: "/images/testimonial-3.jpg"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[activeTestimonial];
  const isMobile = windowWidth < 768;

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#2C2C2C] to-[#1E1E1E]">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Abstract Light Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#C7A86D]/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15], x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#C7A86D]/15 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-dark.png')] opacity-10" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent" />
      </div>

      {/* Animated Particles - Reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(isMobile ? 25 : 50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{ y: [null, -200], opacity: [0, 0.4, 0] }}
            transition={{ duration: Math.random() * 8 + 6, repeat: Infinity, delay: Math.random() * 5 }}
            className="absolute w-0.5 h-0.5 bg-[#C7A86D]/40 rounded-full"
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4 md:px-6">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Header with Animated Line */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-6 md:w-8 h-px bg-[#C7A86D]" />
              <span className="text-[#C7A86D] text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">Real Stories</span>
              <div className="w-6 md:w-8 h-px bg-[#C7A86D]" />
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white">
              Voices from the{" "}
              <span className="font-bold bg-gradient-to-r from-[#C7A86D] to-[#E5B85C] bg-clip-text text-transparent">
                Himalayas
              </span>
            </h2>
          </motion.div>

          {/* Main Testimonial Card */}
          <motion.div
            style={{ y: textY, opacity }}
            className="relative"
          >
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl overflow-hidden">
              
              {/* Animated Glow Effect */}
              <motion.div
                style={{ opacity: glowOpacity }}
                className="absolute inset-0 bg-gradient-to-r from-[#C7A86D]/10 via-transparent to-[#C7A86D]/10 pointer-events-none"
              />
              
              {/* Decorative Quote Icon - Hidden on mobile */}
              {!isMobile && (
                <>
                  <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-10">
                    <TbQuote className="text-6xl md:text-8xl text-white" />
                  </div>
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 opacity-10 rotate-180">
                    <TbQuote className="text-6xl md:text-8xl text-white" />
                  </div>
                </>
              )}
              
              {/* Rating Stars */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center gap-1 mb-6 md:mb-8"
              >
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <FiStar className="text-[#C7A86D] fill-[#C7A86D] text-base md:text-lg" />
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Quote Text */}
              <motion.blockquote
                key={activeTestimonial}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-white leading-tight text-center mb-6 md:mb-10 ${isMobile ? 'px-2' : 'px-4'}`}
              >
                        "{currentTestimonial.quote}"
              </motion.blockquote>
              
              {/* Author Info */}
              <motion.div
                key={`author-${activeTestimonial}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="flex flex-col items-center gap-2 md:gap-3"
              >
                <div className="w-10 md:w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C7A86D] to-transparent" />
                <p className="text-white font-bold tracking-wider text-sm md:text-base uppercase">{currentTestimonial.author}</p>
                <p className="text-white/50 text-[10px] md:text-xs tracking-[0.2em] uppercase">{currentTestimonial.role}</p>
                <div className="flex items-center gap-2 mt-1 md:mt-2">
                  <FiMap className="text-[#C7A86D] text-[10px] md:text-xs" />
                  <span className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-wider">{currentTestimonial.location}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8"
          >
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-all duration-300 rounded-full ${
                  activeTestimonial === idx 
                    ? 'w-6 md:w-8 h-1.5 md:h-2 bg-[#C7A86D]' 
                    : 'w-1.5 h-1.5 md:w-2 md:h-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      
      
    </section>
  );
};

export default Testimonial;