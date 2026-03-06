"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EVENTS } from './constants';
import { 
  Calendar, Clock, ArrowRight, MapPin, Bell, Sparkles, 
  Users, Music, Trophy, Palette, BookOpen, Star,
  ChevronRight, X, Gift, Coffee, Camera, Filter,
  Mail
} from 'lucide-react';

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');
  
  // Event categories with icons and colors
  const categories = [
    { id: 'all', label: 'All Events', icon: Calendar, color: 'from-royal-800 to-royal-950' },
    { id: 'academic', label: 'Academic', icon: BookOpen, color: 'from-blue-500 to-blue-600' },
    { id: 'cultural', label: 'Cultural', icon: Palette, color: 'from-purple-500 to-pink-500' },
    { id: 'sports', label: 'Sports', icon: Trophy, color: 'from-green-500 to-emerald-500' },
    // { id: 'community', label: 'Community', icon: Users, color: 'from-amber-500 to-orange-500' },
  ];

  // Enhanced events with more details
  const enhancedEvents = EVENTS.map((event, index) => ({
    ...event,
    category: index === 0 ? 'academic' : index === 1 ? 'cultural' : index === 2 ? 'sports' : 'community',
    time: event.time || '10:00 AM - 12:00 PM',
    location: event.location || 'Main Campus Auditorium',
    organizer: event.organizer || 'Student Affairs Office',
    capacity: event.capacity || '200 attendees',
    registrationDeadline: event.registrationDeadline || '3 days before event',
    highlights: event.highlights || [
      'Guest speakers',
      'Interactive sessions',
      'Networking opportunities',
      'Refreshments provided'
    ],
    image: event.image || '/events/default-event.jpg',
    color: index === 0 ? 'teal' : index === 1 ? 'purple' : index === 2 ? 'green' : 'amber'
  }));

  const filteredEvents = filter === 'all' 
    ? enhancedEvents 
    : enhancedEvents.filter(event => event.category === filter);

  return (
    <section id="events" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Enhanced Background Decorations */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-royal-800/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-gold-500/3 to-royal-800/3 rounded-full blur-3xl"></div>
        
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(212, 175, 55, 0.03) 2px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Matching other components */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-6 py-2 rounded-full border border-gold-200 shadow-sm mb-6">
            <Sparkles size={16} className="text-gold-600" />
            <span className="font-semibold text-sm uppercase tracking-wider">School Calendar</span>
          </div> */}
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-royal-950 mb-6">
            Upcoming{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-gold-600">Events</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-gold-200/50 -z-0 rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay connected with exciting activities, celebrations, and important dates 
            throughout the academic year. Join us in creating memorable experiences!
          </p>
        </motion.div>

        {/* Category Filter - New feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  filter === cat.id
                    ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Icon size={16} />
                {cat.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Featured Event Banner - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 p-8 rounded-3xl bg-gradient-to-r from-royal-900 to-royal-800 text-white relative overflow-hidden group cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 border-4 border-gold-500/20 rounded-full animate-spin-slow"></div>
          
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-8xl font-bold text-white/20">★</div>
            <div className="absolute bottom-10 right-10 text-8xl font-bold text-white/20">★</div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            (TBU)
            <div className="flex items-center gap-6">
              {/* Large date display */}
              <div className="w-24 h-24 bg-gold-500 rounded-2xl flex flex-col items-center justify-center text-royal-950 shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <span className="text-4xl font-bold leading-none">15</span>
                <span className="text-sm font-semibold uppercase tracking-wider">JAN</span>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Star size={16} className="text-gold-400 fill-gold-400" />
                  <span className="text-gold-400 text-sm font-semibold uppercase tracking-wider">Featured Event</span>
                  <span className="p-2 bg-white/10 rounded-full text-xs font-medium">Limited Seats</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Annual Sports Day 2025</h3>
                <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                  <span className="flex items-center gap-1"><Clock size={14} /> 9:00 AM - 4:00 PM</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> Main Sports Complex</span>
                  <span className="flex items-center gap-1"><Users size={14} /> 500+ Participants</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white text-royal-950 p-2 rounded-xl font-semibold hover:bg-gold-400 transition-all duration-300 shadow-lg"
              >
                <Bell size={18} />
                Set Reminder
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-transparent border-2 border-white/30 text-white p-2 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Register Now
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Events Grid - Enhanced with animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                layout
                onClick={() => setSelectedEvent(selectedEvent === idx ? null : idx)}
                className="relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-100 hover:border-gold-300"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 flex items-start gap-2">
                    <div className={`bg-${event.color}-600 text-white rounded-xl p-2 min-w-[60px] text-center shadow-lg`}>
                      <span className="text-2xl font-bold block leading-none">{event.day}</span>
                      <span className="text-xs uppercase font-semibold">{event.month}</span>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1.5 bg-${event.color}-600/90 backdrop-blur-sm text-white text-xs font-bold uppercase rounded-full border border-white/20`}>
                      {event.category}
                    </span>
                  </div>
                  
                  {/* Time overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-xs">
                    <span className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Clock size={12} /> {event.time}
                    </span>
                    <span className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <MapPin size={12} /> Campus
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-royal-950 mb-2 group-hover:text-gold-600 transition-colors line-clamp-1">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  {/* Organizer */}
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                    <Users size={12} className="text-gold-500" />
                    <span>Organized by {event.organizer}</span>
                  </div>
                  
                  {/* Highlights Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.highlights.slice(0, 2).map((highlight, i) => (
                      <span key={i} className="text-[10px] bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                        {highlight}
                      </span>
                    ))}
                    {event.highlights.length > 2 && (
                      <span className="text-[10px] bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                        +{event.highlights.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="inline-flex items-center text-xs text-gray-400">
                      <Gift size={12} className="mr-1 text-gold-500" /> 
                      {event.capacity}
                    </span>
                    <motion.a
                      whileHover={{ x: 5 }}
                      href="#"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                    >
                      View Details
                      <ChevronRight size={16} />
                    </motion.a>
                  </div>
                </div>
                
                {/* Hover gradient bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${event.color}-400 via-${event.color}-500 to-${event.color}-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Expanded Event Details Modal */}
        {/* <AnimatePresence>
          {selectedEvent !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <img
                    src={enhancedEvents[selectedEvent].image}
                    alt={enhancedEvents[selectedEvent].title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold-500 transition-colors"
                  >
                    <X size={20} />
                  </button>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <div className={`bg-${enhancedEvents[selectedEvent].color}-600 text-white rounded-xl p-3 text-center`}>
                      <span className="text-3xl font-bold block">{enhancedEvents[selectedEvent].day}</span>
                      <span className="text-sm uppercase">{enhancedEvents[selectedEvent].month}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-royal-950 mb-4">
                    {enhancedEvents[selectedEvent].title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <Clock size={18} className="text-gold-600" />
                      <div>
                        <div className="text-xs text-gray-500">Time</div>
                        <div className="text-sm font-semibold">{enhancedEvents[selectedEvent].time}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <MapPin size={18} className="text-gold-600" />
                      <div>
                        <div className="text-xs text-gray-500">Location</div>
                        <div className="text-sm font-semibold">{enhancedEvents[selectedEvent].location}</div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{enhancedEvents[selectedEvent].description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-royal-950">Event Highlights</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {enhancedEvents[selectedEvent].highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <Star size={14} className="text-gold-500 fill-gold-500" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-royal-50 p-6 rounded-xl mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold text-royal-950">Registration</span>
                      <span className="text-sm text-gold-600">Deadline: {enhancedEvents[selectedEvent].registrationDeadline}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{enhancedEvents[selectedEvent].capacity} available</p>
                    <button className="w-full py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-royal-950 rounded-xl font-semibold hover:shadow-lg transition-all">
                      Register Now
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence> */}

        {/* Bottom CTA Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center bg-gradient-to-br from-royal-900 to-royal-800 p-5 md:p-14 rounded-3xl border border-royal-700 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 border-4 border-gold-500/20 rounded-full"></div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl transform rotate-3 hover:rotate-0 transition-transform">
              <Bell size={36} className="text-royal-950" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Never Miss an Event (TBU)
            </h3>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
              Subscribe to our newsletter and get notified about all upcoming school events, 
              activities, and important dates directly in your inbox.
            </p>
            
            {/* Enhanced Newsletter form */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none focus:ring-4 focus:ring-gold-500/20 transition-all"
                />
                <Mail size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-royal-950 rounded-full font-semibold hover:shadow-xl hover:shadow-gold-500/25 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
              >
                Subscribe
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
            
            <p className="text-sm text-gray-400 mt-6 flex items-center justify-center gap-2">
              <Camera size={14} />
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a href="#" className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold transition-colors group">
            View Full Academic Calendar (TBU)
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;