import React from "react";
import { useParams } from "react-router-dom";
import { phasesData } from "../data/phasesData";
import {
  FiExternalLink,
  FiBookOpen,
  FiBox,
  FiFlag,
  FiArrowRight,
  FiCheckCircle,
  FiSettings,
  FiXCircle,
  FiVideo,
  FiFileText,
  FiLink
} from "react-icons/fi";

import Deliverable from "../components/Deliverable";

function parseBulletPoints(text) {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

export default function PhasePage() {
  const { id } = useParams();
  const phaseId = parseInt(id, 10);
  const phase = phasesData.find((p) => p.id === phaseId);

  if (!phase) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-semibold text-gray-500">Phase not found!</h1>
      </div>
    );
  }

  const titleWithoutPhase = phase.title.replace(/Phase \d+:\s*/, ""); 

  return (
    <div className="min-h-screen bg-white font-inter text-gray-800 px-4 md:px-0">

      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center mb-5 mt-5"
      >
        {/* Background Image with Rounded Corners */}
        <div
          className="w-full h-full bg-cover bg-center flex items-center justify-center m-10 rounded-2xl overflow-hidden relative"
          style={{
            backgroundImage: `url(${phase.image ? phase.image : `https://picsum.photos/1200/500?random=${phase.id}`})`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gray-800/10"></div>

          {/* Phase Badge */}
          <div className="absolute top-6 left-6 z-20">
            <span
              className="text-md md:text-lg font-semibold px-4 py-2 rounded-md"
              style={{
                backgroundColor: phase.color,
                color: '#FFFFFF',
              }}
            >
              Phase {phase.id}
            </span>
          </div>

          {/* Title and Subtitle Box */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full px-6">
            <div className="bg-white rounded-xl shadow-xl px-10 md:px-16 py-8 md:py-12 max-w-4xl text-center border border-gray-100">

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-normal font-serif text-gray-900 mb-4 leading-snug">
                {titleWithoutPhase}
              </h1>

              {/* Subtitle */}
              <p className="text-gray-600 font-light font-display leading-relaxed max-w-3xl mx-auto">
                {phase.overview}
              </p>

              {/* Decorative Accent Line (Bottom) */}
              <div className="flex justify-center mt-6">
                <div
                  className="h-1 w-16 rounded-full"
                  style={{ backgroundColor: phase.color }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 md:px-16 py-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Combined Section: Overview, Research Process, Challenges & Takeaways */}
          <SectionCard title="Overview" phaseColor={phase.color}>
              {phase.overview && (
                <div className="space-y-4">
                  <p className="text-gray-700 text-base leading-relaxed">{phase.overview}</p>
                </div>
              )}
          </SectionCard>

          {phase.mainContent && (
            <SectionCard title={phase.mainContentTitle} phaseColor={phase.color}>
              <div className="space-y-4">
                {phase.mainContent.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 text-base leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Deliverables Section */}
          {phase.deliverables?.length > 0 && (
            <SectionCard
              title="Deliverables"
              phaseColor={phase.color}
              icon={<FiFlag className="text-blue-500" />}
            >
              <div className="space-y-4">
                {phase.deliverables.map((deliverable, idx) => (
                  <Deliverable
                    key={idx}
                    title={deliverable.title}
                    description={deliverable.description}
                    actions={deliverable.actions}
                  />
                ))}
              </div>
            </SectionCard>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-4 sticky top-6 self-start">
          {/* Tech Stack */}
          {phase.techStack?.length > 0 && (
            <SidebarCard
              title="Tech Stack"
              icon={<FiBox className="text-purple-500" />}
              phaseColor={phase.color}
            >
              <div className="flex flex-wrap gap-2">
                {phase.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full text-sm font-medium text-white bg-opacity-90 hover:bg-opacity-100 transition-all duration-200"
                    style={{
                      backgroundColor: phase.color,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </SidebarCard>
          )}

          {/* Concepts */}
          {phase.concepts?.length > 0 && (
            <SidebarCard
              title="Concepts"
              icon={<FiBookOpen className="text-yellow-500" />}
              phaseColor={phase.color}
            >
              <div className="flex flex-wrap gap-2">
                {phase.concepts.map((concept, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-sm font-medium text-gray-800"
                    style={{
                      backgroundColor: `${phase.color}20`, // Subtle tint
                      border: `1px solid ${phase.color}`, // Subtle border
                    }}
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </SidebarCard>
          )}

          {/* Resources */}
          <SidebarCard
            title="Resources"
            icon={<FiExternalLink className="text-green-500" />}
            phaseColor={phase.color}
          >
            <div className="space-y-6 text-sm">
              {/* Papers */}
              {phase.resources?.papers?.length > 0 && (
                <div>
                  <h4 className="text-xl font-serif font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <FiBookOpen className="text-gray-600" /> Papers
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {phase.resources.papers.map((paper, idx) => (
                      <li key={idx}>
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-blue-500"
                        >
                          {paper.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Videos */}
              {phase.resources?.videos?.length > 0 && (
                <div>
                  <h4 className="text-xl font-serif font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <FiVideo className="text-gray-600" /> Videos
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {phase.resources.videos.map((video, idx) => (
                      <li key={idx}>
                        <a
                          href={video.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-blue-500"
                        >
                          {video.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Notion Pages */}
              {phase.resources?.notion?.length > 0 && (
                <div>
                  <h4 className="text-xl font-serif font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <FiFileText className="text-gray-600" /> Notion Pages
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {phase.resources.notion.map((page, idx) => (
                      <li key={idx}>
                        <a
                          href={page.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-blue-500"
                        >
                          {page.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Links */}
              {phase.resources?.links?.length > 0 && (
                <div>
                  <h4 className="text-xl font-serif font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <FiLink className="text-gray-600" /> Links
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {phase.resources.links.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-blue-500"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </SidebarCard>
        </aside>
      </div>
    </div>
  );
}

function SectionCard({ title, icon, children, phaseColor }) {
  return (
    <div className={`bg-white p-5`}>
      <h2 className="text-lg md:text-xl font-medium text-gray-800 flex items-center gap-2 mb-3 font-serif">
        {icon} <span className="border-b-2 pb-1 text-base md:text-2xl" style={{ borderColor: phaseColor }}>{title}</span>
      </h2>
      {children}
    </div>
  );
}

function SidebarCard({ title, icon, children, phaseColor }) {
  return (
    <div
      className="border border-gray-200 rounded-lg px-6 py-5 flex flex-col gap-4"
      style={{
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div
          className="flex items-center justify-center rounded-md text-xl"
          style={{
            color: phaseColor,
          }}
        >
          {icon}
        </div>
        
        {/* Title with Underline */}
        <div>
          <h3 className="text-xl font-medium font-serif text-gray-900 relative inline-block">
            {title}
            <span
              className="absolute bottom-0 left-0 h-0.5 w-full rounded-full"
              style={{
                backgroundColor: phaseColor,
              }}
            ></span>
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="text-gray-700 text-sm leading-relaxed ">
        {children}
      </div>
    </div>
  );
}