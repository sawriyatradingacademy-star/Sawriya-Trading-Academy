import { useState } from 'react'
import { testimonialsList } from '../../data/testimonialsData'
import SectionHeader from '../ui/SectionHeader'

export default function TestimonialsSection() {
  const [imageErrors, setImageErrors] = useState({})

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <section id="testimonials" className="py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Student Feedback"
          title="What Our Alumni Say"
          subtitle="Real stories from traders who transformed their performance after taking Sawriya Trading Academy courses."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsList.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-50/70 p-7 rounded-3xl border border-slate-200/90 hover:border-brand-500/30 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md glow-card"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex text-amber-400 space-x-1 mb-4 text-xs">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic font-normal">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200/80 flex items-center space-x-3.5">
                {imageErrors[testimonial.id] ? (
                  <div className="w-11 h-11 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-xs font-mono font-bold text-slate-700">
                    {testimonial.fallbackInitials}
                  </div>
                ) : (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    onError={() => handleImageError(testimonial.id)}
                    className="w-11 h-11 rounded-full object-cover border border-slate-200 shadow-xs"
                  />
                )}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                    {testimonial.name}
                  </h4>
                  <div className="text-xs text-slate-500 font-mono">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
