import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { contactInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepare mailto link
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name || 'Portfolio Visitor'}`
    )}&body=${encodeURIComponent(
      `Hi Muhilarasan,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070c18] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>05 // Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let&rsquo;s Connect & Collaborate
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            I am actively looking for opportunities in Data Science, Machine Learning Engineering, and Data Analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-2">
              Direct Contact Information
            </h3>

            {/* Email Card with Copy Feature */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/90 relative overflow-hidden group">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-blue-400" />
                  Primary Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-400 hover:text-blue-300 py-1 px-2 rounded-md hover:bg-slate-800 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-sm sm:text-base font-semibold text-white hover:text-blue-400 break-all transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>

            {/* LinkedIn Card */}
            <a
              href={contactInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-blue-700/60 transition-all duration-200 flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-800/50 text-blue-400 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Professional Profile</div>
                  <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                    linkedin.com/in/Muhilarasan-T
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={contactInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-slate-700 transition-all duration-200 flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-300 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Source Code & Notebooks</div>
                  <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                    github.com/Muhilarasan-T
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </a>

            {/* Location & Status Info */}
            <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/70 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Based in Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-slate-300">Open to full-time roles & high-impact internships</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/90 shadow-xl">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span>Send a Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Have an opportunity or project in mind? Reach out directly using this quick message composer.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Data Scientist Opportunity / Project Discussion"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello Muhilarasan, we came across your projects in fraud detection and API bot mitigation..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <span className="text-[11px] text-slate-500 font-mono">
                    Directly routes to your default mail application
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all duration-200"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                {formSubmitted && (
                  <div className="p-3 rounded-lg bg-emerald-950/50 border border-emerald-800/50 text-emerald-300 text-xs text-center font-medium">
                    ✓ Opening your email client to send the message!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
