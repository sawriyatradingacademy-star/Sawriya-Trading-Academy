import EnrollmentForm from './EnrollmentForm'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-block text-xs font-mono font-semibold text-brand-500 uppercase tracking-widest mb-3 px-3 py-1 bg-brand-500/10 rounded-full border border-brand-500/20">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Start Your Trading Journey
              </h2>
              <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
                Have questions about batch start dates, prerequisites, or corporate trading programs?
                Our admissions desk is available 24/5.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700 transition-colors">
                <div className="w-11 h-11 bg-brand-500/10 text-brand-400 rounded-xl flex items-center justify-center shrink-0 border border-brand-500/20 text-lg">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Global Headquarters</h4>
                  <p className="text-slate-400 text-xs mt-1">
                    100 Wall Street, Floor 18, New York, NY 10005
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700 transition-colors">
                <div className="w-11 h-11 bg-brand-500/10 text-brand-400 rounded-xl flex items-center justify-center shrink-0 border border-brand-500/20 text-lg">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Admissions Desk</h4>
                  <a
                    href="mailto:admissions@sawriyatrading.com"
                    className="text-brand-400 hover:underline text-xs mt-1 block font-mono"
                  >
                    admissions@sawriyatrading.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700 transition-colors">
                <div className="w-11 h-11 bg-brand-500/10 text-brand-400 rounded-xl flex items-center justify-center shrink-0 border border-brand-500/20 text-lg">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Line</h4>
                  <a
                    href="tel:+18005557297"
                    className="text-slate-300 hover:text-white text-xs mt-1 block font-mono"
                  >
                    +1 (800) 555-SAWRIYA
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Accreditation Box */}
            <div className="p-5 rounded-2xl bg-brand-500/5 border border-brand-500/20 text-xs text-slate-400 space-y-2">
              <div className="flex items-center space-x-2 text-brand-400 font-bold">
                <i className="fa-solid fa-shield-halved"></i>
                <span>Institutional Standards</span>
              </div>
              <p className="leading-relaxed">
                Curriculum validated against global prop trading benchmark rules and CMT Association technical frameworks.
              </p>
            </div>
          </div>

          {/* Enrollment & Inquiry Form Column */}
          <div className="lg:col-span-7">
            <EnrollmentForm />
          </div>
        </div>
      </div>
    </section>
  )
}
