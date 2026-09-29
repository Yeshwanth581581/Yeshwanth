import React from 'react';
import { ProfileInfo } from '../types/portfolio';
import { Compass, BookOpen, Lightbulb, Target } from 'lucide-react';

interface AboutProps {
  profile: ProfileInfo;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const highlights = [
    {
      title: 'Current Foundations',
      description: 'Actively learning Python and responsive web development through course modules, documentation, and continuous problem-solving practice.',
      icon: BookOpen,
    },
    {
      title: 'Beginner in Generative AI',
      description: 'Exploring how large language models function, prompt design techniques, and foundational machine learning principles with curiosity.',
      icon: Lightbulb,
    },
    {
      title: 'Practical Project Building',
      description: 'Translating beginner theory into working code—writing command-line utilities, logic calculators, and interactive web tools.',
      icon: Compass,
    },
    {
      title: 'Long-Term Vision',
      description: 'Aiming to grow into a capable AI Engineer by steadily building strong algorithmic basics, mathematical intuition, and software engineering discipline.',
      icon: Target,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            Personal Profile
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            I am a first-semester B.Tech student taking my initial steps into software development, artificial intelligence, and engineering problem-solving.
          </p>
        </div>

        {/* Narrative & Story */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p>
              My journey in technology began with a genuine curiosity about how software and intelligent systems work. As a freshman, I prioritize building rock-solid fundamentals rather than rushing through superficial tutorials.
            </p>
            <p>
              I am currently focusing on mastering <strong>Python</strong> for algorithmic logic and learning <strong>web development (HTML, CSS, JavaScript)</strong> to bring projects to life with responsive user interfaces. Alongside core coursework, I am exploring <strong>Generative AI as an enthusiastic beginner</strong>, understanding how generative models process natural language and how to effectively construct prompts.
            </p>
            <p>
              Instead of merely reading theory, I learn best by getting my hands dirty: writing small, practical programs like eligibility checks, transaction managers, and grade calculators. I also actively take part in <strong>hackathons and idea-thons</strong> to collaborate with peers, brainstorm innovative ideas for everyday problems, and expand my technical horizon.
            </p>
            <p className="text-slate-900 font-medium pt-2">
              My long-term aspiration is to become an <strong>AI Engineer</strong> who builds thoughtful, ethical, and high-impact software solutions.
            </p>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
