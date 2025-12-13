"use client"
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold-600 font-semibold tracking-wider uppercase text-sm">About Excellence Academy</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-royal-950 mt-2 mb-6 leading-tight">
                A Tradition of <span className="text-royal-800">Academic Excellence</span> Since 2023
              </h2>
              <div className="w-20 h-1 bg-gold-500 rounded-full mb-8"></div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  At Excellence Academy, we believe that education is not just about filling a bucket, but lighting a fire. For over three decades, we have fostered an environment where intellectual curiosity meets moral integrity.
                </p>
                <p>
                  Our campus is a melting pot of cultures, ideas, and aspirations. We are dedicated to nurturing future leaders who are compassionate, innovative, and resilient. With a curriculum designed for the 21st century, we balance traditional values with modern methodologies.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 md:gap-4">
                <div className="flex flex-col">
                   <span className="text-3xl md:text-4xl font-bold text-gold-500">3+</span>
                   <span className="text-sm text-gray-500 uppercase tracking-wide">Years of History</span>
                </div>
                 <div className="hidden md:block w-px bg-gray-200 h-12 self-center mx-4"></div>
                {/* <div className="flex flex-col">
                   <span className="text-3xl md:text-4xl font-bold text-gold-500">+</span>
                   <span className="text-sm text-gray-500 uppercase tracking-wide">Alumni Worldwide</span>
                </div> */}
              </div>
            </motion.div>
          </div>

          {/* Image Grid */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative"
             >
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-dots-pattern opacity-20"></div> {/* Abstract pattern placeholder */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="tours/photo-1.jpg" 
                    alt="Students in library" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-royal-950/90 to-transparent text-white">
                      <p className="font-serif italic text-base md:text-lg">"Education is the most powerful weapon which you can use to change the world."</p>
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-2 md:-right-6 bg-gold-500 text-white p-4 md:p-6 rounded-lg shadow-xl hidden sm:block">
                    <p className="text-center font-bold text-xl md:text-2xl">#1</p>
                    <p className="text-[10px] md:text-xs uppercase tracking-wider">Ranked School</p>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;