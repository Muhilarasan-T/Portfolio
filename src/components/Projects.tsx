import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { projectsData } from '../data/projectsData';
import type { Project } from '../types';
import { Terminal } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Machine Learning', 'MLOps & APIs', 'Location Intelligence', 'NLP'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070c18] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>03 // Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Production & Research Projects
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Real-world systems prioritizing point-in-time safety, explainability, high-throughput inference, and robust evaluation.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat} {cat === 'All' ? `(${projectsData.length})` : ''}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Bottom Note for Hiring Managers */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Terminal className="w-4 h-4 text-blue-400 shrink-0" />
            <span>
              All project metrics (0.91 PR-AUC, 1.85M samples, R² 0.94) represent genuine empirical results from held-out test splits.
            </span>
          </div>
          <a
            href="https://github.com/Muhilarasan-T"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-blue-400 hover:underline shrink-0"
          >
            Explore all GitHub repos →
          </a>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
