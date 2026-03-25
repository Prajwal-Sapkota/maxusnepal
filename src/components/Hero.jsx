import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Scroll effects
    const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.12]), {
        damping: 45,
        stiffness: 130,
        mass: 0.7
    });

    const imageY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 70]), {
        damping: 45,
        stiffness: 130,
        mass: 0.7
    });

    const contentOpacity = useSpring(useTransform(scrollYProgress, [0, 0.4], [1, 0]), {
        damping: 40,
        stiffness: 100
    });

    // Mouse tracking for 3D
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const imageGlowX = useMotionValue(0.5);
    const imageGlowY = useMotionValue(0.5);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                const x = ((e.clientX - rect.left) / rect.width - 0.5) * 1.2;
                const y = ((e.clientY - rect.top) / rect.height - 0.5) * 1.2;
                mouseX.set(x);
                mouseY.set(y);
                setCursorPosition({ x: e.clientX, y: e.clientY });

                const imgRect = document.getElementById('hero-image')?.getBoundingClientRect();
                if (imgRect) {
                    const glowX = (e.clientX - imgRect.left) / imgRect.width;
                    const glowY = (e.clientY - imgRect.top) / imgRect.height;
                    imageGlowX.set(glowX);
                    imageGlowY.set(glowY);
                }
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY, imageGlowX, imageGlowY]);

    const textX = useSpring(mouseX, { damping: 28, stiffness: 160, mass: 0.4 });
    const textY = useSpring(mouseY, { damping: 28, stiffness: 160, mass: 0.4 });
    const imageTiltX = useSpring(mouseX, { damping: 35, stiffness: 90 });
    const imageTiltY = useSpring(mouseY, { damping: 35, stiffness: 90 });

    // Text
    const mainText = "ELECTRIC REVOLUTION";
    const mainWords = mainText.split(" ");

    return (
        <section
            ref={ref}
            className="relative h-screen w-full overflow-hidden bg-black"
        >
            {/* Enhanced Mouse Cursor - Only on large screens */}
            <motion.div
                animate={{
                    x: cursorPosition.x - 250,
                    y: cursorPosition.y - 250,
                    scale: isHovering ? 1.2 : 1
                }}
                transition={{ type: "spring", damping: 18, stiffness: 70, mass: 0.6 }}
                className="fixed top-0 left-0 w-[500px] h-[500px] pointer-events-none z-50 hidden lg:block"
            >
                <div className="absolute inset-0 bg-gradient-radial from-white/15 via-white/5 to-transparent rounded-full blur-3xl" />
            </motion.div>

            {/* Background Image with Cinematic Effects */}
            <motion.div
                style={{
                    scale,
                    y: imageY,
                }}
                className="absolute inset-0 will-change-transform"
            >
                <div className="relative w-full h-full">
                    {/* Main Image with Dramatic Entrance */}
                    <motion.div
                        id="hero-image"
                        initial={{ scale: 1.4, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            duration: 2.2,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.1
                        }}
                        style={{
                            scale: useTransform(imageTiltX, (v) => 1 + v * 0.015),
                            rotateX: useTransform(imageTiltY, (v) => v * 1.2),
                            rotateY: useTransform(imageTiltX, (v) => v * -1.2),
                        }}
                        className="relative w-full h-full"
                    >
                        <img
                            src="/images/hero1.jpeg"
                            alt="Maxus"
                            className="w-full h-full object-cover object-[72%_center] md:object-[72%_center] object-[65%_center]"
                        />

                        {/* Dynamic Spotlight - Enhanced */}
                        <motion.div
                            style={{
                                background: useMotionTemplate`radial-gradient(circle at ${imageGlowX.get() * 100}% ${imageGlowY.get() * 100}%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 30%, transparent 70%)`,
                            }}
                            className="absolute inset-0 pointer-events-none hidden md:block"
                        />
                    </motion.div>

                    {/* Gradient Overlay - Smooth */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.4, delay: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent md:from-black/85 md:via-black/50 md:to-transparent"
                    />

                    {/* Light Sweep - Cinematic (Hidden on mobile for performance) */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1.6, delay: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none hidden md:block"
                    />

                    {/* Second Sweep - Delayed (Hidden on mobile) */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1.6, delay: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none hidden md:block"
                    />
                </div>
            </motion.div>

            {/* Floating Particles - Reduced for mobile performance */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Desktop: 150 particles, Mobile: 60 particles */}
                {[...Array(window.innerWidth >= 768 ? 150 : 60)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: Math.random() * 0.6 + 0.1
                        }}
                        animate={{
                            y: [null, -150, -300],
                            x: [null, Math.random() * 80 - 40, Math.random() * 150 - 75],
                            opacity: [0, 0.25, 0]
                        }}
                        transition={{
                            duration: Math.random() * 12 + 8,
                            repeat: Infinity,
                            delay: Math.random() * 10,
                            ease: "linear"
                        }}
                        className="absolute w-0.5 h-0.5 bg-white/40 rounded-full"
                        style={{ left: `${Math.random() * 100}%` }}
                    />
                ))}
            </div>

            {/* Main Content - Responsive */}
            <div ref={containerRef} className="relative h-full w-full max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center h-full">

                    <motion.div
                        style={{
                            x: useTransform(textX, (v) => v * -15),
                            y: useTransform(textY, (v) => v * -10),
                            opacity: contentOpacity,
                        }}
                        className="relative z-10 max-w-3xl text-left w-full"
                    >
                        {/* Elegant Line with Animation */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 70, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="h-[1px] bg-gradient-to-r from-white to-transparent mb-6 md:mb-10"
                        />

                        {/* Main Heading - Responsive sizing */}
                        <div className="overflow-hidden">
                            {mainWords.map((word, wordIndex) => (
                                <motion.div
                                    key={wordIndex}
                                    initial={{ y: 150, opacity: 0, rotateX: 45 }}
                                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                    transition={{
                                        delay: 0.5 + wordIndex * 0.12,
                                        duration: 0.9,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className="inline-block mr-3 md:mr-5 overflow-hidden"
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight inline-block">
                                        {word}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Subheading - Responsive */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="mt-4 md:mt-6"
                        >
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                Begins Now
                            </span>
                        </motion.div>

                        {/* Short Description - Responsive */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.1 }}
                            className="text-white/40 text-sm sm:text-base md:text-lg max-w-md leading-relaxed mt-4 md:mt-6"
                        >
                            Zero emissions. Infinite possibilities.
                        </motion.p>

                        {/* CTA Button - Responsive */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.3 }}
                            className="mt-6 md:mt-10"
                        >
                            <motion.button
                                whileHover={{ scale: 1.03, x: 12 }}
                                whileTap={{ scale: 0.98 }}
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                                className="group flex items-center gap-3 md:gap-4 text-white/40 hover:text-white transition-all duration-500"
                            >
                                <span className="text-[10px] sm:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase font-light">
                                    Discover More
                                </span>
                                <motion.div
                                    animate={{
                                        x: isHovering ? [0, 8, 0] : 0,
                                    }}
                                    transition={{ duration: 0.7, repeat: isHovering ? Infinity : 0, ease: "easeInOut" }}
                                >
                                    <FiArrowRight className="text-sm sm:text-base" />
                                </motion.div>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator - Responsive */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-10"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-1 md:gap-2"
                >
                    <div className="w-[1px] h-6 md:h-10 bg-white/20 overflow-hidden">
                        <motion.div
                            animate={{ y: ["-100%", "100%"] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full h-2 bg-white/50"
                        />
                    </div>
                    <span className="text-[6px] md:text-[8px] text-white/30 tracking-[0.2em] uppercase">Scroll</span>
                </motion.div>
            </motion.div>


        </section>
    );
};

export default Hero;