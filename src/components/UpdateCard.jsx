// src/components/UpdateCard.jsx
import React from "react";

export default function UpdateCard({ title, description, date }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow border border-gray-200">
      <div className="mb-2">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 line-clamp-3">
        {description}
      </p>
      <div className="mt-2 text-xs text-gray-400">{date}</div>
    </div>
  );
}
