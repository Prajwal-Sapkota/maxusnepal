// pages/VehicleDetail.jsx (updated scrollToSection function)
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { HiArrowLongRight } from "react-icons/hi2";
import vehicleData from '../../../data/vehicles.json';

import Hero from './Hero';
import Specifications from './Specification';
import Features from './Features';
import Technology from './Technology';
import Color from './Color';
import VerticalNav from './VerticalNav';
import BookingModal from './BookingModal';
import Gallery from './Gallery';

const VehicleDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showForm, setShowForm] = useState(false);

  // Create refs for each section
  const heroRef = useRef(null);
  const specsRef = useRef(null);
  const featuresRef = useRef(null);
  const techRef = useRef(null);
  const colorRef = useRef(null);
  const galleryRef = useRef(null);

  // Scroll to section function - IMPROVED VERSION
  const scrollToSection = useCallback((ref, id) => {
    
    // Try to use the ref first
    if (ref && ref.current) {
      const element = ref.current;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80; // 80px offset for header
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
      setIsNavOpen(false);
      console.log('Scrolled using ref for:', id);
    } 
    // Fallback: try to find by ID
    else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(id);
        setIsNavOpen(false);
        console.log('Scrolled using ID fallback for:', id);
      } else {
        console.error('Could not find element for section:', id);
      }
    }
  }, []);

  // Find vehicle data
  useEffect(() => {
    const foundVehicle = vehicleData.vehicles.find(v => v.slug === slug);
    if (foundVehicle) {
      setVehicle(foundVehicle);
      setSelectedColor(foundVehicle.colors[0]);
    } else {
      navigate('/');
    }
  }, [slug, navigate]);

  // Active section detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionsList = [
        { id: 'hero', ref: heroRef },
        { id: 'specs', ref: specsRef },
        { id: 'features', ref: featuresRef },
        { id: 'technology', ref: techRef },
        { id: 'customize', ref: colorRef },
         { id: 'gallery', ref: galleryRef }
      ];
      
      const scrollPosition = window.scrollY + 200;
      let currentSection = 'hero';
      
      for (let i = sectionsList.length - 1; i >= 0; i--) {
        const section = sectionsList[i];
        if (section.ref && section.ref.current) {
          const offsetTop = section.ref.current.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentSection = section.id;
            break;
          }
        } else {
          // Fallback to ID if ref is null
          const element = document.getElementById(section.id);
          if (element) {
            const offsetTop = element.offsetTop;
            if (scrollPosition >= offsetTop) {
              currentSection = section.id;
              break;
            }
          }
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call to set active section
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

 

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-[#f5feff] flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#74c34d]/30 border-t-[#74c34d] rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-[#74c34d] rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  const sections = [
    { id: 'hero', label: 'Overview', ref: heroRef },
    { id: 'specs', label: 'Specifications', ref: specsRef },
    { id: 'features', label: 'Features', ref: featuresRef },
    { id: 'technology', label: 'Technology', ref: techRef },
    { id: 'customize', label: 'Customize', ref: colorRef }
  ];

  const quickSpecs = vehicle.specs.slice(0, 4);

  return (
    <div className="bg-[#f5feff] min-h-screen overflow-x-hidden font-sans">
      

      {/* Navigation */}
      <VerticalNav activeSection={activeSection} scrollToSection={scrollToSection} sections={sections} />

      {/* Mobile Menu Button */}
      <button className="fixed top-6 right-6 z-50 lg:hidden w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 flex items-center justify-center text-[#1a2b3c] shadow-lg"
        onClick={() => setIsNavOpen(!isNavOpen)}>
        {isNavOpen ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>

      {/* Mobile Menu */}
      {isNavOpen && (
        <div className="fixed inset-0 z-40 bg-[#f5feff] lg:hidden flex flex-col justify-center items-center animate-in slide-in-from-right duration-300">
          <div className="space-y-8 text-center">
            {sections.map((section) => (
              <button key={section.id} onClick={() => scrollToSection(section.ref, section.id)}
                className="flex items-center gap-4 text-xl font-light text-[#1a2b3c] hover:text-[#74c34d] transition-colors">
                <span>{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Sections - Make sure each has an ID attribute */}
      <Hero 
        ref={heroRef}
        vehicle={vehicle} 
        quickSpecs={quickSpecs} 
        setShowForm={setShowForm} 
        scrollToSection={scrollToSection} 
        specsRef={specsRef} 
      />
      
      <Specifications ref={specsRef} vehicle={vehicle} />
      
      <Features ref={featuresRef} vehicle={vehicle} />
      
      <Technology ref={techRef} vehicle={vehicle} />
      
      <Color ref={colorRef} vehicle={vehicle} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />

        <Gallery ref={galleryRef} vehicle={vehicle} />
      {/* Modal */}
      <BookingModal showForm={showForm} setShowForm={setShowForm} vehicle={vehicle} />
    </div>
  );
};

export default VehicleDetail;