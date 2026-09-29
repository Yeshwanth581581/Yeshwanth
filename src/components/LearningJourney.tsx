import React, { useState } from 'react';
import { learningRoadmap } from '../data/portfolioData';
import { BookOpen, Target, CheckCircle2, ArrowRight, Sparkles, Clock, Compass } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'current' | 'future'>('all');

  const currentlyLearning = learningRoadmap.filter((item) => item.status === 'currently-learning');
  const nextGoals = learningRoadmap.filter((item) => item.status === 'next-goal');

  return (
    <section id="journey" className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
              Curriculum & Aspirations
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Current Learning Journey
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              A transparent roadmap distinguishing between what I am studying right now and what I plan to tackle in upcoming semesters.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto shrink-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Stages
            </button>
            <button
              onClick={() => setActiveFilter('current')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'current'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Currently Learning
            </button>
            <button
              onClick={() => setActiveFilter('future')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'future'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Next Goals
            </button>
          </div>
        </div>

        {/* Notice of Learning Posture */}
        <div className="mt-8 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 flex items-center gap-2">
          <Compass className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            <strong>Note on Accuracy:</strong> Items listed under "Next Goals" represent scheduled learning targets and personal curiosity, not completed achievements or certifications.
          </span>
        </div>

        {/* 2-Column Comparative Layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column 1: Currently Learning */}
          {(activeFilter === 'all' || activeFilter === 'current') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Currently Learning (Semester 1)
                  </h3>
                  <p className="text-xs text-slate-500">Active weekly study and code practice</p>
                </div>
              </div>

              <div className="space-y-3">
                {currentlyLearning.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-bold text-slate-900">
                        {item.title}
                      </span>
                      <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        In Progress
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-2.5 pt-2 border-t border-slate-200/50 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Field: {item.category}</span>
                      <span className="font-mono">Daily / Weekly</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Column 2: Next Goals */}
          {(activeFilter === 'all' || activeFilter === 'future') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Next Goals (Upcoming Semesters)
                  </h3>
                  <p className="text-xs text-slate-500">Future milestones to build upon current basics</p>
                </div>
              </div>

              <div className="space-y-3">
                {nextGoals.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-dashed border-slate-300 hover:border-blue-400 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-bold text-slate-900">
                        {item.title}
                      </span>
                      <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        Upcoming Goal
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Target Area: {item.category}</span>
                      <span className="font-mono text-blue-600 font-medium">Roadmap Target</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
