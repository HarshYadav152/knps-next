"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Construction, ArrowLeft, GraduationCap, Hammer, Sparkles } from 'lucide-react';
import Link from 'next/link';

const UnderConstruction: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-950 via-royal-900 to-royal-950 relative overflow-hidden flex items-center justify-center px-4">
      {/* Simple Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl mx-auto text-center top-10"
      >
        {/* School Logo/Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-xl">
            <img src='/logo.png'  className="text-royal-950" />
          </div>
        </div>

        {/* Construction Icon */}
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 10, 0],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mb-6"
        >
          <Construction size={48} className="text-gold-400" />
        </motion.div>

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
          Building This Page
        </h1>

        {/* Subtitle with sparkle */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles size={18} className="text-gold-400" />
          <p className="text-xl text-gold-400 font-medium">Coming Soon</p>
          <Sparkles size={18} className="text-gold-400" />
        </div>

        {/* Message */}
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          We're working hard to bring you something amazing. 
          This page is currently under construction or not available and will be ready shortly.
        </p>

        {/* Simple Decorative Line */}
        <div className="w-24 h-1 bg-gold-500/50 mx-auto rounded-full mb-8"></div>

        {/* Back to Home Button */}
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-royal-950 rounded-full font-semibold hover:bg-gold-400 transition-all duration-300 shadow-lg hover:shadow-gold-500/25"
          >
            <ArrowLeft size={18} />
            Back to Home
          </motion.button>
        </Link>

        {/* Small Note */}
        <p className="text-sm text-gray-500 mt-8">
          Thank you for your patience
        </p>
      </motion.div>
    </div>
  );
};

export default UnderConstruction;