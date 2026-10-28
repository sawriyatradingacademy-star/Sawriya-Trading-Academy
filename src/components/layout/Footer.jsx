export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-14 text-xs text-slate-500 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-emerald-400 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-brand-500/20">
              <i className="fa-solid fa-chart-line text-slate-950 text-base"></i>
            </div>
            <div>
              <span className="text-white font-extrabold text-base block leading-tight">
                Sawriya Trading Academy
              </span>
              <span className="text-[11px] font-mono text-brand-500">
                Institutional Quality Education
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-5 text-slate-400">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-brand-400 hover:border-brand-500/40 transition-all"
            >
              <i className="fa-brands fa-twitter text-sm"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-brand-400 hover:border-brand-500/40 transition-all"
            >
              <i className="fa-brands fa-youtube text-sm"></i>
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-brand-400 hover:border-brand-500/40 transition-all"
            >
              <i className="fa-brands fa-discord text-sm"></i>
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-brand-400 hover:border-brand-500/40 transition-all"
            >
              <i className="fa-brands fa-telegram text-sm"></i>
            </a>
            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-brand-400 hover:border-brand-500/40 transition-all cursor-pointer text-slate-400"
            >
              <i className="fa-solid fa-arrow-up text-xs"></i>
            </button>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Sawriya Trading Academy Inc. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-400">
            <a href="#contact" className="hover:text-brand-400 transition-colors">
              Risk Disclosure
            </a>
            <a href="#contact" className="hover:text-brand-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-brand-400 transition-colors">
              Terms of Service
            </a>
            <a href="#contact" className="hover:text-brand-400 transition-colors">
              Refund Policy
            </a>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[11px] leading-relaxed text-slate-500">
          <strong className="text-slate-400">Regulatory & Risk Disclaimer:</strong> Trading
          financial instruments, equities, currencies, derivatives, and digital assets carries
          inherent high risk of financial loss and may not be suitable for all individuals. Past
          performance and simulated chart results are not indicative of future profits. Content
          provided by Sawriya Trading Academy is strictly for educational and informational purposes
          and must not be interpreted as financial, investment, or legal advisory.
        </div>
      </div>
    </footer>
  )
}
