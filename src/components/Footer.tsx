import React from 'react';
import { ProfileInfo } from '../types/portfolio';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  profile: ProfileInfo;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200/80 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity & Tagline */}
          <div className="text-center md:text-left">
            <div className="text-sm font-bold text-slate-900">
              {profile.name} — B.Tech Student | Aspiring AI Engineer
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Building practical software fundamentals & exploring artificial intelligence with discipline.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="w-px h-5 bg-slate-200" aria-hidden="true" />

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © 2026 {profile.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <span>Student Developer Portfolio</span>
            <span aria-hidden="true">·</span>
            <span>No exaggerated claims</span>
            <span aria-hidden="true">·</span>
            <span>1st Semester</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
