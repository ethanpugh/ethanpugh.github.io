import { useState, useEffect } from 'react'
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Copy,
  Check,
  Sun,
  Moon,
  Terminal,
  Server,
  Code2,
  Cloud,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Award,
  ChevronRight,
  Sparkles,
  Menu,
  X,
  ArrowUpRight,
  Cpu,
} from 'lucide-react'
import {
  PROFILE,
  EXPERIENCE,
  FEATURED_PROJECTS,
  ARCHIVE_PROJECTS,
  EDUCATION,
  SKILL_CATEGORIES,
} from './data/portfolioData'

const ICON_MAP = {
  Server,
  Code2,
  Cloud,
  ShieldCheck,
}

function ProjectVisualPreview({ project }) {
  return (
    <div className="relative w-full h-56 sm:h-64 bg-slate-900 flex items-center justify-center p-4 overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80 group">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-10 pointer-events-none" />
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className="max-h-full max-w-full object-contain rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
  )
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      return saved ? saved === 'dark' : true
    }
    return true
  })
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2500)
    } catch {
      window.location.href = `mailto:${PROFILE.email}`
    }
  }

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Sticky Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Ethan Pugh Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-sm shadow-sm shadow-teal-500/20 group-hover:scale-105 transition-transform">
              EP
            </div>
            <div>
              <span className="font-bold tracking-tight text-slate-900 dark:text-white block leading-none">
                {PROFILE.name}
              </span>
              <span className="font-mono text-xs text-teal-600 dark:text-teal-400">
                @{PROFILE.username}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/70 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/80 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub (@ethanpugh)"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/80 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/80 transition-colors cursor-pointer"
              aria-label="Toggle colour theme"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/80"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero / About Section */}
        <section
          id="about"
          className="relative overflow-hidden bg-grid-pattern border-b border-slate-200/80 dark:border-slate-800/80"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-teal-500/10 dark:bg-teal-500/15 blur-3xl rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                  <span>{PROFILE.currentRole}</span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    Hi, I&apos;m{' '}
                    <span className="bg-gradient-to-r from-teal-600 to-cyan-500 dark:from-teal-400 dark:to-cyan-300 bg-clip-text text-transparent">
                      {PROFILE.name}
                    </span>
                  </h1>
                  <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
                    {PROFILE.title}
                  </p>
                </div>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                  {PROFILE.summary}
                </p>

                {/* Primary CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-teal-600 hover:bg-teal-500 text-white shadow-sm shadow-teal-600/20 transition-all"
                  >
                    <FolderGit2 className="w-4 h-4" />
                    Explore Projects
                  </a>
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-100 dark:border-slate-800 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    github.com/{PROFILE.username}
                    <ArrowUpRight className="w-4 h-4 text-slate-400" />
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm bg-slate-100 hover:bg-slate-200/80 text-slate-700 dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 transition-all cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-400" />
                        <span>{PROFILE.email}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Profile Card / Terminal Summary */}
              <div className="lg:col-span-4">
                <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-900/5 p-6 space-y-5">
                  <div className="flex items-center gap-4">
                    <img
                      src={PROFILE.avatarUrl}
                      alt={PROFILE.name}
                      className="w-16 h-16 rounded-2xl object-cover ring-2 ring-teal-500/40"
                    />
                    <div>
                      <h2 className="font-bold text-lg text-slate-900 dark:text-white">
                        {PROFILE.name}
                      </h2>
                      <p className="font-mono text-xs text-teal-600 dark:text-teal-400">
                        @{PROFILE.username}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {PROFILE.credentials}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-950 text-slate-200 p-4 font-mono text-xs space-y-2 border border-slate-800">
                    <div className="flex items-center gap-1.5 text-slate-500 pb-1 border-b border-slate-800/80">
                      <Terminal className="w-3.5 h-3.5 text-teal-400" />
                      <span>ethanpugh@portfolio:~</span>
                    </div>
                    <div>
                      <span className="text-teal-400">$</span> whoami
                      <div className="text-slate-300 pl-3">
                        Systems Engineer &amp; Software Developer
                      </div>
                    </div>
                    <div>
                      <span className="text-teal-400">$</span> stack --primary
                      <div className="text-slate-300 pl-3">
                        C# • React • Node/SQLite • Docker • PowerShell
                      </div>
                    </div>
                    <div>
                      <span className="text-teal-400">$</span> education
                      <div className="text-emerald-400 pl-3">
                        BSc Computer Science (1st Class Hons)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-xs text-slate-500 dark:text-slate-400">
                    <a
                      href={PROFILE.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      LinkedIn Profile
                    </a>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="inline-flex items-center gap-1.5 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Highlights Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {PROFILE.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-white/90 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/90 p-5 hover:border-teal-500/40 transition-colors"
                >
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {item.label}
                  </div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {item.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section
          id="experience"
          className="py-16 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">
                  <Briefcase className="w-4 h-4" />
                  Career Progression
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Work Experience
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md">
                Proven track record across defence mission systems, multi-client enterprise operations, and semiconductor cleanroom infrastructure.
              </p>
            </div>

            <div className="space-y-8 relative before:absolute before:top-4 before:bottom-4 before:left-4 sm:before:left-6 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
              {EXPERIENCE.map((job) => (
                <div key={job.id} className="relative pl-11 sm:pl-16">
                  {/* Timeline Node */}
                  <div
                    className={`absolute left-2 sm:left-4 top-6 w-4 h-4 rounded-full border-2 ${
                      job.current
                        ? 'bg-teal-500 border-teal-200 dark:border-teal-900 ring-4 ring-teal-500/20'
                        : 'bg-white dark:bg-slate-900 border-slate-400 dark:border-slate-600'
                    }`}
                  />

                  <div className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 p-6 sm:p-8 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {job.role}
                          </h3>
                          {job.current && (
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-base font-medium text-teal-600 dark:text-teal-400 mt-0.5">
                          {job.company}
                        </p>
                      </div>
                      <span className="font-mono text-xs sm:text-sm px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 self-start sm:self-center shrink-0">
                        {job.period}
                      </span>
                    </div>

                    {/* Role Highlights Grid */}
                    <div className="grid sm:grid-cols-2 gap-4 mt-5">
                      {job.highlights.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/70 p-4"
                        >
                          <div className="font-semibold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                            <ChevronRight className="w-4 h-4 text-teal-500 shrink-0" />
                            <span>{item.title}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed pl-5">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tech / Competency Tags */}
                    <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects & Archive Section */}
        <section
          id="projects"
          className="py-16 sm:py-24 bg-slate-100/60 dark:bg-slate-900/30 border-b border-slate-200/80 dark:border-slate-800/80"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">
                  <Sparkles className="w-4 h-4" />
                  Open Source &amp; Engineering
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Featured Projects
                </h2>
              </div>
              <a
                href={`${PROFILE.github}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
              >
                View all repositories on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* 2x2 Featured Projects Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {FEATURED_PROJECTS.map((project) => (
                <article
                  key={project.id}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-500/40 transition-all flex flex-col"
                >
                  <ProjectVisualPreview project={project} />

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2 text-xs font-mono text-teal-600 dark:text-teal-400">
                        <span>{project.category}</span>
                        <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {project.period}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.description}
                      </p>

                      <ul className="space-y-2 pt-1">
                        {project.highlights.map((bullet) => (
                          <li
                            key={bullet}
                            className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-teal-600 dark:bg-slate-800 dark:hover:bg-teal-600 transition-colors shrink-0"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Compact Project Archive */}
            <div className="mt-14">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-teal-500" />
                  Additional Repositories &amp; University Archive
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {ARCHIVE_PROJECTS.map((item) => (
                  <a
                    key={item.title}
                    href={item.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 hover:border-teal-500/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                          {item.title}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <div className="text-xs font-mono text-teal-600 dark:text-teal-400 mt-1">
                        {item.language} • {item.year}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="py-16 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">
                <GraduationCap className="w-4 h-4" />
                Academic Background
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Education
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {EDUCATION.map((edu, index) => (
                <div
                  key={edu.institution}
                  className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between ${
                    index === 0
                      ? 'lg:col-span-1 bg-gradient-to-b from-teal-500/5 to-transparent bg-white dark:bg-slate-900 border-teal-500/40 shadow-sm'
                      : 'bg-white dark:bg-slate-900/70 border-slate-200/90 dark:border-slate-800/90'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                        {edu.badge}
                      </span>
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                        {edu.period}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {edu.institution}
                      </h3>
                      <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mt-1">
                        {edu.qualification}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      {edu.details.map((row) => (
                        <div
                          key={row.label}
                          className="flex items-center justify-between text-xs sm:text-sm py-1.5 px-3 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200/60 dark:border-slate-800/80"
                        >
                          <span className="text-slate-700 dark:text-slate-300 font-medium">
                            {row.label}
                          </span>
                          <span className="font-mono font-bold text-teal-600 dark:text-teal-400">
                            {row.score}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {edu.notes && (
                    <div className="mt-5 pt-4 border-t border-slate-200/70 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                      <Award className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>{edu.notes}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical & Core Skills Section */}
        <section
          id="skills"
          className="py-16 sm:py-24 bg-slate-100/60 dark:bg-slate-900/30 border-b border-slate-200/80 dark:border-slate-800/80"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">
                <Code2 className="w-4 h-4" />
                Capabilities &amp; Tooling
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Technical &amp; Core Skills
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {SKILL_CATEGORIES.map((group) => {
                const IconComponent = ICON_MAP[group.icon] || Server
                return (
                  <div
                    key={group.category}
                    className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {group.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-100 text-slate-800 dark:bg-slate-800/90 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-teal-500/15 blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-teal-500/15 text-teal-300 border border-teal-500/30">
                  <Mail className="w-3.5 h-3.5" />
                  Get In Touch
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Let&apos;s connect.
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Whether you have a question about my engineering experience, self-hosted projects, or potential opportunities, feel free to reach out via email or connect on GitHub and LinkedIn. References for all experience and education can be provided on request.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-teal-500 hover:bg-teal-400 text-slate-950 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email Me
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-mono text-xs sm:text-sm bg-slate-800/90 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-300">Copied to clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-400" />
                        <span>{PROFILE.email}</span>
                      </>
                    )}
                  </button>

                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm bg-slate-800/90 hover:bg-slate-800 text-white border border-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    @{PROFILE.username}
                  </a>

                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm bg-slate-800/90 hover:bg-slate-800 text-white border border-slate-700 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 dark:border-slate-800/80 py-8 bg-white/50 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {PROFILE.name}
            </span>
            <span>•</span>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono hover:text-teal-600 dark:hover:text-teal-400"
            >
              github.com/{PROFILE.username}
            </a>
          </div>
          <div>
            Built with React, Vite &amp; Tailwind CSS • © {new Date().getFullYear()} {PROFILE.name}
          </div>
        </div>
      </footer>
    </div>
  )
}
