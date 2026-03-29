import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import HeroBg from '../../public/images/hero.png';
import CarsThumb from '../../public/images/thumbnail.jpg';
import { IoPaperPlaneOutline } from 'react-icons/io5';

const Hero = () => {
    return (
        <section
            className="relative min-h-screen w-full bg-cover bg-center flex items-center overflow-hidden"
            style={{ backgroundImage: `url(${HeroBg})` }}
        >
            {/* --- Overlay Layer 1: Global Darkening --- */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/60"></div>
            {/* --- Overlay Layer 2: Golden/Warm Glow behind text --- */}
            {/* This creates that soft, warm light coming from the left/center behind the text */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(212,175,55,0.15),transparent_80%)]"></div>


            {/* --- Left Side: Circle Slider & Vertical Scroll UI --- */}
            <div className="absolute left-0 bottom-0 top-0 w-20 lg:w-32 z-20 flex flex-col justify-center items-center ">
                <div className="flex flex-col gap-6  relative z-30 ">

                    {/* The Custom Active Circle (Crescent / Glowing Style) */}
                    <div className="relative flex items-center justify-center cursor-pointer group pb-8">
                        {/* Outer Glow/Ring - Using an absolute div to create the offset arc effect */}
                        <div className="absolute w-8 h-8 rounded-full border-r-3 border-b-5 border-white/80 -rotate-45 blur-[1px] group-hover:rotate-0 transition-transform duration-700"></div>

                        {/* The Solid Center Dot */}
                        <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                    </div>

                    {/* Inactive Dots */}
                    <div className="w-3 h-3 bg-white/40 rounded-full mx-auto hover:bg-white/60 transition-colors cursor-pointer mb-8"></div>
                    <div className="w-3 h-3 bg-white/40 rounded-full mx-auto hover:bg-white/60 transition-colors cursor-pointer mb-8"></div>
                </div>


            </div>
            {/* Vertical SCROLL + Mouse Icon (Bottom Left) */}
            <div className="absolute left-0 bottom-0 w-20 lg:w-32 z-20 flex flex-col justify-center items-center pb-2 ">

                <div className="flex flex-col items-center justify-center gap-12">
                    <div className="rotate-[-90deg] origin-center">
                        <span className="text-[8px] font-bold tracking-[0.4em] text-white/60 uppercase">Scroll</span>
                    </div>
                    <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-1.5 bg-white/60 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>

            {/* --- Main Content --- */}
            <div className="relative z-10 w-full h-full flex items-center px-10 lg:px-42">
                <div className="max-w-2xl">
                    {/* Headline: Left-aligned and tighter leading */}
                    <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-8 text-left">
                        FatCars — sale of new <br />
                        and pre-owned cars <br />
                        in Ufa.
                    </h1>

                    <p className="text-sm lg:text-base text-white/80 max-w-md mb-12 font-medium leading-relaxed text-left">
                        We will select the necessary <span className="text-white font-bold">car with a Title</span> within <br />
                        <span className="text-white font-bold">15 min.</span> or bring it to order in up to <span className="text-white font-bold">3 days</span>.
                    </p>

                    <button className="
  group relative flex items-center justify-between
  w-full max-w-[320px] h-[64px] px-10 
  bg-gradient-to-b from-[#92d950] to-[#71b536]
  text-white rounded-full 
  uppercase font-bold text-[13px] tracking-widest
  
  /* THE DOUBLE LAYER EFFECT */
  border-b-[8px] border-[#497a1d]
  
  /* DEPTH SHADOW */
  shadow-[0_8px_20px_rgba(136,217,88,0.4)]
  
  /* INTERACTION */
  hover:translate-y-[2px] hover:border-b-[2px]
  active:translate-y-[4px] active:border-b-0
  transition-all duration-150
">
                        <span className="flex-1 text-left leading-none">
                            Contact a Consultant
                        </span>
                        <IoPaperPlaneOutline className="text-[20px] opacity-90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-150" />
                    </button>
                </div>
            </div>

            {/* --- Bottom Right: Trade-In Card --- */}
            <div className="absolute bottom-0 right-6 z-10 flex">
                <div className="flex h-36 w-full max-w-lg shadow-2xl overflow-hidden group cursor-pointer">

                    {/* Glassmorphism Text Side */}
                    <div className="bg-black/10 backdrop-blur-xl p-10 flex flex-col justify-center border-t border-l border-white/10">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-[10px] text-[#6bcf50] font-bold tracking-tighter">01</span>
                            <div className="w-16 h-[1px] bg-[#6bcf50]"></div>
                            <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">03</span>
                        </div>
                        <h3 className="text-[12px] font-black tracking-[0.15em] text-white mb-2 uppercase">
                            TRADE-IN PROGRAM
                        </h3>
                        <p className="text-[11px] text-white/60 font-medium leading-snug">
                            We will accept your car as <br /> payment for a new vehicle
                        </p>
                    </div>

                    {/* Image & Arrow Section */}
                    <div className="w-64 flex relative">
                        <img
                            src={CarsThumb}
                            alt="Cars"
                            className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700"
                        />
                        {/* Signature Large Action Button */}
                        <div className="w-24 bg-[#6bcf50] h-full flex items-center justify-center text-white hover:bg-[#5dbd44] transition-colors">
                            <FiArrowRight className="text-4xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;