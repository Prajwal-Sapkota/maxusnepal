import React from "react";
import { motion } from "framer-motion";
import {
    FiInstagram,
    FiFacebook,
    FiYoutube,
    FiArrowUpRight,
    FiMapPin,
    FiPhone,
    FiMail,
} from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="relative bg-white border-t border-slate-200 pt-8 md:pt-10 pb-4 overflow-hidden">

            {/* Top Accent Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 md:w-40 h-px bg-gradient-to-r from-transparent via-[#C7A86D] to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 md:w-96 h-16 md:h-20 bg-[#C7A86D]/10 blur-3xl rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 pb-4">

                    {/* BRAND SECTION */}
                    <div className="lg:col-span-5 text-center lg:text-left">
                        <div className="flex justify-center lg:justify-start">
                            <div className="bg-slate-900/90 backdrop-blur-md p-2 md:p-3 rounded-xl inline-block shadow-lg">
                                <img
                                    src="/images/logo.png"
                                    alt="Logo"
                                    className="h-6 md:h-8 w-auto object-contain"
                                />
                            </div>
                        </div>
                        <div className="w-10 md:w-12 h-px bg-[#C7A86D] mt-4 md:mt-6 mb-4 md:mb-6 mx-auto lg:mx-0" />

                        {/* Social Icons */}
                        <div className="flex gap-4 md:gap-5 mt-6 md:mt-8 items-center justify-center lg:justify-start">
                            {[FiInstagram, FiFacebook, FiYoutube].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -4, scale: 1.1 }}
                                    className="text-slate-400 hover:text-[#C7A86D] transition duration-300"
                                >
                                    <Icon size={16} className="md:size-[18px]" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* LOCATION SECTION */}
                    <div className="lg:col-span-3 lg:border-l lg:border-slate-200 lg:pl-10 text-center lg:text-left">
                        <p className="text-[#C7A86D] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-4 md:mb-6">
                            Corporate Hub
                        </p>

                        <div className="flex gap-3 md:gap-4 items-start justify-center lg:justify-start">
                            <FiMapPin className="text-[#C7A86D] mt-1 flex-shrink-0" size={14} className="md:size-[16px]" />
                            <div>
                                <p className="text-slate-800 text-xs md:text-sm font-semibold">
                                    Paramount Motors Pvt. Ltd.
                                </p>
                                <p className="text-slate-500 text-[10px] md:text-xs mt-1 leading-relaxed">
                                    Naxal, Kathmandu, Nepal
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CONTACT SECTION */}
                    <div className="lg:col-span-4 lg:border-l lg:border-slate-200 lg:pl-10 text-center lg:text-left">
                        <p className="text-[#C7A86D] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-4 md:mb-6">
                            Direct Line
                        </p>

                        <div className="flex flex-col gap-4 md:gap-6 items-center lg:items-start">
                            <div className="flex gap-3 md:gap-4 items-center justify-center lg:justify-start">
                                <FiPhone className="text-[#C7A86D] flex-shrink-0" size={14} className="md:size-[16px]" />
                                <div>
                                    <p className="text-slate-900 text-sm md:text-base font-semibold">
                                        +977 1 4412345
                                    </p>
                                    <p className="text-slate-400 text-[8px] md:text-[9px] uppercase tracking-wider">
                                        Sales & Inquiries
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 md:gap-4 items-center justify-center lg:justify-start">
                                <FiMail className="text-[#C7A86D] flex-shrink-0" size={14} className="md:size-[16px]" />
                                <div>
                                    <p className="text-slate-800 text-xs md:text-sm">
                                        info@maxusnepal.com
                                    </p>
                                    <p className="text-slate-400 text-[8px] md:text-[9px] uppercase tracking-wider">
                                        Support
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="pt-4 md:pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
                    <p className="text-slate-400 text-[9px] md:text-[10px] tracking-wider text-center md:text-left">
                        © 2026 Maxus Nepal. All Rights Reserved.
                    </p>

                    <motion.a
                        href="https://saitsolution.com.np"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-1 text-slate-500 hover:text-[#C7A86D] transition text-[9px] md:text-[10px] group"
                    >
                        <span>Crafted by</span>
                        <span className="font-medium">S.A.I.T Solution Nepal</span>
                        <FiArrowUpRight
                            size={9}
                            className="md:size-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                    </motion.a>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C7A86D]/20 to-transparent" />

            {/* Soft Decorative Glow */}
            <div className="absolute bottom-0 right-0 w-48 md:w-72 h-48 md:h-72 bg-[#C7A86D]/10 blur-3xl rounded-full pointer-events-none" />
        </footer>
    );
};

export default Footer;