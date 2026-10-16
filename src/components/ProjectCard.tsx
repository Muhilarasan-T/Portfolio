import React from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700/80 hover:bg-slate-900/60 transition-all duration-300 p-6 sm:p-7 group shadow-lg shadow-black/20 relative overflow-hidden">
      {/* Top subtle glow highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent group-hover:via-blue-500/60 transition-all" />

      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-blue-950/60 border border-blue-800/50 text-blue-300">
            {project.category}
          </span>
          <span className="text-[11px] font-mono text-slate-500">
            {project.date}
          </span>
        </div>

        {/* Project Name & Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight">
          {project.name}
        </h3>
        <p className="text-xs sm:text-sm font-semibold text-slate-400 mt-1 mb-3">
          {project.title}
        </p>

        {/* Tagline / Brief Overview */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
          {project.tagline}
        </p>

        {/* Key Metrics Chips (if available) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
            {project.metrics.slice(0, 2).map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">
                  {metric.label}
                </span>
                <span className="text-sm font-bold text-blue-300">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800/70 border border-slate-700/60 text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-1 rounded-md text-[10px] font-mono text-slate-400 bg-slate-800/40 border border-slate-700/40">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 hover:underline py-1"
        >
          <span>View Deep Dive</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/70 text-slate-400 hover:text-white transition-colors border border-slate-700/50"
              title="View Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-blue-900/50 hover:bg-blue-800/60 text-blue-300 hover:text-white transition-colors border border-blue-700/50"
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
