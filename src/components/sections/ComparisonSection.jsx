import { comparisonPoints } from '../../data/comparisonData'
import { WHATSAPP_DEMO_URL } from '../../data/constants'
import { CheckCircleIcon, DemoPassIcon } from '../ui/Icons'
import SectionHeader from '../ui/SectionHeader'

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-20 md:py-28 bg-[#fcfbf9] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Market Reality vs. Academic Method"
          title="Why 90% of Retail Traders Fail"
          subtitle="Compare unguided social media speculation against the disciplined, institutional methodology taught at Sawriya Academy."
        />

        {/* Comparison Table / Cards */}
        <div className="mt-12 overflow-hidden border border-slate-200/90 rounded-3xl shadow-xl bg-white">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[#0a2356] text-white p-5 md:p-6 text-sm font-bold">
            <div className="hidden md:block md:col-span-3 text-slate-300 uppercase tracking-wider text-xs">
              Trading Parameter
            </div>
            <div className="md:col-span-4 text-rose-400 flex items-center space-x-2 mb-2 md:mb-0">
              <span className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center text-xs">✕</span>
              <span>Retail Speculation (Tips & Hope)</span>
            </div>
            <div className="md:col-span-5 text-emerald-400 flex items-center space-x-2">
              <CheckCircleIcon className="w-5 h-5 text-emerald-400" />
              <span>Sawriya Systematic Trader</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100">
            {comparisonPoints.map((point, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 p-5 md:p-6 text-sm hover:bg-slate-50/70 transition-colors gap-3 md:gap-4 items-center"
              >
                {/* Parameter */}
                <div className="md:col-span-3 font-bold text-[#0a192f] flex items-center space-x-2 text-xs sm:text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span>{point.parameter}</span>
                </div>

                {/* Retail (Negative) */}
                <div className="md:col-span-4 bg-rose-50/50 border border-rose-100 md:bg-transparent md:border-0 rounded-2xl p-3.5 md:p-0 text-slate-600 flex items-start space-x-2.5">
                  <span className="text-rose-500 font-bold shrink-0 text-sm mt-0.5">✕</span>
                  <span className="text-xs sm:text-sm leading-relaxed">{point.retail}</span>
                </div>

                {/* Sawriya (Positive) */}
                <div className="md:col-span-5 bg-emerald-50/50 border border-emerald-100 md:bg-transparent md:border-0 rounded-2xl p-3.5 md:p-0 text-slate-800 font-medium flex items-start space-x-2.5">
                  <span className="text-emerald-600 font-bold shrink-0 mt-0.5">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
                  </span>
                  <span className="text-xs sm:text-sm leading-relaxed">{point.sawriya}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout Banner */}
          <div className="bg-gradient-to-r from-[#0a192f] via-slate-900 to-emerald-950 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left border-t border-slate-800">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Which side of the market do you choose?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Experience our disciplined institutional framework firsthand in 2 Free Live Demo Classes.
              </p>
            </div>
            <a
              href={WHATSAPP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-[#0a192f] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-2xl transition-all shrink-0 shadow-lg flex items-center justify-center space-x-2 text-center"
            >
              <DemoPassIcon className="w-4 h-4 text-[#0a192f]" />
              <span>Book 2 Free Demo Classes via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
