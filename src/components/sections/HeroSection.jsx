import LiveTradingPreview from './LiveTradingPreview'

export default function HeroSection({ onEnrollClick }) {
  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-emerald-500/5 rounded-full blur-[130px] -z-10 pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-sky-500/5 rounded-full blur-[110px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2.5 bg-slate-50 border border-slate-200 rounded-full px-4 py-1.5 text-xs font-mono text-slate-700 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              <span className="font-semibold text-brand-700">Enrollment Open for Spring 2026 Batch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Welcome to <span className="gradient-text">Sawriya Trading Academy</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Transition from complete beginner to systematic trader. Learn price action
              strategy, risk management discipline, and market structure from experienced
              trading mentors.
            </p>

            {/* Key Stats Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 max-w-xl mx-auto lg:mx-0">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900">94%</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Completion Rate</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900">12 Wks</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Live Mentorship</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900">4.9/5</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Student Rating</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
              <a
                href="#curriculum"
                className="w-full sm:w-auto text-center bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-4 rounded-xl shadow-md shadow-brand-600/20 transition-all transform hover:-translate-y-0.5 text-sm"
              >
                Explore Curriculum
              </a>
              <button
                onClick={onEnrollClick || (() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                })}
                className="w-full sm:w-auto text-center border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center cursor-pointer text-sm shadow-xs"
              >
                <i className="fa-solid fa-graduation-cap text-brand-600 mr-2"></i> Enroll Today
              </button>
            </div>
          </div>

          {/* Right Hero Feature Card */}
          <div className="lg:col-span-5">
            <LiveTradingPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
