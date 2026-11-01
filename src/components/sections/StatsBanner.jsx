import { WHATSAPP_DEMO_URL } from '../../data/constants'
import { DemoPassIcon } from '../ui/Icons'

export default function StatsBanner() {
  const stats = [
    {
      number: '15,000+',
      label: 'Students Mentored',
      subtext: 'Across 28+ states & NRI learners',
    },
    {
      number: '14+ Years',
      label: 'Market Desk Experience',
      subtext: 'Through bull & bear market cycles',
    },
    {
      number: '4.9 / 5.0',
      label: 'Verified Academic Score',
      subtext: 'Google Maps & Trustpilot reviews',
    },
    {
      number: '2 Free',
      label: 'Live Demo Classes',
      subtext: 'Attend live before paying any fee',
      highlight: true,
    },
  ]

  return (
    <section className="bg-[#0a192f] text-white py-14 sm:py-16 border-y border-slate-800 relative overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 ${
                stat.highlight
                  ? 'bg-gradient-to-b from-emerald-950/80 to-slate-900 border border-emerald-500/50 relative shadow-lg'
                  : 'border border-slate-800/80 bg-slate-900/50'
              }`}
            >
              {stat.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm flex items-center space-x-1">
                  <DemoPassIcon className="w-3.5 h-3.5 text-slate-950" />
                  <span>Trial Lecture Pass</span>
                </div>
              )}
              <div
                className={`text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight ${
                  stat.highlight ? 'text-emerald-400' : 'text-white'
                }`}
              >
                {stat.number}
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-100 mt-2.5">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-1">{stat.subtext}</div>

              {stat.highlight && (
                <a
                  href={WHATSAPP_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3.5 inline-flex items-center text-xs font-bold text-emerald-400 hover:text-emerald-300 underline"
                >
                  <i className="fa-brands fa-whatsapp mr-1 text-sm"></i>
                  <span>Claim 2 Free Passes on WhatsApp →</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
