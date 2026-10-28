import { useEffect } from 'react'
import EnrollmentForm from '../sections/EnrollmentForm'

export default function EnrollModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-2xl bg-white border border-slate-200/90 rounded-3xl p-1 shadow-2xl z-10 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer shadow-xs"
          aria-label="Close modal"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        <EnrollmentForm isModal={true} onSuccess={() => {}} />
      </div>
    </div>
  )
}
