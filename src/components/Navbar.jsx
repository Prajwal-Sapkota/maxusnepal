import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { CgMenuGridO } from "react-icons/cg";
import { FiArrowRight, FiCompass } from "react-icons/fi";

// Background Logo SVG Component with Animated Glow - Larger and More Visible
const BackgroundLogoSVG = ({ isMenuOpen }) => {
  // Your actual Maxus logo path data
  const MAXUS_LOGO_PATH = "M253 53.4c-.3.3-5.1 1-10.5 1.5-45.1 4.7-87.9 22.2-113.2 46.4-11.7 11.2-20.9 25.2-24.2 36.7-.7 2.5-1.7 5.8-2.2 7.4-1.3 4.1-1.1 24 .2 29 2.6 9.8 3.5 12.5 6.8 18.6 5 9.6 8.6 14.5 16.5 22.8 18 18.9 42.9 33.3 75.1 43.3 39.6 12.2 93.6 14.2 134 5 2.2-.5 6-1.4 8.5-1.9 20.1-4.4 46.3-15.8 63.9-27.6 31.1-21 47.1-46.3 47.1-74.8 0-9.4-.4-12.2-3.3-22.3-6.1-21.3-29.1-45.1-57.2-59.3-17.7-8.9-24.4-11.4-45.5-16.8-13-3.3-19.2-4.6-33-6.6-7.3-1-62.2-2.3-63-1.4M275 71c1.3.9 1.3 1.2-.2 2.1-1 .5-3.9 2.8-6.5 5-2.7 2.3-5.7 4.8-6.8 5.8-8.4 6.9-18.7 16-28.6 25-20.5 18.7-68.5 67.5-87.2 88.6-2.9 3.3-3.7 3.7-5 2.7-2.2-1.9-9.6-14.4-10.8-18.3-5.6-18.4-5.3-29.6 1.2-45 10-23.6 35.8-43.6 71.4-55.4 7.7-2.6 20-5.8 25-6.7 15.4-2.5 20.2-3.1 32-3.7 7.2-.4 13.2-.8 13.5-.9s1.2.3 2 .8m36 1.1c1.9.5 5 .9 6.9.9 1.8 0 5 .4 7 .9s6.3 1.5 9.6 2.2c8 1.6 24.4 6.5 30 8.9 28.1 12.2 44.2 24.1 55.4 41 12.5 18.9 14.5 38 6 58.1-2.9 6.8-9.1 16.4-10.6 16.4-.6 0-8.5-7.9-17.4-17.5-19.9-21.3-53.9-55.5-70.9-71.2-13.7-12.7-42-37.1-44.6-38.6-.9-.5-1.4-1.4-1-2 .7-1.2 24.2-.5 29.6.9m-29.7 46c1.1.7 2.6 1.6 3.1 2.1.6.5 5.6 4.1 11.1 8 14.6 10.4 36.7 29.2 37.9 32.3 1.3 3.5-48.7 37.5-55.2 37.5-2.3 0-5-1.4-17.2-8.8-11-6.6-21.6-13.8-29-19.6-8.4-6.5-9-7.2-9-8.9 0-3.6 50.1-43.5 54.8-43.7.7 0 2.3.5 3.5 1.1m-65 69.5c6.7 4.3 16.5 10.4 21.7 13.7s10.9 6.8 12.5 7.7c1.7 1 7.5 4.3 13 7.5 11.4 6.6 16.3 7.4 22.5 3.8 1.9-1.1 6.9-4 11-6.3 10.9-6.2 25.8-15.3 36.9-22.4 17.7-11.4 18.9-12 21.5-10.3 7 4.6 39.6 36.8 39.6 39.1 0 .7-10.3 7.3-17 10.8-10.5 5.4-29.1 12.6-39 14.9-24.1 5.6-35.7 6.9-61 6.9-29.5 0-48.2-2.8-73.5-10.8-15.1-4.8-42.5-19.4-42.5-22.7 0-2.7 38.3-39.5 41.1-39.5.5 0 6.5 3.4 13.2 7.6";

  return (
    <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: 200, scale: 0.8 }}
        animate={isMenuOpen ? { opacity: 0.25, x: 0, scale: 1 } : { opacity: 0, x: 200, scale: 0.8 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-[95%] max-w-4xl max-h-[180vh] mr-8 md:mr-16 lg:mr-0"
      >
        <svg
          viewBox="0 0 554 347"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Static Outline - More Visible */}
          <path
            d={MAXUS_LOGO_PATH}
            stroke="white"
            strokeWidth="1.2"
            opacity="0.45"
            fill="none"
          />

          {/* Animated Glow Streak - Moving along the logo path */}
          <motion.path
            d={MAXUS_LOGO_PATH}
            stroke="#C7A86D"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={isMenuOpen ? {
              pathLength: [0, 0.45, 0.15],
              pathOffset: [0, 1, 1]
            } : {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: 0.5
            }}
            style={{
              filter: "drop-shadow(0px 0px 12px #C7A86D)"
            }}
          />

          {/* Second Animated Streak - Opposite Direction */}
          <motion.path
            d={MAXUS_LOGO_PATH}
            stroke="#C7A86D"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={isMenuOpen ? {
              pathLength: [0, 0.35, 0],
              pathOffset: [1, 0, 0]
            } : {}}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
            style={{
              filter: "drop-shadow(0px 0px 8px #C7A86D)"
            }}
          />

          {/* Third Streak - Smaller, Faster */}
          <motion.path
            d={MAXUS_LOGO_PATH}
            stroke="#C7A86D"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={isMenuOpen ? {
              pathLength: [0, 0.25, 0],
              pathOffset: [0.5, 1, 0.5]
            } : {}}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
              delay: 1.5
            }}
            style={{
              filter: "drop-shadow(0px 0px 5px #C7A86D)"
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [hoveredNavItem, setHoveredNavItem] = useState(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    setHidden(latest > prev && latest > 80);
    setIsScrolled(latest > 30);
  });

  // Track active section
  useEffect(() => {
    const sections = ["hero", "eterron", "mifa", "tech", "network", "booking"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "eTerron 9", id: "eterron", desc: "Flagship electric pickup engineered for power & precision", tag: "Flagship" },
    { name: "MIFA Series", id: "mifa", desc: "Ultra-luxury electric MPV for executive journeys", tag: "Executive" },
    { name: "Technology", id: "tech", desc: "Smart electric mobility with cutting-edge innovation", tag: "Innovation" },
    { name: "Network", id: "network", desc: "Expanding EV infrastructure across Nepal", tag: "Infrastructure" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
      setMobileMenuOpen(false);
      setDesktopMenuOpen(false);
    }
  };

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 25, mass: 0.8 }}
        className="fixed top-0 left-0 w-full z-50 hidden md:block"
      >
        <div className="px-8 py-5">
          <div className="max-w-7xl mx-auto">
            <div className="relative flex items-center justify-between">

              {/* LEFT - Logo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollTo("hero")}
                  className="relative cursor-pointer group"
                >
                  <motion.div
                    animate={{
                      backgroundColor: (isScrolled || desktopMenuOpen || mobileMenuOpen)
                        ? "rgba(15, 15, 18, 0.9)"
                        : "transparent",
                      backdropFilter: (isScrolled || desktopMenuOpen || mobileMenuOpen)
                        ? "blur(12px)"
                        : "blur(0px)",
                      padding: (isScrolled || desktopMenuOpen || mobileMenuOpen)
                        ? "8px 12px"
                        : "0px",
                      borderRadius: (isScrolled || desktopMenuOpen || mobileMenuOpen)
                        ? "12px"
                        : "0px",
                    }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    <img
                      src="/images/logo.png"
                      alt="Maxus Nepal"
                      className="h-11 object-contain"
                    />
                  </motion.div>


                </motion.button>
              </motion.div>

              <div className="flex-1" />

              {/* RIGHT - CTA & MENU BUTTON */}
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="relative"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollTo("booking")}
                    className={`group relative overflow-hidden px-6 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 ${isScrolled
                        ? "bg-[#C7A86D] text-white shadow-md"
                        : "bg-white/15 backdrop-blur-sm text-gray-600"
                      }`}
                  >
                    <span className="relative z-10 text-xs font-semibold tracking-wider uppercase">Reserve</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                      className="relative z-10"
                    >
                      <HiOutlineArrowRight size={14} />
                    </motion.div>
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </motion.button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <motion.button
                    onClick={() => setDesktopMenuOpen(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative overflow-hidden px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 ${isScrolled
                        ? "bg-white/70 backdrop-blur-xl  shadow-lg"
                        : "bg-white/10 backdrop-blur-sm "
                      }`}
                  >
                    <motion.div
                      animate={{ rotate: desktopMenuOpen ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <CgMenuGridO size={36} className={isScrolled ? "text-gray-700" : "text-gray-600"} />
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-[#C7A86D] rounded-full"
                    />
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#C7A86D] to-transparent"
                    />
                  </motion.button>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={`h-px mt-4 transition-all duration-500 ${isScrolled
                  ? ""
                  : "bg-gradient-to-r from-transparent via-white/20 to-transparent"
                }`}
            />
          </div>
        </div>
      </motion.nav>

      {/* DESKTOP FULLSCREEN MENU WITH LEFT CONTENT AND LARGE RIGHT LOGO */}
      <AnimatePresence mode="wait">
        {desktopMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[55] overflow-hidden hidden md:block"
          >
            {/* BACKGROUND GRADIENT - Place at bottom layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2C2C2C] to-[#1E1E1E]" />

            {/* Animated Background Orbs - Below logo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.15, 0.25, 0.15],
                  x: [0, 50, 0],
                  y: [0, 30, 0]
                }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#C7A86D]/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.2, 0.1],
                  x: [0, -40, 0],
                  y: [0, -20, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, delay: 2 }}
                className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-[#C7A86D]/10 rounded-full blur-3xl"
              />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/images/grid-dark.png')] opacity-10 pointer-events-none" />

            {/* BACKGROUND LOGO - This should be ABOVE the gradient but BELOW the content */}
            <BackgroundLogoSVG isMenuOpen={desktopMenuOpen} />

            {/* Background Gradient Overlay - Keep this subtle */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1], x: [0, 50, 0], y: [0, 30, 0] }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#C7A86D]/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1], x: [0, -40, 0], y: [0, -20, 0] }}
                transition={{ duration: 15, repeat: Infinity, delay: 2 }}
                className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#C7A86D]/10 rounded-full blur-3xl"
              />
            </div>

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              onClick={() => setDesktopMenuOpen(false)}
              className="absolute top-8 right-8 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-[#C7A86D]/50 transition-all duration-300"
            >
              <RiCloseLine size={26} />
            </motion.button>

            <div className="relative h-full flex items-center px-16 lg:px-24 py-20">
              <div className="grid grid-cols-2 gap-12 w-full">

                {/* LEFT SIDE - LINKS */}
                <div className="flex flex-col justify-center space-y-8">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: -80 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      onMouseEnter={() => setHoveredNavItem(i)}
                      onMouseLeave={() => setHoveredNavItem(null)}
                      onClick={() => scrollTo(link.id)}
                      className="group cursor-pointer relative"
                    >
                      <div className="flex items-center gap-6">
                        <motion.span
                          animate={{
                            color: hoveredNavItem === i ? "#C7A86D" : "#4A4A4A",
                            x: hoveredNavItem === i ? 5 : 0
                          }}
                          className="text-sm font-mono font-bold tracking-wider"
                        >
                          {String(i + 1).padStart(2, '0')}
                        </motion.span>

                        <motion.h2
                          animate={{
                            color: hoveredNavItem === i ? "#C7A86D" : "#FFFFFF",
                            x: hoveredNavItem === i ? 10 : 0
                          }}
                          className="text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight transition-all duration-300"
                        >
                          {link.name}
                        </motion.h2>

                        <motion.div
                          animate={{
                            opacity: hoveredNavItem === i ? 1 : 0,
                            x: hoveredNavItem === i ? 0 : -10
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <FiArrowRight className="text-[#C7A86D] text-xl lg:text-2xl" />
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: hoveredNavItem === i ? "100%" : 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute -bottom-2 left-0 h-px bg-gradient-to-r from-[#C7A86D] to-transparent"
                        style={{ left: "3rem" }}
                      />

                      <motion.p
                        animate={{
                          opacity: hoveredNavItem === i ? 0.6 : 0.3,
                          y: hoveredNavItem === i ? 0 : -5
                        }}
                        className="text-white/50 text-sm mt-2 ml-16 max-w-md"
                      >
                        {link.desc}
                      </motion.p>
                    </motion.div>
                  ))}
                </div>

                {/* RIGHT SIDE - EMPTY (Logo effect takes over) */}
                <div className="relative" />
              </div>
            </div>

            {/* Bottom Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 left-0 right-0 px-16 lg:px-24"
            >
              <div className="flex flex-wrap justify-between items-center gap-4 pt-6 border-t border-white/10">
                <div className="flex gap-8">
                  {["Instagram", "Facebook", "YouTube"].map((item, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ y: -2, color: "#C7A86D" }}
                      className="text-white/40 hover:text-[#C7A86D] text-[10px] uppercase tracking-wider transition-all duration-300"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <FiCompass className="text-[#C7A86D] text-xs" />
                  <span className="text-white/30 text-[8px] uppercase tracking-wider">The Himalayan Grid</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE NAVBAR */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          opacity: { duration: 0.8 }
        }}
        className="fixed top-0 left-0 w-full z-50 md:hidden px-4 md:px-8 py-4 md:py-5"
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`transition-all duration-500 ${isScrolled
              ? " backdrop-blur-xl  rounded-2xl shadow-lg"
              : "bg-transparent"
            }`}
        >
          <div className="flex items-center justify-between px-5 py-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("hero")}
              className="relative cursor-pointer"
            >
              <motion.div
                animate={{
                  backgroundColor: isScrolled
                    ? "rgba(15, 15, 18, 0.9)"
                    : "transparent",
                  backdropFilter: isScrolled
                    ? "blur(12px)"
                    : "blur(0px)",
                  padding: isScrolled
                    ? "6px 10px"
                    : "0px",
                  borderRadius: isScrolled
                    ? "10px"
                    : "0px",
                }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                <img
                  src="/images/logo.png"
                  alt="Maxus Nepal"
                  className="h-8 md:h-9 object-contain"
                />
              </motion.div>


            </motion.button>

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 rounded-full transition-all ${isScrolled
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
                }`}
            >
              <RiMenu4Line size={26} />
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 0.8
              }}
              className="relative z-10 w-full max-w-md mx-4"
            >
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                onClick={() => setMobileMenuOpen(false)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white p-2 transition-colors"
              >
                <RiCloseLine size={28} />
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="flex justify-center mb-10"
              >
                <img
                  src="/images/logo.png"
                  alt="Maxus Nepal"
                  className="h-12 brightness-0 invert"
                />
              </motion.div>

              <div className="space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.08, duration: 0.4 }}
                  >
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="w-full text-left group"
                    >
                      <span className="text-2xl text-white/80 font-light tracking-wide group-hover:text-[#C7A86D] transition-colors duration-300">
                        {link.name}
                      </span>
                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        className="h-[1px] bg-[#C7A86D]/50 mt-1"
                      />
                    </button>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="h-px bg-white/20 my-8"
              />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <button
                  onClick={() => {
                    scrollTo("booking");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3.5 bg-[#C7A86D] text-black rounded-full flex items-center justify-center gap-2 font-semibold text-sm tracking-wide uppercase shadow-lg hover:shadow-xl transition-all duration-300 active:scale-98"
                >
                  Reserve Test Drive
                  <HiOutlineArrowRight size={16} />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center mt-8"
              >
                <p className="text-[10px] text-white/30 tracking-wider">
                  ELECTRIC LUXURY. INTELLIGENT DESIGN.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;