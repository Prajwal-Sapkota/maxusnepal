// components/MaxusNepal/Contact/ContactInfoCards.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiUser, FiMessageSquare, FiShield } from 'react-icons/fi';

const ContactInfo = () => {
  return (
    <section className="relative pt-32 bg-[#f5feff] overflow-hidden text-gray-700">
      
      {/* Background Aesthetic: Oversized Vertical Text - Hidden on mobile */}
      <div className="absolute left-10 top-0 bottom-0 flex items-center pointer-events-none hidden lg:flex">
        <h1 className="text-[15vw] font-black text-white/[0.02] rotate-90 origin-center leading-none tracking-tighter">
          CONTACT_US
        </h1>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="relative min-h-[800px] lg:min-h-[800px]">
          
          {/* THE INNOVATIVE CAR IMAGE - Hidden on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: 100, scale: 1.1 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/2 -translate-y-1/2 -right-20 w-full md:w-[70%] z-0 pointer-events-none opacity-40 md:opacity-100 hidden lg:block"
          >
            <img 
              src="/images/mifanew.png" 
              alt="Maxus Mifa 9" 
              className="w-full h-auto drop-shadow-[0_35px_35px_rgba(116,195,77,0.15)]"
              onError={(e) => e.target.src = "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&q=80"}
            />
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-[#74c34d]/20 blur-[100px] rounded-full" />
          </motion.div>

          {/* OVERLAY CONTENT: HUD-STYLE CARDS */}
          <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-10">
            
            {/* Left Side: Contact "Specs" */}
            <div className="lg:col-span-5 space-y-4 w-full">
              {[
                { label: "Locate", val: "Ufa, ul. Lenina 52", sub: "Kathmandu Showroom", icon: FiMapPin },
                { label: "Call", val: "+977 1-4XXXXXX", sub: "Priority Line Available 24/7", icon: FiPhone },
                { label: "Write", val: "info@maxusnepal.com", sub: "sales@maxusnepal.com", icon: FiMail },
                { label: "Status", val: "Available Now", sub: "Mon-Fri: 10:00 - 19:00", icon: FiClock }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="group bg-[#0d121a]/80 backdrop-blur-xl border border-white/5 p-8 hover:border-[#74c34d]/50 transition-all duration-500 cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <item.icon className="text-3xl text-[#74c34d] group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-[10px] font-black uppercase text-[#74c34d] tracking-[0.3em] mb-1">{item.label}</p>
                      <h4 className="text-xl font-bold italic text-white leading-tight">{item.val}</h4>
                      <p className="text-white/30 text-[10px] uppercase font-bold mt-1 tracking-widest">{item.sub}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side: Floating Technical Form */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end items-center mt-10  lg:-mt-24 pb-10">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="w-full max-w-xl bg-white rounded-[2.5rem] p-8 md:p-12 text-[#1a2b3c] shadow-[0_50px_100px_-10px_rgba(0,0,0,0.2)] relative overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#74c34d]/10 rounded-bl-[100%] z-0" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <FiShield className="text-[#74c34d] text-2xl" />
                    <h3 className="text-3xl font-black italic tracking-tighter">SECURE_FORM</h3>
                  </div>

                  <form className="space-y-2">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
                        <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 focus:border-[#74c34d] focus:outline-none transition-colors" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                        <input type="email" className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 focus:border-[#74c34d] focus:outline-none transition-colors" placeholder="user@domain.com" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Message Transmission</label>
                      <textarea rows="4" className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 focus:border-[#74c34d] focus:outline-none transition-colors resize-none" placeholder="Describe your inquiry..." />
                    </div>

                    <button className="w-full group bg-[#1a2b3c] hover:bg-[#74c34d] text-white hover:text-black py-6 rounded-2xl font-black uppercase text-xs tracking-[0.4em] transition-all duration-500 flex items-center justify-center gap-4">
                      INITIATE TRANSMISSION
                      <FiSend className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;