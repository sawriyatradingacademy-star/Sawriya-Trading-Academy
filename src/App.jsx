import AnnouncementBar from './components/layout/AnnouncementBar'
import MarketTicker from './components/layout/MarketTicker'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import StatsBanner from './components/sections/StatsBanner'
import WhyChooseUs from './components/sections/WhyChooseUs'
import ComparisonSection from './components/sections/ComparisonSection'
import CoursesSection from './components/sections/CoursesSection'
import DemoBannerSection from './components/sections/DemoBannerSection'
import MentorsSection from './components/sections/MentorsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import FaqSection from './components/sections/FaqSection'
import ContactSection from './components/sections/ContactSection'
import FloatingDemoTab from './components/ui/FloatingDemoTab'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp'
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfbf9] text-slate-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white relative">
      {/* 1. Top Urgent Batch Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Global Market Ticker Bar */}
      <MarketTicker />

      {/* 3. Sticky Glass Navigation Bar */}
      <Navbar />

      {/* 4. Main Single Page Application Content */}
      <main className="flex-1">
        {/* Hero Section with Online Trading Academy Split Layout & Diagonal Photographic Slice */}
        <HeroSection />

        {/* High-Contrast Credibility & Stats Band (inspired by TIDI Academy) */}
        <StatsBanner />

        {/* Why Choose Us - The Sawriya Advantage (Asymmetrical Bento-Grid) */}
        <WhyChooseUs />

        {/* Retail Gambler vs. Systematic Trader Comparison Matrix */}
        <ComparisonSection />

        {/* 6-Week Master Trading Curriculum Section (Market Pe Charcha, Chartneeti, Smartneeti, Trader Hai Hum, Guru Gyan, Option Mantra) */}
        <CoursesSection />

        {/* Promotional Callout Banner: 2 Free Live Demo Classes */}
        <DemoBannerSection />

        {/* Faculty / Mentors Section */}
        <MentorsSection />

        {/* Verified Student Reviews & Testimonials */}
        <TestimonialsSection />

        {/* Comprehensive FAQs Accordion */}
        <FaqSection />

        {/* Contact, Campus Address & Direct Admissions Helpline Section */}
        <ContactSection />
      </main>

      {/* 5. Comprehensive Footer with 6-Week Links and Regulatory Disclaimer */}
      <Footer />

      {/* 6. Floating Right-Edge Green Tab: 2 Free Demo Classes (Direct WhatsApp Connect) */}
      <FloatingDemoTab />

      {/* 7. Floating Bottom-Right WhatsApp Quick Connect */}
      <FloatingWhatsApp />
    </div>
  )
}
