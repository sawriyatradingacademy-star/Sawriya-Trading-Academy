import { WHATSAPP_DEMO_URL } from '../../data/constants'
import { DemoPassIcon } from '../ui/Icons'

export default function DemoBannerSection() {
  return (
    <section className="py-16 bg-[#fcfbf9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a2356] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-blue-900">
          {/* Subtle Ambient Chart Graphic */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1 rounded-full font-mono border border-emerald-500/30">
                <DemoPassIcon className="w-3.5 h-3.5 text-emerald-300" />
                <span>Zero Risk • No Obligation Trial Pass</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                Experience Our Live Teaching Before You Enroll. <br className="hidden sm:inline" />
                <span className="text-emerald-400">Claim Your 2 Free Live Demo Classes.</span>
              </h3>

              <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
                Most institutes show historical screenshots. We invite you to join our actual live market Zoom room where lead instructors trade real market hours in front of you. Evaluate our clarity, discipline, and methodology for yourself.
              </p>

              {/* 3 Quick Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center space-x-2 bg-blue-950/60 p-2.5 rounded-xl border border-blue-800/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Active Market Hours</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-950/60 p-2.5 rounded-xl border border-blue-800/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>100% Free • No Payment</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-950/60 p-2.5 rounded-xl border border-blue-800/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Live Mentor Q&A</span>
                </div>
              </div>
            </div>

            {/* Right Action */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-3">
              <a
                href={WHATSAPP_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-black uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl transition-all transform hover:scale-[1.02] text-center text-sm sm:text-base flex items-center justify-center space-x-2"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>Book 2 Free Demo Classes</span>
              </a>
              <div className="text-xs text-sky-200 text-center font-mono">
                ⚡ Only 14 demo passes remaining for this cohort.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
