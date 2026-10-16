import type { ContactInfo, EducationItem, ExperienceItem, CertificationItem, AchievementItem } from '../types';

export const contactInfo: ContactInfo = {
  name: 'MUHILARASAN T',
  headline: 'Data Science & Machine Learning',
  subheadline: 'I build data-driven solutions using Python, SQL, machine learning, and practical software engineering.',
  email: 'muhiltamilarasan2k5@gmail.com',
  phone: '+91 9342596554',
  location: 'Bengaluru, Karnataka, India',
  githubUrl: 'https://github.com/Muhilarasan-T',
  linkedinUrl: 'https://linkedin.com/in/Muhilarasan-T',
  resumePdfUrl: '/Muhilarasan_T_Resume.pdf',
  avatarUrl: '/profile.jpg'
};

export const aboutData = {
  summary:
    'Aspiring Data Scientist and Machine Learning professional with hands-on expertise in developing robust predictive workflows, point-in-time feature engineering, and deploying containerized ML inference endpoints. Passionate about transforming messy, high-dimensional datasets into reliable production-grade software.',
  narrative: [
    'My work spans the end-to-end data lifecycle—from rigorous exploratory data analysis, data cleaning, and statistical validation, to architecting leakage-free cross-validation routines, training gradient-boosted ensembles (XGBoost, HistGradientBoosting), and evaluating models using business-critical metrics like PR-AUC and R².',
    'I believe machine learning models must be both performant and accountable. In my projects, I prioritize explainable AI (SHAP value attribution) and clean API integration via FastAPI and Docker, ensuring stakeholders and downstream systems receive actionable, transparent predictions.'
  ],
  principles: [
    {
      title: 'Leakage-Aware Engineering',
      description: 'Strict temporal splits and point-in-time features to ensure realistic out-of-sample generalization.'
    },
    {
      title: 'Explainability by Design',
      description: 'Integrating SHAP feature importance into models so every inference is auditable and interpretable.'
    },
    {
      title: 'Production Readiness',
      description: 'Packaging ML systems with low-latency FastAPI endpoints, Docker containers, and clean REST APIs.'
    },
    {
      title: 'Pragmatic Evaluation',
      description: 'Focusing on precision-recall curves, decision thresholds, and business impact rather than naive accuracy.'
    }
  ]
};

export const experienceData: ExperienceItem[] = [
  {
    role: 'Data Analytics Intern',
    company: 'Techvolt Software Pvt. Ltd.',
    location: 'Coimbatore, Tamil Nadu',
    period: 'Internship',
    type: 'Industry Experience',
    responsibilities: [
      'Performed end-to-end data preprocessing, cleaning, and exploratory data analysis using Power BI and Python.',
      'Designed and published dynamic executive dashboards to monitor operational metrics and trends.',
      'Created analytical reports and visual presentations to communicate data-driven insights and support strategic decision-making.'
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Dhanalakshmi Srinivasan Engineering College',
    location: 'Perambalur, Tamil Nadu, India',
    period: '2022 – 2026',
    grade: 'CGPA: 8.6',
    description:
      'Rigorous curriculum spanning algorithms, data structures, database systems, object-oriented programming, and applied artificial intelligence.'
  }
];

export const achievementsData: AchievementItem[] = [
  {
    title: 'First Place — Data Analytics Hackathon',
    organizer: 'National Institute of Technology (NIT), Trichy',
    date: 'March 2025',
    description:
      'Won 1st place in a competitive inter-collegiate hackathon by architecting an analytical data pipeline, building predictive models, and delivering clear visual business dashboards.'
  }
];

export const certificationsData: CertificationItem[] = [
  {
    title: 'Masters Program in Data Science',
    issuer: 'NASSCOM',
    date: 'Sep 2026',
    badge: 'Gold Tier (96%)'
  },
  {
    title: 'Microsoft Power BI Data Analyst Associate',
    issuer: 'Microsoft',
    badge: 'Verified Associate'
  },
  {
    title: 'SQL Basic Course',
    issuer: 'Newton School',
    badge: 'Certificate of Excellence'
  },
  {
    title: 'SQL for Data Science',
    issuer: 'Coursera (UC Davis)',
    badge: 'Specialization Course'
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte',
    badge: 'Practical Experience'
  },
  {
    title: 'Data Science & Analytics',
    issuer: 'HP LIFE',
    badge: 'Professional Development'
  },
  {
    title: 'Python for Data Science',
    issuer: 'Udemy',
    badge: 'Course Completion'
  }
];

export const languagesData = ['Tamil (Native)', 'English (Professional Working)'];
