import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";

const ScrollTopButton = () => {
    const { pathname } = useLocation();
    const [visible, setVisible] = useState(false);

    // Scroll to top immediately on page load & route change
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [pathname]);

    // Force scroll to top on initial page load/reload
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }, 10);
    }, []);

    // Show button when scrolled down
    useEffect(() => {
        const toggleVisibility = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 p-3 md:p-4 rounded-full shadow-xl transition-all duration-500 cursor-pointer group
                bg-gradient-to-r from-[#C7A86D] to-[#B27D48] text-white hover:from-[#B27D48] hover:to-[#9B6E3E] hover:scale-110 hover:shadow-2xl
                ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90 pointer-events-none"}`}
            aria-label="Back to top"
        >
            <div className="relative">
                <FaChevronUp className="text-base md:text-lg transition-transform duration-300 group-hover:-translate-y-1" />
                {/* Optional: Add a subtle ring effect */}
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
        </button>
    );
};

export default ScrollTopButton;