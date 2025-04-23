import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function PhaseCard({ title, subtitle, description, tags, color, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/phase/${id}`);
  };

  return (
    <motion.div
      onClick={handleClick}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      whileHover={{ scale: 1.03 }}
      className="group relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col cursor-pointer select-none"
    >
      {/* Header Line */}
      <div
        className="w-12 h-1 mb-4 rounded-full"
        style={{
          backgroundColor: color,
        }}
      ></div>

      {/* Title */}
      <h3 className="text-3xl font-medium font-serif text-gray-700 mb-1 tracking-tight">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 font-medium mb-4 leading-relaxed mt-2 font-light font-display">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs font-semibold px-2 py-1 rounded-full"
            style={{
              backgroundColor: `${color}20`, 
              color: color,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Call-to-Action Button - Aligned at Bottom */}
      <div className="mt-auto flex justify-end">
        <FiArrowRight
          style={{ color: color }}
          className="cursor-pointer text-2xl transition-colors hover:opacity-80"
        />
      </div>
    </motion.div>
  );
}