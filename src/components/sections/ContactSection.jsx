import EnrollmentForm from './EnrollmentForm'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-block text-xs font-mono font-semibold text-brand-700 uppercase tracking-widest mb-3 px-3 py-1 bg-brand-50 rounded-full border border-brand-200/80 shadow-xs">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Start Your Trading Journey
              </h2>
              <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
                Have questions about batch start dates, prerequisites, or corporate trading programs?
                Our admissions desk is available 24/5.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors shadow-xs">
                <div className="w-11 h-11 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0 border border-brand-200/70 text-lg shadow-xs">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Global Headquarters</h4>
                  <p className="text-slate-600 text-xs mt-1">
                    100 Wall Street, Floor 18, New York, NY 10005
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors shadow-xs">
                <div className="w-11 h-11 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0 border border-brand-200/70 text-lg shadow-xs">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Admissions Desk</h4>
                  <a
                    href="mailto:admissions@sawriyatrading.com"
                    className="text-brand-600 hover:text-brand-700 hover:underline text-xs mt-1 block font-mono font-medium"
                  >
                    admissions@sawriyatrading.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors shadow-xs">
                <div className="w-11 h-11 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0 border border-brand-200/70 text-lg shadow-xs">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Line</h4>
                  <a
                    href="tel:+18005557297"
                    className="text-slate-700 hover:text-slate-950 text-xs mt-1 block font-mono font-medium"
                  >
                    +1 (800) 555-SAWRIYA
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Accreditation Box */}
            <div className="p-5 rounded-2xl bg-brand-50/70 border border-brand-200/80 text-xs text-slate-600 space-y-2">
              <div className="flex items-center space-x-2 text-brand-700 font-bold">
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
