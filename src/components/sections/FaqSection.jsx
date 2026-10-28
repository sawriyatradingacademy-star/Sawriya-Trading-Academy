import { useState } from 'react'
import { faqsList } from '../../data/faqData'
import SectionHeader from '../ui/SectionHeader'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 border-t border-slate-800/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Frequently Asked"
          title="Common Questions Answered"
          subtitle="Everything you need to know about the enrollment process, course structure, and execution support."
        />

        <div className="space-y-4">
          {faqsList.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-brand-card border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <i
                    className={`fa-solid fa-chevron-down text-slate-400 text-sm transform transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-brand-400' : ''
                    }`}
                  ></i>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
