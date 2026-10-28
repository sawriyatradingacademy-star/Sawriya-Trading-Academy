import { courseFeatures } from '../../data/featuresData'
import SectionHeader from '../ui/SectionHeader'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-900/50 border-y border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Course Specification"
          title="Everything You Need To Master Trading"
          subtitle="Designed for actionable learning with structured progression from core mechanics to advanced execution at Sawriya Trading Academy."
        />

        {/* 4 Key Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-brand-card p-6 rounded-2xl border border-slate-800 hover:border-brand-500/50 transition-all duration-300 glow-card flex flex-col justify-between group"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-xl transition-transform duration-200 group-hover:scale-110 ${feature.iconColor}`}
                >
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>

              <div>
                <span
                  className={`text-xs font-mono px-2.5 py-1 rounded-md border inline-block ${feature.tagColor}`}
                >
                  {feature.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
