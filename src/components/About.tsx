import React from 'react';
import { ShieldCheck, Brain, Server, Target, GraduationCap, Briefcase } from 'lucide-react';
import { aboutData, educationData, experienceData } from '../data/portfolioData';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'Leakage-Aware Engineering': <ShieldCheck className="w-5 h-5 text-blue-400" />,
    'Explainability by Design': <Brain className="w-5 h-5 text-indigo-400" />,
    'Production Readiness': <Server className="w-5 h-5 text-violet-400" />,
    'Pragmatic Evaluation': <Target className="w-5 h-5 text-sky-400" />
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#070c18]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>01 // About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Data Science with Engineering Rigor
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Bridging exploratory analytics, statistical modeling, and production-ready machine learning services.
          </p>
        </div>

        {/* Narrative & Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative & Background */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/90 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Who I Am & What I Do</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-base mb-4 font-normal">
                {aboutData.summary}
              </p>
              {aboutData.narrative.map((paragraph, idx) => (
                <p key={idx} className="text-slate-400 leading-relaxed text-sm sm:text-base mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}

              {/* Quick Summary Badges */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-slate-800/70 border border-slate-700/60 text-slate-300">
                  📍 Bengaluru, Karnataka, India
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/40 text-blue-300">
                  🎓 B.E. Computer Science (CGPA 8.6)
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-800/40 text-indigo-300">
                  🏆 NIT Trichy Hackathon Winner
                </span>
              </div>
            </div>

            {/* Quick Experience & Education Snip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800/70">
                <div className="flex items-center gap-2.5 text-blue-400 mb-2">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase">Industry Internship</span>
                </div>
                <div className="text-sm font-bold text-white">{experienceData[0].role}</div>
                <div className="text-xs text-slate-400 mt-1">{experienceData[0].company}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{experienceData[0].location}</div>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800/70">
                <div className="flex items-center gap-2.5 text-violet-400 mb-2">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase">Education</span>
                </div>
                <div className="text-sm font-bold text-white">{educationData[0].degree}</div>
                <div className="text-xs text-slate-400 mt-1">{educationData[0].institution}</div>
                <div className="text-[11px] text-emerald-400 mt-0.5 font-medium">{educationData[0].grade}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Principles */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-semibold text-slate-300 uppercase tracking-wider font-mono px-1">
              Core Technical Tenets
            </h3>
            
            <div className="space-y-3.5">
              {aboutData.principles.map((principle, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/90 transition-all duration-200 group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/50 group-hover:scale-105 transition-transform shrink-0">
                      {iconMap[principle.title] || <Brain className="w-5 h-5 text-blue-400" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                        {principle.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
