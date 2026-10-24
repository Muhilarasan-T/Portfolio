export interface Project {
  id: string;
  name: string;
  title: string;
  tagline: string;
  category: 'Machine Learning' | 'MLOps & APIs' | 'Location Intelligence' | 'NLP' | 'Data Analytics & BI';
  problem: string;
  solution: string;
  keyHighlights: string[];
  technologies: string[];
  metrics?: { label: string; value: string; detail?: string }[];
  engineeringFocus: string[];
  githubUrl?: string | null;
  liveDemoUrl?: string | null;
  featured: boolean;
  date: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    highlight?: boolean;
    tag?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  badge?: string;
}

export interface AchievementItem {
  title: string;
  organizer: string;
  date: string;
  description: string;
}

export interface ContactInfo {
  name: string;
  headline: string;
  subheadline: string;
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  resumePdfUrl: string;
  avatarUrl?: string;
}
