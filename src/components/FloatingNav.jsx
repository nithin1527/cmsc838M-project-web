// src/components/FloatingNav.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Phases", path: "/phases" },
  { name: "Resources", path: "/resources" },
  { name: "Updates", path: "/updates" },
];

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`top-4 inset-x-0 mx-auto z-50 border border-gray-200 rounded-full px-8 py-3 flex items-center justify-center gap-6 backdrop-blur-lg bg-opacity-90 max-w-fit transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-white/40 border border-white/10"
          : "backdrop-blur-lg bg-white/40 border border-white/10"
      }`}
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <ul className="flex gap-8 items-center relative">
        {navItems.map((item) => (
          <li key={item.path} className="relative group">
            <Link
              to={item.path}
              className={`text-sm font-medium transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-black font-semibold"
                  : "text-gray-800 hover:text-gray-500"
              }`}
            >
              {item.name}
            </Link>
            <AnimatePresence>
              {location.pathname === item.path && (
                <motion.div
                  key={item.path}
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-black"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </nav>
  );
}