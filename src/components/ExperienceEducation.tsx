import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  CheckCircle, 
  Calendar, 
  MapPin, 
  Languages, 
  BookOpen 
} from 'lucide-react';
import { 
  educationData, 
  experienceData, 
  achievementsData, 
  certificationsData, 
  languagesData 
} from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#060b18] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-violet-950/60 border border-violet-800/40 text-violet-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>04 // Background & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education, Experience & Certifications
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Verified academic foundations, industry data internship, hackathon triumph, and professional credentials.
          </p>
        </div>

        {/* Highlight Banner: NIT Trichy Hackathon 1st Place */}
        {achievementsData.length > 0 && (
          <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-violet-950/40 border border-blue-800/50 shadow-xl shadow-blue-900/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3.5 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 shrink-0">
                <Award className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-[11px] font-semibold mb-1">
                  ★ Competitive Achievement
                </div>
                <h3 className="text-xl font-bold text-white">
                  {achievementsData[0].title}
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  Organized by <span className="font-semibold text-blue-300">{achievementsData[0].organizer}</span> • {achievementsData[0].date}
                </p>
                <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                  {achievementsData[0].description}
                </p>
              </div>
            </div>

            <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700/60 text-center shrink-0">
              <span className="text-xs font-mono text-slate-400 block">Placement</span>
              <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
                1st Place Winner
              </span>
            </div>
          </div>
        )}

        {/* Main Grid: Education & Experience on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education & Experience */}
          <div className="lg:col-span-7 space-y-8">
            {/* Industry Internship */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-4 h-4 text-blue-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono text-xs">
                  Work & Industry Experience
                </h3>
              </div>

              <div className="space-y-4">
                {experienceData.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700/80 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {exp.role}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-300 font-medium mb-4">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-400 mt-1 shrink-0" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Education */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-4 h-4 text-violet-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono text-xs">
                  Formal Education
                </h3>
              </div>

              <div className="space-y-4">
                {educationData.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700/80 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {edu.degree}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-violet-400" />
                        {edu.period}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm text-violet-300 font-medium mb-1">
                      {edu.institution}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                      <span>{edu.location}</span>
                      <span>•</span>
                      <span className="font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                        {edu.grade}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Spoken */}
            <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <Languages className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono uppercase text-slate-400">Communication Languages:</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                {languagesData.map((lang, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono text-xs">
                  Professional Certifications
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500">
                {certificationsData.length} Credentials
              </span>
            </div>

            <div className="space-y-3">
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-200 flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {cert.issuer} {cert.date ? `• ${cert.date}` : ''}
                      </p>
                    </div>
                  </div>

                  {cert.badge && (
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-blue-950/60 text-blue-300 border border-blue-800/50 shrink-0">
                      {cert.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
