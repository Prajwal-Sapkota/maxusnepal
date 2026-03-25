import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiMapPin, FiShield, FiRefreshCw, FiPercent, FiZap, FiArrowRight, FiTrendingUp, FiAward } from "react-icons/fi";

const Introduction = () => {
  const sectionRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Scroll animations (only used on desktop)
  const carX = useSpring(useTransform(scrollYProgress, [0, 1], [-80, 20]), {
    stiffness: 50,
    damping: 25
  });

  const features = [
    { number: "01", title: "Nationwide Service", desc: "15+ Centers in Nepal", icon: FiMapPin, color: "bg-white" },
    { number: "02", title: "5-Star Safety", desc: "Euro NCAP Certified", icon: FiShield, color: "bg-[#1A1A1A]/90" },
    { number: "03", title: "Trade-In Value", desc: "Best Resale Valuation", icon: FiRefreshCw, color: "bg-[#F3EFE7]" },
    { number: "04", title: "8.9% Interest", desc: "Exclusive Financing", icon: FiPercent, color: "bg-white" },
    { number: "05", title: "Efficiency Plus", desc: "3-5% More Range", icon: FiZap, color: "bg-[#C7A86D] text-white" }
  ];

  // Text animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-[#FCF9F5] via-[#F9F7F2] to-[#F5EFE7] py-20 md:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-64 md:w-96 h-64 md:h-96 bg-[#C7A86D]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-20 w-56 md:w-80 h-56 md:h-80 bg-[#C7A86D]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* DESKTOP LAYOUT (Large screens) - COMPLETELY UNCHANGED */}
        {!isMobile && !isTablet && (
          <>
            {/* Branding Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex items-center gap-4 mb-16"
            >
              <motion.div
                variants={slideIn}
                transition={{ delay: 0.2 }}
                className="h-px w-20 bg-gradient-to-r from-[#C7A86D] to-transparent hidden md:block"
              />
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* LEFT SIDE */}
              <div className="w-full lg:w-1/2 relative">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="max-w-md mb-20 relative z-10"
                >
                  <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-light text-[#1A1A1A] leading-tight">
                    Redefining{" "}
                    <span className="relative inline-block">
                      <span className="font-bold bg-gradient-to-r from-[#C7A86D] to-[#A67C45] bg-clip-text text-transparent">
                        Electric Excellence
                      </span>
                      
                    </span>
                    <br />
                    in the heart of Nepal.
                  </motion.h3>
                </motion.div>

                <div className="relative h-[450px] flex items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "spring",
                      stiffness: 80,
                      damping: 20
                    }}
                    className="relative z-20 w-full"
                  >
                    <img
                      src="/images/intro.png"
                      alt="Maxus eTerron 9"
                      className="w-[155%] max-w-none drop-shadow-2xl"
                    />
                  </motion.div>
                </div>
              </div>

              {/* RIGHT SIDE - Feature Grid */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
                    }
                  }}
                  className="grid grid-cols-2 gap-4"
                >
                  {features.slice(0, 4).map((feature, idx) => {
                    const Icon = feature.icon;
                    const isDark = feature.color.includes("bg-[#1A1A1A]");

                    return (
                      <motion.div
                        key={idx}
                        variants={{
                          hidden: { opacity: 0, y: 40, scale: 0.95 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                          }
                        }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setHoveredCard(idx)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`${feature.color} p-6 h-[130px] rounded-xl border border-black/5 flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                          className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity"
                        >
                          <Icon size={24} className={isDark ? "text-white" : "text-[#C7A86D]"} />
                        </motion.div>
                        <motion.span
                          animate={{ x: hoveredCard === idx ? 5 : 0 }}
                          className={`text-3xl font-light opacity-10 group-hover:opacity-30 transition-opacity ${isDark ? "text-white" : ""}`}
                        >
                          {feature.number}
                        </motion.span>
                        <div>
                          <h4 className={`font-bold text-sm mb-1 tracking-tight ${isDark ? "text-white" : "text-[#1A1A1A]"}`}>
                            {feature.title}
                          </h4>
                          <p className={`text-[10px] leading-tight ${isDark ? "text-white/60" : "text-black/50"}`}>
                            {feature.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 40, scale: 0.95 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                      }
                    }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="col-start-2"
                  >
                    <div className="bg-gradient-to-r from-[#C7A86D] to-[#B27D48] p-6 h-[130px] rounded-xl text-white flex flex-col justify-between cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-white/10 rounded-xl"
                      />
                      <div className="flex justify-between items-start relative z-10">
                        <motion.span whileHover={{ scale: 1.05 }} className="text-2xl font-bold italic">3-5%</motion.span>
                        <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.4 }}>
                          <FiZap size={20} className="text-white/80" />
                        </motion.div>
                      </div>
                      <div className="relative z-10">
                        <h4 className="font-bold text-sm mb-1">{features[4].title}</h4>
                        <p className="text-[10px] leading-tight opacity-80">{features[4].desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </>
        )}

        {/* TABLET LAYOUT (Medium screens) */}
        {isTablet && (
          <div className="flex flex-col">
            {/* Text Section */}
            <div className="text-center mb-8">
              <motion.h3 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-light text-[#1A1A1A] leading-tight"
              >
                Redefining{" "}
                <span className="relative inline-block">
                  <span className="font-bold bg-gradient-to-r from-[#C7A86D] to-[#A67C45] bg-clip-text text-transparent">
                    Electric Excellence
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-[#C7A86D] to-transparent"
                  />
                </span>
                <br />
                in the heart of Nepal.
              </motion.h3>
            </div>

            {/* Car Image */}
            <div className="relative h-[350px] mb-8 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94], type: "spring", stiffness: 80, damping: 20 }}
                className="relative z-20 w-full"
              >
                <img src="/images/intro.png" alt="Maxus eTerron 9" className="w-[100%] max-w-none drop-shadow-2xl -ml-0" />
              </motion.div>
            </div>

            {/* Feature Grid */}
            <div className="w-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
                }}
                className="grid grid-cols-2 gap-4"
              >
                {features.slice(0, 4).map((feature, idx) => {
                  const Icon = feature.icon;
                  const isDark = feature.color.includes("bg-[#1A1A1A]");

                  return (
                    <motion.div
                      key={idx}
                      variants={fadeUp}
                      whileHover={{ y: -5, scale: 1.02 }}
                      onMouseEnter={() => setHoveredCard(idx)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className={`${feature.color} p-5 h-[120px] rounded-xl border border-black/5 flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
                    >
                      <div className="absolute top-3 right-3 opacity-10 group-hover:opacity-30 transition-opacity">
                        <Icon size={22} className={isDark ? "text-white" : "text-[#C7A86D]"} />
                      </div>
                      <span className={`text-2xl font-light opacity-10 ${isDark ? "text-white" : ""}`}>{feature.number}</span>
                      <div>
                        <h4 className={`font-bold text-sm mb-1 tracking-tight ${isDark ? "text-white" : "text-[#1A1A1A]"}`}>{feature.title}</h4>
                        <p className={`text-[10px] leading-tight ${isDark ? "text-white/60" : "text-black/50"}`}>{feature.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}

                <motion.div variants={fadeUp} className="col-start-2">
                  <div className="bg-gradient-to-r from-[#C7A86D] to-[#B27D48] p-5 h-[120px] rounded-xl text-white flex flex-col justify-between cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-white/10 rounded-xl" />
                    <div className="flex justify-between items-start relative z-10">
                      <span className="text-xl font-bold italic">3-5%</span>
                      <FiZap size={18} className="text-white/80" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-bold text-sm mb-1">{features[4].title}</h4>
                      <p className="text-[10px] leading-tight opacity-80">{features[4].desc}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        )}

        {/* MOBILE LAYOUT (Small screens) */}
        {isMobile && (
          <div className="flex flex-col">
            {/* Text Section */}
            <div className="text-center mb-6">
              <motion.h3 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-light text-[#1A1A1A] leading-tight"
              >
                Redefining{" "}
                <span className="relative inline-block">
                  <span className="font-bold bg-gradient-to-r from-[#C7A86D] to-[#A67C45] bg-clip-text text-transparent">
                    Electric Excellence
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-[#C7A86D] to-transparent"
                  />
                </span>
                <br />
                in the heart of Nepal.
              </motion.h3>
            </div>

            {/* Car Image */}
            <div className="relative h-[250px] mb-6 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94], type: "spring", stiffness: 80, damping: 20 }}
                className="relative z-20 w-full"
              >
                <img src="/images/intro.png" alt="Maxus eTerron 9" className="w-[100%] max-w-none drop-shadow-2xl -ml-0" />
              </motion.div>
            </div>

            {/* Feature Grid */}
            <div className="w-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
                }}
                className="grid grid-cols-2 gap-3"
              >
                {features.slice(0, 4).map((feature, idx) => {
                  const Icon = feature.icon;
                  const isDark = feature.color.includes("bg-[#1A1A1A]");

                  return (
                    <motion.div
                      key={idx}
                      variants={fadeUp}
                      whileHover={{ y: -5, scale: 1.02 }}
                      onMouseEnter={() => setHoveredCard(idx)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className={`${feature.color} p-3 h-[100px] rounded-xl border border-black/5 flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
                    >
                      <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-30 transition-opacity">
                        <Icon size={18} className={isDark ? "text-white" : "text-[#C7A86D]"} />
                      </div>
                      <span className={`text-xl font-light opacity-10 ${isDark ? "text-white" : ""}`}>{feature.number}</span>
                      <div>
                        <h4 className={`font-bold text-xs mb-1 tracking-tight ${isDark ? "text-white" : "text-[#1A1A1A]"}`}>{feature.title}</h4>
                        <p className={`text-[8px] leading-tight ${isDark ? "text-white/60" : "text-black/50"}`}>{feature.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}

                <motion.div variants={fadeUp} className="col-span-2">
                  <div className="bg-gradient-to-r from-[#C7A86D] to-[#B27D48] p-3 h-[100px] rounded-xl text-white flex flex-col justify-between cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-white/10 rounded-xl" />
                    <div className="flex justify-between items-start relative z-10">
                      <span className="text-lg font-bold italic">3-5%</span>
                      <FiZap size={16} className="text-white/80" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-bold text-xs mb-1">{features[4].title}</h4>
                      <p className="text-[8px] leading-tight opacity-80">{features[4].desc}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Introduction;