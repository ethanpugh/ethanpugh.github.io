export const PROFILE = {
  name: 'Ethan Pugh',
  username: 'ethanpugh',
  title: 'Systems Engineer & Software Developer',
  credentials: 'BSc Computer Science (First Class Honours)',
  currentRole: 'Systems Engineer @ General Dynamics Mission Systems',
  summary:
    'Systems Engineer and First Class Computer Science graduate specialising in build & release engineering, systems integration, C#/.NET and full-stack JavaScript development, and infrastructure automation. Passionate about building reliable mission-critical systems and privacy-first, self-hosted software.',
  email: 'ethanpugh.business@hotmail.com',
  github: 'https://github.com/ethanpugh',
  linkedin: 'https://www.linkedin.com/in/ethantpugh',
  portfolioUrl: 'https://ethanpugh.github.io',
  avatarUrl: 'https://avatars.githubusercontent.com/u/57467541?v=4',
  highlights: [
    {
      label: 'Current Role',
      value: 'Systems Engineer',
      subtext: 'General Dynamics Mission Systems',
    },
    {
      label: 'Degree',
      value: '1st Class BSc (Hons)',
      subtext: 'Computer Science • Swansea University',
    },
    {
      label: 'Core Focus',
      value: 'Systems & Full-Stack',
      subtext: 'Windows/Linux • C# • React • Docker',
    },
    {
      label: 'Track Record',
      value: '4+ Years Industry',
      subtext: 'Mission Systems, Enterprise IT & Semiconductor',
    },
  ],
}

export const EXPERIENCE = [
  {
    id: 'gdms-systems-engineer',
    role: 'Systems Engineer',
    company: 'General Dynamics Mission Systems',
    period: 'July 2024 – Present',
    current: true,
    tags: [
      'C#',
      'Windows & Linux',
      'Build & Release',
      'Systems Integration',
      'Virtualisation',
      'Software Assurance',
    ],
    highlights: [
      {
        title: 'Build & Release Engineering',
        description:
          'Build, configure, and support Windows and Linux-based systems and virtual environments through verification and release readiness.',
      },
      {
        title: 'Systems Integration',
        description:
          'Integrate operating systems, software, virtualisation, and hardware, identifying compatibility and deployment issues during engineering activities.',
      },
      {
        title: 'Software Engineering',
        description:
          'Contribute to the development and maintenance of internal software applications using C#, supporting engineering requirements and improvements to existing functionality.',
      },
      {
        title: 'Automation & Process Improvement',
        description:
          'Develop scripts, tooling, and standardised workflows to automate repetitive activities, reduce manual effort, and improve engineering repeatability.',
      },
      {
        title: 'Technical Troubleshooting',
        description:
          'Investigate system, software, networking, and hardware issues, developing and validating practical engineering solutions.',
      },
      {
        title: 'System Verification & Testing',
        description:
          'Create and perform repeatable verification activities, investigate unexpected results, and maintain supporting technical evidence.',
      },
      {
        title: 'Software Assurance',
        description:
          'Perform software composition and inventory analysis, review results, and produce supporting information for licensing and assurance.',
      },
      {
        title: 'Technical Documentation & Ownership',
        description:
          'Produce and maintain build instructions, technical guidance, and test material while taking ownership of engineering problems and driving issues towards evidenced resolutions across cross-functional teams.',
      },
    ],
  },
  {
    id: 'centerprise-operations-engineer',
    role: 'Operations Engineer',
    company: 'Centerprise International',
    period: 'August 2023 – June 2024',
    current: false,
    tags: [
      '2nd/3rd Line Support',
      'Datto RMM',
      'Autotask',
      'P1/P2 Incident Escalation',
      'Knowledge Management',
    ],
    highlights: [
      {
        title: 'Ticket & Client Support',
        description:
          'Provided second and third line support for hundreds of clients and thousands of end users, managing a high volume of technical tickets through Autotask with a focus on fast, effective resolution.',
      },
      {
        title: 'Performance Excellence',
        description:
          'Consistently outperformed team averages for ticket closures and efficiency, setting a new performance standard within just 10 months of joining the team.',
      },
      {
        title: 'Incident Escalation',
        description:
          'Served as a key escalation point for critical P1 and P2 incidents, providing rapid responses to high-priority issues affecting business continuity for both internal and external users.',
      },
      {
        title: 'Remote Troubleshooting',
        description:
          'Used Datto RMM to remotely troubleshoot and resolve user issues, ensuring minimal disruption to end users while maintaining clear, professional communication.',
      },
      {
        title: 'Knowledge Management',
        description:
          'Authored and updated detailed knowledge base articles to support service desk operations, including customer-specific guides, onboarding processes, and resolutions for complex, recurring issues.',
      },
      {
        title: 'Stakeholder Collaboration',
        description:
          'Collaborated directly with senior stakeholders from client companies during meetings and out-of-hours support sessions to plan new implementations and resolve urgent technical issues.',
      },
    ],
  },
  {
    id: 'nexperia-it-engineer',
    role: 'IT Engineer',
    company: 'Nexperia Newport',
    period: 'January 2023 – August 2023',
    current: false,
    tags: [
      'Azure / Intune',
      'M365 Admin',
      'NTLite Imaging',
      'Windows 11',
      'Cisco Networking',
      'ServiceNow',
    ],
    highlights: [
      {
        title: 'Support & Administration',
        description:
          'Provided 1st/2nd line support for 500+ staff via ServiceNow, managing M365 administration (Azure/Intune) and hardware assets.',
      },
      {
        title: 'Automation & Deployment',
        description:
          'Developed a bespoke NTLite imaging solution to automate device setups and led a successful Windows 11 trial.',
      },
      {
        title: 'Infrastructure & Virtualisation',
        description:
          'Supported network infrastructure by patching and configuring Cisco switches and routers, alongside deploying virtual solutions for legacy software.',
      },
    ],
  },
  {
    id: 'nexperia-it-technician',
    role: 'IT Technician',
    company: 'Nexperia Newport',
    period: 'June 2022 – December 2022',
    current: false,
    tags: [
      'Hardware Rollout',
      'ISO 6 Cleanroom',
      'Legacy Compatibility',
      'Windows 10',
    ],
    highlights: [
      {
        title: 'Rollout Coordination',
        description:
          'Coordinated the rollout and imaging of 200+ replacement laptops while managing new starter onboarding and provisioning.',
      },
      {
        title: 'Environment Compliance',
        description:
          'Delivered technical support within ISO 6 cleanroom environments while resolving complex software compatibility issues.',
      },
      {
        title: 'Technical Workarounds',
        description:
          'Created permanent workarounds and professional work instructions for legacy software running on Windows 10.',
      },
    ],
  },
]

