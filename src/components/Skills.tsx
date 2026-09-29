import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code, Globe, Brain, Award, Sparkles, Terminal } from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-blue-600" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-600" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-blue-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-blue-600" />;
      default:
        return <Terminal className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            Technical Foundations
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Skills & Learning Areas
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            An honest overview of what I am actively learning, practicing, and applying in small projects.
            No exaggerated metrics—just genuine curiosity and consistent study.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  {getIcon(cat.iconName)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skills List in Category */}
              <div className="mt-5 space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-slate-900">
                        {skill.name}
                      </span>
                      <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Honest Note / Transparency Callout */}
        <div className="mt-10 p-4 rounded-xl bg-blue-50/50 border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <strong>Commitment to Transparency:</strong> As a 1st-semester college student, I avoid misleading percentage bars and inflated titles. All skills reflect current coursework and self-guided projects.
            </span>
          </div>
          <span className="text-slate-400 whitespace-nowrap hidden sm:inline">
            Updated Semester 1
          </span>
        </div>

      </div>
    </section>
  );
};
