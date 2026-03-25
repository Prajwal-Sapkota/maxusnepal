import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiArrowRight, FiZap, FiBattery, FiTrendingUp, FiStar, FiNavigation, FiChevronLeft, FiChevronRight, FiMapPin, FiShield, FiPercent } from "react-icons/fi";

const vehicles = [
  {
    name: "eTerron 9",
    type: "Electric Pickup",
    image: "/images/eterron.jpg",
    range: "560 km",
    power: "325 kW",
    acceleration: "5.5s",
    torque: "700 Nm",
    description: "Unmatched power meets luxury. The ultimate electric pickup that redefines capability.",
    badge: "Flagship",
    color: "#C7A86D"
  },
  {
    name: "MIFA 9",
    type: "Luxury MPV",
    image: "/images/mifa9.jpg",
    range: "520 km",
    power: "180 kW",
    acceleration: "8.2s",
    torque: "350 Nm",
    description: "Executive luxury redefined. Your mobile boardroom with first-class comfort.",
    badge: "Executive",
    color: "#C7A86D"
  },
  {
    name: "MIFA 7",
    type: "Family EV",
    image: "/images/mifa7.jpg",
    range: "635 km",
    power: "180 kW",
    acceleration: "7.8s",
    torque: "350 Nm",
    description: "Maximum range. Maximum comfort. The perfect companion for family adventures.",
    badge: "Long Range",
    color: "#C7A86D"
  }
];

