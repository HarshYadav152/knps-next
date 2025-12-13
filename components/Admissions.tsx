"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Download, FileText, Send, ArrowRight, Phone, Mail, Calendar } from 'lucide-react';
import { SCHOOL_DATA } from './constants';

const Admissions: React.FC = () => {
    const steps = [
        { icon: FileText, title: "Submit Inquiry", desc: "Fill out our online interest form to get started.", step: "01" },
        { icon: Calendar, title: "Campus Tour", desc: "Schedule a visit to see our facilities in person.", link: '#campus', step: "02" },
        { icon: Send, title: "Application", desc: "Complete the application and submit records.", step: "03" },
        { icon: CheckCircle, title: "Enrollment", desc: "Welcome to the Excellence Academy family.", step: "04" }
    ];

    const highlights = [
        { label: "Application Deadline", value: "March 31, 2025" },
        { label: "Acceptance Rate", value: "85%" },
        { label: "Scholarships Available", value: "Yes" },
    ];

  return (
    <section id="admissions" className="py-16 md:py-24 bg-gradient-to-b from-slate-400 to-white overflow-hidden relative">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-800/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-2 lg:order-1"
                >
                    <span className="inline-flex items-center gap-2 text-gold-600 font-semibold tracking-wider uppercase text-sm bg-gold-50 px-4 py-1.5 rounded-full border border-gold-200">
                        <FileText size={14} />
                        Admissions Open 2025-26
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-950 mt-4 mb-4">
                        Begin Your Journey to <span className="text-gold-600">Excellence</span>
                    </h2>
                    <div className="w-20 h-1 bg-gold-500 rounded-full mb-6"></div>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        We welcome students of all backgrounds who strive for academic and personal excellence. Our admission process is designed to get to know the whole student, not just their grades.
                    </p>

                    {/* Highlights Bar */}
                    <div className="flex flex-wrap gap-4 mb-10 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="flex-1 min-w-[120px] text-center px-3 py-2 border-r last:border-r-0 border-gray-100">
                                <div className="text-xl font-bold text-royal-800">{item.value}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">{item.label}</div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Steps */}
                    <div className="space-y-5">
                        {steps.map((step, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex gap-4 group relative"
                            >
                                {/* Connecting line */}
                                {index < steps.length - 1 && (
                                    <div className="absolute left-6 top-14 w-0.5 h-8 bg-gradient-to-b from-royal-200 to-transparent"></div>
                                )}
                                
                                <div className="flex-shrink-0 relative">
                                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white shadow-lg group-hover:shadow-gold-500/20 transition-all duration-300">
                                        <step.icon size={20} />
                                    </div>
                                    {/* Step number badge */}
                                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold-500 text-royal-950 text-[10px] font-bold rounded-full flex items-center justify-center">
                                        {step.step}
                                    </span>
                                </div>
                                
                                <div className="flex-1 pt-1">
                                    <a 
                                        href={step.link || "#"} 
                                        className="text-lg font-bold text-royal-950 group-hover:text-gold-600 transition-colors inline-flex items-center gap-1"
                                    >
                                        {step.title}
                                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </a>
                                    <p className="text-gray-500 text-sm mt-0.5">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group px-8 py-4 bg-black text-white rounded-full font-semibold hover:shadow-xl hover:shadow-royal-900/20 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Apply Online
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-white text-royal-800 border-2 border-royal-200 rounded-full font-semibold hover:border-gold-500 hover:text-gold-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                        >
                            <Download size={18} /> Download Prospectus
                        </motion.button>
                    </div>

                    {/* Contact info */}
                    <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
                        <a href={`tel:${SCHOOL_DATA.contact.phone}`} className="inline-flex items-center gap-2 hover:text-gold-600 transition-colors">
                            <Phone size={14} /> {SCHOOL_DATA.contact.phone}
                        </a>
                        <a href={`mailto:${SCHOOL_DATA.contact.email}`} className="inline-flex items-center gap-2 hover:text-gold-600 transition-colors">
                            <Mail size={14} /> {SCHOOL_DATA.contact.email}
                        </a>
                    </div>
                </motion.div>

                {/* Right Image Section */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative order-1 lg:order-2"
                >
                    {/* Decorative background shapes */}
                    <div className="absolute top-8 left-8 w-full h-full bg-gradient-to-br from-gold-400/30 to-gold-500/10 rounded-3xl -z-10 transform rotate-3"></div>
                    <div className="absolute top-4 left-4 w-full h-full border-2 border-royal-800/10 rounded-3xl -z-10 transform -rotate-2"></div>
                    
                    {/* Main Image */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                        <img 
                            src="events/scout-2.jpg" 
                            alt="Graduation day" 
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-950/40 via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Testimonial Card */}
                    {/* <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-white p-2 md:p-6 rounded-2xl shadow-xl max-w-xs border-l-4 border-gold-500 hidden sm:block"
                    >
                        <div className="flex gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="font-serif italic text-royal-950 text-sm md:text-base leading-relaxed">
                            "The best decision we made for our child's future. The faculty is exceptional!"
                        </p>
                        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
                            <div className="w-10 h-10 bg-gradient-to-br from-royal-800 to-royal-950 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                A
                            </div>
                            <div>
                                <p className="text-sm font-bold text-royal-950">The Anderson Family</p>
                                <p className="text-xs text-gray-500">Parent, Class of 2024</p>
                            </div>
                        </div>
                    </motion.div> */}

                    {/* Stats floating card */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-gradient-to-br from-royal-800 to-royal-950 text-white p-4 md:p-5 rounded-2xl shadow-xl hidden sm:block"
                    >
                        <div className="text-center">
                            <p className="font-bold text-2xl md:text-3xl text-gold-400">500+</p>
                            <p className="text-[10px] md:text-xs uppercase tracking-wider text-white/80">Students Enrolled</p>
                            <p className="text-[10px] md:text-xs text-white/60">This Year</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default Admissions;