import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, 'Muhilarasan_T_Resume.pdf');
const doc = new PDFDocument({ margin: 36, size: 'A4' });

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Header
const qrPath = path.join(publicDir, 'portfolio_qr.png');
if (fs.existsSync(qrPath)) {
  doc.image(qrPath, 495, 20, { width: 55 });
  doc.font('Helvetica').fontSize(6).fillColor('#64748b').text('Scan for Live Web App', 480, 78, { width: 85, align: 'center' });
}

doc.font('Helvetica-Bold').fontSize(18).fillColor('#0f172a').text('MUHILARASAN T', 36, 26, { align: 'left' });
doc.moveDown(0.2);
doc.font('Helvetica').fontSize(8.5).fillColor('#475569').text('Bengaluru, Karnataka, India  |  +91 9342596554  |  muhiltamilarasan2k5@gmail.com', { align: 'left' });
doc.text('GitHub: github.com/Muhilarasan-T  |  LinkedIn: linkedin.com/in/Muhilarasan-T  |  Portfolio: muhilarasan-t.github.io/Portfolio', { align: 'left' });
doc.moveDown(0.8);

function addSectionTitle(title) {
  doc.font('Helvetica-Bold').fontSize(10.5).fillColor('#0f172a').text(title.toUpperCase());
  doc.strokeColor('#cbd5e1').lineWidth(0.75).moveTo(36, doc.y + 2).lineTo(559, doc.y + 2).stroke();
  doc.moveDown(0.4);
}

// Professional Summary
addSectionTitle('Professional Summary');
doc.font('Helvetica').fontSize(8.5).fillColor('#334155').text(
  'Computer Science graduate with hands-on experience in Data Analytics, Data Science, and Machine Learning using Python and SQL. Skilled in data preprocessing, exploratory data analysis, visualization, statistical analysis, machine learning, model evaluation, and deployment. Experienced with Power BI, Pandas, NumPy, Scikit-learn, XGBoost, FastAPI, and SHAP through academic and portfolio projects.',
  { align: 'justify', lineGap: 1.5 }
);
doc.moveDown(0.6);

// Technical Skills
addSectionTitle('Technical Skills');
const skills = [
  ['Languages', 'Python, SQL, C++, C'],
  ['Data Analytics', 'Pandas, NumPy, Data Preprocessing, Exploratory Data Analysis, Data Cleaning, Statistical Analysis'],
  ['Visualization', 'Power BI, Tableau, Matplotlib'],
  ['Machine Learning', 'Scikit-learn, Regression, Classification, Clustering, Feature Engineering, Model Evaluation'],
  ['Models', 'XGBoost, Random Forest, HistGradientBoosting, KMeans'],
  ['Deployment & MLOps', 'FastAPI, REST APIs, Docker, ML Pipelines, Model Deployment, Model Versioning, Basic CI/CD'],
  ['Database & Tools', 'MySQL, Git, GitHub, Jupyter Notebook']
];

skills.forEach(([cat, items]) => {
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#1e293b').text(`${cat}: `, { continued: true });
  doc.font('Helvetica').fontSize(8.5).fillColor('#475569').text(items);
});
doc.moveDown(0.6);

// Projects
addSectionTitle('Projects');

// Project 1
doc.font('Helvetica-Bold').fontSize(9).fillColor('#0f172a').text('ARAN — Real-Time API Bot Detection & Automated Mitigation');
doc.font('Helvetica-Oblique').fontSize(8).fillColor('#64748b').text('Python | Pandas | Scikit-learn | XGBoost | FastAPI | SHAP');
doc.moveDown(0.2);
doc.font('Helvetica').fontSize(8.2).fillColor('#334155');
doc.text('• Built an API bot detection system using 5,000 sessions and 13 behavioral features to distinguish legitimate users from automated traffic.');
doc.text('• Performed data preprocessing and trained an XGBoost classifier using cross-validation, hyperparameter tuning, and leakage-aware preprocessing.');
doc.text('• Implemented FastAPI real-time inference with SHAP-based explanations and automated API testing.');
doc.moveDown(0.5);

