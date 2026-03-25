import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiZap, FiBattery, FiTrendingUp, FiArrowRight, FiCloud, FiStar } from "react-icons/fi";

const Ecosystem = () => {
    const sectionRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const features = [
        { icon: FiZap, value: "15+", label: "Charging Stations" },
        { icon: FiBattery, value: "30 min", label: "Fast Charge" },
        { icon: FiTrendingUp, value: "70%", label: "Lower Cost" },
        { icon: FiCloud, value: "0g", label: "Emissions" }
    ];

    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;

    return (
        <section ref={sectionRef} className={`relative w-full overflow-hidden bg-white ${isMobile ? 'min-h-[700px]' : isTablet ? 'min-h-[750px]' : 'h-screen'}`}>
            {/* 🌄 BACKGROUND LAYER */}
            <div className="absolute inset-0 z-0">
                {/* THE MOUNTAIN IMAGE */}
                <img
                    src="/images/bg1.png"
                    alt="Himalayan Background"
                    className="w-full h-full object-cover object-bottom"
                />

                {/* TEXT READABILITY GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent z-10" />

                {/* ROAD DEPTH GRADIENT */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent z-10" />
            </div>

            {/* 📦 CONTENT & VEHICLE */}
            <div className="relative z-30 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-6 sm:gap-8 md:gap-12 w-full items-center ${isMobile ? 'py-10' : isTablet ? 'py-12' : ''}`}>

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className={`backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl md:rounded-3xl ${isMobile ? 'p-5' : isTablet ? 'p-7' : 'p-8 lg:p-10'} max-w-lg mx-auto ${isMobile ? 'w-full' : ''}`}
                    >
                        <h2 className={`${isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-5xl md:text-6xl'} font-light text-white leading-tight text-center sm:text-left`}>
                            Drive the <br />
                            <span className="font-bold bg-gradient-to-r from-[#C7A86D] to-[#E5B85C] bg-clip-text text-transparent">
                                Himalayan Roads
                            </span>
                        </h2>

                        <p className={`text-white/70 ${isMobile ? 'text-sm' : isTablet ? 'text-sm' : 'text-base'} mt-4 leading-relaxed max-w-sm text-center sm:text-left mx-auto sm:mx-0`}>
                            Experience silence, power, and sustainability engineered for Nepal's terrain.
                        </p>

                        {/* Stats - Hidden on mobile, visible on tablet and desktop */}
                        {!isMobile && (
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-6 md:mt-8 lg:mt-10">
                                {features.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 sm:gap-3">
                                        <div className={`${isTablet ? 'w-9 h-9' : 'w-8 h-8 md:w-10 md:h-10'} bg-white/10 rounded-xl flex items-center justify-center`}>
                                            <item.icon className={`text-[#C7A86D] ${isTablet ? 'text-base' : 'text-base md:text-lg'}`} />
                                        </div>
                                        <div>
                                            <div className={`text-white font-bold ${isTablet ? 'text-sm' : 'text-xs md:text-sm'}`}>{item.value}</div>
                                            <div className={`text-white/40 ${isTablet ? 'text-[9px]' : 'text-[8px] md:text-[10px]'} uppercase tracking-wider`}>{item.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <button className={`mt-6 md:mt-8 lg:mt-10 ${isMobile ? 'px-5 py-2.5 text-[11px]' : isTablet ? 'px-7 py-3 text-xs' : 'px-10 py-4 text-xs'} bg-[#C7A86D] hover:bg-[#D4B982] transition-colors text-black rounded-full flex items-center gap-2 sm:gap-3 font-bold uppercase tracking-widest shadow-xl shadow-black/20 mx-auto sm:mx-0`}>
                            Explore Network <FiArrowRight className={`${isMobile ? 'text-xs' : isTablet ? 'text-sm' : 'text-sm md:text-base'}`} />
                        </button>
                    </motion.div>

                    {/* RIGHT SIDE - VEHICLE (Perfectly Responsive) */}
                    <div className={`relative ${isMobile ? 'h-[180px]' : isTablet ? 'h-[380px]' : 'h-full flex items-end'} ${isMobile ? 'mt-4' : isTablet ? 'mt-6' : ''}`}>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className={`
                                ${isMobile ? 'relative w-full right-[-18vw] bottom-[-10vw] sm:right-[-18vw] sm:bottom-[-12vw]' : ''}
                                ${isTablet ? 'relative w-full md:right-[-15vw] md:bottom-[10vw]' : ''}
                                ${!isMobile && !isTablet ? 'lg:absolute lg:right-[-23vw] lg:bottom-[-23vh]' : ''}
                                z-20 pointer-events-none
                            `}
                            style={{
                                ...(!isMobile && !isTablet && {
                                    width: '190%',
                                    maxWidth: 'none'
                                })
                            }}
                        >
                            {/* ROAD SHADOW */}
                            <div className={`
                                absolute bg-black/60 rounded-[100%] opacity-90
                                ${isMobile ? 'bottom-0 left-[5%] w-[90%] h-16 blur-[70px]' : ''}
                                ${isTablet ? 'bottom-0 left-[8%] w-[84%] h-20 blur-[80px]' : ''}
                                ${!isMobile && !isTablet ? 'bottom-10 left-[15%] w-[70%] h-20 blur-[80px]' : ''}
                            `} />

                            <img
                                src="/images/eterron9-1.png"
                                alt="Maxus eTerron 9"
                                className={`
                                    object-contain relative z-10 brightness-105 contrast-[1.02] drop-shadow-[0_45px_100px_rgba(0,0,0,0.5)]
                                    ${isMobile ? 'w-[160%] max-w-none -ml-[30%] -mb-8' : ''}
                                    ${isTablet ? 'w-[150%] max-w-none -ml-[25%] -mb-12' : ''}
                                    ${!isMobile && !isTablet ? 'w-full h-auto' : ''}
                                `}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Subtle floating particles for atmosphere */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {[...Array(isMobile ? 10 : isTablet ? 15 : 20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: Math.random() * 100 + "%", y: "110%" }}
                        animate={{ y: "-10%" }}
                        transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
                        className="absolute w-0.5 h-0.5 bg-white/10 rounded-full"
                    />
                ))}
            </div>
        </section>
    );
};

export default Ecosystem;