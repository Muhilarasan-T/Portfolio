import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import qrCodeImg from '../assets/portfolio_qr.png';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const resumePdfUrl = `${import.meta.env.BASE_URL}Muhilarasan_T_Resume.pdf`;
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-4xl my-6 bg-[#0f172a] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden text-slate-200 animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" />
            <h2 id="resume-title" className="text-base sm:text-lg font-bold text-white">
              Official Resume Preview — Muhilarasan T
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={resumePdfUrl}
              download="Muhilarasan_T_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </a>

            <a
              href={resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close resume viewer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 font-sans text-xs sm:text-sm selection:bg-blue-100">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b border-slate-300">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 uppercase">
                Muhilarasan T
              </h1>
              <p className="text-xs text-slate-600 mt-1">
                Bengaluru, Karnataka, India  |  +91 9342596554  |  muhiltamilarasan2k5@gmail.com
              </p>
              <p className="text-xs text-slate-600 mt-0.5 font-mono">
                GitHub: github.com/Muhilarasan-T  |  LinkedIn: linkedin.com/in/Muhilarasan-T
              </p>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <img src={qrCodeImg} alt="Portfolio QR Code" className="w-16 h-16 border border-slate-200 rounded p-0.5" />
              <span className="text-[10px] text-slate-500 font-mono mt-0.5">Live Portfolio</span>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="mt-5">
            <h3 className="text-xs font-bold text-slate-950 uppercase tracking-wider pb-1 border-b border-slate-300">
              Professional Summary
            </h3>
            <p className="text-xs text-slate-700 mt-2 leading-relaxed text-justify">
              Computer Science graduate with hands-on experience in Data Analytics, Data Science, and Machine Learning using Python and SQL. Skilled in data preprocessing, exploratory data analysis, visualization, statistical analysis, machine learning, model evaluation, and deployment. Experienced with Power BI, Pandas, NumPy, Scikit-learn, XGBoost, FastAPI, and SHAP through academic and portfolio projects.
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div className="mt-5">
            <h3 className="text-xs font-bold text-slate-950 uppercase tracking-wider pb-1 border-b border-slate-300">
              Technical Skills
            </h3>
            <div className="mt-2 space-y-1 text-xs">
              <div><strong className="text-slate-900">Languages:</strong> Python, SQL, C++, C</div>
              <div><strong className="text-slate-900">Data Analytics:</strong> Pandas, NumPy, Data Preprocessing, Exploratory Data Analysis, Data Cleaning, Statistical Analysis</div>
              <div><strong className="text-slate-900">Visualization:</strong> Power BI, Tableau, Matplotlib</div>
              <div><strong className="text-slate-900">Machine Learning:</strong> Scikit-learn, Regression, Classification, Clustering, Feature Engineering, Model Evaluation</div>
              <div><strong className="text-slate-900">Models:</strong> XGBoost, Random Forest, HistGradientBoosting, KMeans</div>
              <div><strong className="text-slate-900">Deployment & MLOps:</strong> FastAPI, REST APIs, Docker, ML Pipelines, Model Deployment, Model Versioning, Basic CI/CD</div>
              <div><strong className="text-slate-900">Database & Tools:</strong> MySQL, Git, GitHub, Jupyter Notebook</div>
            </div>
          </div>

          {/* Section: Projects */}
          <div className="mt-5">
            <h3 className="text-xs font-bold text-slate-950 uppercase tracking-wider pb-1 border-b border-slate-300">
              Projects
            </h3>
            
            <div className="mt-2.5 space-y-3.5">
              {/* Project 1 */}
              <div>
                <div className="font-bold text-slate-900">
                  ARAN — Real-Time API Bot Detection & Automated Mitigation
                </div>
                <div className="text-[11px] text-slate-500 italic">
                  Python | Pandas | Scikit-learn | XGBoost | FastAPI | SHAP
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 mt-1 space-y-0.5">
                  <li>Built an API bot detection system using 5,000 sessions and 13 behavioral features to distinguish legitimate users from automated traffic.</li>
                  <li>Performed data preprocessing and trained an XGBoost classifier using cross-validation, hyperparameter tuning, and leakage-aware preprocessing.</li>
                  <li>Implemented FastAPI real-time inference with SHAP-based explanations and automated API testing.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="font-bold text-slate-900">
                  HABITA — Personalized Urban Housing Recommendation & Location Intelligence
                </div>
                <div className="text-[11px] text-slate-500 italic">
                  Python | Pandas | Scikit-learn | HistGradientBoosting | KMeans
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 mt-1 space-y-0.5">
                  <li>Developed a housing recommendation system covering 55 Bangalore localities, combining rent prediction, commute prediction, and locality clustering.</li>
                  <li>Built regression models for rent and commute estimation, achieving R² scores of 0.94 and 0.84 respectively.</li>
                  <li>Applied KMeans clustering to group localities based on housing and lifestyle characteristics and integrated the results into personalized recommendations.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="font-bold text-slate-900">
                  RED FLAG — Transaction Anomaly & Fraud Detection
                </div>
                <div className="text-[11px] text-slate-500 italic">
                  Python | Pandas | Scikit-learn | XGBoost | FastAPI | SHAP
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 mt-1 space-y-0.5">
                  <li>Developed an end-to-end fraud detection platform for 1.85M transactions using a strict chronological train-validation-test strategy to prevent temporal leakage.</li>
                  <li>Engineered 26 point-in-time-safe features and trained an XGBoost classifier, achieving 0.91 PR-AUC on an unseen test set.</li>
                  <li>Optimized the classification threshold to reduce false-positive alerts and deployed FastAPI real-time and batch scoring with SHAP-based explainability.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div>
                <div className="font-bold text-slate-900">
                  CredX — Loan Risk & Repayment Analytics Platform
                </div>
                <div className="text-[11px] text-slate-500 italic">
                  Python | MySQL 8.0 Star Schema | Power BI | DAX | Pandas | SQL
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 mt-1 space-y-0.5">
                  <li>Audited and modeled 39,717 loan contracts ($434.8M funded capital) into a normalized Kimball Star Schema on MySQL 8.0.</li>
                  <li>Authored 8 advanced SQL analytical modules evaluating default hazard curves, credit grade risk stratification, and recovery rates.</li>
                  <li>Constructed an interactive Power BI dashboard with 25+ DAX measures visualizing cash flow yields and delinquency drivers.</li>
                </ul>
              </div>

              {/* Project 5 */}
              <div>
                <div className="font-bold text-slate-900">
                  PULSE — Hospital Patient Flow & Clinical Throughput Analytics
                </div>
                <div className="text-[11px] text-slate-500 italic">
                  SQL | Microsoft Excel 365 | Power Query | Power Pivot | Queue Modeling
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 mt-1 space-y-0.5">
                  <li>Analyzed 49,912 outpatient EHR records over 24 months to diagnose clinical queue latency and surge bottlenecks.</li>
                  <li>Uncovered twin-peak arrival surges absorbing 63.9% of visits and diagnosed severe workload skew across 98 attending physicians.</li>
                  <li>Modeled evidence-based 3-tier staggered shifts compressing median wait times by 33.3% and unlocking +14.3% clinical throughput.</li>
                </ul>
              </div>

              {/* Project 6 */}
              <div>
                <div className="font-bold text-slate-900">
                  PAYFLOW — Digital Payments Intelligence & Trends Analysis
                </div>
                <div className="text-[11px] text-slate-500 italic">
                  Python | MySQL 8.0 | Pandas | NumPy | Pytest | Microsoft Excel | Seaborn
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 mt-1 space-y-0.5">
                  <li>Ingested 81 continuous months of official RBI payment indicators across 57 payment rails and 13 infrastructure indicators.</li>
                  <li>Constructed normalized MySQL Star Schema tables, Parquet columnar stores, and an automated 21-test pytest validation suite.</li>
                  <li>Quantified macroeconomic structural shifts: parabolic UPI adoption, debit vs credit card divergence, and CTS cheque phase-out.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Experience */}
          <div className="mt-5">
            <h3 className="text-xs font-bold text-slate-950 uppercase tracking-wider pb-1 border-b border-slate-300">
              Experience
            </h3>
            <div className="mt-2">
              <div className="font-bold text-slate-900">
                Data Analytics Intern — Techvolt Software Pvt. Ltd., Coimbatore
              </div>
              <ul className="list-disc list-inside text-xs text-slate-700 mt-1 space-y-0.5">
                <li>Performed data preprocessing, analysis, and visualization using Power BI.</li>
                <li>Created dashboards and reports to communicate data-driven insights and support decision-making.</li>
              </ul>
            </div>
          </div>

          {/* Section: Education */}
          <div className="mt-5">
            <h3 className="text-xs font-bold text-slate-950 uppercase tracking-wider pb-1 border-b border-slate-300">
              Education
            </h3>
            <div className="mt-2 text-xs">
              <div className="font-bold text-slate-900">B.E. Computer Science and Engineering</div>
              <div className="text-slate-700">
                Dhanalakshmi Srinivasan Engineering College, Perambalur | 2022 – 2026 | <strong className="text-slate-900">CGPA: 8.6</strong>
              </div>
            </div>
          </div>

          {/* Section: Achievement */}
          <div className="mt-5">
            <h3 className="text-xs font-bold text-slate-950 uppercase tracking-wider pb-1 border-b border-slate-300">
              Achievement
            </h3>
            <div className="mt-2 text-xs font-medium text-slate-800">
              <strong>First Place</strong> — Data Analytics Hackathon, NIT Trichy | March 2025
            </div>
          </div>

          {/* Section: Certifications */}
          <div className="mt-5">
            <h3 className="text-xs font-bold text-slate-950 uppercase tracking-wider pb-1 border-b border-slate-300">
              Certifications
            </h3>
            <ul className="list-disc list-inside text-xs text-slate-700 mt-2 space-y-0.5">
              <li>Masters Program in Data Science — NASSCOM (Gold, 96%), Sep 2026</li>
              <li>Microsoft Power BI Data Analyst Associate</li>
              <li>SQL Basic Course — Newton School</li>
              <li>SQL for Data Science — Coursera</li>
              <li>Data Analytics Job Simulation — Deloitte</li>
              <li>Data Science & Analytics — HP LIFE</li>
              <li>Python for Data Science — Udemy</li>
            </ul>
          </div>

          {/* Section: Languages */}
          <div className="mt-5">
            <h3 className="text-xs font-bold text-slate-950 uppercase tracking-wider pb-1 border-b border-slate-300">
              Languages
            </h3>
            <p className="text-xs text-slate-700 mt-1">Tamil | English</p>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Verified with Muhilarasan T&rsquo;s actual credentials
          </span>
          <a
            href={resumePdfUrl}
            download="Muhilarasan_T_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md shadow-blue-600/30"
          >
            <Download className="w-4 h-4" />
            <span>Download Official PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};
