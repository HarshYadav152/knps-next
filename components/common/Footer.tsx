import React from 'react';
import { SCHOOL_DATA, NAV_LINKS, MAPS_URL } from "../constants"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-royal-950 text-white pt-16 md:pt-20 pb-10 border-t border-royal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-8">

          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-white shadow-lg">
                <img src="/logo.png" alt="knps" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-white">
                {SCHOOL_DATA.name}
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              {SCHOOL_DATA.description}
            </p>
            <div className="flex space-x-4 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-royal-900 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-10">
            <h3 className="text-lg font-bold text-white mb-6 font-serif relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gold-500 -mb-2"></span>
            </h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 hover:translate-x-1 transition-all duration-200 block text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Map */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-serif relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gold-500 -mb-2"></span>
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 text-gray-400 group">
                <MapPin className="mt-1 text-gold-500 flex-shrink-0 group-hover:text-gold-400" size={18} />
                <span className="text-sm group-hover:text-gray-300 transition-colors">{SCHOOL_DATA.contact.address}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 group">
                <Phone className="text-gold-500 flex-shrink-0 group-hover:text-gold-400" size={18} />
                <span className="text-sm group-hover:text-gray-300 transition-colors">
                  <a href={`tel:${SCHOOL_DATA.contact.phone}`}>{SCHOOL_DATA.contact.phone}</a>
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 group">
                <Mail className="text-gold-500 flex-shrink-0 group-hover:text-gold-400" size={18} />
                <span className="text-sm group-hover:text-gray-300 transition-colors">
                  <a href={`mailto:${SCHOOL_DATA.contact.email}`}>{SCHOOL_DATA.contact.email}</a>
                </span>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-32 bg-royal-900 rounded-lg overflow-hidden relative border border-royal-800 group hover:border-gold-500/50 transition-colors">
              <iframe
                title="School Location"
                // Change zoom (z) as needed
                src={`${MAPS_URL}`}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-royal-900 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="text-center md:text-left mb-4 md:mb-0">&copy; {new Date().getFullYear()} {SCHOOL_DATA.name}. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;