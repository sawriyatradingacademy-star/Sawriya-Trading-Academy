import { WHATSAPP_DEMO_URL, CALL_PHONE_NUMBER, ACADEMY_EMAIL } from '../../data/constants'
import { DemoPassIcon } from '../ui/Icons'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-xs font-mono font-bold text-emerald-800 uppercase tracking-widest mb-3 px-3.5 py-1 bg-emerald-50 rounded-full border border-emerald-200">
            Admissions & Student Desk
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2356] tracking-tight leading-tight">
            Connect Directly With Our Counselors
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Have questions about the 6-week curriculum, next batch start date, or want to claim your <strong>2 Free Live Demo Classes</strong>? Reach out to us directly on WhatsApp or phone.
          </p>
        </div>

        {/* High-Impact Direct Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: WhatsApp Immediate Connect (Featured Card) */}
          <div className="bg-gradient-to-br from-[#0a2356] to-slate-900 rounded-3xl p-8 text-white shadow-xl border border-blue-900 flex flex-col justify-between group hover:border-emerald-500/50 transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center text-3xl mb-6 border border-[#25D366]/30">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                Instant Response
              </span>
              <h3 className="text-xl font-bold text-white mt-3">
                Chat on WhatsApp
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                Connect directly with our admissions team. Receive the syllabus PDF, class schedules, and your 2 Free Demo Zoom links instantly.
              </p>
            </div>

            <div className="pt-8">
              <a
                href={WHATSAPP_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-black uppercase tracking-wider py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-transform transform group-hover:scale-[1.02] shadow-md"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>Open WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Card 2: Phone Hotline */}
          <div className="bg-[#fcfbf9] rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0a2356] flex items-center justify-center text-2xl mb-6 border border-blue-200">
                <i className="fa-solid fa-phone"></i>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                Student Helpline
              </span>
              <h3 className="text-xl font-bold text-[#0a2356] mt-3">
                Call Our Admissions Desk
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Speak directly with an academic counselor to discuss your learning goals, background, and optimal batch timing.
              </p>
            </div>

            <div className="pt-8">
              <a
                href={`tel:${CALL_PHONE_NUMBER.replace(/\s+/g, '')}`}
                className="w-full bg-[#0a2356] hover:bg-[#081a3d] text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-colors shadow-sm text-center"
              >
                <i className="fa-solid fa-phone text-xs"></i>
                <span>Call {CALL_PHONE_NUMBER}</span>
              </a>
              <div className="text-[11px] text-slate-500 text-center mt-2 font-mono">
                Mon - Sat: 9:00 AM - 7:30 PM
              </div>
            </div>
          </div>

          {/* Card 3: Offline Academy Campus */}
          <div className="bg-[#fcfbf9] rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl mb-6 border border-emerald-200">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Physical Campus
              </span>
              <h3 className="text-xl font-bold text-[#0a2356] mt-3">
                Visit Academy Center
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Sawriya Tower, 3rd Floor, Financial District, Indore, Madhya Pradesh 452010.
              </p>
            </div>

            <div className="pt-8 space-y-3">
              <a
                href={WHATSAPP_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-colors text-center shadow-xs"
              >
                <DemoPassIcon className="w-4 h-4 text-emerald-600" />
                <span>Book 2 Free Demo Classes</span>
              </a>
              <div className="text-[11px] text-slate-500 text-center font-mono">
                Email: {ACADEMY_EMAIL}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
