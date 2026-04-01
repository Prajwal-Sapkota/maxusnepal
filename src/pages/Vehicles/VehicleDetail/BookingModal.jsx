// components/VehicleDetail/BookingModal.jsx
import React from 'react';
import { FiX, FiZap } from 'react-icons/fi';
import { IoPersonOutline, IoCallOutline } from 'react-icons/io5';

const BookingModal = ({ showForm, setShowForm, vehicle }) => {
  if (!showForm) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setShowForm(false)}>
      <div className="bg-[#f5feff] rounded-2xl max-w-md w-full p-8 shadow-2xl animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-light text-[#1a2b3c]">Book Test Drive</h3>
          <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-[#74c34d] transition-colors">
            <FiX size={24} />
          </button>
        </div>
        <div className="mb-6">
          <div className="flex items-center gap-2 text-[#74c34d] text-sm mb-2">
            <FiZap />
            <span>{vehicle.fullName}</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="relative">
            <IoPersonOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Your name" className="w-full h-12 pl-12 pr-4 bg-white border border-gray-200 rounded-full text-[#1a2b3c] text-sm focus:outline-none focus:border-[#74c34d] transition" />
          </div>
          <div className="relative">
            <IoCallOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="tel" placeholder="+977 (___) ___ - __ - __" className="w-full h-12 pl-12 pr-4 bg-white border border-gray-200 rounded-full text-[#1a2b3c] text-sm focus:outline-none focus:border-[#74c34d] transition" />
          </div>
          <button className="w-full py-3 bg-gradient-to-b from-[#92d950] to-[#71b536] text-white rounded-full font-bold text-[11px] uppercase tracking-wider hover:shadow-lg transition-all">
            Submit Request
          </button>
          <p className="text-[10px] text-gray-400 text-center">By submitting, you agree to the processing of personal data</p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;