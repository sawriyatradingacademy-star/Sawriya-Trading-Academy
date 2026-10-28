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
        <span className="inline-block text-xs font-mono font-semibold text-brand-500 uppercase tracking-widest mb-3 px-3 py-1 bg-brand-500/10 rounded-full border border-brand-500/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 mt-4 text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
