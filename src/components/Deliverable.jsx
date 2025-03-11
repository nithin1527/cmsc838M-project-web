// Deliverable.jsx

import React from 'react';
import {
  FaGithub,
  FaFilePdf,
  FaCogs,
} from 'react-icons/fa';
import {SiArxiv, SiYoutube, SiGoogleslides} from 'react-icons/si';
import PropTypes from 'prop-types';

const actionTypes = {
  arxiv: {
    icon: <SiArxiv />,
    color: '#4CAF50', 
  },
  github: {
    icon: <FaGithub />,
    color: '#333333', 
  },
  pdf: {
    icon: <FaFilePdf />,
    color: '#E91E63',
  },
  video: {
    icon: <SiYoutube />,
    color: '#FF0000', 
  },
  software: {
    icon: <FaCogs />,
    color: '#9C27B0', 
  },
  "google-slides": {
    icon: <SiGoogleslides/>,
    color: '#F59E0B',
  },
};

const Deliverable = ({ title, description, actions }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      {/* Title */}
      <h3 className="text-xl font-medium text-gray-900 mb-2 font-serif">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-4 text-sm">{description}</p>

      {/* Action Buttons */}
      {actions && actions.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {actions.map((action, idx) => {
            const actionType = actionTypes[action.type];
            if (!actionType) return null; // Skip if action type is undefined

            return (
              <a
                key={idx}
                href={action.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 border rounded-md text-sm font-medium"
                style={{ borderColor: actionType.color, color: actionType.color }}
              >
                <span className="mr-2 text-lg">{actionType.icon}</span>
                <span>{action.name}</span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

Deliverable.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['arxiv', 'github', 'pdf', 'video', 'software'])
        .isRequired,
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

export default Deliverable;