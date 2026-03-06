"use client"
import React from 'react';
import { SCHOOL_DATA, NAV_LINKS, MAPS_URL } from "../constants"
import { 
  MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, 
  GraduationCap, Clock, CalendarCheck, Award, BookOpen,
  ArrowRight, Send
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Additional school-specific quick links
  const resourceLinks = [
    { label: "Admissions", href: "/admissions" },
    { label: "Academic Calendar", href: "/calendar" },
    { label: "Parent Portal", href: "/parents" },
    { label: "Student Life", href: "/student-life" },
    { label: "Faculty & Staff", href: "/faculty" },
    { label: "Alumni", href: "/alumni" },
  ];

  return (
    <footer id="contact" className="bg-[#0f172b] text-white pt-16 md:pt-20 pb-6 border-t border-royal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: School Identity - 4 cols on large screens */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo and School Name */}
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-18 h-18 rounded-xl flex items-center justify-center text-white transform group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/logo.png" 
                  alt={`${SCHOOL_DATA.name} logo`}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                  }}
                />
                {/* {!SCHOOL_DATA.logo && <GraduationCap size={28} className="text-white" />} */}
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wide text-white block leading-tight">
                  {SCHOOL_DATA.name}
                </span>
                <span className="text-gold-400 text-sm font-medium">Est. {SCHOOL_DATA.founded || '1995'}</span>
              </div>
            </div>
            
            {/* School Description */}
            <p className="text-gray-300 leading-relaxed text-sm border-l-4 border-gold-500 pl-4 italic">
              "{SCHOOL_DATA.description}"
            </p>
            
            {/* School Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Award size={16} className="text-gold-500" />
                <span>Accredited</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <BookOpen size={16} className="text-gold-500" />
                <span>K-12 Education</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CalendarCheck size={16} className="text-gold-500" />
                <span>Year-round</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Clock size={16} className="text-gold-500" />
                <span>Extended Care</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Connect With Us</h4>
              <div className="flex space-x-3">
                {[
                  { Icon: Facebook, color: "hover:bg-[#1877f2]", label: "Facebook" },
                  // { Icon: Twitter, color: "hover:bg-[#1da1f2]", label: "Twitter" },
                  { Icon: Instagram, color: "hover:bg-[#e4405f]", label: "Instagram" },
                  // { Icon: Linkedin, color: "hover:bg-[#0a66c2]", label: "LinkedIn" },
                ].map(({ Icon, color, label }, idx) => (
                  <a 
                    key={idx} 
                    // href={SCHOOL_DATA.socialLinks?.[label.toLowerCase()] || '#'}
                    aria-label={`Follow us on ${label}`}
                    className={`w-10 h-10 rounded-full bg-royal-800 flex items-center justify-center text-gray-400 ${color} hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links - 2 cols on large screens */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-white mb-6 font-serif relative inline-block">
              Explore
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold-500 rounded-full"></span>
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-all duration-200 text-sm flex items-center gap-1 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources - 2 cols on large screens */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-6 font-serif relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold-500 rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-all duration-200 text-sm flex items-center gap-1 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Map - 3 cols on large screens */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-white mb-6 font-serif relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold-500 rounded-full"></span>
            </h3>
            
            <div className="space-y-4 mb-6">
              {/* Address */}
              <div className="flex items-start gap-3 text-gray-300 group">
                <div className="w-8 h-8 rounded-full bg-royal-800 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <MapPin className="text-gold-500" size={16} />
                </div>
                <div>
                  <span className="text-sm font-medium block">Visit Us</span>
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(SCHOOL_DATA.contact.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors"
                  >
                    {SCHOOL_DATA.contact.address}
                  </a>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start gap-3 text-gray-300 group">
                <div className="w-8 h-8 rounded-full bg-royal-800 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <Phone className="text-gold-500" size={16} />
                </div>
                <div>
                  <span className="text-sm font-medium block">Call Us</span>
                  <a 
                    href={`tel:${SCHOOL_DATA.contact.phone}`}
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors"
                  >
                    {SCHOOL_DATA.contact.phone}
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Mon-Fri: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-3 text-gray-300 group">
                <div className="w-8 h-8 rounded-full bg-royal-800 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <Mail className="text-gold-500" size={16} />
                </div>
                <div>
                  <span className="text-sm font-medium block">Email Us</span>
                  <a 
                    href={`mailto:${SCHOOL_DATA.contact.email}`}
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors"
                  >
                    {SCHOOL_DATA.contact.email}
                  </a>
                  <p className="text-xs text-gray-500 mt-1">24/7 response within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Map with overlay */}
            <div className="relative group">
              <div className="w-full h-36 bg-royal-800 rounded-xl overflow-hidden border-2 border-royal-700 group-hover:border-gold-500/50 transition-all duration-300 shadow-xl">
                <iframe
                  title="School Location Map"
                  src={`${MAPS_URL}`}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(SCHOOL_DATA.contact.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
              >
                <span className="bg-gold-500 text-royal-950 px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 transform hover:scale-105 transition-transform">
                  Open in Google Maps <MapPin size={16} />
                </span>
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-royal-800 text-white text-sm px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gold-500 border border-royal-700"
                  aria-label="Email for newsletter"
                />
                <button 
                  className="bg-gold-500 hover:bg-gold-600 text-royal-950 px-4 rounded-r-lg transition-colors flex items-center gap-2"
                  aria-label="Subscribe"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-royal-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p className="text-center md:text-left mb-4 md:mb-0">
              &copy; {currentYear} {SCHOOL_DATA.name}. All rights reserved. 
              <span className="mx-2">|</span>
              <span className="text-gold-500/70">Nurturing minds, building futures</span>
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gold-400 transition-colors flex items-center gap-1">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gold-400 transition-colors flex items-center gap-1">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gold-400 transition-colors flex items-center gap-1">
                Accessibility
              </a>
            </div>
          </div>
          
          {/* Accreditation Badges */}
          <div className="flex justify-center md:justify-end items-center gap-4 mt-4 text-xs text-gray-600">
            <span>Accredited by</span>
            <span className="w-8 h-8 bg-royal-800 rounded-full flex items-center justify-center">🔰</span>
            <span className="w-8 h-8 bg-royal-800 rounded-full flex items-center justify-center">⭐</span>
            <span className="w-8 h-8 bg-royal-800 rounded-full flex items-center justify-center">🏆</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;