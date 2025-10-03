Overview: ScamGuard is a web application designed to detect scam URLs and educate users about online scams. The application analysis for URLs using common scam phrases to assess risk levels. The risk level is divided into 4 categories (high, medium, low and unknown). Within our database, we have created a score calculation; there are multiple categories, and each has with different scoring. We use a scoring system to decide the risk level of the URLs.The Scam phrases and scoring systems will constantly update to reduce the threat of falling into scams. Alongside the detection features, ScamGuard offers an educational section to inform users about common scam techniques and how to protect themselves online. We gather external links in education sections for users to use if they experience scams. The education section will also teach users how to identify scams and avoid falling victim to them.
System Architecture:
Frontend:
- Built with HTML, CSS, and JavaScript.
backend:
- Developed using JavaScript

Structure:
project/
├─ backend/
│  ├─ backend.js
│  ├─ encryption.js
│  ├─ routes.js
│  ├─ config.js
│  └─ 
└─ frontend/
   ├─ index.html
   ├─ style.css
   ├─ startscreen.js    → the home screen (quick analysis screen)
   ├─ mainscreen.js     → the main analysis screen
   ├─ education.js      → the education screen
