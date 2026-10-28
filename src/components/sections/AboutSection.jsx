import { courseFeatures } from '../../data/featuresData'
import SectionHeader from '../ui/SectionHeader'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-50/60 border-y border-slate-200/80 relative">
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
              className="bg-white p-7 rounded-3xl border border-slate-200/90 hover:border-brand-500/50 transition-all duration-300 glow-card flex flex-col justify-between shadow-xs hover:shadow-lg group"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-xl transition-transform duration-200 group-hover:scale-105 shadow-xs ${feature.iconColor}`}
                >
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>

              <div>
                <span
                  className={`text-xs font-mono font-medium px-2.5 py-1 rounded-md border inline-block ${feature.tagColor}`}
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
