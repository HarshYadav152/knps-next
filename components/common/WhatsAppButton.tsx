"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ChevronUp, Send, Phone, Mail } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  position?: 'bottom-right' | 'bottom-left';
  showPopup?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "+1234567890", // Replace with your school's WhatsApp number
  message = "Hello, I'm interested in learning more about Excellence Academy.",
  position = 'bottom-right',
  showPopup = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [messageText, setMessageText] = useState(message);
  const [isHovered, setIsHovered] = useState(false);

  // Handle scroll to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open WhatsApp with pre-filled message
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  // Position classes
  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`fixed ${positionClasses[position]} z-50 flex flex-col items-end gap-3`}
      >
        {/* Quick Action Popup */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="mb-2 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">Chat with us</h3>
                    <p className="text-xs text-white/80">Typically replies within minutes</p>
                  </div>
                </div>
              </div>

              {/* Message Input Area */}
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-2">Quick message:</p>
                <textarea
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Type your message here..."
                  rows={3}
                  className="w-full p-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 resize-none"
                />
                
                <div className="flex gap-2 mt-3">
                  {/* Send Button */}
                  <button
                    onClick={openWhatsApp}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 p-3 border-t border-gray-100">
                <p className="text-[10px] text-gray-400 text-center">
                  By messaging us you agree to our terms and privacy policy
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main WhatsApp Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={() => setIsOpen(!isOpen)}
          className="relative group"
        >
          {/* Ripple effect */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
          
          {/* Button */}
          <div className={`relative w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}>
            {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
          </div>

          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && !isOpen && (
              <motion.div
                initial={{ opacity: 0, x: position === 'bottom-right' ? 10 : -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: position === 'bottom-right' ? 10 : -10 }}
                className={`absolute top-1/2 -translate-y-1/2 ${
                  position === 'bottom-right' ? 'right-16' : 'left-16'
                } whitespace-nowrap bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-lg`}
              >
                Chat with us on WhatsApp
                <div className={`absolute top-1/2 -translate-y-1/2 ${
                  position === 'bottom-right' ? 'right-[-6px]' : 'left-[-6px]'
                } w-3 h-3 bg-gray-900 transform rotate-45`}></div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Scroll to Top Button (appears after scrolling) */}
        <AnimatePresence>
          {showScrollButton && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-royal-800 flex items-center justify-center text-white shadow-lg hover:bg-royal-700 transition-colors"
            >
              <ChevronUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Alternative Contact Options (Optional) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppButton;