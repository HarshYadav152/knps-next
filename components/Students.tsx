"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Heart, Music, Globe, Sparkles, Users, Trophy, ArrowRight } from 'lucide-react';

const Students: React.FC = () => {
  const activities = [
    { 
      icon: Rocket, 
      title: "Robotics & STEM", 
      text: "State-of-the-art labs for hands-on innovation and future tech leaders.",
      color: "from-blue-500 to-indigo-600"
    },
    { 
      icon: Music, 
      title: "Performing Arts", 
      text: "Regular productions in our grand auditorium nurturing creative talents.",
      color: "from-purple-500 to-pink-600"
    },
    { 
      icon: Globe, 
      title: "Debate Club", 
      text: "Award-winning Model UN and debate teams shaping future leaders.",
      color: "from-emerald-500 to-teal-600"
    },
    { 
      icon: Heart, 
      title: "Community Service", 
      text: "Building character and empathy through meaningful local outreach.",
      color: "from-orange-500 to-red-600"
    },
  ];

  const stats = [
    { icon: Users, value: "1500+", label: "Active Students" },
    { icon: Trophy, value: "50+", label: "Annual Events" },
    { icon: Sparkles, value: "30+", label: "Clubs & Societies" },
  ];

  return (
    <section id="students" className="py-16 md:py-24 bg-gradient-to-b from-slate-500 via-white to-slate-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-800/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-gold-600 font-semibold tracking-wider uppercase text-sm bg-gold-50 px-4 py-1.5 rounded-full border border-gold-200">
              <Sparkles size={14} />
              Student Life
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-950 mt-4">Beyond the Classroom</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto px-2 text-lg">
              Education goes beyond textbooks. Our students engage in a diverse range of activities that foster leadership, creativity, and teamwork.
            </p>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 md:mb-16"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100">
              <div className="w-10 h-10 bg-gradient-to-br from-royal-800 to-royal-950 rounded-full flex items-center justify-center text-white">
                <stat.icon size={18} />
              </div>
              <div>
                <div className="text-xl font-bold text-royal-950">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {activities.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-royal-800 to-royal-950 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-300 shadow-lg">
                  <item.icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item.text}</p>
                
                {/* Learn more link */}
                <div className="mt-4 flex items-center gap-1 text-gold-600 group-hover:text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Explore
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </div>

        {/* Big visual banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-24 rounded-3xl overflow-hidden relative h-[400px] md:h-[450px] shadow-2xl group"
        >
          <img 
            src="events/giveaways-2.jpg" 
            alt="Group of students" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-royal-950/95 via-royal-900/70 to-transparent"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-6 right-6 md:top-10 md:right-10">
            <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-gold-500/30 rounded-full"></div>
            <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-gold-500/20 rounded-full absolute top-4 left-4"></div>
          </div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-end md:items-center">
            <div className="p-6 md:p-16 text-white max-w-2xl w-full">
              <span className="inline-flex items-center gap-2 text-gold-400 font-semibold text-sm mb-4">
                <Sparkles size={16} />
                Join Our Community
              </span>
              <h3 className="text-2xl md:text-4xl font-serif font-bold mb-4 md:mb-6 leading-tight">
                Empowering Every Student to <span className="text-gold-400">Shine</span>
              </h3>
              <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                Join a community where every individual is valued and encouraged to reach their full potential through holistic education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group/btn flex items-center justify-center gap-2 bg-gold-500 text-royal-950 px-8 py-3.5 rounded-full font-bold hover:bg-gold-400 transition-all duration-300 shadow-lg hover:shadow-gold-500/25">
                  View Student Gallery
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                  Meet Our Students
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Students;