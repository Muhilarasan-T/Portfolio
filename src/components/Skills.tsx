import React, { useState } from 'react';
import { 
  Code2, 
  LineChart, 
  Cpu, 
  BarChart3, 
  Boxes, 
  Database, 
  Search, 
  Check, 
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/skillsData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const iconComponents: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-blue-400" />,
    LineChart: <LineChart className="w-5 h-5 text-indigo-400" />,
    Cpu: <Cpu className="w-5 h-5 text-violet-400" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-sky-400" />,
    Boxes: <Boxes className="w-5 h-5 text-cyan-400" />,
    Database: <Database className="w-5 h-5 text-emerald-400" />
  };

  const filteredCategories = skillCategories
    .filter((cat) => selectedCategory === 'all' || cat.id === selectedCategory)
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const filteredSkills = cat.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tag?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...cat, skills: filteredSkills };
    })
    .filter((cat) => cat.skills.length > 0);

  const totalSkillCount = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#060b18] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>02 // Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Stack & Tooling
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Practical competencies grouped by domain. Focused on real-world predictive modeling, data pipelines, and deployment.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800'
              }`}
            >
              All Categories ({totalSkillCount})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search skill or framework..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900/80 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/60 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700/80 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-md hover:shadow-black/20"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform">
                    {iconComponents[cat.iconName] || <Layers className="w-5 h-5 text-blue-400" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                      {cat.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500">
                      {cat.skills.length} competencies
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Badges (No arbitrary percentages!) */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                        skill.highlight
                          ? 'bg-blue-950/60 text-blue-200 border border-blue-800/50 shadow-sm shadow-blue-500/5 hover:border-blue-600/70'
                          : 'bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:border-slate-600'
                      }`}
                      title={skill.tag || skill.name}
                    >
                      <span>{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[10px] text-slate-400 font-normal px-1 py-0.2 rounded bg-slate-900/60 border border-slate-700/40">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 font-mono">
                  <Check className="w-3 h-3 text-emerald-400" /> Verified in projects
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-slate-900/30 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No skills found matching &ldquo;{searchQuery}&rdquo;.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 text-xs text-blue-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
