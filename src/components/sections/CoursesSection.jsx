import { useState } from 'react'
import { curriculumWeeks } from '../../data/curriculumData'
import { WHATSAPP_DEMO_URL } from '../../data/constants'
import { CheckCircleIcon, DemoPassIcon } from '../ui/Icons'
import SectionHeader from '../ui/SectionHeader'

export default function CoursesSection() {
  const [activeWeekIndex, setActiveWeekIndex] = useState(0)

  const activeWeek = curriculumWeeks[activeWeekIndex]

  return (
    <section id="courses" className="py-20 md:py-28 bg-[#f8fafc] border-t border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Complete 6-Week Course Curriculum"
          title="Master The Markets Week-By-Week"
          subtitle="Equipping learners with the practical skills, risk management, and execution strategies needed to trade across equities, derivatives, forex, and crypto successfully."
        />

        {/* 6-Week Navigation Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-10 max-w-5xl mx-auto">
          {curriculumWeeks.map((item, index) => {
            const isActive = activeWeekIndex === index
            return (
              <button
                key={item.week}
                onClick={() => setActiveWeekIndex(index)}
                className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#0a2356] text-white border-[#0a2356] shadow-lg ring-2 ring-emerald-400/50'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs'
                }`}
              >
                <div className={`text-[11px] font-mono font-bold uppercase tracking-wider ${isActive ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {item.week}
                </div>
                <div className="font-bold text-xs sm:text-sm tracking-tight truncate mt-0.5">
                  {item.title}
                </div>
              </button>
            )
          })}
        </div>

        {/* Spotlight Weekly Breakdown Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {activeWeek.week}
                </span>
                <span className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${activeWeek.badgeColor}`}>
                  {activeWeek.tag}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {activeWeek.duration}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0a2356] tracking-tight">
                  {activeWeek.week}: {activeWeek.title}
                </h3>
                <p className="text-sm font-bold text-emerald-700 mt-1">
                  {activeWeek.subtitle}
                </p>
                <p className="text-slate-600 text-sm mt-3.5 leading-relaxed">
                  {activeWeek.description}
                </p>
              </div>

              {/* Core Syllabus Topics */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Topics Covered in {activeWeek.week}:
                </h4>
                <div className="space-y-2.5">
                  {activeWeek.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-sm text-slate-700">
                      <span className="text-emerald-600 shrink-0 mt-0.5">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
                      </span>
                      <span className="leading-snug font-medium">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Direct WhatsApp Integration */}
              <div className="pt-4 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <a
                  href={WHATSAPP_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#16a34a] hover:bg-[#15803d] text-white font-black uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all text-xs sm:text-sm flex items-center justify-center space-x-2 text-center"
                >
                  <DemoPassIcon className="w-4 h-4 text-emerald-100" />
                  <span>Book 2 Free Live Demo Classes</span>
                </a>

                <a
                  href={WHATSAPP_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold px-6 py-3.5 rounded-xl hover:bg-slate-50 transition-all text-xs sm:text-sm flex items-center justify-center space-x-1.5"
                >
                  <i className="fa-brands fa-whatsapp text-emerald-600 mr-1.5 text-base"></i>
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Overview & All Weeks Roadmap */}
            <div className="lg:col-span-5 bg-[#0a2356] text-white p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-blue-900">
              <div className="space-y-5">
                <div className="pb-4 border-b border-blue-900">
                  <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                    Comprehensive 6-Week Roadmap
                  </div>
                  <div className="text-xl font-bold font-mono text-white mt-1">
                    6 Intensive Weeks
                  </div>
                  <div className="text-xs text-sky-200 mt-0.5">
                    Live Online & Offline Hybrid Batches
                  </div>
                </div>

                {/* Quick 6-Week List */}
                <div className="space-y-2 text-xs">
                  {curriculumWeeks.map((item, idx) => {
                    const isCurrent = idx === activeWeekIndex
                    return (
                      <button
                        key={item.week}
                        onClick={() => setActiveWeekIndex(idx)}
                        className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                          isCurrent
                            ? 'bg-emerald-600/90 text-white font-bold shadow-xs'
                            : 'bg-blue-950/50 text-slate-300 hover:bg-blue-900/50 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center space-x-2">
                          <span className="font-mono text-[11px] opacity-80">{item.week}:</span>
                          <span>{item.title}</span>
                        </span>
                        <i className={`fa-solid ${isCurrent ? 'fa-circle-chevron-right text-white' : 'fa-chevron-right text-slate-500'} text-[11px]`}></i>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Bottom WhatsApp CTA */}
              <div className="pt-6 border-t border-blue-900/80 mt-6">
                <div className="text-[11px] text-sky-200 mb-2">
                  Have questions about week schedules or batch timings?
                </div>
                <a
                  href={WHATSAPP_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-[#0a2356] font-black uppercase tracking-wider py-3.5 px-4 rounded-xl transition-colors text-xs sm:text-sm shadow-md flex items-center justify-center space-x-2 text-center"
                >
                  <i className="fa-brands fa-whatsapp text-lg text-[#0a2356]"></i>
                  <span>Chat With Us On WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
