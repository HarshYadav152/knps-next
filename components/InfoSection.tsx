"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Users, Trophy, Sparkles, Target, Heart, 
  GraduationCap, Globe, Award, ArrowRight, CheckCircle,
  Rocket, Shield, Zap
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const InfoSection: React.FC = () => {
    const router = useRouter()
    const features = [
        {
            icon: BookOpen,
            title: "Academic Excellence",
            description: "Our rigorous curriculum prepares students for the challenges of higher education and beyond with advanced placement and honors courses.",
            color: "from-blue-500 to-indigo-600",
            stats: "98% college acceptance",
            link: "/academics"
        },
        {
            icon: Users,
            title: "Expert Faculty",
            description: "Learn from distinguished educators who are passionate about mentoring the next generation with personalized attention.",
            color: "from-purple-500 to-pink-600",
            stats: "12:1 student-teacher ratio",
            link: "/faculty"
        },
        {
            icon: Trophy,
            title: "Holistic Growth",
            description: "Beyond grades, we focus on character building, sports, and arts for all-round development of every student.",
            color: "from-amber-500 to-orange-600",
            stats: "30+ extracurriculars",
            link: "/students"
        }
    ];

    const additionalFeatures = [
        { icon: Shield, title: "Safe Environment", desc: "Secure campus with 24/7 monitoring" },
        // { icon: Rocket, title: "STEM Focus", desc: "State-of-the-art labs & robotics" },
        // { icon: Globe, title: "Global Perspective", desc: "Exchange programs & cultural events" },
        // { icon: Heart, title: "Character Building", desc: "Values-based education" },
        // { icon: Award, title: "Merit Scholarships", desc: "Recognition for excellence" },
        { icon: Target, title: "Career Guidance", desc: "College counseling & support" },
    ];

    const stats = [
        { value: "3+", label: "Years of Excellence" },
        { value: "300+", label: "Active Students" },
        { value: "98%", label: "College Acceptance" },
        { value: "5+", label: "Expert Faculty" },
    ];

    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-royal-800/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse delay-1000"></div>
                
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
                        <span className="font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-royal-950 mb-6">
                        Nurturing Minds,{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-gold-600">Building Character</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-gold-200/50 -z-0 rounded-full"></span>
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We believe in providing an education that goes beyond academics, fostering 
                        intellectual curiosity, moral integrity, and personal growth in every student.
                    </p>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-gold-600 mb-2">{stat.value}</div>
                            <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                
                                {/* Content */}
                                <div className="relative z-10 p-8">
                                    {/* Icon with gradient background */}
                                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                        <Icon size={32} />
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-royal-950 mb-3 group-hover:text-white transition-colors">
                                        {feature.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-white/90 transition-colors">
                                        {feature.description}
                                    </p>
                                    
                                    {/* Stats badge */}
                                    <div className="inline-block px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-xs font-semibold mb-4 group-hover:bg-white/20 group-hover:text-white transition-colors">
                                        {feature.stats}
                                    </div>
                                    
                                    {/* Learn more link */}
                                    <motion.a
                                        href={feature.link}
                                        className="flex items-center gap-2 text-gold-600 group-hover:text-white font-semibold text-sm"
                                        whileHover={{ x: 5 }}
                                    >
                                        Learn more
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </motion.a>
                                </div>
                                
                                {/* Bottom accent bar */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Additional Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mb-16"
                >
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-royal-950 mb-8 text-center">
                        More Reasons to Choose Us
                    </h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {additionalFeatures.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center group"
                                >
                                    <div className="w-10 h-10 bg-gradient-to-br from-royal-800 to-royal-950 rounded-lg flex items-center justify-center text-white mx-auto mb-3 group-hover:scale-110 transition-transform">
                                        <Icon size={18} />
                                    </div>
                                    <h4 className="font-semibold text-royal-900 text-xs mb-1">{item.title}</h4>
                                    <p className="text-[10px] text-gray-500">{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Testimonial/Quote Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-royal-900 to-royal-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
                >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 border-4 border-gold-500/20 rounded-full"></div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 text-center md:text-left">
                            <GraduationCap size={48} className="text-gold-400 mb-4 mx-auto md:mx-0" />
                            <h4 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                                Ready to Start Your Journey?
                            </h4>
                            <p className="text-gray-300 mb-6 max-w-lg">
                                Join us where excellence meets opportunity. Discover how we can help your child reach their full potential.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <motion.button
                                    onClick={(e)=>(router.push("/apply-now"))}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="cursor-pointer group px-6 py-3 bg-gold-500 text-royal-950 rounded-xl font-semibold hover:bg-gold-400 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                                >
                                    Apply Now
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                                
                                <motion.button
                                    onClick={(e)=>(router.push("/appointment/tour"))}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="cursor-pointer px-6 py-3 bg-transparent border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                                >
                                    Schedule Tour
                                </motion.button>
                            </div>
                        </div>
                        
                        {/* Quick Stats */}
                        <div className="flex md:flex-col gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gold-400">98%</div>
                                <div className="text-xs text-gray-300">Parent Satisfaction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gold-400">3+</div>
                                <div className="text-xs text-gray-300">Years Legacy</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Trust Indicators */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60"
                >
                    <span className="text-sm text-gray-400">Accredited by</span>
                    <div className="flex gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">
                                Logo
                            </div>
                        ))}
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default InfoSection;