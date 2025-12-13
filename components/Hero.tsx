"use client"
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SCHOOL_DATA } from './constants';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="infrastructure/school-front-1.jpg"
          alt="Modern School Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-royal-950/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-royal-950/90 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-tight drop-shadow-lg">
            {SCHOOL_DATA.name}
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto font-light mb-8 md:mb-10 leading-relaxed px-2">
            {SCHOOL_DATA.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4 sm:px-0">
            <button className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-600 text-royal-950 font-bold text-lg rounded-full shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:scale-105 flex justify-center items-center gap-2 group">
                Apply Now
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            {/* <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-lg rounded-full transition-all duration-300">
                Virtual Tour
            </button> */}
            </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;