// Project 2
doc.font('Helvetica-Bold').fontSize(9).fillColor('#0f172a').text('HABITA — Personalized Urban Housing Recommendation & Location Intelligence');
doc.font('Helvetica-Oblique').fontSize(8).fillColor('#64748b').text('Python | Pandas | Scikit-learn | HistGradientBoosting | KMeans');
doc.moveDown(0.2);
doc.font('Helvetica').fontSize(8.2).fillColor('#334155');
doc.text('• Developed a housing recommendation system covering 55 Bangalore localities, combining rent prediction, commute prediction, and locality clustering.');
doc.text('• Built regression models for rent and commute estimation, achieving R² scores of 0.94 and 0.84 respectively.');
doc.text('• Applied KMeans clustering to group localities based on housing and lifestyle characteristics and integrated the results into personalized recommendations.');
doc.moveDown(0.5);

// Project 3
doc.font('Helvetica-Bold').fontSize(9).fillColor('#0f172a').text('RED FLAG — Transaction Anomaly & Fraud Detection');
doc.font('Helvetica-Oblique').fontSize(8).fillColor('#64748b').text('Python | Pandas | Scikit-learn | XGBoost | FastAPI | SHAP');
doc.moveDown(0.2);
doc.font('Helvetica').fontSize(8.2).fillColor('#334155');
doc.text('• Developed an end-to-end fraud detection platform for 1.85M transactions using a strict chronological train-validation-test strategy to prevent temporal leakage.');
doc.text('• Engineered 26 point-in-time-safe features and trained an XGBoost classifier, achieving 0.91 PR-AUC on an unseen test set.');
doc.text('• Optimized the classification threshold to reduce false-positive alerts and deployed FastAPI real-time and batch scoring with SHAP-based explainability.');
doc.moveDown(0.6);

// Experience
addSectionTitle('Experience');
doc.font('Helvetica-Bold').fontSize(9).fillColor('#0f172a').text('Data Analytics Intern — Techvolt Software Pvt. Ltd., Coimbatore');
doc.font('Helvetica').fontSize(8.2).fillColor('#334155');
doc.text('• Performed data preprocessing, analysis, and visualization using Power BI.');
doc.text('• Created dashboards and reports to communicate data-driven insights and support decision-making.');
doc.moveDown(0.6);

// Education
addSectionTitle('Education');
doc.font('Helvetica-Bold').fontSize(9).fillColor('#0f172a').text('B.E. Computer Science and Engineering');
doc.font('Helvetica').fontSize(8.2).fillColor('#334155').text('Dhanalakshmi Srinivasan Engineering College, Perambalur  |  2022 – 2026  |  CGPA: 8.6');
doc.moveDown(0.6);

// Achievement
addSectionTitle('Achievement');
doc.font('Helvetica-Bold').fontSize(9).fillColor('#0f172a').text('First Place — Data Analytics Hackathon, NIT Trichy  |  March 2025');
doc.moveDown(0.6);

// Certifications
addSectionTitle('Certifications');
const certs = [
  'Masters Program in Data Science — NASSCOM (Gold, 96%), Sep 2026',
  'Microsoft Power BI Data Analyst Associate',
  'SQL Basic Course — Newton School',
  'SQL for Data Science — Coursera',
  'Data Analytics Job Simulation — Deloitte',
  'Data Science & Analytics — HP LIFE',
  'Python for Data Science — Udemy'
];
certs.forEach(cert => {
  doc.font('Helvetica').fontSize(8.2).fillColor('#334155').text(`• ${cert}`);
});
doc.moveDown(0.5);

// Languages
addSectionTitle('Languages');
doc.font('Helvetica').fontSize(8.5).fillColor('#334155').text('Tamil  |  English');

doc.end();

stream.on('finish', () => {
  // Also copy to resume.pdf
  fs.copyFileSync(outputPath, path.join(publicDir, 'resume.pdf'));
  console.log('Resume PDF generated successfully at:', outputPath);
});
