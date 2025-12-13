import React from 'react';
import { motion } from 'framer-motion';

const AdmissionBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-gold-500 to-gold-600 py-3 px-4 text-center"
    >
      <span className="text-royal-950 text-sm md:text-base font-semibold tracking-wide">
        🎓 Admissions Open for 2024-2025 | Apply Now!
      </span>
    </motion.div>
  );
};

export default AdmissionBanner;