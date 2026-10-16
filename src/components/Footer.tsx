import React from 'react';
import { ArrowUp, Mail, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { contactInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050914] text-slate-400 border-t border-slate-800/80 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80 items-start">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-blue-500/20">
                M
              </div>
              <span className="font-bold text-slate-100 tracking-tight text-base">
                MUHILARASAN T
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Aspiring Data Scientist & Machine Learning Engineer based in Bengaluru, Karnataka, India. Building leakage-free models, automated API bot defenses, and location intelligence.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>All metrics & credentials verified against actual experience</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs">
            <div>
              <div className="font-mono uppercase tracking-wider text-slate-300 font-bold mb-3">
                Navigation
              </div>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About Me</a></li>
                <li><a href="#skills" className="hover:text-blue-400 transition-colors">Technical Skills</a></li>
                <li><a href="#projects" className="hover:text-blue-400 transition-colors">Featured Projects</a></li>
                <li><a href="#education" className="hover:text-blue-400 transition-colors">Education & Experience</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-mono uppercase tracking-wider text-slate-300 font-bold mb-3">
                Connect
              </div>
              <ul className="space-y-2">
                <li>
                  <a href={contactInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={contactInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <button onClick={onOpenResume} className="hover:text-blue-300 text-left transition-colors">
                    View Resume (PDF)
                  </button>
                </li>
                <li>
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                    Email Directly
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Back to top */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-semibold shadow-sm transition-all duration-200 group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-blue-400" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Muhilarasan T. Built with React, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <a href={contactInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
              <GithubIcon className="w-4 h-4" />
            </a>
            <a href={contactInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href={`mailto:${contactInfo.email}`} className="hover:text-slate-300">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
