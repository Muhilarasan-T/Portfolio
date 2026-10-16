import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming Languages',
    iconName: 'Code2',
    description: 'Foundational languages for algorithmic problem solving, backend data systems, and ML engineering.',
    skills: [
      { name: 'Python', highlight: true, tag: 'Primary Language' },
      { name: 'SQL', highlight: true, tag: 'Data Querying' },
      { name: 'C++', highlight: false, tag: 'Systems & Algorithms' },
      { name: 'C', highlight: false, tag: 'Foundational' }
    ]
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics & EDA',
    iconName: 'LineChart',
    description: 'Techniques for transforming noisy raw records into structured, high-signal statistical datasets.',
    skills: [
      { name: 'Pandas', highlight: true, tag: 'Data Wrangling' },
      { name: 'NumPy', highlight: true, tag: 'Vector Computations' },
      { name: 'Exploratory Data Analysis', highlight: true, tag: 'Pattern Discovery' },
      { name: 'Feature Engineering', highlight: true, tag: 'Signal Extraction' },
      { name: 'Data Cleaning', highlight: false, tag: 'Quality Assurance' },
      { name: 'Statistical Analysis', highlight: false, tag: 'Hypothesis & Distributions' }
    ]
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    iconName: 'Cpu',
    description: 'Predictive modeling, ensemble techniques, unsupervised clustering, and rigorous evaluation methodologies.',
    skills: [
      { name: 'Scikit-learn', highlight: true, tag: 'Core ML Toolkit' },
      { name: 'XGBoost', highlight: true, tag: 'Gradient Boosting' },
      { name: 'Random Forest', highlight: false, tag: 'Ensemble Learning' },
      { name: 'HistGradientBoosting', highlight: false, tag: 'Fast Gradient Trees' },
      { name: 'K-Means Clustering', highlight: false, tag: 'Unsupervised Grouping' },
      { name: 'Model Evaluation', highlight: true, tag: 'PR-AUC, ROC, F1, R²' },
      { name: 'Classification & Regression', highlight: false, tag: 'Supervised Tasks' },
      { name: 'SHAP Explainability', highlight: true, tag: 'Model Interpretability' }
    ]
  },
  {
    id: 'visualization',
    name: 'Data Visualization & BI',
    iconName: 'BarChart3',
    description: 'Translating multidimensional data into intuitive executive dashboards and visual narratives.',
    skills: [
      { name: 'Power BI', highlight: true, tag: 'DAX & Interactive Dashboards' },
      { name: 'Tableau', highlight: false, tag: 'Visual Analytics' },
      { name: 'Matplotlib', highlight: true, tag: 'Statistical Plotting' }
    ]
  },
  {
    id: 'mlops-deployment',
    name: 'Deployment & MLOps',
    iconName: 'Boxes',
    description: 'Packaging trained models into resilient, containerized REST API inference services.',
    skills: [
      { name: 'FastAPI', highlight: true, tag: 'Asynchronous REST APIs' },
      { name: 'REST APIs', highlight: true, tag: 'Endpoint Design' },
      { name: 'Docker', highlight: true, tag: 'Containerization' },
      { name: 'ML Pipelines', highlight: true, tag: 'Reproducible Workflows' },
      { name: 'Model Versioning', highlight: false, tag: 'Artifact Tracking' },
      { name: 'Basic CI/CD', highlight: false, tag: 'Automated Testing' }
    ]
  },
  {
    id: 'tools-databases',
    name: 'Databases & Tools',
    iconName: 'Database',
    description: 'Relational data stores, version control, and development environments.',
    skills: [
      { name: 'MySQL', highlight: true, tag: 'Relational Database' },
      { name: 'Git', highlight: true, tag: 'Version Control' },
      { name: 'GitHub', highlight: true, tag: 'Collaboration' },
      { name: 'Jupyter Notebook', highlight: false, tag: 'Interactive Prototyping' }
    ]
  }
];
