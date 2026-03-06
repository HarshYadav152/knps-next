"use client"
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  CheckCircle, Download, FileText, Send, ArrowRight, Phone, Mail, Calendar,
  Users, BookOpen, Award, Clock, ChevronRight, Sparkles, Target,
  HelpCircle, MessageCircle, CalendarCheck, GraduationCap, Shield,
  TrendingUp, Heart, Globe, Zap
} from 'lucide-react';
import { SCHOOL_DATA } from './constants';

const Admissions: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps = [
    { 
      icon: FileText, 
      title: "Submit Inquiry", 
      desc: "Fill out our online interest form to get started. We'll send you our information package within 24 hours.",
      step: "01",
      color: "from-blue-500 to-cyan-500",
      details: "No commitment required. Just express your interest and we'll guide you through the process."
    },
    // { 
    //   icon: Calendar, 
    //   title: "Campus Tour", 
    //   desc: "Schedule a visit to see our facilities in person and meet our faculty members.",
    //   link: '#campus', 
    //   step: "02",
    //   color: "from-purple-500 to-pink-500",
    //   details: "Experience our vibrant campus life, interact with current students, and ask questions."
    // },
    { 
      icon: Send, 
      title: "Application", 
      desc: "Complete the application and submit previous academic records and recommendations.",
      step: "03",
      color: "from-amber-500 to-orange-500",
      details: "Our admissions team will review your application holistically, considering all aspects."
    },
    { 
      icon: CheckCircle, 
      title: "Enrollment", 
      desc: "Welcome to the school! Complete the enrollment forms and submit admission fee",
      step: "04",
      color: "from-emerald-500 to-teal-500",
      details: "Receive your orientation package, meet your teachers, and prepare for the school year."
    }
  ];

  const highlights = [
    { 
      label: "Application Deadline", 
      value: "March 31, 2025",
      subtext: "Early decision available",
      icon: Clock,
      color: "text-blue-600"
    },
    // { 
    //   label: "Acceptance Rate", 
    //   value: "85%",
    //   subtext: "Selective but accessible",
    //   icon: TrendingUp,
    //   color: "text-green-600"
    // },
    // { 
    //   label: "Scholarships", 
    //   value: "35%",
    //   subtext: "of students receive aid",
    //   icon: Award,
    //   color: "text-purple-600"
    // },
    { 
      label: "Student-Teacher Ratio", 
      value: "12:1",
      subtext: "Personalized attention",
      icon: Users,
      color: "text-amber-600"
    }
  ];

  const requirements = [
    "Previous year academic report card",
    // "Teacher recommendation letter",
    "Entrance assessment",
    "Student interview",
    "Birth certificate copy",
    // "Health records & immunization"
  ];

  const benefits = [
    { icon: Shield, text: "Safe & Nurturing Environment" },
    { icon: GraduationCap, text: "College Preparatory Curriculum" },
    { icon: Heart, text: "Holistic Development Focus" },
    // { icon: Globe, text: "Global Perspective" },
    // { icon: Users, text: "Diverse Student Community" },
    // { icon: Zap, text: "Advanced Learning Programs" }
  ];

  return (
    <section id="admissions" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden relative">
      {/* Enhanced Background Decorations */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-royal-800/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-gold-500/3 to-royal-800/3 rounded-full blur-3xl"></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-6 py-2 rounded-full border border-gold-200 shadow-sm mb-6">
            <Sparkles size={16} className="text-gold-600" />
            <span className="font-semibold text-sm uppercase tracking-wider">Admissions Open 2025-26</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-royal-950 mb-6">
            Begin Your Journey to{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-gold-600">KNPS</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-gold-200/50 -z-0 rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We welcome students of all backgrounds who strive for academic and personal excellence. 
            Our admission process is designed to discover the unique potential in every student.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Content - Main Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Why Choose Us Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-royal-950 mb-6 flex items-center gap-2">
                <Target className="text-gold-600" size={28} />
                Why Choose Us?
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gold-200 transition-all duration-300 group"
                  >
                    <div className="p-2 bg-gold-50 rounded-lg group-hover:bg-gold-100 transition-colors">
                      <benefit.icon size={18} className="text-gold-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-royal-900 transition-colors">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-royal-950 mb-6">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className={`flex items-center gap-2 mb-2 ${item.color}`}>
                        <Icon size={20} />
                        <span className="text-2xl font-bold text-royal-950">{item.value}</span>
                      </div>
                      <div className="text-sm font-medium text-gray-600">{item.label}</div>
                      <div className="text-xs text-gray-400 mt-1">{item.subtext}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Admission Steps with Interactive Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-royal-950 mb-6 flex items-center gap-2">
                <GraduationCap className="text-gold-600" size={28} />
                Admission Process
              </h3>
              
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onHoverStart={() => setActiveStep(index)}
                    onHoverEnd={() => setActiveStep(null)}
                    className={`relative group cursor-pointer transition-all duration-300 ${
                      isActive ? 'scale-[1.02]' : ''
                    }`}
                  >
                    {/* Connecting line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-7 top-14 w-0.5 h-12 bg-gradient-to-b from-royal-200 to-transparent"></div>
                    )}
                    
                    <div className="flex gap-5 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                      {/* Icon with gradient background */}
                      <div className="relative">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon size={24} />
                        </div>
                        {/* Step number badge */}
                        <span className="absolute -top-2 -right-2 w-6 h-6 bg-royal-900 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                          {step.step}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-lg font-bold text-royal-950 group-hover:text-gold-600 transition-colors">
                            {step.title}
                          </h4>
                          <ChevronRight size={16} className={`text-gold-500 transition-all duration-300 ${
                            isActive ? 'translate-x-1 opacity-100' : 'opacity-0'
                          }`} />
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{step.desc}</p>
                        
                        {/* Expandable details */}
                        {/* <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ 
                            height: isActive ? 'auto' : 0,
                            opacity: isActive ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100 mt-2">
                            {step.details}
                          </p>
                        </motion.div> */}
                        
                        {/* {step.link && (
                          <a 
                            href={step.link}
                            className="inline-flex items-center gap-1 text-sm text-gold-600 hover:text-gold-700 font-medium mt-2 group/link"
                          >
                            Schedule a tournnnnnnnnnnnnnnnnn
                            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                          </a>
                        )} */}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex-1 px-8 py-5 bg-gradient-to-r from-royal-800 to-royal-950 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-royal-900/20 transition-all duration-300 flex items-center justify-center gap-3 text-lg"
              >
                <span>Apply Online</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex-1 px-8 py-5 bg-white text-royal-800 border-2 border-royal-200 rounded-xl font-semibold hover:border-gold-500 hover:text-gold-600 hover:bg-gold-50 transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-sm"
              >
                <Download size={20} className="group-hover:scale-110 transition-transform" />
                <span>Download Prospectus</span>
              </motion.button>
            </div>

            {/* Contact Info with quick actions */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <a 
                href={`tel:${SCHOOL_DATA.contact.phone}`}
                className="flex items-center gap-3 p-2 bg-white rounded-xl border border-gray-100 hover:border-gold-200 hover:shadow-md transition-all group"
              >
                <div className="bg-gold-50 rounded-lg group-hover:bg-gold-100 transition-colors">
                  <Phone size={18} className="text-gold-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Call us</div>
                  <div className="text-sm font-semibold text-royal-900">{SCHOOL_DATA.contact.phone}</div>
                </div>
              </a>
              
              <a 
                href={`mailto:${SCHOOL_DATA.contact.email}`}
                className="flex items-center gap-3 p-2 bg-white rounded-xl border border-gray-100 hover:border-gold-200 hover:shadow-md transition-all group"
              >
                <div className="bg-gold-50 rounded-lg group-hover:bg-gold-100 transition-colors">
                  <Mail size={18} className="text-gold-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Email us</div>
                  <div className="text-sm font-semibold text-royal-900 truncate">{SCHOOL_DATA.contact.email}</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Image and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Main Image with Overlay Stats */}
            <div className="relative group">
              {/* Decorative frames */}
              {/* <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-gold-400 to-gold-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div> */}
              {/* <div className="absolute -top-2 -left-2 w-full h-full border-2 border-royal-800/20 rounded-3xl"></div> */}
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white aspect-[4/3]">
                <img
                  src="events/scout-2.jpg"
                  alt="Students celebrating graduation"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950/60 via-transparent to-transparent"></div>
                
                {/* Floating stats card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl"
                >
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div>
                      <div className="text-xl font-bold text-royal-950">TBU</div>
                      <div className="text-xs text-gray-600">Students</div>
                    </div>
                    {/* <div className="border-x border-gray-200">
                      <div className="text-xl font-bold text-royal-950">98%</div>
                      <div className="text-xs text-gray-600">Graduation</div>
                    </div> */}
                    <div>
                      <div className="text-xl font-bold text-royal-950">TBU</div>
                      <div className="text-xs text-gray-600">Class Size</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Requirements Card */}
            <div className="bg-gradient-to-br from-royal-900 to-royal-950 rounded-2xl p-6 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText size={20} className="text-gold-400" />
                Admission Requirements (TBU)
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {requirements.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-gold-400 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-200">{req}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-royal-700">(TBU)
                <p className="text-sm text-gray-300 flex items-center gap-2">
                  <HelpCircle size={16} className="text-gold-400" />
                  Need help with requirements? Our admissions team is here to assist.
                </p>
                <button className="mt-3 text-gold-400 hover:text-gold-300 text-sm font-medium flex items-center gap-1 group">
                  Schedule a consultation
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Upcoming Events Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-royal-950 mb-4 flex items-center gap-2">
                <CalendarCheck size={20} className="text-gold-600" />
                Upcoming Admissions Events (TBU)
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gold-50 transition-colors">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-royal-900">15</div>
                    <div className="text-xs text-gray-500">MAR</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-royal-900">Open House & Campus Tour</h4>
                    <p className="text-sm text-gray-500">10:00 AM - 1:00 PM</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gold-50 transition-colors">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-royal-900">22</div>
                    <div className="text-xs text-gray-500">MAR</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-royal-900">Virtual Information Session</h4>
                    <p className="text-sm text-gray-500">7:00 PM - 8:30 PM</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gold-50 transition-colors">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-royal-900">05</div>
                    <div className="text-xs text-gray-500">APR</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-royal-900">Financial Aid Workshop</h4>
                    <p className="text-sm text-gray-500">6:00 PM - 7:30 PM</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-4 py-3 text-gold-600 hover:text-gold-700 font-medium flex items-center justify-center gap-2 border border-gold-200 rounded-xl hover:bg-gold-50 transition-colors">
                View All Events (TBU)
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Quick Chat Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-royal-950 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle size={20} />
              Chat with Admissions Team (TBA)
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;