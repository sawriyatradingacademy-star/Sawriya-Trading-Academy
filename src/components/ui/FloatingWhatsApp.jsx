import { WHATSAPP_DEMO_URL } from '../../data/constants'

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_DEMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-emerald-950/20 hover:scale-110 transition-transform duration-200 group"
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
      {/* Tooltip on hover */}
      <span className="absolute right-16 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md pointer-events-none">
        Chat with Academic Counselor
      </span>
    </a>
  )
}
