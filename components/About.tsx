"use client"
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Sparkles, Award, Users, BookOpen, Heart, Target, 
  ChevronRight, Quote, Globe, GraduationCap, Star,
  CheckCircle, Trophy, Calendar, MapPin
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Calendar, value: "3+", label: "Years of Excellence", subtext: "Since 2023" },
    { icon: Users, value: "300+", label: "Students", subtext: "K-8 enrollment" },
    { icon: GraduationCap, value: "98%", label: "Passing Rate", subtext: "School bound" },
    { icon: Trophy, value: "30+", label: "Awards", subtext: "Academic & sports" },
  ];

  const values = [
    { icon: Heart, title: "Compassion", desc: "Fostering empathy and kindness in every interaction" },
    { icon: Target, title: "Excellence", desc: "Striving for the highest standards in all endeavors" },
    { icon: Globe, title: "Global Vision", desc: "Preparing students for a connected world" },
    { icon: BookOpen, title: "Lifelong Learning", desc: "Instilling a passion for continuous growth" },
  ];

  const milestones = [
    { year: "2023", event: "School Founded", desc: "Opened doors with 50 students" },
    { year: "2024", event: "First Graduating Class", desc: "100% college acceptance rate" },
    { year: "2025", event: "STEM Lab Launch", desc: "State-of-the-art facility opened" },
    { year: "2026", event: "International Accreditation", desc: "Recognized globally" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-royal-800/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-gold-500/3 to-royal-800/3 rounded-full blur-3xl"></div>
        
        {/* Decorative pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(212, 175, 55, 0.03) 2px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Matching other components */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-6 py-2 rounded-full border border-gold-200 shadow-sm mb-6">
            <Sparkles size={16} className="text-gold-600" />
            <span className="font-semibold text-sm uppercase tracking-wider">Our Story</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-royal-950 mb-6">
            A Tradition of{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-gold-600">KNPS</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-gold-200/50 -z-0 rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over three years, we have fostered an environment where intellectual curiosity 
            meets moral integrity, nurturing future leaders who are compassionate and innovative.
          </p>
        </motion.div>

        {/* Stats Bar */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-royal-800 to-royal-950 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <div className="text-3xl font-bold text-royal-950 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.subtext}</div>
              </motion.div>
            );
          })}
        </motion.div> */}

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
          {/* Text Content - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            {/* Mission Statement */}
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-bold text-royal-950 mb-4 flex items-center gap-2">
                <Target className="text-gold-600" size={28} />
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg border-l-4 border-gold-500 pl-6 italic">
                "To empower every student with knowledge, skills, and character to thrive in a 
                rapidly changing world while fostering a lifelong love for learning."
              </p>
            </div>

            {/* Vision */}
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-bold text-royal-950 mb-4 flex items-center gap-2">
                <Globe className="text-gold-600" size={28} />
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be a beacon of educational excellence, nurturing global citizens who lead with 
                integrity, innovate with purpose, and serve with compassion.
              </p>
            </div>

            {/* Core Values */}
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-bold text-royal-950 mb-4 flex items-center gap-2">
                <Heart className="text-gold-600" size={28} />
                Core Values
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, idx) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gold-50 transition-colors group"
                    >
                      <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-gold-100 transition-colors">
                        <Icon size={16} className="text-gold-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-royal-900 text-sm">{value.title}</h4>
                        <p className="text-xs text-gray-500">{value.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Key Differentiators */}
            <div className="space-y-3">
              <h4 className="font-semibold text-royal-950 mb-3">Why Choose Us?</h4>
              {[
                "Holistic education approach balancing academics and extracurriculars",
                "State-of-the-art facilities and modern learning resources",
                "Dedicated and experienced faculty mentors",
                "Strong focus on character development and leadership"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid - Enhanced */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950/80 via-transparent to-transparent z-10"></div>
              <img
                src="tours/photo-1.jpg"
                alt="Students in library"
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Quote Overlay */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white">
                <Quote size={32} className="text-gold-400 mb-2 opacity-50" />
                <p className="font-serif italic text-lg md:text-xl leading-relaxed">
                  "Education is the most powerful weapon which you can use to change the world."
                </p>
                <p className="text-sm text-gold-400 mt-2">— Nelson Mandela</p>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-gradient-to-br from-gold-500 to-gold-600 text-royal-950 p-4 md:p-6 rounded-2xl shadow-2xl z-20 hidden sm:block"
              >
                <div className="text-center">
                  <span className="text-3xl md:text-4xl font-bold block">#1</span>
                  <span className="text-[10px] md:text-xs uppercase tracking-wider font-semibold">Ranked School</span>
                  <span className="text-[8px] md:text-[10px] block opacity-80">in the region</span>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute top-6 left-6 w-20 h-20 border-4 border-gold-500/30 rounded-full z-20"></div>
              <div className="absolute top-10 left-10 w-10 h-10 border-4 border-gold-500/20 rounded-full z-20"></div>
            </div>

            {/* Secondary Image - Optional */}
            {/* <div className="absolute -bottom-8 -left-8 w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
              <img
                src="tours/photo-1.jpg"
                alt="Campus life"
                className="w-full h-full object-cover"
              />
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;