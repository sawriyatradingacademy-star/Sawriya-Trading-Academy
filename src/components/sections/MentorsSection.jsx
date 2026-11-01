import { useState } from 'react'
import { mentorsList } from '../../data/mentorsData'
import { WHATSAPP_DEMO_URL } from '../../data/constants'
import SectionHeader from '../ui/SectionHeader'

export default function MentorsSection() {
  const [imageError, setImageError] = useState(false)
  const mentor = mentorsList[0]

  return (
    <section id="mentors" className="py-20 md:py-28 bg-[#f8fafc] border-y border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Expert Guidance"
          title="Learn Directly From Kapil Singla"
          subtitle="No academic theorists. Learn from seasoned market practitioner Kapil Singla with over 10 years of active trading desk experience."
        />

        {/* Single Featured Spotlight Card */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col justify-between group">
            <div className="p-8 sm:p-10 text-center">
              {/* Mentor Photo with fallback */}
              <div className="relative w-36 h-36 mx-auto mb-6">
                {imageError ? (
                  <div className="w-36 h-36 rounded-full bg-slate-100 border-4 border-emerald-500/40 flex items-center justify-center text-3xl font-black font-mono text-emerald-800 shadow-sm">
                    {mentor.fallbackInitials}
                  </div>
                ) : (
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    onError={() => setImageError(true)}
                    className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-slate-100 group-hover:scale-105 group-hover:border-emerald-500 transition-all duration-300 shadow-lg"
                  />
                )}
                <div
                  className="absolute bottom-1 right-2 w-8 h-8 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center text-xs text-white font-bold shadow-md"
                  title="Lead Trading Mentor"
                >
                  <i className="fa-solid fa-check"></i>
                </div>
              </div>

              <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-mono text-xs font-bold mb-3 border border-emerald-200">
                {mentor.experience}
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#0a192f] tracking-tight">
                {mentor.name}
              </h3>
              <div className="text-xs sm:text-sm font-mono text-emerald-700 font-bold mt-1 uppercase tracking-wider">
                {mentor.role}
              </div>
              <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed max-w-lg mx-auto">
                {mentor.bio}
              </p>
            </div>

            <div className="px-8 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500 bg-slate-50/50">
              <span className="flex items-center">
                <i className={`${mentor.icon} text-emerald-600 mr-2 text-sm`}></i>
                <span className="font-semibold text-slate-700">{mentor.tag}</span>
              </span>
              <span className="text-emerald-700 font-bold">Active Trading Desk</span>
            </div>
          </div>
        </div>

        {/* Meet Kapil in Demo Class prompt */}
        <div className="mt-10 text-center bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto shadow-xs">
          <p className="text-slate-700 text-sm sm:text-base font-medium">
            Want to see how Kapil Singla analyzes markets live? <br />
            <strong>Attend our 2 Free Live Demo Classes this week</strong> and interact with him in real time.
          </p>
          <a
            href={WHATSAPP_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 underline"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>Book Your Free Demo Interaction Passes on WhatsApp →</span>
          </a>
        </div>
      </div>
    </section>
  )
}