const Lineup = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % vehicles.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);
  };

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#2C2C2C] to-[#1E1E1E] py-20 px-4 md:px-6 lg:px-12 overflow-hidden min-h-screen">
      <div
        onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
        className="absolute inset-0 pointer-events-none z-20"
      >
        <motion.div
          animate={{
            x: mouse.x - 200,
            y: mouse.y - 200,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 25 }}
          className="w-[400px] h-[400px] bg-[#C7A86D]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Background Motion Layer - Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#C7A86D]/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -20, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-20 left-20 w-[450px] h-[450px] bg-[#C7A86D]/8 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C7A86D]" />
              <span className="text-[#C7A86D] text-xs tracking-[0.3em] uppercase font-bold">The Collection</span>
              <div className="w-8 h-px bg-[#C7A86D]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
              Discover Your{" "}
              <span className="font-bold bg-gradient-to-r from-[#C7A86D] to-[#9B7B4C] bg-clip-text text-transparent">
                Electric Companion
              </span>
            </h2>
            <p className="text-slate-400 mt-3 md:mt-4 max-w-xl mx-auto text-xs md:text-sm px-4">
              Experience the future of mobility with our revolutionary electric fleet
            </p>
          </motion.div>
        </div>

        {/* Main Carousel - Cinematic */}
        <div className="relative max-w-7xl mx-auto">

          {/* Main Image Container */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl h-[450px] md:h-[600px] lg:h-[700px]">
            {vehicles.map((vehicle, idx) => (
              <motion.div
                key={idx}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: activeIndex === idx ? 1 : 0,
                  scale: activeIndex === idx ? 1 : 1.05,
                  filter: activeIndex === idx ? "blur(0px)" : "blur(10px)"
                }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* 🎯 PARALLAX IMAGE */}
                <motion.img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover object-center"
                  animate={{
                    scale: activeIndex === idx ? 1 : 1.1,
                  }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Gradient Overlay - Balanced */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* ✨ FLOATING CONTENT - Desktop Layout */}
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{
                    y: activeIndex === idx ? 0 : 50,
                    opacity: activeIndex === idx ? 1 : 0
                  }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12 xl:p-16"
                >
                  {/* DESKTOP LAYOUT (md and above) */}
                  <div className="hidden md:flex flex-row justify-between items-end gap-6">
                    {/* LEFT SIDE - Stats */}
                    <div className="max-w-lg">
                      <div className="flex flex-wrap gap-3 md:gap-4">
                        {[
                          { icon: FiBattery, value: vehicle.range, label: "Range" },
                          { icon: FiZap, value: vehicle.power, label: "Power" },
                          { icon: FiTrendingUp, value: vehicle.acceleration, label: "0-100" },
                          { icon: FiNavigation, value: vehicle.torque, label: "Torque" }
                        ].map((stat, i) => (
                          <motion.div
                            key={i}
                            initial={{ y: 40, opacity: 0 }}
                            animate={{
                              y: activeIndex === idx ? 0 : 30,
                              opacity: activeIndex === idx ? 1 : 0
                            }}
                            transition={{ delay: 0.6 + i * 0.08 }}
                            className="flex items-center gap-2 md:gap-3 group"
                          >
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#C7A86D]/20 transition-all">
                              <stat.icon className="text-[#C7A86D] text-sm md:text-lg" />
                            </div>
                            <div>
                              <p className="text-white font-bold text-xs md:text-sm">{stat.value}</p>
                              <p className="text-white/40 text-[7px] md:text-[9px] uppercase tracking-wider">{stat.label}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT SIDE - Name and Button */}
                    <div className="text-right">
                      <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        animate={{
                          opacity: activeIndex === idx ? 1 : 0,
                          y: activeIndex === idx ? 0 : 30
                        }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight"
                      >
                        {vehicle.name}
                      </motion.h3>

                      <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{
                          opacity: activeIndex === idx ? 1 : 0,
                          x: activeIndex === idx ? 0 : 20
                        }}
                        transition={{ delay: 0.8 }}
                        whileHover={{ scale: 1.05, x: 8 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3 bg-[#C7A86D] text-black rounded-full flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                      >
                        <span className="font-bold uppercase tracking-wider text-sm">Explore {vehicle.name}</span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <FiArrowRight className="text-sm" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>

                  {/* MOBILE LAYOUT (below md) - Title on top, Stats and Button below */}
                  <div className="flex flex-col md:hidden gap-4">
                    {/* Title on Top */}
                    <motion.h3
                      initial={{ opacity: 0, y: 30 }}
                      animate={{
                        opacity: activeIndex === idx ? 1 : 0,
                        y: activeIndex === idx ? 0 : 30
                      }}
                      transition={{ delay: 0.4 }}
                      className="text-3xl font-bold text-white text-center"
                    >
                      {vehicle.name}
                    </motion.h3>

                    {/* Button */}
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{
                        opacity: activeIndex === idx ? 1 : 0,
                        x: activeIndex === idx ? 0 : 20
                      }}
                      transition={{ delay: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-2.5 bg-[#C7A86D] text-black rounded-full flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-300 group mx-auto"
                    >
                      <span className="font-bold uppercase tracking-wider text-xs">Explore</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <FiArrowRight className="text-xs" />
                      </motion.div>
                    </motion.button>

                    {/* Stats Below Button */}
                    <div className="flex flex-wrap justify-center gap-3 mt-2">
                      {[
                        { icon: FiBattery, value: vehicle.range, label: "Range" },
                        { icon: FiZap, value: vehicle.power, label: "Power" },
                        { icon: FiTrendingUp, value: vehicle.acceleration, label: "0-100" },
                        { icon: FiNavigation, value: vehicle.torque, label: "Torque" }
                      ].map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ y: 40, opacity: 0 }}
                          animate={{
                            y: activeIndex === idx ? 0 : 30,
                            opacity: activeIndex === idx ? 1 : 0
                          }}
                          transition={{ delay: 0.6 + i * 0.08 }}
                          className="flex items-center gap-2 group"
                        >
                          <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#C7A86D]/20 transition-all">
                            <stat.icon className="text-[#C7A86D] text-xs" />
                          </div>
                          <div>
                            <p className="text-white font-bold text-[10px]">{stat.value}</p>
                            <p className="text-white/40 text-[6px] uppercase tracking-wider">{stat.label}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Premium Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-[#C7A86D] hover:border-[#C7A86D] transition-all duration-300 z-20 group"
          >
            <FiChevronLeft size={20} className="md:size-24 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={next}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-[#C7A86D] hover:border-[#C7A86D] transition-all duration-300 z-20 group"
          >
            <FiChevronRight size={20} className="md:size-24 group-hover:scale-110 transition-transform" />
          </button>

          {/* Glass Thumbnail Navigation */}
          <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
            {vehicles.map((vehicle, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 ${activeIndex === idx
                    ? 'ring-2 ring-[#C7A86D] scale-105'
                    : 'opacity-60 hover:opacity-90'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-16 h-11 md:w-20 md:h-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg md:rounded-xl overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lineup;