import React from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const AutoNews = () => {
  const newsItems = [
    {
      title: "New Mazda 6 in Ufa",
      description: "The sedan received a modified radiator grille, different bumpers, and redesigned optics. The 2018 Mazda 6 also features the new Soul Red Crystal color.",
      date: "August 09, 2018",
      image: "/images/news1.png", 
      theme: "lime",
      position: "top"
    },
    {
      title: "New Mazda 6 in Ufa",
      description: "The sedan received a modified radiator grille, different bumpers, and redesigned optics. The 2018 Mazda 6 also features the new Soul Red Crystal color.",
      date: "August 09, 2018",
      image: "/images/news2.png", 
      theme: "dark",
      position: "bottom"
    }
  ];

  return (
    <section className="bg-[#f5feff] pb-20 font-sans">
      <div className="max-w-[1500px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex items-center justify-center ">
          <div className="flex-1 text-center">
            <h2 className="text-[42px] text-[#1a2b3c] font-light tracking-tight">
              Auto - News
            </h2>
          </div>
           </div>
          <div className='flex justify-end pb-8 pr-8'>

          <Link to="#" className="text-[#1a2b3c]/60 text-2xl border-b border-[#1a2b3c]/20 pt-8 hover:text-[#1a2b3c] transition-colors">
            See all news
          </Link>
       
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
          
          {/* Left Item */}
          <div className="relative h-[600px] group">
            <img 
              src={newsItems[0].image} 
              alt="Mazda 6" 
              className="w-full h-full object-cover"
            />
            {/* Overlapping Card - Top Right */}
            <div className="absolute top-0 right-0 w-full md:w-[280px] h-[340px] bg-[#8ed64f] p-10 flex flex-col justify-between text-white transition-transform group-hover:-translate-y-2">
              <div>
                <h3 className="text-xl font-medium mb-4">{newsItems[0].title}</h3>
                <p className="text-[13px] leading-relaxed opacity-90">
                  {newsItems[0].description}
                </p>
              </div>
              <div className="mt-auto">
                <span className="block text-[12px] opacity-80 mb-4">{newsItems[0].date}</span>
                <a href="#" className="inline-flex items-center gap-3 text-[12px] uppercase tracking-widest font-bold group/link">
                  Read more 
                  <HiArrowLongRight className="text-xl group-hover/link:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Item */}
          <div className="relative h-[600px] group">
            <img 
              src={newsItems[1].image} 
              alt="Mazda 6" 
              className="w-full h-full object-cover"
            />
            {/* Overlapping Card - Bottom Right */}
            <div className="absolute bottom-0 right-0 w-full md:w-[280px] h-[340px] bg-[#1f2226] p-10 flex flex-col justify-between text-white transition-transform group-hover:translate-y-2">
              <div>
                <h3 className="text-xl font-medium mb-4">{newsItems[1].title}</h3>
                <p className="text-[14px] leading-relaxed text-gray-400">
                  {newsItems[1].description}
                </p>
              </div>
              <div className="mt-auto">
                <span className="block text-[12px] text-gray-500 mb-4">{newsItems[1].date}</span>
                <a href="#" className="inline-flex items-center gap-3 text-[12px] uppercase tracking-widest font-bold group/link">
                  Read more 
                  <HiArrowLongRight className="text-xl group-hover/link:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AutoNews;