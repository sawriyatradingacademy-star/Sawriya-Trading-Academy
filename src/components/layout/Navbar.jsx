import { useState, useEffect } from 'react'

export default function Navbar({ onEnrollClick }) {
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
    { name: 'About Course', href: '#about' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Mentors', href: '#mentors' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 glass-nav border-b ${
        scrolled ? 'border-slate-800 shadow-xl' : 'border-slate-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-emerald-400 flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform duration-200">
            <i className="fa-solid fa-chart-line text-slate-950 font-bold text-xl"></i>
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-white block leading-none">
              Sawriya
            </span>
            <span className="text-xs font-mono text-brand-500 tracking-widest uppercase">
              Trading Academy
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 font-medium text-sm text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-brand-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-brand-500 after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={onEnrollClick || (() => {
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            })}
            className="bg-brand-600 hover:bg-brand-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-brand-600/30 text-sm flex items-center cursor-pointer"
          >
            <span>Enroll Now</span>
            <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-400 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-slate-800/60 transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-xl border-b border-slate-800 px-6 py-6 space-y-3 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="block text-slate-300 hover:text-brand-400 font-medium py-2.5 border-b border-slate-800/40 text-base"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                handleLinkClick()
                if (onEnrollClick) {
                  onEnrollClick()
                } else {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="w-full text-center bg-brand-600 hover:bg-brand-500 text-slate-950 font-bold py-3.5 rounded-xl shadow-lg shadow-brand-600/20 text-sm transition-all"
            >
              Enroll Now <i className="fa-solid fa-arrow-right ml-1"></i>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
