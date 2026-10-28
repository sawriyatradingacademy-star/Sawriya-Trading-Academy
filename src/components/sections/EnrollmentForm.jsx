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
    <div className={`bg-brand-card p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl relative ${isModal ? '' : 'glow-card'}`}>
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Course Application
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          Lock in your seat for the Spring 2026 Batch. Limited to 30 seats per cohort.
        </p>
      </div>

      {isSuccess ? (
        <div className="p-6 bg-brand-500/10 border border-brand-500/40 rounded-2xl text-center space-y-3 animate-in fade-in duration-300">
          <div className="w-12 h-12 rounded-full bg-brand-500/20 text-brand-400 mx-auto flex items-center justify-center text-xl">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <h4 className="text-lg font-bold text-white">Application Received!</h4>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            Thank you for enrolling in Sawriya Trading Academy. A senior admissions advisor will
            contact you within 24 hours to review your interview slot.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="mt-4 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-xs font-mono text-brand-400 hover:text-brand-300 transition-colors"
          >
            Submit Another Application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {errorMsg && (
            <div className="p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-xs flex items-center space-x-2">
              <i className="fa-solid fa-circle-exclamation shrink-0"></i>
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-2">
                Full Name <span className="text-brand-400">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-2">
                Email Address <span className="text-brand-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-2">
                Preferred Asset Market
              </label>
              <select
                name="assetMarket"
                value={formData.assetMarket}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors cursor-pointer"
              >
                <option value="Stocks & Equities">Stocks & Equities</option>
                <option value="Crypto Derivatives">Crypto Derivatives</option>
                <option value="Forex / FX Currencies">Forex / FX Currencies</option>
                <option value="Options Trading">Options Trading</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-2">
                Experience Level
              </label>
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors cursor-pointer"
              >
                <option value="Complete Beginner">Complete Beginner</option>
                <option value="Intermediate (1-2 yrs)">Intermediate (1-2 yrs)</option>
                <option value="Advanced / Prop Seeking">Advanced / Prop Seeking</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-2">
              Message or Trading Goals
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your past challenges and trading goals..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-600 hover:bg-brand-500 disabled:opacity-60 text-slate-950 font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-500/25 text-sm flex items-center justify-center cursor-pointer"
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
