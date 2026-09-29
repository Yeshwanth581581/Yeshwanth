import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Terminal, Sparkles, BookOpen } from 'lucide-react';
import { ProfileInfo } from '../types/portfolio';

// Local high fidelity generated student portrait
import studentAvatarPath from '../assets/images/student_avatar_portrait_1790679222655.jpg';

interface HeroProps {
  profile: ProfileInfo;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata / Student Status */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-slate-500 uppercase">
              <span className="text-blue-600 font-bold">{profile.status}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Computer Engineering</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-emerald-700 font-medium">Actively Learning & Building</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <p className="text-lg sm:text-xl font-medium text-slate-600">
                Hi, I'm <span className="text-slate-900 font-bold">{profile.name}</span>
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
                B.Tech Student <span className="text-slate-400 font-light">|</span>{' '}
                <span className="text-blue-600">Aspiring AI Engineer</span>
              </h1>
            </div>

            {/* Realistic Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Exploring Python, Web Development, and Generative AI while building practical projects and participating in hackathons and idea-thons.
            </p>

            {/* Call to Actions & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-xs hover:shadow-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all"
              >
                <span>Connect With Me</span>
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 text-slate-600 hover:text-blue-600 hover:bg-white bg-slate-100/80 border border-slate-200 rounded-xl transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 text-slate-600 hover:text-slate-900 hover:bg-white bg-slate-100/80 border border-slate-200 rounded-xl transition-colors"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Send Email"
                  className="p-2.5 text-slate-600 hover:text-blue-600 hover:bg-white bg-slate-100/80 border border-slate-200 rounded-xl transition-colors"
                  title="Direct Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Proof Highlights (Honest, strictly freshman focus) */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900 tabular-nums">
                  1st Sem
                </div>
                <div className="text-xs text-slate-500 mt-0.5">B.Tech Degree</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-blue-600 tabular-nums">
                  3 Projects
                </div>
                <div className="text-xs text-slate-500 mt-0.5">Python & Logic</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900 tabular-nums">
                  Active
                </div>
                <div className="text-xs text-slate-500 mt-0.5">Hackathons & Sprints</div>
              </div>
            </div>
          </div>

          {/* Student Portrait Card (Col 8-12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              
              {/* Subtle card outline and depth */}
              <div className="relative bg-white rounded-2xl p-3 border border-slate-200 shadow-lg shadow-slate-200/50 overflow-hidden">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={studentAvatarPath}
                    alt={`${profile.name} - B.Tech Student & Aspiring AI Engineer`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      // Fallback if local image asset ever fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Fallback container with clean initials if image fails */}
                  <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 text-slate-600 p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl mb-2">
                      YG
                    </div>
                    <span className="text-xs font-semibold text-slate-800">{profile.name}</span>
                    <span className="text-[11px] text-slate-500 mt-1">Aspiring AI Engineer</span>
                  </div>
                </div>

                {/* Card Caption / Current Focus */}
                <div className="p-3 pt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-blue-600" />
                      Weekly Focus
                    </span>
                    <span className="text-slate-500 font-mono text-[11px]">Semester 1</span>
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="font-medium text-slate-800">Current Sprint:</span> Practicing Python control structures, algorithm logic, and exploring GenAI model prompts.
                  </div>
                </div>
              </div>

              {/* Quiet floating badge: Hackathon participant */}
              <div className="absolute -bottom-3 -left-3 bg-white border border-slate-200 px-3.5 py-2 rounded-xl shadow-md flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-slate-700">Open to Student Collaborations</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
