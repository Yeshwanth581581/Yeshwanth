import React from 'react';
import { hackathonReflections } from '../data/portfolioData';
import { Compass, Users, Presentation, TrendingUp, Calendar, PlusCircle, CheckCircle } from 'lucide-react';

export const Hackathons: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-blue-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-600" />;
      case 'Presentation':
        return <Presentation className="w-5 h-5 text-blue-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
      default:
        return <CheckCircle className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="hackathons" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            Collaborative Learning
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Hackathons & Idea-thons
          </h2>
          <blockquote className="mt-4 p-4 rounded-xl bg-white border-l-4 border-blue-600 shadow-xs text-slate-700 italic text-sm sm:text-base leading-relaxed">
            "I actively participate in hackathons and idea-thons to explore real-world problems, develop ideas, collaborate with others, and improve my problem-solving and technical skills."
          </blockquote>
        </div>

        {/* 4 Pillars of Hackathon Experience */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hackathonReflections.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-3.5">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Core Skill</span>
                <span className="font-mono text-slate-600">Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Future Milestones & Space for Upcoming Achievements */}
        <div className="mt-8 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900">
                Participation Log & Future Milestone Space
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">
              Freshman Year (2026)
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-1">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Collegiate & Regional Idea-thons
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Participated in brainstorming sessions and early-stage idea presentations centered on practical student campus workflows and environmental solutions.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50/50 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 mb-1">
                <PlusCircle className="w-4 h-4 text-blue-600" />
                Upcoming Hackathons & Team Sprints
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Reserved space for recording specific project submissions, open-source sprints, and team recognitions as my 1st-year journey progresses.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
