import React from "react";
import { updatesData } from "../data/updatesData";

export default function Updates() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white text-gray-900 mt-2">
      {/* Page Header */}
      <h1 className="text-5xl font-medium font-serif text-center mb-4 tracking-tight">
        Updates
      </h1>
      <p className="text-center font-medium text-gray-500 mb-8 text-md leading-relaxed">
        Stay informed about the latest updates and improvements.
      </p>

      {/* Updates List */}
      <div className="space-y-4">
        {updatesData.map((update, idx) => (
          <UpdateCard
            key={idx}
            date={formatDate(update.date)}
            title={update.title}
            content={update.content}
          />
        ))}
      </div>
    </div>
  );
}

// Update Card Component
function UpdateCard({ date, title, content }) {
  return (
    <div style={{
      border: '2px solid',
      borderImage: 'linear-gradient(135deg, #F06595, #74C0FC) 1',
      borderRadius: '0.75rem'
    }} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm transition-shadow">
      {/* Date */}
      <h2 className="text-xs font-semibold text-gray-400 uppercase mb-2 tracking-wide">
        {date}
      </h2>

      {/* Title */}
      <h3 className="text-2xl font-serif font-medium text-black-800 mb-3 leading-snug">
        {title}
      </h3>

      {/* Content */}
      <ul className="list-none pl-0 space-y-2 text-sm text-gray-600">
        {content.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-gray-400">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Helper Function: Format Date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}