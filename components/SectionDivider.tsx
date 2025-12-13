"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'wave' | 'geometric' | 'elegant' | 'minimal';
  fromColor?: string;
  toColor?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  variant = 'elegant',
  fromColor = 'from-white',
  toColor = 'to-slate-50'
}) => {
  
  // Wave Divider
  if (variant === 'wave') {
    return (
      <div className={`relative h-24 md:h-32 bg-gradient-to-b ${fromColor} ${toColor} overflow-hidden`}>
        <svg 
          className="absolute bottom-0 w-full h-16 md:h-24 text-slate-50"
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <path 
            fill="currentColor" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,101.3C1248,96,1344,64,1392,48L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    );
  }

  // Geometric Divider
  if (variant === 'geometric') {
    return (
      <div className={`relative py-12 md:py-16 bg-gradient-to-b ${fromColor} ${toColor} overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-4">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-px bg-gradient-to-r from-transparent via-royal-800/30 to-transparent flex-1"
          />
          <motion.div 
            initial={{ scale: 0, rotate: 45 }}
            whileInView={{ scale: 1, rotate: 45 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="w-3 h-3 bg-gold-500 transform rotate-45"
          />
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="w-4 h-4 border-2 border-royal-800 rounded-full"
          />
          <motion.div 
            initial={{ scale: 0, rotate: 45 }}
            whileInView={{ scale: 1, rotate: 45 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="w-3 h-3 bg-gold-500 transform rotate-45"
          />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-px bg-gradient-to-r from-transparent via-royal-800/30 to-transparent flex-1"
          />
        </div>
      </div>
    );
  }

  // Minimal Divider
  if (variant === 'minimal') {
    return (
      <div className={`py-8 md:py-12 bg-gradient-to-b ${fromColor} ${toColor}`}>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xs mx-auto"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        </motion.div>
      </div>
    );
  }

  // Elegant Divider (default)
  return (
    <div className={`relative p-2 bg-gradient-to-b ${fromColor} ${toColor} overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="w-96 h-96 bg-royal-800 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-6">
          {/* Left line */}
          <motion.div 
            initial={{ scaleX: 0, originX: 1 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 h-px bg-gradient-to-r from-transparent to-royal-800/20"
          />
          
          {/* Center ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-royal-800 to-royal-950 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-6 h-6 md:w-7 md:h-7 bg-gold-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full" />
              </div>
            </div>
            {/* Decorative rings */}
            <div className="absolute inset-0 border-2 border-gold-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          </motion.div>
          
          {/* Right line */}
          <motion.div 
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 h-px bg-gradient-to-l from-transparent to-royal-800/20"
          />
        </div>
        
        {/* Decorative dots */}
        <div className="flex justify-center gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-gold-500' : 'bg-royal-800/30'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;