import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import AboutSection from "./components/AboutSection";
import TeamSection from "./components/Team";
import ServicesPage from "./components/ServicesPage";
import Footer from "./components/Footer";
import JobHighlightsPage from "./components/JobHighlightsPage";
import ConsultationModal from "./components/ConsultationModal";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <HeroCarousel />
              <AboutSection />
              <TeamSection />
             
            </>
          }
        />

        {/* Dedicated pages */}
        <Route path="/about" element={<AboutSection />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/jobs" element={<JobHighlightsPage />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
      <Footer />
      <ConsultationModal />
     
    </Router>
  );
}

export default App;