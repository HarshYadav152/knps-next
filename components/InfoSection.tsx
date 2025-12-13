import React from 'react';
import { BookOpen, Users, Trophy } from 'lucide-react';

const InfoSection: React.FC = () => {
    const features = [
        {
            icon: BookOpen,
            title: "Academic Excellence",
            description: "Our rigorous curriculum prepares students for the challenges of higher education and beyond."
        },
        {
            icon: Users,
            title: "Expert Faculty",
            description: "Learn from distinguished educators who are passionate about mentoring the next generation."
        },
        {
            icon: Trophy,
            title: "Holistic Growth",
            description: "Beyond grades, we focus on character building, sports, and arts for all-round development."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-gold-600 font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-950 mt-2 mb-4">Nurturing Minds, Building Character</h2>
                    <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-royal-100 text-royal-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-royal-950 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfoSection;