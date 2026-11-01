import { useState } from 'react'
import { faqList } from '../../data/faqData'
import { WHATSAPP_DEMO_URL } from '../../data/constants'
import SectionHeader from '../ui/SectionHeader'

export default function FaqSection() {
  const [openId, setOpenId] = useState(1) // Default first FAQ open

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#f8fafc] border-t border-slate-200/90 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Frequently Asked Questions"
          title="Got Questions? We Have Answers."
          subtitle="Everything you need to know about our teaching methodology, batch schedules, and the 2 Free Live Demo Classes."
        />

        <div className="space-y-3.5 mt-10">
          {faqList.map((item) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-emerald-500/50 shadow-md shadow-emerald-500/5'
                    : 'border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs transition-transform duration-200 ${
                      isOpen
                        ? 'bg-emerald-600 text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Still have questions banner (without Call Counselor button) */}
        <div className="mt-10 text-center bg-white border border-slate-200 rounded-3xl p-8 shadow-xs">
          <h4 className="font-bold text-slate-900 text-lg">Have more specific questions?</h4>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-lg mx-auto">
            Book 2 Free Live Demo Classes and ask your questions directly to Kapil Singla on WhatsApp.
          </p>
          <div className="mt-5 flex justify-center">
            <a
              href={WHATSAPP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16a34a] hover:bg-[#15803d] text-white font-black uppercase tracking-wider text-xs sm:text-sm px-8 py-3.5 rounded-xl transition-all shadow-sm flex items-center space-x-2"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Book 2 Free Demo Classes on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
