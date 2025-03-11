import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PhasesPage from "./pages/PhasesPage"; // Added PhasesPage
import PhasePage from "./pages/PhasePage";
import Resources from "./pages/Resources";
import Updates from "./pages/Updates";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          
          {/* Phases Overview Page */}
          <Route path="/phases" element={<PhasesPage />} />
          
          {/* Individual Phase Pages */}
          <Route path="/phase/:id" element={<PhasePage />} />
          
          {/* Resources Page */}
          <Route path="/resources" element={<Resources />} />
          
          {/* Updates Page */}
          <Route path="/updates" element={<Updates />} />
        </Routes>
      </Layout>
    </Router>
  );
}
