export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
}) {
  const alignmentClass =
    align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center mx-auto'

  return (
    <div className={`max-w-3xl mb-16 ${alignmentClass}`}>
      {badge && (
        <span className="inline-block text-xs font-mono font-semibold text-brand-700 uppercase tracking-widest mb-3 px-3 py-1 bg-brand-50 rounded-full border border-brand-200/80 shadow-xs">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
