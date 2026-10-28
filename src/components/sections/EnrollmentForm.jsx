import { useState } from 'react'

export default function EnrollmentForm({ onSuccess, isModal = false }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    assetMarket: 'Stocks & Equities',
    experienceLevel: 'Complete Beginner',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errorMsg) setErrorMsg('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.fullName.trim() || !formData.email.trim()) {
      setErrorMsg('Please provide your name and email address.')
      return
    }

    setIsSubmitting(true)
    setErrorMsg('')

    // Simulate realistic API delay
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      if (onSuccess) onSuccess(formData)

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        assetMarket: 'Stocks & Equities',
        experienceLevel: 'Complete Beginner',
        message: '',
      })
    }, 800)
  }

  return (
    <div
      className={`bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xl relative ${
        isModal ? '' : 'glow-card'
      }`}
    >
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Course Application
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">
          Lock in your seat for the Spring 2026 Batch. Limited to 30 seats per cohort.
        </p>
      </div>

      {isSuccess ? (
        <div className="p-7 bg-brand-50 border border-brand-200 rounded-2xl text-center space-y-3 animate-in fade-in duration-300">
          <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 mx-auto flex items-center justify-center text-xl shadow-xs">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <h4 className="text-lg font-bold text-slate-900">Application Received!</h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            Thank you for enrolling in Sawriya Trading Academy. A senior admissions advisor will
            contact you within 24 hours to review your interview slot.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="mt-4 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-xs font-mono font-medium text-brand-700 hover:text-brand-800 transition-colors shadow-xs cursor-pointer"
          >
            Submit Another Application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {errorMsg && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-center space-x-2">
              <i className="fa-solid fa-circle-exclamation shrink-0"></i>
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono font-semibold text-slate-700 mb-2">
                Full Name <span className="text-brand-600">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-mono font-semibold text-slate-700 mb-2">
                Email Address <span className="text-brand-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono font-semibold text-slate-700 mb-2">
                Preferred Asset Market
              </label>
              <select
                name="assetMarket"
                value={formData.assetMarket}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all cursor-pointer"
              >
                <option value="Stocks & Equities">Stocks & Equities</option>
                <option value="Crypto Derivatives">Crypto Derivatives</option>
                <option value="Forex / FX Currencies">Forex / FX Currencies</option>
                <option value="Options Trading">Options Trading</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono font-semibold text-slate-700 mb-2">
                Experience Level
              </label>
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all cursor-pointer"
              >
                <option value="Complete Beginner">Complete Beginner</option>
                <option value="Intermediate (1-2 yrs)">Intermediate (1-2 yrs)</option>
                <option value="Advanced / Prop Seeking">Advanced / Prop Seeking</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-semibold text-slate-700 mb-2">
              Message or Trading Goals
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your past challenges and trading goals..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-all shadow-md shadow-brand-600/20 text-sm flex items-center justify-center cursor-pointer"
          >
            {isSubmitting ? (
              <span className="flex items-center space-x-2">
                <i className="fa-solid fa-circle-notch fa-spin"></i>
                <span>Processing Application...</span>
              </span>
            ) : (
              <span className="flex items-center space-x-2">
                <span>Submit Course Application</span>
                <i className="fa-solid fa-paper-plane text-xs ml-1"></i>
              </span>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
