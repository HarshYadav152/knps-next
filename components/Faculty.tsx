"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, BookOpen, Award, Mail, Linkedin, Twitter, 
  Globe, Quote, Star, ChevronRight, Sparkles, Users,
  Heart, Target, Clock, MessageCircle
} from 'lucide-react';
import { FACULTY } from './constants';

const Faculty: React.FC = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<number | null>(null);
  const [hoveredTeacher, setHoveredTeacher] = useState<number | null>(null);

  // Extended faculty data with more details
  const enhancedFaculty = FACULTY.map((teacher, index) => ({
    ...teacher,
    qualification: teacher.qualification || "M.Ed, Specialization in Education",
    experience: teacher.experience || "15+ years",
    expertise: teacher.expertise || ["Curriculum Development", "Student Mentorship"],
    achievements: teacher.achievements || ["Excellence in Teaching Award 2023", "Published Author"],
    quote: teacher.quote || "Every student has unique potential waiting to be discovered.",
    subjects: teacher.subjects || ["Mathematics", "Physics"],
    education: teacher.education || "Stanford University",
    social: {
      linkedin: "#",
      twitter: "#",
      email: `mailto:${teacher.name.toLowerCase().replace(' ', '.')}@school.edu`
    }
  }));

  const stats = [
    { icon: Users, value: "10+", label: "Faculty Members" },
    // { icon: Award, value: "90%", label: "Advanced Degrees" },
    { icon: Heart, value: "20:1", label: "Student-Teacher Ratio" },
    // { icon: Target, value: "25+", label: "Years Avg Experience" }
  ];

  return (
    <section id="teachers" className="py-20 md:py-28 bg-gradient-to-b from-royal-950 via-royal-900 to-royal-950 text-white relative overflow-hidden">
      {/* Enhanced Background Decoration */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-royal-800/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-gold-500/3 to-transparent rounded-full blur-3xl"></div> */}
        
        {/* Decorative grid pattern */}
        {/* <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,215,0,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div> */}
      {/* </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Matching Admissions style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* <div className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-400 px-6 py-2 rounded-full border border-gold-500/20 shadow-lg backdrop-blur-sm mb-6">
            <Sparkles size={16} className="text-gold-400" />
            <span className="font-semibold text-sm uppercase tracking-wider">Our Mentors</span>
          </div> */}
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Meet Our {' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-gold-400">Faculty</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-gold-500/20 -z-0 rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Led by visionaries, taught by experts. Our educators are dedicated to inspiring 
            greatness in every student through mentorship and academic excellence.
          </p>
        </motion.div>

        {/* Stats Bar - Similar to Admissions highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-gold-500/30 transition-all duration-300 group"
              >
                <Icon size={28} className="text-gold-400 mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            (TBU)
          {enhancedFaculty.map((teacher, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onHoverStart={() => setHoveredTeacher(idx)}
              onHoverEnd={() => setHoveredTeacher(null)}
              onClick={() => setSelectedTeacher(selectedTeacher === idx ? null : idx)}
              className="group relative cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-royal-800 to-royal-900 border border-white/10 hover:border-gold-500/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-gold-500/10">
                
                {/* Image Container */}
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-900/50 to-transparent opacity-60"></div>
                  
                  {/* Hover Gradient Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-gold-500/20 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredTeacher === idx ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Top Right Badge */}
                  <div className="absolute top-4 right-4 bg-gold-500/90 backdrop-blur-sm text-royal-950 text-xs font-bold px-3 py-1 rounded-full border border-gold-400">
                    {teacher.experience}
                  </div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-royal-950 via-royal-950/90 to-transparent">
                  {/* Name and Role */}
                  <motion.div
                    animate={{ y: hoveredTeacher === idx ? -5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-1">{teacher.name}</h3>
                    <p className="text-gold-400 text-sm font-medium flex items-center gap-1">
                      <GraduationCap size={14} />
                      {teacher.role}
                    </p>
                  </motion.div>
                  
                  {/* Expandable Content */}
                  <AnimatePresence>
                    {(hoveredTeacher === idx || selectedTeacher === idx) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        {/* Qualifications */}
                        <div className="mt-4 space-y-3">
                          <div className="flex items-start gap-2 text-gray-300 text-xs">
                            <Award size={12} className="text-gold-400 mt-0.5" />
                            <span>{teacher.qualification}</span>
                          </div>
                          
                          {/* Quote */}
                          <div className="relative">
                            <Quote size={12} className="absolute -top-1 -left-1 text-gold-500/30" />
                            <p className="text-gray-300 text-xs italic pl-4">
                              "{teacher.quote}"
                            </p>
                          </div>
                          
                          {/* Subjects */}
                          <div className="flex flex-wrap gap-2 mt-2">
                            {teacher.subjects?.map((subject, i) => (
                              <span 
                                key={i}
                                className="text-[10px] bg-white/10 px-2 py-1 rounded-full text-gray-300 border border-white/5"
                              >
                                {subject}
                              </span>
                            ))}
                          </div>
                          
                          {/* Social Links */}
                          <div className="flex gap-2 pt-2">
                            <a 
                              href={teacher.social.email}
                              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500/20 hover:text-gold-400 transition-all border border-white/10"
                            >
                              <Mail size={14} />
                            </a>
                            <a 
                              href={teacher.social.linkedin}
                              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500/20 hover:text-gold-400 transition-all border border-white/10"
                            >
                              <Linkedin size={14} />
                            </a>
                            <a 
                              href={teacher.social.twitter}
                              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500/20 hover:text-gold-400 transition-all border border-white/10"
                            >
                              <Twitter size={14} />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* View More Indicator */}
                  <motion.div 
                    className="absolute bottom-6 right-6 text-gold-400"
                    animate={{ x: hoveredTeacher === idx ? 0 : 10, opacity: hoveredTeacher === idx ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight size={20} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section - Similar to Admissions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          {/* Teaching Philosophy */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-white mb-4 flex items-center justify-center gap-2">
              <Heart className="text-gold-400" size={24} />
              Our Teaching Philosophy
            </h3>
            <p className="text-gray-300 mb-6">
              We believe that great teachers don't just deliver lessons—they inspire curiosity, 
              build character, and nurture potential. Our faculty members are mentors who guide 
              students on their journey of discovery and growth.
            </p>
            
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-royal-950 rounded-full font-semibold hover:shadow-xl hover:shadow-gold-500/20 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
              >
                <MessageCircle size={18} />
                Schedule a Meeting with Faculty (TBU)
              </motion.button>
              
              {/* <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border-2 border-white/10 text-white rounded-full font-semibold hover:border-gold-500/50 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
              >
                <BookOpen size={18} />
                View Faculty Publications
              </motion.button> */}
            </div>
          </div>

          {/* Quick Contact */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="mailto:knps.work@gmail.com" className="flex items-center gap-2 hover:text-gold-400 transition-colors group">
              <Mail size={14} className="group-hover:scale-110 transition-transform" />
              knps.work@gmail.com
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gold-400 transition-colors group">
              <Clock size={14} className="group-hover:scale-110 transition-transform" />
              Office Hours: Mon-Sat 8AM - 3PM
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faculty;