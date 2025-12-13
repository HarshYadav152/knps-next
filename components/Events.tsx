"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { EVENTS } from './constants';
import { Calendar, Clock, ArrowRight, MapPin, Bell, Sparkles } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-16 md:py-24 bg-gradient-to-b from-slate-200 via-white to-slate-500 relative overflow-hidden">
       {/* Background decorations */}
       <div className="absolute top-0 left-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-800/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
       
       {/* Decorative pattern */}
       <div className="absolute top-20 right-10 opacity-5">
         <div className="grid grid-cols-5 gap-2">
           {[...Array(25)].map((_, i) => (
             <div key={i} className="w-2 h-2 bg-royal-800 rounded-full"></div>
           ))}
         </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         {/* Header */}
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6"
         >
            <div>
                <span className="inline-flex items-center gap-2 text-gold-600 font-semibold tracking-wider uppercase text-sm bg-gold-50 px-4 py-1.5 rounded-full border border-gold-200">
                    <Calendar size={14} />
                    School Calendar
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-950 mt-4">
                  Upcoming <span className="text-gold-600">Events</span>
                </h2>
                <div className="w-20 h-1 bg-gold-500 rounded-full mt-4"></div>
                <p className="mt-4 text-gray-600 max-w-lg">
                  Stay connected with exciting activities, celebrations, and important dates throughout the academic year.
                </p>
            </div>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#" 
              className="group flex items-center gap-2 bg-gradient-to-r from-royal-800 to-royal-950 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-royal-900/20 transition-all duration-300"
            >
                View Full Calendar 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
         </motion.div>

         {/* Featured Event Banner */}
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.1 }}
           className="mb-10 p-6 md:p-8 rounded-2xl bg-teal-600 text-white relative overflow-hidden"
         >
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
           <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-gold-500/20 rounded-full"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
             <div className="flex items-center gap-4">
               <div className="w-16 h-16 md:w-20 md:h-20 bg-gold-500 rounded-2xl flex flex-col items-center justify-center text-royal-950 shadow-lg">
                 <span className="text-2xl md:text-3xl font-bold leading-none">15</span>
                 <span className="text-xs font-semibold uppercase">Jan</span>
               </div>
               <div>
                 <div className="flex items-center gap-2 mb-1">
                   <Sparkles size={14} className="text-gold-400" />
                   <span className="text-gold-400 text-sm font-semibold">Featured Event</span>
                 </div>
                 <h3 className="text-xl md:text-2xl font-bold">Annual Sports Day 2025</h3>
                 <p className="text-white/70 text-sm mt-1">Join us for a day of athletic excellence and team spirit!</p>
               </div>
             </div>
             <button className="flex items-center gap-2 bg-white text-royal-950 px-6 py-3 rounded-full font-semibold hover:bg-gold-400 transition-all duration-300 shadow-lg">
               <Bell size={16} />
               Set Reminder
             </button>
           </div>
         </motion.div>

         {/* Events Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {EVENTS.map((event, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 group hover:border-gold-300 hover:-translate-y-1"
                >
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-royal-800 to-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    
                    {/* Event type badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-2 py-1 bg-royal-50 text-royal-800 text-[10px] font-bold uppercase rounded-full border border-royal-100">
                        {idx === 0 ? 'Academic' : idx === 1 ? 'Cultural' : 'Sports'}
                      </span>
                    </div>
                    
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-6">
                            {/* Date Badge */}
                            <div className="relative">
                              <div className="flex flex-col items-center bg-teal-600 text-white rounded-xl p-3 min-w-[75px] shadow-lg group-hover:shadow-gold-500/20 transition-shadow">
                                  <span className="text-3xl font-bold leading-none">{event.day}</span>
                                  <span className="text-xs uppercase font-semibold tracking-wide mt-1">{event.month}</span>
                              </div>
                              {/* Pulse animation on hover */}
                              <div className="absolute inset-0 bg-gold-500/20 rounded-xl scale-110 opacity-0 group-hover:animate-ping"></div>
                            </div>
                            
                            {/* Time Badge */}
                            <div className="flex flex-col items-end gap-2 mt-8">
                              <span className="inline-flex items-center text-xs font-medium text-royal-800 bg-royal-500 px-3 py-1.5 rounded-full border border-royal-100">
                                  <Clock size={12} className="mr-1.5 text-gold-600" /> 
                                  {event.time}
                              </span>
                            </div>
                        </div>
                        
                        {/* Content */}
                        <h3 className="text-xl font-bold text-royal-950 mb-3 group-hover:text-royal-800 transition-colors leading-tight">
                            {event.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-5">
                            {event.description}
                        </p>
                        
                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <span className="inline-flex items-center text-xs text-gray-400">
                                <MapPin size={12} className="mr-1 text-gold-600" /> 
                                School Campus
                            </span>
                            <a 
                                href="#" 
                                className="inline-flex items-center gap-1 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors group/link"
                            >
                                Details 
                                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Hover gradient overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </motion.div>
            ))}
         </div>

         {/* Bottom CTA Section */}
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mt-16 text-center bg-gradient-to-br from-slate-50 to-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm"
         >
            <div className="w-16 h-16 bg-gradient-to-br from-royal-800 to-royal-950 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Bell size={28} className="text-gold-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-royal-950 mb-3">
              Never Miss an Event
            </h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Subscribe to our newsletter and get notified about all upcoming school events, activities, and important dates.
            </p>
            
            {/* Newsletter form */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-5 py-3.5 rounded-full border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm"
              />
              <button className="group px-6 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 text-royal-950 rounded-full font-semibold hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                Subscribe
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <p className="text-xs text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
         </motion.div>
       </div>
    </section>
  );
};

export default Events;