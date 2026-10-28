import { useState } from 'react'
import { curriculumModules } from '../../data/curriculumData'
import SectionHeader from '../ui/SectionHeader'

export default function CurriculumSection() {
  // Store expanded module IDs in state; default first module open
  const [expandedIds, setExpandedIds] = useState([1])

  const toggleModule = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const expandAll = () => {
    setExpandedIds(curriculumModules.map((m) => m.id))
  }

  const collapseAll = () => {
    setExpandedIds([])
  }

  return (
    <section id="curriculum" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Syllabus Breakdown"
          title="12-Week Master Curriculum"
          subtitle="Structured into 4 core phases designed to build solid execution capabilities step-by-step."
        />

        {/* Accordion Controls */}
        <div className="flex justify-end space-x-3 mb-6 text-xs font-mono">
          <button
            onClick={expandAll}
            className="text-slate-600 hover:text-brand-700 transition-colors py-1.5 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 shadow-xs cursor-pointer font-medium"
          >
            <i className="fa-solid fa-angles-down mr-1"></i> Expand All
          </button>
          <button
            onClick={collapseAll}
            className="text-slate-600 hover:text-brand-700 transition-colors py-1.5 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 shadow-xs cursor-pointer font-medium"
          >
            <i className="fa-solid fa-angles-up mr-1"></i> Collapse All
          </button>
        </div>

        {/* Accordion / Module List */}
        <div className="space-y-4" id="curriculum-accordion">
          {curriculumModules.map((module) => {
            const isExpanded = expandedIds.includes(module.id)

            return (
              <div
                key={module.id}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isExpanded
                    ? 'border-brand-500/50 shadow-md shadow-brand-500/5'
                    : 'border-slate-200/90 hover:border-slate-300 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleModule(module.id)}
                  aria-expanded={isExpanded}
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-brand-500/20 cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <span
                      className={`w-11 h-11 rounded-xl font-mono font-bold flex items-center justify-center border transition-all ${
                        isExpanded
                          ? 'bg-brand-600 text-white border-brand-500 shadow-sm shadow-brand-600/20'
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {module.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                        {module.title}
                      </h3>
                      <span className="text-xs text-slate-500 font-mono mt-0.5 block">
                        {module.duration} • {module.topicCount}
                      </span>
                    </div>
                  </div>
                  <i
                    className={`fa-solid fa-chevron-down text-slate-400 transform transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 text-brand-600' : ''
                    }`}
                  ></i>
                </button>

                {/* Collapsible Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-3 border-t border-slate-100 text-slate-700 text-sm animate-in fade-in duration-200 bg-slate-50/40">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-brand-700 mb-3">
                      Syllabus Modules Covered:
                    </p>
                    <ul className="space-y-2.5">
                      {module.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start text-slate-700">
                          <i className="fa-solid fa-circle-check text-brand-600 text-xs mt-1 mr-3 shrink-0"></i>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
