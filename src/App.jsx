import { useState } from 'react'
import MarketTicker from './components/layout/MarketTicker'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import CurriculumSection from './components/sections/CurriculumSection'
import MentorsSection from './components/sections/MentorsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import FaqSection from './components/sections/FaqSection'
import ContactSection from './components/sections/ContactSection'
import EnrollModal from './components/ui/EnrollModal'
import './App.css'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenEnrollModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseEnrollModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#0b0f17] text-[#e2e8f0] flex flex-col font-sans selection:bg-brand-500 selection:text-black">
      {/* Top Market Ticker Bar */}
      <MarketTicker />

      {/* Navigation Bar */}
      <Navbar onEnrollClick={handleOpenEnrollModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection onEnrollClick={handleOpenEnrollModal} />
        <AboutSection />
        <CurriculumSection />
        <MentorsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Enrollment Popup Modal */}
      <EnrollModal isOpen={isModalOpen} onClose={handleCloseEnrollModal} />
    </div>
  )
}
