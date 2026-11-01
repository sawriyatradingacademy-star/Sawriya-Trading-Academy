import { WHATSAPP_DEMO_URL } from '../../data/constants'

export default function HeroSection() {
  return (
    <section className="bg-white">
      {/* High-Impact Split Hero Banner (Online Trading Academy institutional layout) */}
      <div className="relative w-full bg-[#0a2356] overflow-hidden min-h-[460px] md:min-h-[520px] flex items-stretch">
        
        {/* Left Side: Deep Blue High-Tech Financial Chart Texture */}
        <div className="w-full lg:w-[58%] z-10 flex flex-col justify-center px-6 sm:px-12 lg:pl-16 lg:pr-8 py-14 md:py-20 text-white relative">
          
          {/* Subtle Financial Bar Chart Graphic Background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-72 flex items-end justify-between px-4 space-x-2">
              <div className="w-8 bg-sky-400 h-28 rounded-t"></div>
              <div className="w-8 bg-sky-400 h-44 rounded-t"></div>
              <div className="w-8 bg-sky-400 h-36 rounded-t"></div>
              <div className="w-8 bg-sky-400 h-56 rounded-t"></div>
              <div className="w-8 bg-sky-400 h-48 rounded-t"></div>
              <div className="w-8 bg-sky-400 h-64 rounded-t"></div>
              <div className="w-8 bg-sky-400 h-52 rounded-t"></div>
              <div className="w-8 bg-sky-400 h-72 rounded-t"></div>
            </div>
            {/* Overlay grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          </div>

          <div className="relative z-10 max-w-xl">
            {/* Academy Badge */}
            <div className="inline-flex items-center space-x-2 bg-sky-950/80 border border-sky-400/30 rounded-full px-3.5 py-1 text-xs text-sky-200 mb-5 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Sawriya Trading Academy • 10 Years Experience</span>
            </div>

            {/* Bold Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black uppercase tracking-tight text-white leading-[1.08] mb-4">
              Trade With <br />
              Confidence, <br />
              <span className="text-white">In Any Market</span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-200 text-base sm:text-lg md:text-xl font-normal mb-8 leading-snug">
              Get started with <span className="text-white font-semibold underline decoration-emerald-400 decoration-2 underline-offset-4">2 free live demo classes</span> in active market hours.
            </p>

            {/* Primary Action Button (Direct WhatsApp URL) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href={WHATSAPP_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16a34a] hover:bg-[#15803d] text-white font-black tracking-wider uppercase px-8 py-4 rounded-lg shadow-xl shadow-emerald-950/30 transition-all transform hover:scale-[1.02] text-sm sm:text-base flex items-center justify-center space-x-2.5 text-center"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>Book 2 Free Demo Classes</span>
              </a>

              <a
                href="#courses"
                className="border border-white/30 hover:border-white text-white font-semibold px-6 py-4 rounded-lg hover:bg-white/10 transition-colors text-sm sm:text-base text-center"
              >
                View 6-Week Curriculum
              </a>
            </div>

            <div className="mt-6 text-xs text-sky-200/80 flex items-center space-x-2 font-mono">
              <i className="fa-solid fa-circle-check text-emerald-400"></i>
              <span>Live Market Analysis • Instant Confirmation on WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Right Side: Real Photographic Classroom (with Angled Slanted Cut) */}
        <div className="hidden lg:block lg:w-[48%] absolute right-0 top-0 bottom-0 overflow-hidden">
          {/* Angled Diagonal Divider Shape */}
          <div
            className="absolute inset-0 bg-slate-900 overflow-hidden"
            style={{
              clipPath: 'polygon(14% 0, 100% 0, 100% 100%, 0% 100%)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200"
              alt="Students in Live Trading Classroom"
              className="w-full h-full object-cover object-center"
            />
            {/* Soft tint overlay */}
            <div className="absolute inset-0 bg-slate-950/15 pointer-events-none"></div>

            {/* Photo caption badge in bottom corner */}
            <div className="absolute bottom-4 right-4 bg-slate-900/85 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-md font-mono border border-slate-700">
              <i className="fa-solid fa-users text-emerald-400 mr-2"></i>
              <span>Sawriya Trading Academy • Gurugram Center</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
