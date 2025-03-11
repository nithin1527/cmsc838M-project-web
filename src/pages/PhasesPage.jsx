import React from "react";
import { phasesData } from "../data/phasesData";
import PhaseCard from "../components/PhaseCard";

export default function PhasesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <h1 className="text-5xl font-medium font-serif text-gray-900 text-center mb-4">
        Project Phases
      </h1>
      <p className="text-center text-gray-600 mb-12 font-medium">
        Explore each phase of our project!
      </p>

      {/* Grid Layout for Phase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {phasesData.map((phase) => (
          <PhaseCard
            key={phase.id}
            id = {phase.id}
            title={phase.title}
            subtitle={`Phase ${phase.id}`}
            description={phase.overview}
            tags={phase.concepts || []}
            color={phase.color || "#007AFF"} // Default Apple Blue if no color is provided
          />
        ))}
      </div>
    </div>
  );
}
