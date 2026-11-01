import AnnouncementBar from './components/layout/AnnouncementBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import StatsBanner from './components/sections/StatsBanner'
import WhyChooseUs from './components/sections/WhyChooseUs'
import ComparisonSection from './components/sections/ComparisonSection'
import CoursesSection from './components/sections/CoursesSection'
import DemoBannerSection from './components/sections/DemoBannerSection'
import MentorsSection from './components/sections/MentorsSection'
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

      {/* 2. Sticky Navigation Bar */}
      <Navbar />

      {/* 3. Main Single Page Application Content */}
      <main className="flex-1">
        {/* Hero Section with Split Layout & Photographic Diagonal Cut */}
        <HeroSection />

        {/* High-Contrast Credibility & Stats Band (5,000+ Students, 10 Years Exp, 3,000+ Careers, 2 Free Demos) */}
        <StatsBanner />

        {/* Why Choose Us - The Sawriya Advantage (Asymmetrical Bento-Grid) */}
        <WhyChooseUs />

        {/* Retail Gambler vs. Systematic Trader Comparison Matrix */}
        <ComparisonSection />

        {/* 6-Week Master Trading Curriculum Section */}
        <CoursesSection />

        {/* Promotional Callout Banner: 2 Free Live Demo Classes */}
        <DemoBannerSection />

        {/* Faculty / Mentors Section: Kapil & Lakshay */}
        <MentorsSection />

        {/* Comprehensive FAQs Accordion */}
        <FaqSection />

        {/* Contact, Gurugram Academy Address & Direct WhatsApp / Helpline */}
        <ContactSection />
      </main>

      {/* 4. Comprehensive Footer with 6-Week Links and Regulatory Disclaimer */}
      <Footer />

      {/* 5. Floating Right-Edge Green Tab: 2 Free Demo Classes (Direct WhatsApp Connect) */}
      <FloatingDemoTab />

      {/* 6. Floating Bottom-Right WhatsApp Quick Connect */}
      <FloatingWhatsApp />
    </div>
  )
}
