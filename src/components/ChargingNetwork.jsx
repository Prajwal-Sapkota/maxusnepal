import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  FiBatteryCharging, FiShield, FiMapPin, FiZap,
  FiNavigation, FiStar, FiTrendingUp, FiPower, FiClock,
  FiActivity, FiWifi, FiCompass
} from "react-icons/fi";

const ChargingNetwork = () => {
  const sectionRef = useRef(null);
  const [hoveredStation, setHoveredStation] = useState(null);
  const [activeStation, setActiveStation] = useState(null);
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

  const mapScale = useSpring(useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.98]), {
    stiffness: 40,
    damping: 25
  });

  const stations = [
    { name: "Nepalgunj", x: "19%", y: "56%", chargers: 4, power: "60kW", type: "upcoming", region: "Mid-Western" },
    { name: "Lumbini", x: "39%", y: "69%", chargers: 4, power: "60kW", type: "standard", region: "Western" },
    { name: "Butwal", x: "30%", y: "63%", chargers: 4, power: "120kW", type: "standard", region: "Western" },
    { name: "Pokhara", x: "48%", y: "50%", chargers: 8, power: "150kW", type: "rapid", region: "Western" },
    { name: "Chitwan", x: "52%", y: "69%", chargers: 6, power: "120kW", type: "standard", region: "Central" },
    { name: "Hetauda", x: "62%", y: "75%", chargers: 4, power: "60kW", type: "standard", region: "Central" },
    { name: "Kathmandu", x: "66%", y: "67%", chargers: 12, power: "150kW", type: "flagship", region: "Central" },
    { name: "Janakpur", x: "70%", y: "88%", chargers: 4, power: "60kW", type: "standard", region: "Eastern" },
    { name: "Dharan", x: "86%", y: "78%", chargers: 4, power: "60kW", type: "standard", region: "Eastern" },
    { name: "Biratnagar", x: "88%", y: "95%", chargers: 6, power: "150kW", type: "rapid", region: "Eastern" },
  ];
  
  const stats = [
    { icon: FiZap, value: "10+", label: "Active Stations", trend: "+50% by 2026" },
    { icon: FiBatteryCharging, value: "40 min", label: "20% → 80%", trend: "Ultra-fast" },
    { icon: FiNavigation, value: "150 km", label: "Avg Distance", trend: "Between hubs" },
    { icon: FiActivity, value: "24/7", label: "Live Support", trend: "Real-time" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStation((prev) => (prev + 1) % stations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-[#F5F0E8] to-[#EAE4DB] py-20 md:py-28 overflow-hidden">

      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/grid-dark.png')] opacity-10" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15], x: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#C7A86D]/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15], x: [0, -80, 0] }}
          transition={{ duration: 22, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#C7A86D]/15 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#C7A86D]" />
            <span className="text-[#C7A86D] text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">The Himalayan Grid</span>
            <div className="w-8 h-px bg-[#C7A86D]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-slate-800"
          >
            Powering{" "}
            <span className="relative">
              <span className="font-bold bg-gradient-to-r from-[#C7A86D] to-[#9B7B4C] bg-clip-text text-transparent">
                Nepal's Journey
              </span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-slate-600 mt-3 md:mt-4 max-w-2xl mx-auto text-xs md:text-sm px-4"
          >
            10+ charging stations across Nepal. From Mechi to Mahakali, we're building the future of mobility.
          </motion.p>
        </div>

       
        {/* Main Card - Map + Charging Vehicle Integrated */}
        <motion.div
          style={{ scale: mapScale }}
          className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden group"
        >
          {/* Vehicle Image - Left Side (Desktop only) */}
          <div className="absolute left-0 top-0 bottom-0 w-[38%] hidden lg:block">
            <div className="relative h-full">
              <img
                src="/images/charging.jpeg"
                alt="Maxus eTerron 9 Charging"
                className="w-full h-full object-cover object-center"
                style={{ imageRendering: "auto" }}
              />
              <div className="absolute inset-0 bg-black/30 via-transparent to-transparent" />

              {/* Premium Charging Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md rounded-2xl px-5 py-3 text-center whitespace-nowrap border border-[#C7A86D]/40 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2.5 h-2.5 bg-green-500 rounded-full"
                  />
                  <span className="text-white text-xs font-bold tracking-wide">150kW Ultra-Fast</span>
                </div>
                <div className="text-white/60 text-[9px] mt-1">+560km range • 40min to 80%</div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Vehicle Image */}
          <div className="lg:hidden relative h-56 overflow-hidden">
            <img
              src="/images/charging.jpeg"
              alt="Maxus Charging"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md rounded-full px-4 py-1.5">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-white text-[10px] font-medium">150kW Ultra-Fast</span>
              </div>
            </div>
          </div>

          {/* Map Content */}
          <div className={`${isMobile ? 'p-4' : 'lg:ml-[38%] p-6'}`}>
            <div className="flex items-center justify-between mb-3 md:mb-4 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <FiCompass className="text-[#C7A86D] text-xs md:text-sm" />
                <span className="text-[10px] md:text-xs text-slate-600 font-medium">Strategic Coverage Map</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[7px] md:text-[8px] text-slate-500">10+ Active Stations</span>
              </div>
            </div>

            <div className="relative w-full">
              <img
                src="/images/nepal.svg"
                alt="Nepal Map"
                className="w-full h-auto"
              />

              {/* Station Markers */}
              {stations.map((station, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + idx * 0.03, type: "spring", stiffness: 200 }}
                  onMouseEnter={() => setHoveredStation(idx)}
                  onMouseLeave={() => setHoveredStation(null)}
                  className="absolute cursor-pointer"
                  style={{ left: station.x, top: station.y, transform: "translate(-50%, -50%)" }}
                >
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, activeStation === idx ? 1.6 : 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute rounded-full bg-[#C7A86D]/40"
                      style={{ width: isMobile ? "20px" : "28px", height: isMobile ? "20px" : "28px", left: isMobile ? "-8px" : "-12px", top: isMobile ? "-8px" : "-12px" }}
                    />
                    <div className={`relative w-1.5 h-1.5 md:w-3 md:h-3 rounded-full shadow-lg ring-1 md:ring-2 ring-white ${station.type === "flagship" ? "bg-[#C7A86D] ring-2 ring-[#C7A86D]/50" :
                        station.type === "upcoming" ? "bg-slate-500" : "bg-[#C7A86D]"
                      }`} />
                  </div>

                  {/* Tooltip - Hidden on mobile */}
                  {!isMobile && (
                    <motion.div
                      animate={{ opacity: hoveredStation === idx ? 1 : 0, y: hoveredStation === idx ? 0 : 10 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none z-30"
                    >
                      <div className="bg-white shadow-2xl rounded-xl px-4 py-2.5 border border-slate-100 min-w-[140px]">
                        <p className="text-[#C7A86D] text-[10px] font-bold uppercase text-center">{station.name}</p>
                        <p className="text-slate-800 text-sm font-bold text-center">{station.chargers} Chargers</p>
                        <p className="text-slate-500 text-[9px] text-center">{station.power} • {station.type === "flagship" ? "Flagship Hub" : station.type === "upcoming" ? "Coming Soon" : "Active"}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}

              {/* Route Line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path
                  d="M22%,49% L30%,61% L32%,57% L36%,39% L44%,53% L46%,49% L48%,44% L58%,57% L72%,61% L78%,64%"
                  stroke="#C7A86D"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2.5, delay: 0.6 }}
                />
              </svg>
            </div>

            {/* Map Legend - Responsive */}
            <div className="mt-4 md:mt-5 pt-3 border-t border-slate-100 flex flex-wrap justify-center gap-3 md:gap-4">
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#C7A86D]" />
                <span className="text-[7px] md:text-[8px] text-slate-500">Active</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#C7A86D] ring-1 ring-[#C7A86D]/50" />
                <span className="text-[7px] md:text-[8px] text-slate-500">Flagship</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-slate-500" />
                <span className="text-[7px] md:text-[8px] text-slate-500">Coming Soon</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-4 md:w-6 h-[1px] md:h-[2px] bg-[#C7A86D]/50" />
                <span className="text-[7px] md:text-[8px] text-slate-500">Highway</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16"
        >
          {[
            { icon: FiBatteryCharging, title: "Ultra-Fast 150kW", desc: "20% to 80% in under 40 minutes. Add 560km range during your coffee break." },
            { icon: FiMapPin, title: "Strategic Coverage", desc: "Stations every 150km on major highways. From Mechi to Mahakali." },
            { icon: FiShield, title: "24/7 Connected Support", desc: "Real-time monitoring, roadside assistance, and dedicated EV support hotline." }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white border border-slate-100 p-5 md:p-6 rounded-xl md:rounded-2xl hover:border-[#C7A86D]/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#C7A86D]/10 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <card.icon className="text-[#C7A86D] text-xl md:text-2xl" />
              </div>
              <h3 className="text-slate-800 font-bold mb-1 md:mb-2 text-sm md:text-base">{card.title}</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ChargingNetwork;