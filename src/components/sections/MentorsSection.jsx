import { useState } from 'react'
import { mentorsList } from '../../data/mentorsData'
import SectionHeader from '../ui/SectionHeader'

export default function MentorsSection() {
  const [imageErrors, setImageErrors] = useState({})

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <section id="mentors" className="py-24 bg-slate-50/60 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Expert Guidance"
          title="Learn From Seasoned Practitioners"
          subtitle="Our mentors bring decades of institutional trading desk experience to Sawriya Trading Academy."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentorsList.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden hover:border-brand-500/40 transition-all duration-300 group flex flex-col justify-between shadow-xs hover:shadow-lg"
            >
              <div className="p-7 text-center">
                {/* Avatar with fallback */}
                <div className="relative w-28 h-28 mx-auto mb-5">
                  {imageErrors[mentor.id] ? (
                    <div className="w-28 h-28 rounded-full bg-slate-100 border-2 border-brand-500/40 flex items-center justify-center text-xl font-bold font-mono text-brand-700 shadow-xs">
                      {mentor.fallbackInitials}
                    </div>
                  ) : (
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      onError={() => handleImageError(mentor.id)}
                      className="w-28 h-28 rounded-full mx-auto object-cover border-2 border-brand-500/30 group-hover:scale-105 group-hover:border-brand-500 transition-all duration-300 shadow-sm"
                    />
                  )}
                  <div
                    className="absolute bottom-0 right-1 w-6 h-6 rounded-full bg-brand-600 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold shadow-xs"
                    title="Verified Mentor"
                  >
                    <i className="fa-solid fa-check"></i>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight">{mentor.name}</h3>
                <div className="text-xs font-mono text-brand-600 font-semibold mt-1">
                  {mentor.role}
                </div>
                <p className="text-slate-600 text-sm mt-3.5 leading-relaxed">
                  {mentor.bio}
                </p>
              </div>

              <div className="px-7 pb-6 pt-4 border-t border-slate-100 flex items-center justify-center space-x-2 text-xs font-mono text-slate-500">
                <i className={`${mentor.icon} text-brand-600 mr-1`}></i>
                <span>{mentor.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
