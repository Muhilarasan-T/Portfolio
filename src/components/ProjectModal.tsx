import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, BarChart2, ShieldAlert, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-[#0b1224] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Gradient Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 flex items-start justify-between gap-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-blue-950/70 border border-blue-800/60 text-blue-400">
                {project.category}
              </span>
              <span className="text-xs text-slate-500 font-mono">• {project.date}</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white">
              {project.name}
            </h2>
            <p className="text-sm sm:text-base text-blue-300 font-medium mt-1">
              {project.title}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/80 text-slate-400 hover:text-white transition-colors border border-slate-700/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Key Metrics Strip (if present) */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <BarChart2 className="w-4 h-4 text-blue-400" />
                <span>Quantitative Benchmarks & Metrics</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {m.value}
                    </div>
                    <div className="text-xs font-semibold text-blue-400 mt-0.5">
                      {m.label}
                    </div>
                    {m.detail && (
                      <div className="text-[11px] text-slate-400 mt-1 leading-tight">
                        {m.detail}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Problem Statement */}
          <div className="p-4 sm:p-5 rounded-xl bg-red-950/20 border border-red-900/30">
            <h3 className="text-xs font-mono uppercase tracking-wider text-red-400 mb-2 flex items-center gap-1.5 font-bold">
              <ShieldAlert className="w-4 h-4 text-red-400" />
              <span>The Problem Statement</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {project.problem}
            </p>
          </div>

          {/* Technical Solution */}
          <div className="p-4 sm:p-5 rounded-xl bg-blue-950/20 border border-blue-900/30">
            <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5 font-bold">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span>Architectural Solution</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {project.solution}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Key Technical Highlights</span>
            </h3>
            <ul className="space-y-2.5">
              {project.keyHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Focus Concepts */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-violet-400" />
              <span>ML & Software Engineering Principles</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.engineeringFocus.map((concept, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 border border-slate-700/70 text-slate-300"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-blue-950/40 border border-blue-800/40 text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 sm:p-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 bg-slate-900/40">
          <div className="text-xs text-slate-400">
            {project.liveDemoUrl ? (
              <span className="text-emerald-400 font-medium">● Live Demo Online</span>
            ) : (
              <span className="text-slate-500 font-mono">Code verified locally · Repository on GitHub</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
