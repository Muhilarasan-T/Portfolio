# Muhilarasan T — Data Science & Machine Learning Portfolio

Production-quality personal portfolio website for **Muhilarasan T**, an aspiring Data Scientist and Machine Learning professional from Tamil Nadu, India.

Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Lucide React**.

---

## 🌟 Key Features

* **Premium Dark Navy Aesthetic**: Refined deep navy palette (`#060B18`, `#070C18`, `#0B1224`), elegant blue-to-violet gradient accents, subtle borders, and background grid textures.
* **Interactive Data Science Canvas**: High-performance canvas in the Hero section visualizing interconnected data nodes and topological embeddings that softly react to mouse interaction.
* **Separation of Concerns**: All project data, technical skills, and portfolio credentials reside in standalone TypeScript files in `src/data/` for rapid future updates.
* **No Artificial Metrics or Percentage Bars**: Skills are presented as organized domain cards with context badges; projects feature verified empirical metrics (e.g., 0.91 PR-AUC on 1.85M transactions, R² 0.94 on 55 Bangalore localities).
* **Rich Project Deep-Dive Modal**: Each project features an interactive modal with in-depth problem statements, architectural approaches, quantitative benchmarks, and SHAP explainability insights.
* **Integrated Resume System**: Supports immediate in-browser preview modal and real PDF download (`/Muhilarasan_T_Resume.pdf`).
* **100% Responsive & Accessible**: Optimized for mobile phones, tablets, laptops, and ultra-wide screens with full reduced-motion support.

---

## 📁 Project Architecture

```
Portfolio/
├── public/
│   ├── Muhilarasan_T_Resume.pdf   # Verified official resume PDF
│   └── resume.pdf                 # Mirror copy
├── scripts/
│   └── generate-resume.js         # PDFKit resume generator script
├── src/
│   ├── components/
│   │   ├── About.tsx              # Narrative, principles & background
│   │   ├── Contact.tsx            # Email copy toast, social links & message form
│   │   ├── DataScienceCanvas.tsx  # Interactive canvas with interconnected nodes
│   │   ├── ExperienceEducation.tsx# Timeline of education, internship & certifications
│   │   ├── Footer.tsx             # Quick links, back-to-top & copyright
│   │   ├── Hero.tsx               # Headline, CTA buttons & credibility chips
│   │   ├── Icons.tsx              # Clean SVG icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx             # Responsive header with scroll blur & mobile drawer
│   │   ├── ProjectCard.tsx        # Card with metrics, badges, and deep dive trigger
│   │   ├── ProjectModal.tsx       # Comprehensive modal with architecture details
│   │   ├── Projects.tsx           # Filter tabs & project grid
│   │   ├── ResumeModal.tsx        # Instant resume viewer & download handler
│   │   └── Skills.tsx             # Grouped category cards & live search filter
│   ├── data/
│   │   ├── portfolioData.ts       # Contact info, about, experience, education, certs
│   │   ├── projectsData.ts        # Technical specs for RED FLAG, ARAN, HABITA, etc.
│   │   └── skillsData.ts          # Categorized technical competencies
│   ├── types/
│   │   └── index.ts               # Clean TypeScript interface definitions
│   ├── App.tsx                    # Main layout orchestrator
│   ├── index.css                  # Tailwind CSS v4 setup & custom utilities
│   └── main.tsx                   # React root entry
├── index.html                     # Preconnected Google Fonts & metadata
├── package.json                   # Dependencies and build scripts
└── vite.config.ts                 # Vite + Tailwind CSS v4 configuration
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js v18+ (tested on v24.19.0)
* npm v9+ (tested on v11.17.0)

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 3. Production Build

```bash
npm run build
```

Builds the optimized production assets in `dist/`.

### 4. Preview Production Build

```bash
npm run preview
```

---

## 🛠️ How to Update Content

1. **Update Projects**: Edit `src/data/projectsData.ts`. You can add new projects, update GitHub repository URLs, deploy links, or metrics.
2. **Update Skills**: Edit `src/data/skillsData.ts`. Add or reorganize skills by category.
3. **Update Profile & Contact**: Edit `src/data/portfolioData.ts`.
4. **Update Resume PDF**: Replace `public/Muhilarasan_T_Resume.pdf` with any new PDF, or re-run `node scripts/generate-resume.js`.
