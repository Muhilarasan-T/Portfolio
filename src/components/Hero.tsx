import React, { useState } from 'react';
import { ArrowDown, FileText, MapPin, Award } from 'lucide-react';
import { DataScienceCanvas } from './DataScienceCanvas';
import { contactInfo } from '../data/portfolioData';
import profilePhoto from '../assets/profile.jpg';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Background Interactive Data Canvas */}
      <DataScienceCanvas />

      {/* Subtle radial backdrop glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Profile Photo with Gradient Glow Ring */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-300" />
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-slate-700/80 bg-slate-900 shadow-2xl flex items-center justify-center">
            {!imageError ? (
              <img
                src={profilePhoto}
                alt={contactInfo.name}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover [object-position:50%_15%] transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-900/60 to-indigo-950 flex flex-col items-center justify-center text-blue-300">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-wider">MT</span>
                <span className="text-[10px] font-mono text-slate-400 mt-0.5">Muhilarasan T</span>
              </div>
            )}
          </div>
        </div>

        {/* Availability / Profile Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-slate-300">
            Aspiring Data Scientist & ML Engineer
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-blue-400" />
            Bengaluru, Karnataka, India
          </span>
        </div>

        {/* Main Name Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          <span className="tracking-tight">{contactInfo.name}</span>
        </h1>

        {/* Professional Headline */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
          <span className="gradient-text">{contactInfo.headline}</span>
        </h2>

        {/* Supporting Text */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10">
          {contactInfo.subheadline}
        </p>

        {/* Two Prominent Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 border border-blue-400/20 transition-all duration-200 group"
          >
            <span>Explore My Projects</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 hover:text-white border border-slate-700/80 hover:border-slate-600 shadow-md shadow-black/30 transition-all duration-200"
          >
            <FileText className="w-4 h-4 text-blue-400" />
            <span>View My Resume</span>
          </button>
        </div>

        {/* Verified Credibility Signals / Tech highlights */}
        <div className="w-full pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
          <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/70">
            <div className="text-xs text-slate-400 font-mono mb-1">FOCUS</div>
            <div className="text-sm font-semibold text-slate-200">XGBoost & Scikit-learn</div>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/70">
            <div className="text-xs text-slate-400 font-mono mb-1">DEPLOYMENT</div>
            <div className="text-sm font-semibold text-slate-200">FastAPI & Docker</div>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/70">
            <div className="text-xs text-slate-400 font-mono mb-1">EXPLAINABILITY</div>
            <div className="text-sm font-semibold text-slate-200">SHAP Feature Attribution</div>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/70">
            <div className="text-xs text-slate-400 font-mono mb-1">HONOR</div>
            <div className="text-sm font-semibold text-blue-400 flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              <span>1st Place NIT Trichy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
