import React from 'react';
import { CAMPUS_IMAGES } from './constants';

const Campus: React.FC = () => {
  return (
    <section id="campus" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
            <span className="text-gold-600 font-semibold tracking-wider uppercase text-sm">Facilities</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-950 mt-2">World-Class Infrastructure</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAMPUS_IMAGES.map((item, idx) => (
                <div key={idx} className={`relative group overflow-hidden rounded-xl ${idx === 0 ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'} shadow-md`}>
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <span className="px-2 py-1 bg-gold-500 text-xs font-bold uppercase rounded-full text-royal-950 mb-2 inline-block">{item.category}</span>
                            <h3 className="text-xl font-serif font-bold">{item.title}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Campus;