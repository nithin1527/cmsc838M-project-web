import React, { useState } from "react";
import { phasesData } from "../data/phasesData";
import { FiSearch, FiBookOpen, FiVideo, FiFileText, FiLink } from "react-icons/fi";

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPhases = phasesData
    .map((phase) => {
      const filteredResources = {
        papers: phase.resources?.papers?.filter((item) =>
          (item.title || item.name).toLowerCase().includes(searchTerm.toLowerCase())
        ) || [],
        videos: phase.resources?.videos?.filter((item) =>
          (item.title || item.name).toLowerCase().includes(searchTerm.toLowerCase())
        ) || [],
        notion: phase.resources?.notion?.filter((item) =>
          (item.title || item.name).toLowerCase().includes(searchTerm.toLowerCase())
        ) || [],
        links: phase.resources?.links?.filter((item) =>
          (item.title || item.name).toLowerCase().includes(searchTerm.toLowerCase())
        ) || [],
      };

      return { ...phase, resources: filteredResources };
    })
    .filter(
      (phase) =>
        phase.resources.papers.length > 0 ||
        phase.resources.videos.length > 0 ||
        phase.resources.notion.length > 0 ||
        phase.resources.links.length > 0
    ); 

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-medium font-serif text-center mb-6 tracking-tight mt-4">
        Resources
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-3 border rounded-full shadow-sm px-4 py-2 bg-white w-full max-w-md">
          <FiSearch className="text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full focus:outline-none text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Phase Cards */}
      {filteredPhases.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhases.map((phase) => (
            <PhaseCard key={phase.id} phase={phase} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No resources found.</p>
      )}
    </div>
  );
}

function PhaseCard({ phase }) {
  return (
    <div className="flex bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      {/* Color Strip */}
      <div
        className="w-1.5 flex-shrink-0"
        style={{ backgroundColor: phase.color }}
      ></div>

      {/* Main Content */}
      <div className="p-6 flex-1">
        {/* Phase Header with Pill Underline */}
        <div className="mb-4">
          <h2 className="text-3xl font-medium font-serif text-gray-800 relative inline-block pb-1">
            Phase {phase.id}
            <span
              className="absolute left-0 bottom-0 w-full h-1 rounded-full"
              style={{ backgroundColor: phase.color }}
            ></span>
          </h2>
        </div>

        {/* Resource Grid */}
        <div className="space-y-4">
          {phase.resources?.papers?.length > 0 && (
            <ResourceList
              title="Papers"
              icon={<FiBookOpen className="text-blue-500 text-lg" />}
              items={phase.resources.papers}
            />
          )}
          {phase.resources?.videos?.length > 0 && (
            <ResourceList
              title="Videos"
              icon={<FiVideo className="text-red-500 text-lg" />}
              items={phase.resources.videos}
            />
          )}
          {phase.resources?.notion?.length > 0 && (
            <ResourceList
              title="Notion Links"
              icon={<FiFileText className="text-yellow-500 text-lg" />}
              items={phase.resources.notion}
            />
          )}
          {phase.resources?.links?.length > 0 && (
            <ResourceList
              title="Other Links"
              icon={<FiLink className="text-green-500 text-lg" />}
              items={phase.resources.links}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// Resource List Component
function ResourceList({ title, icon, items }) {
  return (
    <div>
      <h3 className="text-lg font-medium font-serif text-gray-700 flex items-center gap-2 mt-4">
        {icon} {title}
      </h3>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 max-h-48 overflow-auto">
        {items.map((item, idx) => (
          <li key={idx}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {item.title || item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}