import { useState, useEffect } from 'react'
import { WHATSAPP_DEMO_URL, DISPLAY_PHONE } from '../../data/constants'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Our Advantage', href: '#why-us' },
    { name: 'Curriculum', href: '#courses' },
    { name: 'Comparison', href: '#comparison' },
    { name: 'Mentor', href: '#mentors' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 bg-white border-b ${
        scrolled ? 'border-slate-200 shadow-md' : 'border-slate-200/90'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo: Sawriya Trading Academy */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#0a2356] flex items-center justify-center text-white shadow-sm group-hover:bg-[#081b42] transition-colors">
            <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-xl font-black tracking-tight text-[#0a2356] block leading-none">
                Sawriya
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-700 font-bold tracking-widest uppercase mt-0.5 block">
              Trading Academy
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 font-semibold text-sm text-[#0a2356]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-emerald-600 transition-colors py-1 relative tracking-tight"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href={`tel:${DISPLAY_PHONE}`}
            className="hidden xl:inline-flex items-center text-xs font-mono font-semibold text-slate-700 hover:text-[#0a2356]"
          >
            <i className="fa-solid fa-phone text-emerald-600 mr-2"></i>
            <span>{DISPLAY_PHONE}</span>
          </a>

          <a
            href={WHATSAPP_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold px-5 py-2.5 rounded-lg shadow-sm transition-all transform hover:-translate-y-0.5 text-xs sm:text-sm"
          >
            <i className="fa-brands fa-whatsapp text-white text-base"></i>
            <span>Book 2 Free Demo Classes</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center space-x-2">
          <a
            href={WHATSAPP_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#16a34a] text-white font-bold px-3 py-1.5 rounded-lg text-xs"
          >
            2 Free Demos
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg text-slate-800 hover:text-emerald-600 hover:bg-slate-50 font-semibold text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <a
              href={WHATSAPP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold py-3 rounded-lg text-center text-sm shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Book 2 Free Live Demo Classes</span>
            </a>
            <div className="text-center text-xs text-slate-500 pt-1">
              📞 Questions? Call <span className="font-semibold text-slate-800">{DISPLAY_PHONE}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