export const FEATURED_PROJECTS = [
  {
    id: 'cadence',
    title: 'Cadence',
    subtitle: 'Real-Time Household Pet Medication Tracker',
    category: 'Full-Stack Web & Docker',
    period: '2026',
    repoUrl: 'https://github.com/ethanpugh/Cadence',
    image: '/images/Cadence.png',
    description:
      'A 100% self-hosted, mobile-first web application designed to coordinate twice-daily pet medication across multiple household caregivers and prevent accidental double-dosing.',
    highlights: [
      'Anti-double-dose status banner with live time-since-last-dose counter and caregiver attribution.',
      'Zero-dependency Node.js 22 Alpine server backed by built-in node:sqlite and 2.5s LAN live polling.',
      'Bottle shelf-life expiry tracker, weekly adherence score browser, and multi-stage Docker deployment.',
    ],
    tech: ['React 19', 'Vite', 'Tailwind CSS v4', 'Node.js 22', 'SQLite', 'Docker'],
  },
  {
    id: 'floodgate',
    title: 'Floodgate',
    subtitle: 'Private Period & Endometriosis Symptom Tracker',
    category: 'Full-Stack Web & Analytics',
    period: '2026',
    repoUrl: 'https://github.com/ethanpugh/Floodgate',
    image: '/images/Floodgate.png',
    description:
      'A privacy-first, self-hosted daily clinical journal and analytics suite for logging period flow, blood clots, endometriosis pain, GI flare-ups, and medication relief across phone and tablet.',
    highlights: [
      'Tracks 6 clinical flow levels, anatomical pain locations, GI distress, and per-medication relief effectiveness.',
      'Generates printable GP/Gynaecologist consultation reports with 30/60/90/365-day KPI cards and correlation charts.',
      'Runs in a single lightweight Docker container with local SQLite persistence and automatic LAN device sync.',
    ],
    tech: ['React 19', 'Vite', 'Tailwind CSS v4', 'Node.js 22', 'SQLite', 'Docker'],
  },
  {
    id: 'wepa',
    title: 'WEPA (Windows Easy Privacy Application)',
    subtitle: 'BSc Dissertation & Windows 10/11 Privacy Utility',
    category: 'Desktop & Systems Engineering',
    period: '2021',
    repoUrl: 'https://github.com/ethanpugh/WEPA',
    image: '/images/WEPA.png',
    description:
      'Created as part of my third-year BSc dissertation at Swansea University (adopted as a reference for future students) and uplifted to .NET 10 for Windows 10 and Windows 11. A C# and PowerShell desktop utility that empowers novice and advanced users to strip Windows bloatware and telemetry.',
    highlights: [
      'Dual-mode workflow: guided "Easy Privacy" explanations for novices and selective/bulk Appx package removal for power users.',
      'Combines a native C#/.NET 10 WinForms GUI with automated PowerShell scripting to detect and remove preinstalled Windows 10/11 bloatware.',
      'Accompanying research dissertation analysing Windows privacy and bloat was retained by Swansea University as a student exemplar.',
    ],
    tech: ['C#', '.NET 10', 'PowerShell', 'Windows 10/11', 'Visual Studio / Rider'],
  },
  {
    id: 'eleven',
    title: 'Eleven',
    subtitle: 'EA Sports FC Clubs Position Randomizer',
    category: 'TypeScript Web & Gaming Utility',
    period: '2026',
    repoUrl: 'https://github.com/ethanpugh/Eleven',
    image: '/images/Eleven.png',
    description:
      'A lightweight, interactive web application for deciding who plays where in EA Sports FC Clubs, featuring a tactical pitch visualiser across all 32 official club formations.',
    highlights: [
      'Strict front-to-back distribution engine (FWD → MID → DEF → GK) with attacking priority and sequential slot-machine reveal animations.',
      'Interactive pitch supporting all 32 3-back, 4-back, and 5-back FC Clubs formations with click-to-pin player position locking.',
      'Persistent localStorage club rosters and one-click shareable squad URLs (?squad=...) to pre-load lineups on any browser.',
    ],
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'GitHub Pages'],
  },
]

