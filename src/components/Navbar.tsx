import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { contactInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience & Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070c18]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 focus:outline-none"
          aria-label="Muhilarasan T - Back to top"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 tracking-tight text-sm sm:text-base group-hover:text-blue-400 transition-colors">
              MUHILARASAN T
            </span>
            <span className="text-[11px] font-mono text-slate-400 tracking-wider">
              DATA SCIENCE & ML
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-md transition-all duration-200 ${
                  isActive
                    ? 'text-blue-400 bg-blue-500/10 font-semibold shadow-inner shadow-blue-500/5'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={contactInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/70 rounded-lg transition-colors border border-transparent hover:border-slate-700/60"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={contactInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800/70 rounded-lg transition-colors border border-transparent hover:border-slate-700/60"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-blue-300 bg-blue-950/60 hover:bg-blue-900/60 border border-blue-700/40 hover:border-blue-500/60 shadow-sm transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            aria-label="View Resume"
            className="p-2 text-blue-400 hover:bg-slate-800/60 rounded-lg border border-blue-900/40 text-xs font-medium flex items-center gap-1"
          >
            <FileText className="w-4 h-4" />
            <span className="text-[11px]">Resume</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/70 rounded-lg border border-slate-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070c18]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-blue-400 bg-blue-500/10 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={contactInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={contactInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-blue-400"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-blue-300 bg-blue-900/40 border border-blue-700/50"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
