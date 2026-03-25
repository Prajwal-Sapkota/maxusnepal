import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiCpu, FiShield, FiWind, FiZap, FiArrowRight } from "react-icons/fi";

const dnaPoints = [
    {
        icon: <FiCpu />,
        title: "Intelligence",
        desc: "Built on SAIC's global software architecture. Every Maxus learns from your driving habits to optimize energy and performance.",
        xOffset: -420,
        yOffset: -180,
        delay: 0.1,
        // Mobile positions
        startX: -60,
        startY: -200,
        endX: -100,
        endY: -130,
    },
    {
        icon: <FiZap />,
        title: "Ambition",
        desc: "From the streets of Kathmandu to the heights of Mustang—leading Nepal's transition to zero-emission mobility.",
        xOffset: 420,
        yOffset: -180,
        delay: 0.2,
        startX: 60,
        startY: -200,
        endX: 100,
        endY: -240,
    },
    {
        icon: <FiShield />,
        title: "Trust",
        desc: "Euro NCAP 5-star safety isn't an option; it's the baseline for every family and commercial journey.",
        xOffset: -420,
        yOffset: 180,
        delay: 0.3,
        startX: -60,
        startY: 200,
        endX: -100,
        endY: 130,
    },
    {
        icon: <FiWind />,
        title: "Aerodynamics",
        desc: "Crafted with the lowest drag coefficients in class to maximize range without compromising internal space.",
        xOffset: 420,
        yOffset: 180,
        delay: 0.4,
        startX: 60,
        startY: 200,
        endX: 100,
        endY: 220,
    }
];

