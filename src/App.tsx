import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import HowItWorksPage from "./pages/HowItWorks";
import FAQPage from "./pages/FAQ";
import Enroll from "./pages/Enroll";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import Trial from "./pages/Trial";
import Pricing from "./pages/Pricing";
import Reviews from "./pages/Reviews";
import IslamicTopicPage from "./pages/IslamicTopicPage";
import ProgramPage from "./pages/ProgramPage";
import Quran from "./pages/Quran";
import Sunnah from "./pages/Sunnah";
import Salah from "./pages/Salah";

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trial" element={<Trial />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/reviews" element={<Reviews />} />

        {/* Program cards pages */}
        <Route path="/topic/:slug" element={<ProgramPage />} />

        {/* Islamic topic pages */}
        <Route path="/topics/:slug" element={<IslamicTopicPage />} />

        <Route path="/pillar/quran" element={<Quran />} />
        <Route path="/pillar/sunnah" element={<Sunnah />} />
        <Route path="/pillar/salah" element={<Salah />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}