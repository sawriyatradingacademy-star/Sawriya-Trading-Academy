import { WHATSAPP_DEMO_URL, DISPLAY_PHONE, ACADEMY_EMAIL, ACADEMY_LOCATION, ACADEMY_TIMINGS } from '../../data/constants'

const currentYear = 2026

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#081a3d] text-slate-400 py-14 text-xs border-t border-blue-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-blue-900/60">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#0a2356] flex items-center justify-center text-white font-bold shadow-md border border-blue-800">
                <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <div>
                <span className="text-white font-extrabold text-lg block leading-tight">
                  Sawriya Trading Academy
                </span>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                  Practical Market Education
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Empowering individuals to become self-reliant, disciplined traders through our 6-week curriculum covering pure price action, institutional order flow, and strict mathematical risk management. Mentored by Kapil Singla.
            </p>

            <div className="text-slate-400 text-[11px] font-mono">
              📍 {ACADEMY_LOCATION}
            </div>

            <div className="pt-2">
              <a
                href={WHATSAPP_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16a34a] hover:bg-[#15803d] text-white font-black uppercase tracking-wider px-5 py-2.5 rounded-lg text-xs transition-colors inline-flex items-center space-x-2"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
                <span>Claim 2 Free Demo Classes</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-tight">Navigation</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">Our Advantage</a></li>
              <li><a href="#courses" className="hover:text-emerald-400 transition-colors">6-Week Curriculum</a></li>
              <li><a href="#comparison" className="hover:text-emerald-400 transition-colors">Retail vs Systematic</a></li>
              <li><a href="#mentors" className="hover:text-emerald-400 transition-colors">Our Mentor</a></li>
              <li><a href="#faqs" className="hover:text-emerald-400 transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Academy</a></li>
            </ul>
          </div>

          {/* 6 Weeks Curriculum Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-tight">6-Week Modules</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#courses" className="hover:text-emerald-400 transition-colors">Week 1: Market Pe Charcha</a></li>
              <li><a href="#courses" className="hover:text-emerald-400 transition-colors">Week 2: Chartneeti</a></li>
              <li><a href="#courses" className="hover:text-emerald-400 transition-colors">Week 3: Smartneeti (SMC)</a></li>
              <li><a href="#courses" className="hover:text-emerald-400 transition-colors">Week 4: Trader Hai Hum</a></li>
              <li><a href="#courses" className="hover:text-emerald-400 transition-colors">Week 5: Guru Gyan (AI & Swing)</a></li>
              <li><a href="#courses" className="hover:text-emerald-400 transition-colors">Week 6: Option Mantra</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-tight">Academy Support</h4>
            <div className="space-y-2 text-slate-400">
              <p className="flex items-center space-x-2">
                <i className="fa-solid fa-phone text-emerald-400 text-xs"></i>
                <a href={`tel:${DISPLAY_PHONE}`} className="font-mono hover:text-white">
                  {DISPLAY_PHONE}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <i className="fa-brands fa-whatsapp text-emerald-400 text-xs"></i>
                <a href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener noreferrer" className="font-mono hover:text-white">
                  WhatsApp Support
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <i className="fa-solid fa-envelope text-emerald-400 text-xs"></i>
                <a href={`mailto:${ACADEMY_EMAIL}`} className="hover:text-white">
                  {ACADEMY_EMAIL}
                </a>
              </p>
              <p className="text-[11px] text-slate-500 pt-1">
                {ACADEMY_TIMINGS}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top (Social media handles removed as requested) */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p>&copy; {currentYear} Sawriya Trading Academy. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            title="Back to Top"
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-blue-950 text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer text-xs"
          >
            <span>Back to top</span>
            <i className="fa-solid fa-arrow-up text-[10px]"></i>
          </button>
        </div>

        {/* Regulatory Disclaimer */}
        <div className="p-4 rounded-2xl bg-[#061430] border border-blue-950 text-[11px] leading-relaxed text-slate-400">
          <strong className="text-slate-200 font-semibold">Important Educational & Regulatory Disclaimer:</strong> Sawriya Trading Academy is a trading education academy offering technical analysis and trading mentorship programs. We are NOT a SEBI-registered advisory or portfolio management service. We do NOT provide stock tips, investment advice, or guaranteed returns. Trading in derivatives (Futures & Options), equities, commodities, and currencies carries substantial financial risk; SEBI reports show that 9 out of 10 individual traders in the equity F&O segment incur net losses. Please consult a certified financial advisor before risking real capital.
        </div>
      </div>
    </footer>
  )
}
