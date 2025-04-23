import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import PhaseCard from './PhaseCard'; // Importing the reusable PhaseCard component
import { phasesData } from '../data/phasesData'; // Importing actual phase data

const PhaseCards = () => {
  // Define which phases to display
  const current_phases_ids = [1, 2, 3];

  // Filter the phasesData to only include current phases
  const currentPhases = phasesData.filter((phase) =>
    current_phases_ids.includes(phase.id)
  );

  return (
    <section className=" px-6 bg-white">
      {/* Header Section with Animation */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl font-medium font-serif text-gray-900 tracking-tight"
        >
          Current Phases
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="text-gray-600 mt-2 font-light font-display"
        >
          Explore the different stages of project development.
        </motion.p>
      </div>

      {/* Phase Cards Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {currentPhases.map((phase) => (
          <PhaseCard
            key={phase.id}
            id={phase.id}
            title={phase.title}
            subtitle={`Phase ${phase.id}`}
            description={phase.overview}
            tags={phase.concepts || []}
            color={phase.color || '#007AFF'} // Default color fallback
          />
        ))}
      </motion.div>
    </section>
  );
};

export default PhaseCards;
