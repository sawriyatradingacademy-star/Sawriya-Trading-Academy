import { WHATSAPP_DEMO_URL } from '../../data/constants'
import { ArrowRightIcon, CandlestickChartIcon, ClassroomUsersIcon, DemoPassIcon, LiveDeskIcon, ShieldProtectionIcon } from '../ui/Icons'
import SectionHeader from '../ui/SectionHeader'

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="The Sawriya Institutional Standard"
          title="Why Aspiring Traders Choose Sawriya Academy"
          subtitle="90% of retail traders lose capital relying on tips and lagging indicators. Our modern curriculum gives you institutional discipline and real chart independence."
        />

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
          
          {/* Card 1: Large Featured Classroom Card (Span 8) */}
          <div className="md:col-span-8 bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between">
            <div className="p-8 sm:p-10 relative z-10 max-w-xl">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-emerald-200">
                <LiveDeskIcon className="w-4 h-4 text-emerald-600" />
                <span>Active Market Hours Execution</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] tracking-tight leading-snug">
                Practical Live Market Training, <br className="hidden sm:inline" />
                Not Outdated Theory Slides.
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                Theory taught on static weekend slides fails the moment high-volatility hits. At Sawriya Trading Academy, students sit in live market sessions during active 9:15 AM – 3:30 PM trading hours, witnessing real-time supply-demand imbalances, liquidity sweeps, and price rejection.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Live Nifty & Bank Nifty Order Flow</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Real-Time Entry & Exit Logic</span>
                </div>
              </div>
            </div>

            {/* Subtle background image slice with gradient overlay */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=900"
                alt="Live Trading Screens"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
            </div>
          </div>

          {/* Card 2: 2 Free Live Demo Classes Action Card (Span 4) */}
          <div className="md:col-span-4 bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl p-8 sm:p-9 text-white shadow-lg bento-glow-green relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/20">
                <DemoPassIcon className="w-6 h-6 text-emerald-100" />
              </div>
              <div className="text-xs uppercase tracking-wider font-mono text-emerald-200 font-semibold mb-1">
                Zero Cost Opportunity
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight leading-snug">
                2 Free Live Demo Classes
              </h3>
              <p className="text-emerald-100 text-sm mt-3 leading-relaxed">
                Experience our live teaching standard before paying a single rupee. Complete market transparency—evaluate our price action logic risk-free.
              </p>
            </div>

            <div className="pt-8">
              <a
                href={WHATSAPP_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-emerald-900 hover:bg-emerald-50 font-bold py-3.5 px-4 rounded-2xl shadow-md transition-all text-sm flex items-center justify-center space-x-2 text-center"
              >
                <span>Claim 2 Free Passes on WhatsApp</span>
                <ArrowRightIcon className="w-4 h-4 text-emerald-700" />
              </a>
              <div className="text-[11px] text-emerald-200 text-center mt-2">
                ⚡ Limited to 25 demo learners per week
              </div>
            </div>
          </div>

          {/* Card 3: Zero Tips Anti-Gimmick Card (Span 4) */}
          <div className="md:col-span-4 bg-[#0a192f] text-white rounded-3xl p-8 border border-slate-800 shadow-md bento-glow-navy flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-6 border border-rose-500/20">
                <ShieldProtectionIcon className="w-6 h-6 text-rose-400" />
              </div>
              <div className="text-xs font-mono text-rose-400 uppercase tracking-wider font-semibold mb-1">
                Anti-Gimmick Manifesto
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Zero Tips, 100% Practical Skill
              </h3>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                We strictly do not sell call tips, Telegram signals, or get-rich-quick scams. We teach you how to analyze naked candlestick charts so you are never dependent on anyone else.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800 flex items-center space-x-2 text-xs font-semibold text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Certified Independent Trading Blueprint</span>
            </div>
          </div>

          {/* Card 4: 1% Risk Engine Metric Card (Span 4) */}
          <div className="md:col-span-4 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 border border-amber-200">
                <CandlestickChartIcon className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-xs font-mono text-amber-700 uppercase tracking-wider font-semibold mb-1">
                Institutional Risk Engine
              </div>
              <h3 className="text-xl font-bold text-[#0a192f] tracking-tight">
                Capital Protection First (1% Rule)
              </h3>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                Trading profitability is 80% risk management and math. You will master the exact capital preservation formulas used by proprietary funds to ensure you never blow an account.
              </p>
            </div>

            {/* Formula Pill */}
            <div className="mt-6 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-500">Max Risk / Trade:</span>
                <span className="font-bold text-rose-600">≤ 1.0% Capital</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Min Risk-Reward:</span>
                <span className="font-bold text-emerald-600">≥ 1 : 2.5 Ratio</span>
              </div>
            </div>
          </div>

          {/* Card 5: Lifetime Alumni Network (Span 4) */}
          <div className="md:col-span-4 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-200">
                <ClassroomUsersIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-xs font-mono text-blue-700 uppercase tracking-wider font-semibold mb-1">
                Lifelong Community
              </div>
              <h3 className="text-xl font-bold text-[#0a192f] tracking-tight">
                Lifetime Alumni Support Desk
              </h3>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                Your learning does not end on graduation day. Receive daily morning pre-market analysis watchlists, weekly Q&A webinars, and lifetime access to our peer trade review community.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center space-x-3">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white">KS</div>
                <div className="w-7 h-7 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white">ST</div>
                <div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white">5K</div>
              </div>
              <span className="text-xs font-semibold text-slate-700">5,000+ Alumni Network</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
