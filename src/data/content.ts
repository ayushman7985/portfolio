export const profile = {
  name: 'Ayushman Shukla',
  firstName: 'Ayushman',
  lastName: 'Shukla',
  role: 'Full Stack Developer',
  tagline: 'Building intelligent systems with code, APIs & AI',
  email: 'shuklaayushman7@gmail.com',
  phone: '+91 7985980646',
  phoneHref: 'tel:+917985980646',
  location: 'Kanpur, India · open to relocate',
  availability: 'Open for full-time & internships',
  github: 'https://github.com/ayushman7985',
  resumePath:
    'https://drive.google.com/uc?export=download&id=1kMDQxcmvNHGbmbeRhVLTynebFpTEwqqR',
  avatar: '/profile.png',
}

export const heroDesc = [
  'Computer Science graduate passionate about building modern web applications and scalable backend systems.',
  'Experienced with Python, FastAPI, React.js, PostgreSQL, and Docker, with hands-on experience developing and deploying full-stack projects.',
  'Currently working as an SDE Intern at BharatScales, contributing to production-ready applications and API development.',
]

export const aboutParagraphs = [
  'Hello! I\'m Ayushman Shukla, a passionate Full Stack Developer and B.Tech Computer Science graduate (2026) with hands-on experience building modern web applications from concept to deployment.',
  'My journey in software development has been driven by a strong interest in creating scalable, user-focused solutions. I specialize in developing full-stack applications using Python, FastAPI, React.js, JavaScript, PostgreSQL, and Docker, with a focus on clean architecture, performance, and maintainability.',
  'Currently, I am working as an SDE Intern at BharatScales, where I contribute to designing and developing production-ready applications, building RESTful APIs, and delivering end-to-end features. I have also gained experience in software testing, debugging, and data validation through my AI Virtual Internship with IBM Skills Network.',
  'Over time, I have built and deployed several projects, including an AI-powered Chess Game, an Attendance Management System, and a Personal Task Manager. These projects have strengthened my understanding of backend development, database design, API integration, and modern frontend technologies.',
  'I enjoy solving real-world problems through technology and continuously improving my skills in software engineering, system design, cloud technologies, and modern development workflows. My goal is to grow as a software engineer while building products that create meaningful impact.',
]

export const skills = [
  { name: 'Python', level: 92, category: 'Languages' },
  { name: 'JavaScript', level: 85, category: 'Languages' },
  { name: 'Java', level: 75, category: 'Languages' },
  { name: 'FastAPI', level: 90, category: 'Backend' },
  { name: 'Node.js', level: 78, category: 'Backend' },
  { name: 'REST APIs', level: 90, category: 'Backend' },
  { name: 'JWT / RBAC', level: 85, category: 'Backend' },
  { name: 'React.js', level: 88, category: 'Frontend' },
  { name: 'Next.js', level: 72, category: 'Frontend' },
  { name: 'HTML / CSS', level: 90, category: 'Frontend' },
  { name: 'PostgreSQL', level: 88, category: 'Database' },
  { name: 'MySQL', level: 80, category: 'Database' },
  { name: 'MongoDB', level: 65, category: 'Database' },
  { name: 'Docker', level: 82, category: 'DevOps' },
  { name: 'Git / GitHub', level: 90, category: 'DevOps' },
  { name: 'AWS', level: 68, category: 'DevOps' },
  { name: 'LangChain / RAG', level: 78, category: 'AI' },
  { name: 'OpenAI / Gemini', level: 80, category: 'AI' },
  { name: 'DSA', level: 85, category: 'Core CS' },
]

export const education = [
  {
    school: 'Pranveer Singh Institute of Technology (AKTU), Kanpur',
    degree: 'B.Tech in Computer Science and Engineering',
    score: '70%',
    year: '2026',
  },
  {
    school: 'Harmilap Mission School (CBSE), Kanpur',
    entries: [
      { label: 'Intermediate (Class XII)', score: '72%', year: '2021' },
      { label: 'High School (Class X)', score: '75%', year: '2019' },
    ],
  },
]

export const achievements = [
  'Solved 300+ coding problems across LeetCode and HackerRank, strengthening problem-solving and algorithmic thinking.',
  'Earned Python, SQL, and Problem Solving certifications on HackerRank.',
  'Consistently practiced Data Structures and Algorithms through competitive coding platforms.',
  'Strong understanding of arrays, strings, linked lists, trees, recursion, and dynamic programming concepts.',
  'Developed analytical and debugging skills through real-world programming challenges.',
]

export const experience = [
  {
    role: 'SDE Intern – BharatScales',
    date: 'April 2026 – Present',
    bullets: [
      'Developing and maintaining PostgreSQL databases, ensuring data accuracy, integrity, and consistency across application workflows.',
      'Building and integrating REST APIs with robust validation and error handling to support reliable transaction processing and order management.',
      'Collaborating via email and chat-based communication channels to resolve technical issues, address queries, and provide timely resolutions to stakeholders.',
      'Following structured engineering practices including Git-based version control, testing, debugging, and deployment to maintain process quality standards.',
    ],
  },
  {
    role: 'AI Virtual Internship (PBEL) – IBM Skills Network',
    date: 'July 2025 – Aug 2025',
    bullets: [
      'Performed data entry and validation on real-world datasets, applying structured problem-solving to ensure data accuracy and integrity in analytical outputs.',
      'Monitored data quality metrics and applied testing techniques to identify discrepancies, improving reliability of model outputs.',
    ],
  },
]

