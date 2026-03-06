"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Rocket, Heart, Music, Globe, Sparkles, Users, Trophy, ArrowRight,
  Palette, Theater, Code, Camera, Microscope, BookOpen, PenTool,
  Guitar, Dumbbell, Salad, Trees, Compass, GraduationCap, Star,
  Calendar, Clock, MapPin, Award, Quote, Target, Zap, X
} from 'lucide-react';

const Students: React.FC = () => {
  const [activeActivity, setActiveActivity] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>('activities');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isGalleryOpen]);

  const galleryPhotos = [
    { id: 1, src: "/events/giveaways-2.jpg", title: "Annual Day Celebration", category: "Events" },
    { id: 2, src: "/events/giveaways-4.jpg", title: "Science Fair", category: "Events" },
    { id: 3, src: "/events/scout-2.jpg", title: "Scout mentorship", category: "Events" },
    { id: 4, src: "/tours/photo-1.jpg", title: "Outside Tour", category: "Tours" },
    { id: 5, src: "/tours/photo-1.jpg", title: "Outside Tour", category: "Tours" },
  ];

  const activities = [
    {
      icon: Music,
      title: "Performing Arts",
      text: "Regular productions in our grand auditorium nurturing creative talents.",
      color: "from-purple-500 to-pink-600",
      longDesc: "From drama to choir and orchestra, our performing arts program stages three major productions annually, showcasing student talent.",
      schedule: "Tue & Thu, 4:00 PM - 6:00 PM",
      members: 120,
      achievements: ["State Drama Festival Winners", "Music Competition Gold Medal"]
    },
  ];

  const moreActivities = [
    // { icon: Palette, title: "Art Club", members: 30, color: "from-pink-500 to-rose-600" },
    // { icon: Camera, title: "Photography", members: 25, color: "from-cyan-500 to-blue-600" },
    // { icon: Code, title: "Coding Club", members: 40, color: "from-indigo-500 to-purple-600" },
    { icon: Theater, title: "Clubs and community", members: 35, color: "from-amber-500 to-orange-600" },
    // { icon: Microscope, title: "Science Club", members: 28, color: "from-green-500 to-emerald-600" },
    // { icon: Guitar, title: "Band", members: 50, color: "from-violet-500 to-purple-600" },
    // { icon: Dumbbell, title: "Sports Teams", members: 150, color: "from-red-500 to-rose-600" },
    // { icon: Salad, title: "Eco Club", members: 22, color: "from-lime-500 to-green-600" },
  ];

  const stats = [
    { icon: Users, value: "150+", label: "Active Students", subtext: "K-12 enrollment" },
    { icon: Trophy, value: "5+", label: "Annual Events", subtext: "Cultural & sports" },
    { icon: Award, value: "70%", label: "Participation Rate", subtext: "In extracurriculars" },
  ];

  const studentStories = [
    {
      name: "Student Name",
      grade: "Grade 12",
      quote: "Quote by the student",
      image: "/students/sarah.jpg",
      activity: "Something from student"
    },
  ];

  return (
    <section id="students" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-royal-950 mb-6">
            Student{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-gold-600">Life</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-gold-200/50 -z-0 rounded-full"></span>
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Education goes beyond textbooks. Our students engage in a diverse range of activities
            that foster leadership, creativity, and teamwork in a supportive environment.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-full flex-wrap">
            {['activities', 'achievements', 'stories'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium capitalize transition-all duration-300 ${activeTab === tab
                  ? 'bg-gold-500 text-royal-950 shadow-md'
                  : 'text-gray-600 hover:text-royal-900'
                  }`}
              >
                {tab === 'activities' ? 'Clubs & Activities' :
                  tab === 'achievements' ? 'Achievements' : 'Stories'}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Activities Tab */}
          {activeTab === 'activities' && (
            <motion.div
              key="activities"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12"
              >
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-royal-800 to-royal-950 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0">
                        <stat.icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-2xl font-bold text-royal-950">{stat.value}</div>
                        <div className="text-xs text-gray-500 truncate">{stat.label}</div>
                        <div className="text-[10px] text-gray-400 truncate">{stat.subtext}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Main Activities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
                {activities.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = activeActivity === idx;

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      onHoverStart={() => setActiveActivity(idx)}
                      onHoverEnd={() => setActiveActivity(null)}
                      className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden cursor-pointer border border-gray-100"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                      <div className="relative z-10 p-6">
                        <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <Icon size={26} />
                        </div>

                        <h3 className="text-xl font-bold text-royal-950 mb-2 group-hover:text-white transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors mb-4">
                          {item.text}
                        </p>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="space-y-3"
                            >
                              <div className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-white/80">
                                <Clock size={12} />
                                <span className="truncate">{item.schedule}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-white/80">
                                <Users size={12} />
                                <span>{item.members} active members</span>
                              </div>
                              <div className="pt-2">
                                <div className="text-xs font-semibold text-gold-600 group-hover:text-gold-300 mb-1">Achievements:</div>
                                {item.achievements.map((achievement, i) => (
                                  <div key={i} className="flex items-center gap-1 text-xs text-gray-500 group-hover:text-white/80">
                                    <Award size={10} className="text-gold-500 flex-shrink-0" />
                                    <span className="truncate">{achievement}</span>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <motion.div
                          className="mt-4 flex items-center gap-1 text-gold-600 group-hover:text-white font-semibold text-sm"
                          animate={{ x: isActive ? 5 : 0 }}
                        >
                          Learn more
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      </div>

                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    </motion.div>
                  );
                })}
              </div>

              {/* More Activities Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-serif font-bold text-royal-950 mb-6 text-center">
                  More Ways to Get Involved
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {moreActivities.map((activity, idx) => {
                    const Icon = activity.icon;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className={`bg-gradient-to-br ${activity.color} p-4 rounded-xl text-white cursor-pointer group relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <Icon size={24} className="mb-2 group-hover:scale-110 transition-transform" />
                        <h4 className="font-semibold text-sm truncate">{activity.title}</h4>
                        <p className="text-xs text-white/80">{activity.members} members</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12"
            >
              {[1, 2, 3].map((_, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                    <Trophy size={24} className="text-gold-600" />
                  </div>
                  <h4 className="text-lg font-bold text-royal-950 mb-2">Achievement Title</h4>
                  <p className="text-sm text-gray-500 mb-3">Year 2024</p>
                  <p className="text-xs text-gray-400">Description of the achievement goes here.</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Student Stories Tab */}
          {activeTab === 'stories' && (
            <motion.div
              key="stories"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            >
              {studentStories.map((story, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all relative"
                >
                  <Quote size={40} className="absolute top-4 right-4 text-gold-200 opacity-50" />
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-royal-800 to-royal-950 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      {story.name[0]}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg font-bold text-royal-950 truncate">{story.name}</h4>
                      <p className="text-sm text-gold-600">{story.grade}</p>
                      <p className="text-xs text-gray-500 truncate">{story.activity}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{story.quote}"</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Banner Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-24 rounded-3xl overflow-hidden relative min-h-[400px] md:h-[500px] shadow-2xl group"
        >
          <img
            src="events/giveaways-2.jpg"
            alt="Students collaborating"
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
          />

          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-royal-950/70 via-royal-900/40 to-transparent"></div>

          {/* Decorative elements - hidden on mobile */}
          <div className="hidden md:block absolute top-10 right-10">
            <div className="w-32 h-32 border-4 border-gold-500/30 rounded-full animate-spin-slow"></div>
            <div className="w-20 h-20 border-4 border-gold-500/20 rounded-full absolute top-6 left-6"></div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="p-6 sm:p-8 md:p-16 text-white max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">
                  Empowering Every Student to{' '}
                  <span className="text-gold-400 relative">
                    Shine
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold-500/50 rounded-full"></span>
                  </span>
                </h3>

                <p className="text-gray-200 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                  Join a community where every individual is valued and encouraged to reach
                  their full potential through holistic education and diverse opportunities.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsGalleryOpen(true)}
                    className="group/btn flex items-center justify-center gap-2 bg-gold-500 text-royal-950 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold hover:bg-gold-400 transition-all duration-300 shadow-lg hover:shadow-gold-500/25 text-sm sm:text-base"
                  >
                    <Camera size={18} className="sm:w-5 sm:h-5" />
                    <span>View Student Gallery</span>
                    <ArrowRight size={16} className="sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/20 text-sm sm:text-base"
                  >
                    <Users size={18} className="sm:w-5 sm:h-5" />
                    <span>Meet Our Students</span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Photo Gallery Modal - FIXED VERSION */}
        <AnimatePresence>
          {isGalleryOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-500 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setIsGalleryOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-7xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header - Sticky */}
                <div className="sticky top-0 z-10 flex items-center justify-between p-4 sm:p-6 bg-white border-b border-gray-200">
                  <div className="min-w-0 pr-4">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-royal-950 truncate">Student Gallery</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 truncate">Capturing memorable moments</p>
                  </div>
                  <button
                    onClick={() => setIsGalleryOpen(false)}
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                    aria-label="Close gallery"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>

                {/* Modal Content - Scrollable Photo Grid */}
                <div className="overflow-y-auto p-4 sm:p-6" style={{ maxHeight: 'calc(95vh - 120px)' }}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                    {galleryPhotos.map((photo, idx) => (
                      <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.03 }}
                        whileHover={{ scale: 1.03 }}
                        onClick={() => setSelectedPhoto(selectedPhoto === idx ? null : idx)}
                        className="group relative aspect-square rounded-lg sm:rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
                      >
                        <img
                          src={photo.src}
                          alt={photo.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />

                        {/* Overlay - Visible on hover and when selected */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 ${selectedPhoto === idx ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          }`}>
                          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                            <p className="text-white font-semibold text-xs sm:text-sm truncate">{photo.title}</p>
                            <p className="text-white/80 text-[10px] sm:text-xs truncate">{photo.category}</p>
                          </div>
                        </div>

                        {/* Selection indicator */}
                        {selectedPhoto === idx && (
                          <div className="absolute top-2 right-2 w-5 h-5 bg-gold-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Photo Count */}
                  <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-500">
                    Showing {galleryPhotos.length} photos • Click on any photo to select
                  </div>
                </div>

                {/* Modal Footer - Sticky */}
                <div className="sticky bottom-0 z-10 flex justify-between items-center p-4 sm:p-6 bg-white border-t border-gray-200">
                  <p className="text-xs sm:text-sm text-gray-500">
                    {selectedPhoto !== null ? '1 photo selected' : 'No photo selected'}
                  </p>
                  <button
                    onClick={() => setIsGalleryOpen(false)}
                    className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gold-500 text-royal-950 rounded-lg sm:rounded-xl font-semibold hover:bg-gold-400 transition-colors text-sm sm:text-base"
                  >
                    Close Gallery
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a href="/explore-activities" className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold transition-colors group">
            Explore All Clubs & Activities
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Students;