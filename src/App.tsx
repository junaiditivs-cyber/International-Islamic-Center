import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import useSeo from "./seo/useSeo";

// Separate each page into its own chunk. Visiting the homepage no longer loads
// the registration, reviews, courses, and other pages in advance.
const Home = lazy(() => import("./pages/Home"));
const Courses = lazy(() => import("./pages/Courses"));
const HowItWorksPage = lazy(() => import("./pages/HowItWorks"));
const FAQPage = lazy(() => import("./pages/FAQ"));
const Enroll = lazy(() => import("./pages/Enroll"));
const Location = lazy(() => import("./pages/Location"));
const Contact = lazy(() => import("./pages/Contact"));
const Trial = lazy(() => import("./pages/Trial"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Reviews = lazy(() => import("./pages/Reviews"));
const IslamicTopicPage = lazy(() => import("./pages/IslamicTopicPage"));
const ProgramPage = lazy(() => import("./pages/ProgramPage"));
const Quran = lazy(() => import("./pages/Quran"));
const Sunnah = lazy(() => import("./pages/Sunnah"));
const Salah = lazy(() => import("./pages/Salah"));

export default function App() {
  useSeo();
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<main aria-label="Loading page" className="min-h-screen bg-black" />}>
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
          <Route path="/topic/:slug" element={<ProgramPage />} />
          <Route path="/topics/:slug" element={<IslamicTopicPage />} />
          <Route path="/pillar/quran" element={<Quran />} />
          <Route path="/pillar/sunnah" element={<Sunnah />} />
          <Route path="/pillar/salah" element={<Salah />} />
        </Routes>
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </div>
  );
}