export const ARCHIVE_PROJECTS = [
  {
    title: 'Jailscape',
    language: 'Java • JavaFX',
    year: '2019',
    repoUrl: 'https://github.com/ethanpugh/Jailscape',
    description:
      '2D turn-based game built in JavaFX featuring a custom A* pathfinding algorithm, bespoke game engine, graphics, and audio. Led a 4-person engineering team to coordinate workload and delivery.',
  },
  {
    title: 'Gomoku Solver',
    language: 'Python',
    year: '2021',
    repoUrl: 'https://github.com/ethanpugh/gomoku-solver',
    description:
      'Autonomous Python game-playing agent designed to evaluate board states and solve/win Gomoku (Five in a Row) matches.',
  },
  {
    title: 'LastBiscuit',
    language: 'Java',
    year: '2020',
    repoUrl: 'https://github.com/ethanpugh/LastBiscuit',
    description:
      'Implementation of the strategic mathematical game Nim, where players take biscuits from barrels to claim the final biscuit.',
  },
  {
    title: 'Boing',
    language: 'Java',
    year: '2019',
    repoUrl: 'https://github.com/ethanpugh/Boing',
    description:
      'Graphical window simulation rendering geometric shapes with real-time velocity vectors and boundary collision physics.',
  },
]

export const EDUCATION = [
  {
    institution: 'Swansea University',
    period: '2018 – 2021',
    qualification: 'BSc Computer Science, First Class Honours',
    badge: '1st Class (Hons)',
    details: [
      { label: 'Systems Modelling', score: '87%' },
      { label: 'Software Engineering', score: '86%' },
      { label: 'Project Development', score: '83%' },
    ],
    notes:
      'Both final-year Dissertation ("Privacy in Windows 10") and Volume Visualiser codebase were selected as reference exemplars for future students.',
  },
  {
    institution: 'Coleg Gwent Crosskeys',
    period: '2016 – 2018',
    qualification: '4 GCE A-Levels / Level 3 Qualifications',
    badge: 'Further Education',
    details: [
      { label: 'Welsh Baccalaureate', score: 'A' },
      { label: 'Computer Science', score: 'B' },
      { label: 'Physics', score: 'C' },
      { label: 'Mathematics', score: 'D' },
    ],
  },
  {
    institution: 'Oakdale Comprehensive School',
    period: '2011 – 2016',
    qualification: '12 GCSEs (1 A*, 6 As, 4 Bs, 1 C)',
    badge: 'Secondary Education',
    details: [
      { label: 'Mathematics', score: 'A*' },
      { label: 'D&T: Design Graphics', score: 'A' },
      { label: 'ICT', score: 'A' },
      { label: 'Science (Triple Award)', score: 'A' },
    ],
  },
]

export const SKILL_CATEGORIES = [
  {
    category: 'Systems & Infrastructure',
    icon: 'Server',
    skills: [
      'Systems Integration',
      'Build & Release Engineering',
      'Windows & Linux Administration',
      'Virtualisation',
      'System Verification & Testing',
      'Cisco Switching & Routing',
      'NTLite OS Imaging & Deployment',
      'ISO 6 Cleanroom Compliance',
    ],
  },
  {
    category: 'Software & Web Development',
    icon: 'Code2',
    skills: [
      'C# & .NET',
      'JavaScript (ES6+) & Node.js',
      'React & Vite',
      'Tailwind CSS',
      'PowerShell Scripting & Automation',
      'Java & JavaFX',
      'Python',
      'SQLite & REST APIs',
    ],
  },
  {
    category: 'Cloud, DevOps & Tooling',
    icon: 'Cloud',
    skills: [
      'Docker & Containerisation',
      'Microsoft 365 (Azure / Intune)',
      'Software Assurance & Composition Analysis',
      'Git & GitHub Actions',
      'ServiceNow',
      'Datto RMM & Autotask',
      'Visual Studio & JetBrains Rider',
    ],
  },
  {
    category: 'Core Engineering Competencies',
    icon: 'ShieldCheck',
    skills: [
      'Technical Ownership',
      'P1/P2 Incident Escalation',
      'Technical Documentation',
      'Cross-Functional Collaboration',
      'Client & Stakeholder Liaison',
      'Team Leadership',
      'Asset & Device Management',
      'Problem Solving & Precision',
    ],
  },
]
