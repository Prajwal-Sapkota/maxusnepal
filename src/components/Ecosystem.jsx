import React from 'react';
import { FiChevronDown, FiChevronRight, FiPhone } from "react-icons/fi";

const BankLogo = ({ name }) => (
    <div className="flex items-center gap-2 text-[#2c323a]/60 text-[10px] font-bold grayscale opacity-70 hover:grayscale-0 transition-all cursor-default">
        <div className="w-4 h-4 bg-black/10 rounded-sm" />
        {name}
    </div>
);

const SelectField = ({ label }) => (
    <div className="relative">
        <select className="w-full h-[54px] bg-[#393f4a] border border-white/5 rounded-full px-6 text-white/40 text-[13px] font-light appearance-none outline-none focus:border-[#b2f55d]/30 transition-colors cursor-pointer">
            <option>{label}</option>
        </select>
        <FiChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" />
    </div>
);

const Ecosystem = () => {
    return (
        <section className="relative w-full min-h-[800px] bg-[#f4f8fa] font-sans pt-24 pb-20 overflow-hidden">

            {/* 1. TOP CONTENT */}
            <div className="max-w-[1500px] mx-auto pl-10 lg:pl-36 mb-16 text-left">
                <div className="max-w-2xl">
                    <h1 className="text-[#1a2b3c] text-4xl lg:text-[48px] font-bold leading-[1.1] tracking-tight mb-2">
                        Now buying a car
                    </h1>
                    <h2 className="text-[#1a2b3c] text-3xl lg:text-[40px] font-light mb-10">
                        on credit is truly profitable!
                    </h2>
                    <p className="text-[#7c8b9a] text-[15px] font-light leading-relaxed max-w-lg">
                        FATCARS provides the opportunity to purchase a new car on credit under the most favorable conditions.
                    </p>
                </div>
            </div>

            {/* 2. THE INFO GRID BOXES */}
            <div className="max-w-[1500px] mx-auto pl-10 lg:pl-36 relative z-10 mb-[50px]">
                <div className="w-full lg:w-[50%] flex flex-wrap lg:flex-nowrap gap-px bg-transparent shadow-2xl">
                    <div className="flex-1 min-w-[200px] bg-white p-8 lg:p-10 flex flex-col justify-between h-[200px]">
                        <span className="text-[#1a2b3c] text-[11px] uppercase tracking-wider font-semibold">Credit interest rate</span>
                        <div className="flex items-end justify-start">
                            <span className="text-[#d9e2e9] text-[84px] font-light leading-[0.8] tracking-tighter">8,9</span>
                            <span className="text-[#d9e2e9] text-[40px] font-light ml-1 leading-none">%</span>
                        </div>
                    </div>
                    <div className="flex-[0.8] min-w-[150px] bg-[#2c323a] p-8 lg:p-10 flex flex-col justify-between h-[200px]">
                        <div className="flex items-start">
                            <span className="text-white text-[72px] font-light leading-[0.7] opacity-60">0</span>
                            <span className="text-white text-[14px] font-medium ml-1 mt-2 opacity-60 uppercase">USD</span>
                        </div>
                        <span className="text-white text-[13px] font-light leading-snug max-w-[120px]">Credit with zero down payment</span>
                    </div>
                    <div className="flex-1 min-w-[200px] bg-[#dbebf5] p-8 lg:p-10 flex flex-col justify-center gap-4 h-[200px]">
                        <span className="text-[#1a2b3c] text-[64px] font-light leading-none">%</span>
                        <span className="text-[#1a2b3c] text-[13px] font-light leading-snug max-w-[160px]">No hidden fees for car credit purchases</span>
                    </div>
                </div>
            </div>

            <div className="max-w-[1500px] mx-auto px-10 lg:px-24 relative">
                <div className="absolute -top-[550px] right-20 w-[45vw] max-w-[480px] z-50 pointer-events-none">
                    <img
                        src="/images/cartop.png"
                        alt="Green SUV Top View"
                        className="w-full h-auto drop-shadow-[28px_18px_38px_rgba(0,0,0,0.7)]"
                    />
                </div>
            </div>
            {/* 4. THE APPLICATION BOX */}
            <div className="max-w-[1500px] mx-auto pl-10 lg:pl-36 pr-10 lg:pr-24 relative z-40 mt-32">
                <div className="w-full grid grid-cols-1 lg:grid-cols-11  rounded-sm overflow-hidden">

                    {/* COL 1: Partners (Green) */}
                    <div className="lg:col-span-2 bg-gradient-to-b from-[#93db53] to-[#70b533] p-4 flex flex-col justify-between relative z-10">
                        <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                            <BankLogo name="Sberbank" />
                            <BankLogo name="Gazprombank" />
                            <BankLogo name="Rosselkhozbank" />
                            <BankLogo name="VT824" />
                            <BankLogo name="Alfa-Bank" />
                            <BankLogo name="URALSIB" />
                            <BankLogo name="Otkritie" />
                            <BankLogo name="Absolute Bank" />
                        </div>

                        {/* Reduced padding-top and adjusted font sizes to shrink the container height */}
                        <div className="">
                            <p className="text-white text-[12px] font-light max-w-[140px] opacity-90 leading-tight text-left pt-12">
                                Probability of credit approval in 30 minutes
                            </p>
                            <div className="flex items-end">
                                {/* Reduced from 150px to 90px */}
                                <span className="text-white text-9xl font-bold tracking-tighter -ml-1">99</span>
                                {/* Reduced from 120px to 40px */}
                                <span className="text-white text-9xl font-light ml-1">%</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 bg-[#25242b] p-10 flex flex-col justify-center gap-8 relative z-40 overflow-hidden">

                        {/* --- THE LARGE BACKGROUND SHAPES --- */}
                        <div
                            className="absolute inset-0 opacity-20 pointer-events-none select-none z-0"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='800' viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2388d958' stroke-width='5.5' stroke-opacity='0.3'%3E%3C!-- Rounded hexagon shape --%3E%3Cpath d='M400 80 L520 160 L520 320 L400 400 L280 320 L280 160 Z' stroke='%2388d958' stroke-opacity='0.25' /%3E%3C!-- Large rounded rectangle with gradient effect --%3E%3Crect x='520' y='450' width='220' height='280' rx='50' stroke='%2388d958' stroke-opacity='0.2' /%3E%3C!-- Circle with dashed border --%3E%3Ccircle cx='180' cy='580' r='95' stroke='%2388d958' stroke-opacity='0.3' stroke-dasharray='6 6' /%3E%3C!-- Organic blob shape --%3E%3Cpath d='M620 120 C650 100, 680 130, 670 160 C660 190, 680 220, 660 240 C640 260, 610 250, 590 230 C570 210, 580 180, 590 150 C600 120, 600 130, 620 120Z' stroke='%2388d958' stroke-opacity='0.2' fill='none' /%3E%3C!-- Modern abstract shape --%3E%3Crect x='50' y='280' width='180' height='180' rx='30' transform='rotate(25 140 370)' stroke='%2388d958' stroke-opacity='0.25' /%3E%3C!-- Small decorative circles --%3E%3Ccircle cx='680' cy='80' r='25' stroke='%2388d958' stroke-opacity='0.35' /%3E%3Ccircle cx='70' cy='120' r='18' stroke='%2388d958' stroke-opacity='0.3' /%3E%3Ccircle cx='750' cy='650' r='32' stroke='%2388d958' stroke-opacity='0.25' /%3E%3C!-- Soft wave line --%3E%3Cpath d='M50 550 Q150 520, 250 540 T450 530 T650 540' stroke='%2388d958' stroke-opacity='0.2' fill='none' stroke-width='1.8' /%3E%3C/g%3E%3C/svg%3E")`,
                                backgroundSize: '1000px 1000px',
                                backgroundPosition: '-150px -150px',
                                backgroundRepeat: 'no-repeat'
                            }}
                        />

                        {/* --- FORM CONTENT (Wrapped in relative z-10 to stay above shapes) --- */}
                        <div className="relative z-10 flex flex-col gap-8">
                            <div className="flex items-center gap-4 text-white/90">
                                <div className="w-10 h-[1px] bg-[#b2f55d]" />
                                <span className="text-[15px] font-light tracking-wide">
                                    Fill out the form and get a decision in 30 minutes
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                                <SelectField label="Select Make" />
                                <SelectField label="Employment type" />
                                <SelectField label="Select Model" />
                                <input type="text" placeholder="First payment" className="h-[50px] bg-[#393f4a] border border-white/5 rounded-full px-6 text-white/50 text-[13px] outline-none focus:ring-1 focus:ring-[#b2f55d]/30" />
                                <SelectField label="Configuration" />
                                <input type="text" placeholder="City of registration" className="h-[50px] bg-[#393f4a] border border-white/5 rounded-full px-6 text-white/50 text-[13px] outline-none focus:ring-1 focus:ring-[#b2f55d]/30" />

                                <div className="relative">
                                    <input type="text" placeholder="+7 (___) ___ - __ - __" className="w-full h-[50px] bg-[#393f4a] border border-white/5 rounded-full px-10 text-white text-[13px] outline-none" />
                                    <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                                </div>

                                {/* Updated Button to match image_877486.png */}
                                <button className="h-[50px]  bg-gradient-to-b from-[#90d950] to-[#75b53a] hover:bg-[#a1e04c] text-white font-extrabold uppercase tracking-[0.2em] text-[10px] rounded-full flex items-center justify-center gap-3 transition-all shadow-[0_10px_20px_rgba(178,245,93,0.2)]">
                                    SUBMIT APPLICATION
                                    <FiChevronRight className="text-lg" />
                                </button>
                            </div>

                            <div className="flex items-start gap-3">
                                <input type="checkbox" id="consent" className="mt-1 accent-[#b2f55d]" defaultChecked />
                                <label htmlFor="consent" className="text-white/30 text-[10px] font-light leading-relaxed cursor-pointer">
                                    I agree to the processing of my personal data...
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* COL 3: Empty Gray Space */}
                    <div className="hidden lg:block lg:col-span-4 bg-[#25242b]" />

                </div>
            </div>
        </section>
    );
};

export default Ecosystem;