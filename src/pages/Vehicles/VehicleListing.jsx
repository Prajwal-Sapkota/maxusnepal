import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiChevronRight, FiChevronLeft, FiZap, FiBattery, FiTrendingUp } from 'react-icons/fi';
import vehicleData from '../../data/vehicles.json';

const VehicleListing = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const vehicles = vehicleData.vehicles;
  const totalSlides = vehicles.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <div className="bg-[#f5feff] font-sans min-h-screen">
      
      {/* Hero Section - Listing Page */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/fleet-hero.jpg" 
            alt="Maxus Fleet"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f5feff] via-[#f5feff]/80 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#6bcf50]" />
            <span className="text-[#6bcf50] text-xs tracking-[0.3em] uppercase font-bold">The Fleet</span>
            <div className="w-8 h-px bg-[#6bcf50]" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#1a2b3c] tracking-tighter">
            Choose Your <span className="text-[#6bcf50]">Electric Companion</span>
          </h1>
          <p className="text-[#7c8b9a] mt-4 max-w-xl mx-auto">
            Experience the future of mobility with our revolutionary electric fleet
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-[#1a2b3c] text-sm font-medium">
            Total vehicles: <span className="text-2xl font-black">{vehicles.length}</span>
          </div>
          
          <div className="flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] rounded-full transition-all ${
                activeTab === 'all' ? 'bg-[#6bcf50] text-white shadow-md' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              All Models
            </button>
            <button
              onClick={() => setActiveTab('new')}
              className={`px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] rounded-full transition-all ${
                activeTab === 'new' ? 'bg-[#6bcf50] text-white shadow-md' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              New Arrivals
            </button>
          </div>
        </div>
      </div>

      {/* Vehicle Grid */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, idx) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gray-50">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {vehicle.badge && (
                    <div className="absolute top-4 left-4 bg-[#6bcf50] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      {vehicle.badge}
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[#1a2b3c]">{vehicle.name}</h3>
                    <span className="text-[#6bcf50] font-black text-lg">{vehicle.price}</span>
                  </div>
                  <p className="text-[#7c8b9a] text-sm mb-4">{vehicle.type}</p>
                  
                  {/* Quick Specs */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-gray-100 mb-4">
                    {vehicle.specs.slice(0, 3).map((spec, i) => (
                      <div key={i} className="text-center">
                        <div className="text-[10px] text-[#1a2b3c]/40 uppercase tracking-wider">{spec.label}</div>
                        <div className="text-sm font-bold text-[#1a2b3c]">{spec.value}<span className="text-[9px]">{spec.unit}</span></div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/vehicles/${vehicle.slug}`}
                    className="inline-flex items-center gap-2 text-[#6bcf50] text-xs font-black uppercase tracking-wider hover:gap-3 transition-all"
                  >
                    Explore Details <FiArrowRight className="text-sm" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-10 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#1a2b3c] mb-4">
            Not sure which model suits you?
          </h2>
          <p className="text-[#7c8b9a] mb-8 max-w-lg mx-auto">
            Our experts will help you choose the perfect electric vehicle for your needs
          </p>
          <button className="px-8 py-4 bg-[#6bcf50] text-white rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-[#5dbd44] transition shadow-lg inline-flex items-center gap-3">
            Get Consultation <FiArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default VehicleListing;