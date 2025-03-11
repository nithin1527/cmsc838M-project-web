// src/components/Layout.jsx
import FloatingNav from "./FloatingNav";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Pill-shaped, floating, sticky navbar */}
      

      {/* The main content goes below the nav; add padding-top to avoid overlap */}
      <main>
        <FloatingNav />
        {children}
      </main>
    </div>
  );
}