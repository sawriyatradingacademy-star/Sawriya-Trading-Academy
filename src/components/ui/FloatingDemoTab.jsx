import { WHATSAPP_DEMO_URL } from '../../data/constants'

export default function FloatingDemoTab() {
  return (
    <a
      href={WHATSAPP_DEMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold py-4 px-2.5 rounded-l-lg shadow-2xl flex items-center space-x-2 transition-all transform hover:-translate-x-1 border-y border-l border-emerald-400/50 group"
      title="Book 2 Free Live Demo Classes on WhatsApp"
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
    >
      <span className="text-xs uppercase tracking-wider font-extrabold py-1 flex items-center gap-2">
        <i className="fa-brands fa-whatsapp text-white rotate-90 text-[13px]"></i>
        <span>2 Free Demo Classes</span>
      </span>
    </a>
  )
}
