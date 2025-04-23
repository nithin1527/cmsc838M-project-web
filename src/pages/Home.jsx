// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { updatesData } from "../data/updatesData";
import PhaseCard from "../components/PhaseCard";
import UpdateCard from "../components/UpdateCard";
import { FiArrowRight } from "react-icons/fi";
import PhaseCards from "../components/PhaseCards";
import { MdCampaign } from "react-icons/md";
import { FaBullhorn } from "react-icons/fa";

import crowdBackground from "../assets/crowd-background.jpg";
import AboutSection from "../components/About";

export default function Home() {
  const recentUpdates = updatesData.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center mb-10 mt-5">
        {/* Background Image */}
        <div
          className="w-full h-full bg-cover bg-center flex items-center justify-center m-10 rounded-2xl"
          style={{
            backgroundImage: `url(${crowdBackground})`,
          }}
        >
            <div className="z-10 text-center px-6 md:px-14">
            <div className="bg-white rounded-xl shadow-md px-8 py-8 max-w-5xl mx-auto border border-gray-700">
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-gray-700 leading-tight tracking-tight font-display"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                S C O O T O P I A
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl mt-8 text-gray-700 font-medium font-serif"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
              >
                An RL Approach to Modeling Unsafe Vehicle, Pedestrian, and Micro-Mobility Interactions
              </motion.p>
              <motion.p
                className="text-lg md:text-xl mt-4 text-gray-900 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
              >
                Grace Cai,   Nithin Parepally
              </motion.p>
            </div>
          </div>
        </div>


      </section>

      <PhaseCards />

      {/* Updates Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-4xl font-medium font-serif text-center mb-12 text-gray-900">Recent Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto">

          {recentUpdates.map((update, index) => (
            <div
              key={index}
              className="relative bg-white p-6 border-[2px] transition-transform hover:shadow-lg hover:-translate-y-1"
              style={{
                border: '2px solid',
                borderImage: 'linear-gradient(135deg, #F06595, #74C0FC) 1',
                borderRadius: '0.75rem'
              }}
            >
              <div className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                <FaBullhorn className="h-4 w-4 text-gray-600" />
                <span>{update.date}</span>
              </div>
              <h3 className="text-lg font-serif font-medium text-gray-900 mb-2">{update.title}</h3>
              <p className="text-sm text-gray-700 line-clamp-3">{update.content.join(" ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      {/* <AboutSection /> */}

    </div>
  );
}