export const projects = [
  {
    name: 'Multi-Tenant Attendance Management System',
    year: '2026',
    description:
      'A secure, multi-tenant system for tracking employee attendance with isolated org-level data access. Features JWT-based auth, RBAC, and scalable RESTful APIs ensuring data accuracy across all tenants.',
    stack: ['FastAPI', 'PostgreSQL', 'JWT', 'Python', 'RBAC'],
    github: 'https://github.com/ayushman7985/Attendence-System',
    live: 'https://attendence-system-phi.vercel.app/',
  },
  {
    name: 'Neural-Mate: AI-Powered Chess Game',
    year: '2025',
    description:
      'Full-stack chess app with a custom AI engine using Minimax + Alpha-Beta Pruning. Supports selectable difficulty levels, real-time gameplay, and full move validation via REST APIs.',
    stack: ['Python', 'FastAPI', 'React', 'Minimax', 'Alpha-Beta', 'python-chess'],
    github: 'https://github.com/ayushman7985/Neural-Mate',
    live: 'https://neural-mate-nine.vercel.app/',
  },
  {
    name: 'Personal Task Manager',
    year: '2026',
    description:
      'A full-stack personal task manager with a cyberpunk-inspired UI. Create, organize, and track tasks with priorities, due dates, filtering, sorting, and drag-and-drop reordering — all persisted in SQLite with no login required.',
    stack: ['Python', 'FastAPI', 'React', 'Vite', 'SQLite', '@dnd-kit'],
    github: 'https://github.com/ayushman7985/Personal-Task-Manager',
    live: 'https://personal-task-manager-9x36.vercel.app/',
  },
  {
    name: 'BookRecs — Book Recommendation System',
    year: '2026',
    description:
      'A full-stack book recommendation app with content-based search (TF-IDF), collaborative filtering on 6M+ goodbooks-10k ratings, personalized home rails, and star ratings. Features JWT auth with My Books, Wishlist, and History synced to PostgreSQL.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'scikit-learn', 'Docker', 'JWT'],
    github: 'https://github.com/ayushman7985/BookRecs',
  },
  {
    name: 'Salary Prediction Using Ensemble Learning',
    year: '2025',
    description:
      'A machine learning project that predicts salaries from experience, education, test scores, and interview performance. Applied ensemble techniques including Random Forest and Gradient Boosting with data preprocessing, feature selection, and model evaluation to improve prediction accuracy.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Machine Learning'],
    github: 'https://github.com/ayushman7985/Salary-Prediction-using-Ensemble-learning',
  },
  {
    name: 'Bank Account Simulation System',
    year: '2025',
    description:
      'A Java-based banking system simulating real-world operations such as account creation, deposits, and withdrawals. Built with object-oriented design principles — inheritance, polymorphism, encapsulation, and abstraction — for modular, reusable code and reliable transactional workflows.',
    stack: ['Java', 'OOP', 'Inheritance', 'Polymorphism', 'Encapsulation'],
    github: 'https://github.com/ayushman7985/-Bank-Account-Simulation',
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const codeSnippets = [
  {
    filename: 'neural_engine.py',
    language: 'python',
    lines: [
      { type: 'comment', text: '# AI-powered decision loop' },
      { type: 'keyword', text: 'async def', plain: ' ' },
      { type: 'fn', text: 'think', plain: '(' },
      { type: 'param', text: 'context', plain: ': ' },
      { type: 'type', text: 'State', plain: ') -> ' },
      { type: 'type', text: 'Action', plain: ':' },
      { type: 'newline' },
      { type: 'indent', text: '    ' },
      { type: 'keyword', text: 'plan', plain: ' = ' },
      { type: 'fn', text: 'await', plain: ' ' },
      { type: 'fn', text: 'reason', plain: '(context)' },
      { type: 'newline' },
      { type: 'indent', text: '    ' },
      { type: 'keyword', text: 'return', plain: ' ' },
      { type: 'fn', text: 'optimize', plain: '(plan)' },
    ],
  },
  {
    filename: 'api.ts',
    language: 'typescript',
    lines: [
      { type: 'comment', text: '// Scalable full-stack systems' },
      { type: 'keyword', text: 'const', plain: ' ' },
      { type: 'fn', text: 'build', plain: ' = ' },
      { type: 'keyword', text: 'async', plain: ' (' },
      { type: 'param', text: 'idea', plain: ': ' },
      { type: 'type', text: 'string', plain: ') => {' },
      { type: 'newline' },
      { type: 'indent', text: '  ' },
      { type: 'keyword', text: 'const', plain: ' ' },
      { type: 'param', text: 'stack', plain: ' = [' },
      { type: 'string', text: '"FastAPI"', plain: ', ' },
      { type: 'string', text: '"React"', plain: ']' },
      { type: 'newline' },
      { type: 'indent', text: '  ' },
      { type: 'keyword', text: 'return', plain: ' ' },
      { type: 'fn', text: 'ship', plain: '(idea, stack)' },
      { type: 'newline' },
      { type: 'plain', text: '}' },
    ],
  },
]
