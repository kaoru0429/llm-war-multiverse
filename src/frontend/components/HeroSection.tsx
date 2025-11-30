import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>
        {/* Placeholder for Parallax Background - Starfield or Neural Net */}
        <div className="w-full h-full bg-[url('/assets/neural-bg.jpg')] bg-cover bg-center animate-pulse-slow"></div>
      </div>
      
      <div className="z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          The First LLM Architecture War
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          2022 - 2025: From Dense Giants to Agile Experts
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
            Explore History
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
