import React from 'react';
import { motion } from 'framer-motion';
import parabolicRectangle from '../assets/parabolic-rectangle.png';

const AboutSection = () => {
  return (
    <section className="relative py-12 px-6 bg-white text-gray-100 flex justify-center">
      {/* Centered Content with Rounded Background */}
      <div
        className="relative overflow-hidden rounded-3xl w-full max-w-10xl h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${parabolicRectangle})`,
          backgroundSize: '160%',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Content Container */}
        <div className="relative z-10 max-w-4xl text-center px-4">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl font-bold text-white tracking-tight mb-4"
          >
            About the Project
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-snug"
          >
            Bridging advanced geometric principles with real-world applications to redefine crowd simulation.
          </motion.p>

          {/* Subtle Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="w-24 h-[2px] bg-gray-600 mx-auto mb-12"
          ></motion.div>

          {/* Rich Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto"
          >
            Our project leverages the power of 
            <span className="font-medium text-white"> Hilbert Geometry</span> 
            to drive intelligent and adaptive crowd simulations. By integrating advanced geometric 
            models, agents dynamically respond to environmental changes, ensuring fluid and realistic 
            interactions. The focus lies on scalability, responsiveness, and delivering simulations 
            that are not only accurate but also computationally efficient.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;