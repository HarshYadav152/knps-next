import React from 'react';
import { FACULTY } from './constants';

const Faculty: React.FC = () => {
  return (
    <section id="teachers" className="py-16 md:py-24 bg-royal-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
            <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm">Our Mentors</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2">Meet Our Distinguished Faculty</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto px-2">
                Led by visionaries, taught by experts. Our educators are dedicated to inspiring greatness in every student.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {FACULTY.map((teacher, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-xl bg-royal-900">
                    <div className="aspect-[3/4] overflow-hidden">
                        <img 
                            src={teacher.image} 
                            alt={teacher.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale" 
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-transparent to-transparent opacity-80"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-lg font-bold text-white">{teacher.name}</h3>
                        <p className="text-gold-400 text-sm font-medium mb-2">{teacher.role}</p>
                        <p className="text-gray-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            {teacher.bio}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;