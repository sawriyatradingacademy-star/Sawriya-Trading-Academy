import { testimonialsList } from '../../data/testimonialsData'
import { WHATSAPP_DEMO_URL } from '../../data/constants'
import SectionHeader from '../ui/SectionHeader'

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Student Success Stories"
          title="Loved by Over 15,000+ Aspiring Traders"
          subtitle="Real reviews from working professionals, beginners, and full-time traders who transformed their market mindset."
        />

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsList.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-50/70 p-7 rounded-3xl border border-slate-200/90 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg group"
            >
              <div>
                {/* Rating Stars & City Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 text-sm">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {testimonial.city}
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center space-x-3.5">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200/60 inline-block mt-0.5">
                    {testimonial.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trustpilot / Google Reviews Summary Banner */}
        <div className="mt-12 bg-[#0a2356] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left border border-blue-900 shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#00b67a] text-white rounded-xl flex items-center justify-center text-2xl font-bold shrink-0">
              ★
            </div>
            <div>
              <div className="font-extrabold text-base sm:text-lg text-white">Rated 4.9 out of 5 across 4,920+ verified reviews</div>
              <div className="text-xs text-sky-200">Verified student reviews on Google Maps & Trustpilot</div>
            </div>
          </div>
          <a
            href={WHATSAPP_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#16a34a] hover:bg-[#15803d] text-white font-black uppercase tracking-wider text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center space-x-2 text-center"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>Claim 2 Free Demo Passes on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