const BrandDNA = () => {
    const sectionRef = useRef(null);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

    const isMobile = windowWidth < 768;

    // Smooth scroll animation - faster trigger on mobile
    const expansion = useSpring(useTransform(scrollYProgress, [isMobile ? 0.1 : 0.2, isMobile ? 0.3 : 0.5], [0, 1]), {
        stiffness: isMobile ? 65 : 55,
        damping: isMobile ? 28 : 25,
        mass: isMobile ? 0.7 : 0.8
    });

    const vehicleScale = useSpring(useTransform(scrollYProgress, [0.2, 0.5], [0.85, 1]), {
        stiffness: 50,
        damping: 22,
        mass: 0.8
    });

    const glowOpacity = useSpring(useTransform(scrollYProgress, [0.3, 0.6], [0, 0.6]), {
        stiffness: 55,
        damping: 25
    });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = sectionRef.current?.getBoundingClientRect();
            if (rect) {
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                setMousePosition({ x: x * 12, y: y * 8 });
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Prevent cards from shrinking - faster lock on mobile
    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((latest) => {
            if (latest > (isMobile ? 0.3 : 0.5) && expansion.get() < 1) {
                expansion.set(1);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress, expansion, isMobile]);

    return (
        <section ref={sectionRef} className="relative bg-gradient-to-b from-[#FDFCFB] to-[#F8F6F2] pt-24 pb-36 px-4 md:px-6 lg:px-12 overflow-hidden min-h-screen">

            {/* Background Tech Grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />

            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                        x: [0, 50, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#C7A86D]/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                        x: [0, -40, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{ duration: 14, repeat: Infinity, delay: 2, ease: "linear" }}
                    className="absolute bottom-20 left-20 w-[280px] md:w-[450px] h-[280px] md:h-[450px] bg-[#C7A86D]/5 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-12 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-flex items-center gap-3 mb-4"
                    >
                        <div className="w-8 h-px bg-[#C7A86D]" />
                        <span className="text-[#C7A86D] text-xs tracking-[0.3em] uppercase font-bold">The Blueprint</span>
                        <div className="w-8 h-px bg-[#C7A86D]" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-slate-800"
                    >
                        Leading{" "}
                        <span className="font-bold bg-gradient-to-r from-[#C7A86D] to-[#9B7B4C] bg-clip-text text-transparent">
                            Technology
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="text-slate-500 py-3 md:py-4 max-w-xl mx-auto text-sm md:text-base"
                    >
                        Four pillars defining the future of mobility
                    </motion.p>
                </div>

                {/* The Interactive Center Stage */}
                <div className="relative h-[550px] md:h-[750px] flex items-center justify-center">

                    {/* DNA Cards */}
                    {dnaPoints.map((point, i) => {
                        if (isMobile) {
                            // Mobile: Cards expand from top/bottom positions
                            const startX = point.startX;
                            const startY = point.startY;
                            const endX = point.endX;
                            const endY = point.endY;

                            return (
                                <motion.div
                                    key={i}
                                    style={{
                                        x: useTransform(expansion, [0, 1], [startX, endX]),
                                        y: useTransform(expansion, [0, 1], [startY, endY]),
                                        opacity: expansion,
                                        scale: useTransform(expansion, [0, 1], [0.85, 1]),
                                        zIndex: useTransform(expansion, [0, 0.6, 1], [5, 25, 30])
                                    }}
                                    onMouseEnter={() => setHoveredCard(i)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    className="absolute w-[200px] cursor-pointer"
                                >
                                    <motion.div
                                        animate={{
                                            scale: hoveredCard === i ? 1.02 : 1,
                                            y: hoveredCard === i ? -3 : 0,
                                        }}
                                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        className={`relative p-3 bg-white/95 backdrop-blur-xl border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group ${hoveredCard === i ? 'border-[#C7A86D]' : 'border-slate-100'
                                            }`}
                                    >
                                        {/* Background Glow on Hover */}
                                        <motion.div
                                            animate={{ opacity: hoveredCard === i ? 0.3 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0 bg-gradient-to-br from-[#C7A86D]/10 to-transparent rounded-lg"
                                        />

                                        <div className="flex items-center gap-2 relative z-10">
                                            <motion.div
                                                animate={{ rotate: hoveredCard === i ? 360 : 0 }}
                                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                                className="p-1.5 rounded-lg bg-slate-800 group-hover:bg-[#C7A86D] transition-colors"
                                            >
                                                <div className="text-base text-[#C7A86D] group-hover:text-black transition-colors">
                                                    {point.icon}
                                                </div>
                                            </motion.div>
                                            <h4 className="text-xs font-bold text-slate-800 tracking-tight">
                                                {point.title}
                                            </h4>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="mt-2 h-0.5 w-full bg-slate-100 rounded-full overflow-hidden relative z-10">
                                            <motion.div
                                                animate={{ width: hoveredCard === i ? "100%" : "0%" }}
                                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                                className="h-full bg-gradient-to-r from-[#C7A86D] to-[#9B7B4C] rounded-full"
                                            />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        } else {
                            // Desktop: Original expansion from center
                            return (
                                <motion.div
                                    key={i}
                                    style={{
                                        x: useTransform(expansion, [0, 1], [0, point.xOffset]),
                                        y: useTransform(expansion, [0, 1], [0, point.yOffset]),
                                        opacity: expansion,
                                        scale: useTransform(expansion, [0, 1], [0.7, 1]),
                                        zIndex: useTransform(expansion, [0, 0.6, 1], [5, 25, 30])
                                    }}
                                    onMouseEnter={() => setHoveredCard(i)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    className="absolute w-[300px] md:w-[340px] cursor-pointer"
                                >
                                    <motion.div
                                        animate={{
                                            scale: hoveredCard === i ? 1.02 : 1,
                                            y: hoveredCard === i ? -5 : 0,
                                        }}
                                        transition={{ duration: 0.2 }}
                                        className={`relative p-5 bg-white/95 backdrop-blur-xl border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group ${hoveredCard === i ? 'border-[#C7A86D]' : 'border-slate-100'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4 relative z-10">
                                            <motion.div
                                                animate={{ rotate: hoveredCard === i ? 360 : 0 }}
                                                transition={{ duration: 0.4 }}
                                                className="p-2.5 rounded-xl bg-slate-800 group-hover:bg-[#C7A86D] transition-colors"
                                            >
                                                <div className="text-xl text-[#C7A86D] group-hover:text-black transition-colors">
                                                    {point.icon}
                                                </div>
                                            </motion.div>
                                            <h4 className="text-base font-bold text-slate-800 tracking-tight">
                                                {point.title}
                                            </h4>
                                        </div>
                                        <p className="text-sm text-slate-600 leading-relaxed font-light mt-3 relative z-10">
                                            {point.desc}
                                        </p>
                                        <div className="mt-3 h-0.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <motion.div
                                                animate={{ width: hoveredCard === i ? "100%" : "0%" }}
                                                transition={{ duration: 0.3 }}
                                                className="h-full bg-gradient-to-r from-[#C7A86D] to-[#9B7B4C] rounded-full"
                                            />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        }
                    })}

                    {/* CENTRAL VEHICLE */}
                    <motion.div
                        style={{
                            scale: vehicleScale,
                            zIndex: 40
                        }}
                        animate={{
                            y: mousePosition.y * 0.1,
                        }}
                        transition={{ type: "spring", stiffness: 120, damping: 28, mass: 0.8 }}
                        className="relative"
                    >
                        {/* Pulsing Aura */}
                        <motion.div
                            animate={{
                                scale: [1, 1.15, 1],
                                opacity: [0.15, 0.4, 0.15]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-[-40px] md:inset-[-70px] bg-gradient-to-r from-[#C7A86D]/20 to-transparent rounded-full blur-[40px] md:blur-[70px]"
                        />

                        <motion.div
                            style={{ opacity: glowOpacity }}
                            className="absolute inset-[-20px] md:inset-[-35px] bg-[#C7A86D]/15 rounded-full blur-xl md:blur-2xl"
                        />

                        <img
                            src="/images/topview.png"
                            alt="Vehicle Core"
                            className="w-[200px] md:w-[300px] lg:w-[400px] drop-shadow-[0_30px_50px_rgba(0,0,0,0.12)] md:drop-shadow-[0_50px_80px_rgba(0,0,0,0.15)] relative z-10"
                        />
                    </motion.div>
                </div>

                {/* Mobile: Full description cards below */}
                {isMobile && (
                    <div className="mt-8 grid grid-cols-1 gap-3">
                        {dnaPoints.map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-white/95 backdrop-blur-xl border border-slate-100 rounded-xl p-3 shadow-sm"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="p-1.5 rounded-lg bg-slate-800">
                                        <div className="text-base text-[#C7A86D]">{point.icon}</div>
                                    </div>
                                    <h4 className="text-sm font-bold text-slate-800">{point.title}</h4>
                                </div>
                                <p className="text-[11px] text-slate-600 leading-relaxed">{point.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default BrandDNA;