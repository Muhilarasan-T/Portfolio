import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'red-flag',
    name: 'RED FLAG',
    title: 'Transaction Anomaly & Fraud Detection Platform',
    tagline: 'High-throughput ML system detecting fraudulent financial transactions in highly imbalanced streams with SHAP explainability.',
    category: 'Machine Learning',
    featured: true,
    date: '2025',
    technologies: [
      'Python',
      'XGBoost',
      'Scikit-learn',
      'SHAP',
      'imbalanced-learn',
      'FastAPI',
      'SQLAlchemy',
      'Docker'
    ],
    metrics: [
      { label: 'Dataset Scale', value: '1.85M', detail: 'Transactions evaluated' },
      { label: 'Test PR-AUC', value: '0.91', detail: 'On strictly held-out unseen test set' },
      { label: 'Feature Space', value: '26', detail: 'Point-in-time leakage-safe features' },
      { label: 'Inference Type', value: 'Real-time & Batch', detail: 'FastAPI scoring endpoint' }
    ],
    problem:
      'In financial transaction streams, fraudulent activities represent a tiny fraction (<0.5%) of overall volume. Standard supervised classifiers fail due to severe class imbalance, high false-positive alert fatigue for risk analysts, and subtle temporal data leakage when traditional random cross-validation is mistakenly applied.',
    solution:
      'Engineered a complete end-to-end fraud detection architecture using a strict chronological train-validation-test split to eliminate temporal lookahead bias. Designed 26 leakage-safe aggregation features (rolling velocity, deviation from historical averages, cross-merchant frequency). Trained an XGBoost model optimized for precision-recall tradeoffs, fine-tuned classification thresholds, and deployed a low-latency FastAPI inference service with SHAP value explainability for each flagged transaction.',
    keyHighlights: [
      'Strict chronological train-validation-test partitioning to guarantee zero temporal data leakage.',
      'Engineered 26 point-in-time safe behavioral features capturing user transaction velocity and anomaly scores.',
      'Attained 0.91 PR-AUC on the unseen test set, significantly outperforming baseline logistic and tree models.',
      'Calibrated decision threshold to minimize costly false-positive alerts while maintaining high recall on fraud cases.',
      'Integrated TreeSHAP explanations into FastAPI responses, providing audit-ready rationale for risk operations.'
    ],
    engineeringFocus: [
      'Class Imbalance Handling',
      'Temporal Split Strategy',
      'Point-in-time Feature Engineering',
      'Threshold Optimization',
      'SHAP Explainability',
      'Containerized FastAPI Service'
    ],
    githubUrl: 'https://github.com/Muhilarasan-T',
    liveDemoUrl: null
  },
  {
    id: 'aran',
    name: 'ARAN',
    title: 'Real-Time API Bot Detection & Automated Mitigation',
    tagline: 'Behavioral ML engine analyzing request telemetry to differentiate human users from automated scrapers and bots.',
    category: 'MLOps & APIs',
    featured: true,
    date: '2025',
    technologies: [
      'Python',
      'XGBoost',
      'Scikit-learn',
      'FastAPI',
      'SHAP',
      'Pandas',
      'Docker'
    ],
    metrics: [
      { label: 'Evaluated Sessions', value: '5,000', detail: 'Granular HTTP session logs' },
      { label: 'Behavioral Signals', value: '13', detail: 'Extracted statistical features' },
      { label: 'Model Evaluation', value: 'Stratified CV', detail: 'Leakage-aware preprocessing' },
      { label: 'Response Latency', value: '<45ms', detail: 'FastAPI sub-second inference' }
    ],
    problem:
      'Web APIs are constantly targeted by credential stuffers, aggressive content scrapers, and automated scripts that mimic standard browser headers, easily bypassing traditional IP-rate limiting and naive static filters.',
    solution:
      'Developed ARAN, a behavioral machine learning system that analyzes session-level traffic dynamics rather than static IP signatures. Extracted 13 behavioral telemetry signals—such as request interval variance, endpoint entropy, payload size distributions, and error burst rates. Trained an XGBoost classifier with stratified cross-validation and leakage-safe scaling, outputting automated mitigation options (allow, challenge, rate-limit, or drop) backed by SHAP-driven transparency.',
    keyHighlights: [
      'Extracted 13 behavioral interaction features from 5,000 session traces to distinguish subtle bot automation.',
      'Leakage-aware data preprocessing pipeline with hyperparameter tuning and cross-validation.',
      'Built a low-latency FastAPI inference service that predicts bot probability and recommends mitigation actions.',
      'SHAP summary visualizations explaining the top contributing behavioral signals per request.',
      'Implemented automated API test coverage verifying pipeline robustness against simulated bot patterns.'
    ],
    engineeringFocus: [
      'Behavioral Telemetry Analysis',
      'Leakage-Aware Preprocessing',
      'Hyperparameter Optimization',
      'Real-Time FastAPI Endpoint',
      'Automated Mitigation Rules',
      'Model Interpretability'
    ],
    githubUrl: 'https://github.com/Muhilarasan-T',
    liveDemoUrl: null
  },
  {
    id: 'habita',
    name: 'HABITA',
    title: 'Personalized Urban Housing Recommendation Platform',
    tagline: 'Location intelligence and predictive engine matching urban tenants to neighborhoods based on commute, rent, and lifestyle clusters.',
    category: 'Location Intelligence',
    featured: true,
    date: '2024 - 2025',
    technologies: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'HistGradientBoosting',
      'K-Means Clustering',
      'NumPy',
      'Matplotlib'
    ],
    metrics: [
      { label: 'Localities Mapped', value: '55', detail: 'Bangalore urban micro-markets' },
      { label: 'Rent R² Score', value: '0.94', detail: 'HistGradientBoosting regression' },
      { label: 'Commute R² Score', value: '0.84', detail: 'Dynamic commute estimation' },
      { label: 'Segmentation', value: 'K-Means', detail: 'Multi-attribute neighborhood clustering' }
    ],
    problem:
      'Urban house hunting is plagued by information fragmentation. Prospective tenants struggle to reconcile budget constraints with variable commute times, public transit accessibility, and lifestyle amenities across diverse city neighborhoods.',
    solution:
      'Created HABITA, a data-driven recommendation engine covering 55 major Bangalore localities. Built dual HistGradientBoosting regression models to accurately forecast fair rental valuations (R² = 0.94) and commute durations (R² = 0.84). Applied unsupervised K-Means clustering on housing and infrastructure attributes to generate intuitive locality profiles, producing personalized neighborhood recommendations tailored to user commute tolerance and lifestyle priorities.',
    keyHighlights: [
      'Curated and preprocessed multi-source urban data spanning 55 prominent Bangalore localities.',
      'Trained HistGradientBoosting regression achieving high precision: R² = 0.94 for rent prediction and R² = 0.84 for commute.',
      'Implemented K-Means clustering to categorize neighborhoods by livability, commercial density, and infrastructure.',
      'Synthesized multi-criteria preference scoring combining budget, commute penalty, and locality profile alignment.',
      'Visualized locality clusters and feature correlation matrices using Matplotlib and Seaborn.'
    ],
    engineeringFocus: [
      'Regression Modeling (HistGradientBoosting)',
      'Unsupervised Clustering (K-Means)',
      'Spatial & Commute Feature Engineering',
      'Multi-Objective Scoring Logic',
      'Exploratory Data Analysis'
    ],
    githubUrl: 'https://github.com/Muhilarasan-T',
    liveDemoUrl: null
  },
  {
    id: 'amazon-sentiment',
    name: 'AMAZON SENTIMENT ANALYSIS',
    title: 'Customer Review Sentiment Classification & Text Mining',
    tagline: 'NLP pipeline classifying product reviews into nuanced sentiment categories to uncover consumer perception drivers.',
    category: 'NLP',
    featured: true,
    date: '2024',
    technologies: [
      'Python',
      'NLTK',
      'Scikit-learn',
      'Pandas',
      'Matplotlib',
      'NumPy'
    ],
    metrics: [
      { label: 'Classification', value: '3 Classes', detail: 'Positive, Neutral, Negative' },
      { label: 'Vectorization', value: 'TF-IDF', detail: 'N-gram sub-linear term frequency' },
      { label: 'Evaluation', value: 'F1 & Confusion', detail: 'Class-balanced performance metrics' },
      { label: 'Text Processing', value: 'Full NLP Pipeline', detail: 'Tokenization, Lemmatization, Stopwords' }
    ],
    problem:
      'E-commerce platforms receive thousands of product reviews daily. Star ratings alone fail to capture nuanced product feedback, emerging defect reports, and customer pain points concealed within unstructured text.',
    solution:
      'Engineered an NLP sentiment classification workflow. Preprocessed raw review text through regex normalization, contraction expansion, stopword filtering, and WordNet lemmatization. Converted cleaned corpora into n-gram TF-IDF representations and benchmarked machine learning classifiers (Logistic Regression, Naive Bayes, Linear SVC) to categorize customer sentiment into positive, neutral, and negative classes with comprehensive error analysis.',
    keyHighlights: [
      'Robust text preprocessing pipeline handling noisy social web text, slang, and punctuation anomalies.',
      'Feature extraction using sublinear TF-IDF term frequency weighting and bi-gram context preservation.',
      'Benchmarked multiple classification algorithms using cross-validation and macro F1 scoring.',
      'Extracted high-impact keyword n-grams to surface top praise and complaints per product category.',
      'Rendered confusion matrices and sentiment distribution charts communicating actionable product insights.'
    ],
    engineeringFocus: [
      'Text Preprocessing & Lemmatization',
      'TF-IDF Feature Representation',
      'Multiclass Model Benchmarking',
      'Precision, Recall & Macro-F1 Evaluation',
      'Insight Visualization'
    ],
    githubUrl: 'https://github.com/Muhilarasan-T',
    liveDemoUrl: null
  }
];
