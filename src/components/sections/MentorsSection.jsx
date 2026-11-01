import { useState } from 'react'
import { mentorsList } from '../../data/mentorsData'
import { WHATSAPP_DEMO_URL } from '../../data/constants'
import SectionHeader from '../ui/SectionHeader'

export default function MentorsSection() {
  const [imageErrors, setImageErrors] = useState({})

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <section id="mentors" className="py-20 md:py-28 bg-[#f8fafc] border-y border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Expert Guidance"
          title="Learn Directly From Market Practitioners"
          subtitle="No academic theorists. Our lead mentors have spent over a decade navigating active bull and bear market cycles."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentorsList.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between group"
            >
              <div className="p-7 text-center">
                {/* Mentor Photo with fallback */}
                <div className="relative w-28 h-28 mx-auto mb-5">
                  {imageErrors[mentor.id] ? (
                    <div className="w-28 h-28 rounded-full bg-slate-100 border-2 border-emerald-500/40 flex items-center justify-center text-xl font-bold font-mono text-emerald-700 shadow-xs">
                      {mentor.fallbackInitials}
                    </div>
                  ) : (
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      onError={() => handleImageError(mentor.id)}
                      className="w-28 h-28 rounded-full mx-auto object-cover border-2 border-emerald-500/30 group-hover:scale-105 group-hover:border-emerald-500 transition-all duration-300 shadow-sm"
                    />
                  )}
                  <div
                    className="absolute bottom-0 right-1 w-6 h-6 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold shadow-xs"
                    title="Verified Trading Mentor"
                  >
                    <i className="fa-solid fa-check"></i>
                  </div>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-mono text-xs font-semibold mb-2 border border-emerald-200">
                  {mentor.experience}
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight">{mentor.name}</h3>
                <div className="text-xs font-mono text-emerald-600 font-semibold mt-1">
                  {mentor.role}
                </div>
                <p className="text-slate-600 text-sm mt-3.5 leading-relaxed">
                  {mentor.bio}
                </p>
              </div>

              <div className="px-7 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center">
                  <i className={`${mentor.icon} text-emerald-600 mr-1.5`}></i>
                  <span>{mentor.tag}</span>
                </span>
                <span className="text-emerald-700 font-semibold">Active Desk</span>
              </div>
            </div>
          ))}
        </div>

        {/* Meet the mentors in Demo Class note */}
        <div className="mt-12 text-center bg-white border border-slate-200 rounded-2xl p-6 max-w-2xl mx-auto shadow-sm">
          <p className="text-slate-700 text-sm">
            Want to see how our mentors analyze markets live? <br />
            <strong>Attend our 2 Free Live Demo Classes this week</strong> and interact with them in real time.
          </p>
          <a
            href={WHATSAPP_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700 underline"
          >
            <i className="fa-brands fa-whatsapp text-base"></i>
            <span>Book Your Free Demo Interaction Passes on WhatsApp →</span>
          </a>
        </div>
      </div>
    </section>
  )
}
