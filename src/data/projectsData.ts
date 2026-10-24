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
  },
  {
    id: 'credx',
    name: 'CredX',
    title: 'Loan Risk & Repayment Analytics Platform',
    tagline: 'End-to-end credit risk data warehouse and BI platform modeling exposure, default delinquency, and cash recovery across 39,717 loan contracts.',
    category: 'Data Analytics & BI',
    featured: true,
    date: '2026',
    technologies: [
      'Python',
      'MySQL 8.0',
      'Star Schema',
      'Power BI',
      'DAX',
      'SQL',
      'Pandas',
      'Data Warehousing'
    ],
    metrics: [
      { label: 'Evaluated Capital', value: '$434.8M', detail: 'Funded loan contracts (39,717 rows)' },
      { label: 'Gross Collections', value: '$482.7M', detail: 'Gross cash receipts (1.11x multiple)' },
      { label: 'Terminal Charge-Off', value: '14.59%', detail: 'Default rate on closed contracts' },
      { label: 'Warehouse Model', value: 'Star Schema', detail: 'Kimball dimensional tables in MySQL 8.0' }
    ],
    problem:
      'Lending platforms face credit risk exposure when borrower defaults erode investor capital. Raw loan originations are heavily fragmented across transactional tables, missing proper dimensional modeling, audit reconciliations, or granular stratification between loan grades (A to G), DTI ratios, and terminal recovery rates.',
    solution:
      'Architected an enterprise Kimball Star Schema warehouse in MySQL 8.0 containing 1 centralized fact table and 5 conforming dimensions. Executed 8 advanced SQL analytical modules evaluating cohort yields, debt-to-income sensitivity, and default hazard timelines. Designed an interactive Power BI semantic model with 25+ explicit DAX measures and 4 executive dashboard pages visualizing portfolio performance, default risk drivers, and cash flow recoveries.',
    keyHighlights: [
      'Ingested and audited 39,717 historical lending contracts totaling $434.81M in funded capital and $482.70M in collected receipts.',
      'Designed an optimized Kimball Star Schema in MySQL 8.0 with explicit primary/foreign keys and surrogate dimension tracking.',
      'Developed 8 modular SQL scripts analyzing risk transition states, vintage cohort default curves, and recovery velocity.',
      'Created interactive multi-page Power BI executive dashboards utilizing advanced DAX measures for dynamic time intelligence.',
      'Conducted deep financial reconciliation proving terminal charge-off rates scale monotonically from Grade A (5.6%) to Grade G (33.8%).'
    ],
    engineeringFocus: [
      'Kimball Dimensional Modeling (Star Schema)',
      'Relational ETL & Warehouse Design',
      'Advanced SQL Window Functions & CTEs',
      'Power BI DAX Semantic Modeling',
      'Credit Risk Stratification',
      'Financial Audit & Reconciliation'
    ],
    githubUrl: 'https://github.com/Muhilarasan-T/CredX',
    liveDemoUrl: null
  },
  {
    id: 'pulse',
    name: 'PULSE',
    title: 'Hospital Patient Flow & Clinical Throughput Analytics',
    tagline: 'Healthcare operational intelligence platform analyzing 49,912 outpatient visits to eliminate queue bottlenecks and optimize clinical scheduling.',
    category: 'Data Analytics & BI',
    featured: true,
    date: '2026',
    technologies: [
      'SQL',
      'Microsoft Excel 365',
      'Power Query',
      'Power Pivot',
      'EHR Analytics',
      'Data Modeling',
      'Queue Theory'
    ],
    metrics: [
      { label: 'Outpatient Visits', value: '49,912', detail: '24-month longitudinal EHR records' },
      { label: 'Median Wait Time', value: '27.0 min', detail: 'Current baseline queue latency' },
      { label: 'Arrival Concentration', value: '63.9%', detail: 'Concentrated in two 3-hour windows' },
      { label: 'Simulated Throughput', value: '+14.3%', detail: 'Capacity unlocked with 0 added doctors' }
    ],
    problem:
      'Hospital outpatient departments battle unpredictable patient surges, prolonged waiting queues, and diagnostic delays. Traditional uniform 08:00–16:00 staffing schedules create massive morning and afternoon congestion waves, driving 22.4% of patients (11,157 visits) into severe delays exceeding 1 hour (P90 = 98.0 minutes).',
    solution:
      'Conducted an end-to-end clinical throughput investigation on 49,912 electronic health records (EHR) over 24 months using SQL and Excel 365 Power Pivot. Diagnosed the twin-peak surge phenomenon (morning 05:00–08:00 AM absorbing 33.2% and afternoon 12:00–15:00 PM absorbing 30.7% of volume). Modeled evidence-based operational interventions: staggered 3-tier physician shifts, pre-dawn digital tokens, and a dedicated maternal ultrasound scanning wing, compressing median wait times by 33.3% (down to ≤ 18 mins) and increasing capacity by +14.3%.',
    keyHighlights: [
      'Audited 49,912 clinical EHR records across 98 attending physicians and diagnostic modalities over a 2-year timeline.',
      'Diagnosed acute queue latency where 22.4% of patients faced >60 min delays due to static staffing misaligned with peak waves.',
      'Identified severe physician workload skew: 21 high-volume doctors handle 71.7% of all hospital consultations.',
      'Uncovered diagnostic imaging bottlenecks, revealing obstetric and gynecological ultrasound scans account for 66.4% of imaging queues.',
      'Engineered a 6-tab executive dashboard in Microsoft Excel 365 featuring Power Query ETL, relational star schema, and dynamic KPI slicers.'
    ],
    engineeringFocus: [
      'Healthcare EHR Data Auditing',
      'Queue Theory & Bottleneck Diagnostics',
      'Power Query ETL & Power Pivot Data Modeling',
      'Capacity & Shift Optimization Simulation',
      'Clinical Service Latency Metrics (P50, P90)'
    ],
    githubUrl: 'https://github.com/Muhilarasan-T/PULSE',
    liveDemoUrl: null
  },
  {
    id: 'payflow',
    name: 'PAYFLOW',
    title: 'Digital Payments Intelligence & Trends Analysis',
    tagline: 'Macro-economic data platform tracking the transformation of India\'s payment ecosystem across 81 continuous months of official RBI data.',
    category: 'Data Analytics & BI',
    featured: true,
    date: '2026',
    technologies: [
      'Python',
      'MySQL 8.0',
      'Pandas',
      'NumPy',
      'PyArrow',
      'Pytest',
      'Microsoft Excel',
      'Matplotlib',
      'Seaborn'
    ],
    metrics: [
      { label: 'Time Horizon', value: '81 Months', detail: 'Continuous RBI monthly series (2019-2026)' },
      { label: 'Payment Rails', value: '57 Rails', detail: 'UPI, NEFT, RTGS, IMPS, Cards, CTS' },
      { label: 'Infrastructure Scope', value: '13 Metrics', detail: 'PoS terminals, ATMs, micro-ATMs' },
      { label: 'Test Suite', value: '21/21 Passed', detail: 'Automated data reconciliation in Pytest' }
    ],
    problem:
      'India\'s national payment ecosystem has experienced unprecedented structural shifts—from paper instruments to real-time mobile rails. However, macroeconomic regulatory data published by the Reserve Bank of India (RBI) is published in complex, wide tabular formats with evolving column schemas, requiring automated ingestion, schema validation, and normalization before institutional analysis.',
    solution:
      'Developed an automated data auditing and relational pipeline for RBI Table No. 612 (\'Payment System Indicators\') spanning November 2019 to July 2026. Cleaned and normalized 145 raw attributes into MySQL 8.0 Star Schema tables and high-performance Parquet columnar stores. Conducted deep exploratory data analysis modeling the parabolic surge of UPI transaction volume, credit vs. debit card divergence across PoS and e-commerce, and CTS cheque phase-out. Validated all transformations with an automated 21-test pytest reconciliation suite.',
    keyHighlights: [
      'Ingested 81 continuous months of official RBI regulatory payment data covering 57 payment instruments and 13 acceptance infrastructure types.',
      'Implemented high-performance columnar serialization (PyArrow Parquet) and normalized MySQL 8.0 relational Star Schema tables.',
      'Constructed an automated test suite with 21 unit tests in Pytest validating zero data leakage, type safety, and arithmetic reconciliation.',
      'Quantified macro trends: UPI volumetric market share explosion, debit card transaction contraction, and credit card e-commerce spend dominance.',
      'Published automated executive spreadsheet models and publication-grade time-series visualizations using Matplotlib & Seaborn.'
    ],
    engineeringFocus: [
      'Macroeconomic Time-Series Data Pipelines',
      'Automated Testing & Reconciliation (Pytest)',
      'MySQL 8.0 Schema Design & Foreign Keys',
      'Columnar Storage Optimization (Parquet)',
      'Financial Rail Benchmarking (UPI, Cards, CTS)'
    ],
    githubUrl: 'https://github.com/Muhilarasan-T/PAYFLOW',
    liveDemoUrl: null
  }
];
