import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { Play, Github, Terminal, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ProjectsProps {
  githubBaseUrl: string;
}

export const Projects: React.FC<ProjectsProps> = ({ githubBaseUrl }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
              Practical Code
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Beginner-level applications developed to practice computational logic, conditional branching, functions, and state management in Python.
            </p>
          </div>

          <div className="text-xs text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg shrink-0 self-start md:self-auto font-mono">
            3 Active Repositories
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project, idx) => {
            const projectUrl = githubBaseUrl.endsWith('/')
              ? `${githubBaseUrl}${project.id}`
              : `${githubBaseUrl}/${project.id}`;

            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:border-slate-300"
              >
                {/* Card Top Preview / Header */}
                <div>
                  {/* Subtle terminal-like visual header */}
                  <div className="bg-slate-900 px-4 py-3 flex items-center justify-between text-xs text-slate-400 font-mono border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-slate-300 text-[11px] font-medium">{project.id}.py</span>
                    </div>
                    <span className="text-[10px] text-blue-400">0{idx + 1}</span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Technologies (Unboxed clean tags with subtle background) */}
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                        Technologies & Concepts
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs text-slate-600 bg-slate-100/90 px-2 py-0.5 rounded-md font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 mt-2 flex items-center gap-2.5">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-xs"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </button>

                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for interactive simulator & code inspection */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          githubUrl={githubBaseUrl}
        />

      </div>
    </section>
  );
};
