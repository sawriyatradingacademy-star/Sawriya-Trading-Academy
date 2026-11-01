import { WHATSAPP_DEMO_URL, CALL_PHONE_NUMBER } from '../../data/constants'

export default function AnnouncementBar() {
  return (
    <div className="bg-[#081a3d] text-white text-xs py-2 px-4 border-b border-blue-950">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        {/* Left message with flashing indicator */}
        <div className="flex items-center space-x-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <p className="text-slate-200">
            <span className="font-bold text-emerald-400">Admissions Open:</span> Next Live Cohort Starts This Monday. Limited to 25 seats per batch!
          </p>
        </div>

        {/* Right CTA and contact info */}
        <div className="flex items-center space-x-4">
          <a
            href={`tel:${CALL_PHONE_NUMBER.replace(/\s+/g, '')}`}
            className="hidden md:inline-flex items-center text-slate-300 font-mono text-[11px] hover:text-white"
          >
            <i className="fa-solid fa-phone text-emerald-400 mr-1.5"></i> Helpline: {CALL_PHONE_NUMBER}
          </a>
          <a
            href={WHATSAPP_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold px-3 py-1 rounded text-xs transition-colors shadow-xs"
          >
            <i className="fa-brands fa-whatsapp text-white text-[12px]"></i>
            <span>Book 2 Free Demo Classes</span>
          </a>
        </div>
      </div>
    </div>
  )
}
