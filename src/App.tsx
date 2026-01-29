import { motion } from 'framer-motion';

const techBadges = [
   'Java',
  'C',
  'SQL',
  'Data Structures',
  'JavaScript',
  'React.js',
  'HTML',
  'CSS'
];

const projects = [
  {
    title: 'Personal Portfolio Website',
    stack: ['React', 'Tailwind', 'Vercel'],
    description:
      'Responsive single-page portfolio to showcase projects, skills, and experience with smooth animations and modern UI.',
    highlight: 'Optimized for fast load times and mobile-first experience.'
  },
  {
    title: 'React Blog Application',
    stack: ['React', 'JavaScript'],
    description:
      'Simple blog interface using reusable components, mock data, and client-side routing concepts.',
    highlight: 'Focused on component reusability and clean UI for reading articles.'
  }
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, amount: 0.4 }
});

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <div className="pointer-events-none fixed inset-0 flex justify-center opacity-60">
        <div className="h-[360px] w-[480px] bg-primary-500/30 blur-[140px]" />
      </div>

      <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500 ring-1 ring-primary-500/40 shadow-glow shadow-primary-500/40">
              <span className="text-lg font-semibold">AT</span>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                Portfolio
              </p>
              <p className="text-sm text-slate-200">Abel Takele</p>
            </div>
          </div>

          <nav className="hidden gap-6 text-xs font-medium text-slate-300 md:flex">
            <a href="#about" className="hover:text-primary-500 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-primary-500 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-primary-500 transition-colors">
              Projects
            </a>
            <a href="#education" className="hover:text-primary-500 transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-primary-500 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex max-w-5xl flex-col gap-10 px-4 py-10 md:px-6 md:py-12">
        {/* Hero */}
        <motion.section
          {...fadeUp(0.05)}
          className="glass-panel relative overflow-hidden p-6 md:p-8"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-500/30 blur-3xl" />
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4 md:max-w-lg">
              <p className="section-title">Computer Science Student</p>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 bg-clip-text text-transparent">
                  Abel Takele
                </span>
              </h1>
              <p className="text-sm text-slate-300 md:text-base">
              Computer Science student with a strong foundation in Java and C, object-oriented
              programming, and core computer science concepts, with experience building
              web interfaces using React and modern tooling.

              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-2 text-xs font-medium text-slate-950 shadow-glow shadow-primary-500/50 transition hover:bg-primary-600"
                >
                  View Projects
                  <span className="text-base">↗</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-primary-500/60 hover:text-primary-300"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative mt-4 md:mt-0"
            >
              <div className="glass-panel relative flex h-44 w-full flex-col justify-between overflow-hidden rounded-3xl border-slate-700/80 bg-slate-900/90 p-4 shadow-xl md:h-52 md:w-72">
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-300">
                    Open to Internships
                  </span>
                  <span className="text-slate-400">Software Engineering</span>
                </div>
                <div>
                 <p className="text-sm text-slate-300 md:text-base">
                  Computer Science student with a strong foundation in Java, object-oriented
                    programming, and core computer science concepts, with experience building
                   web interfaces using React.
          </p>
                </div>
                <div className="flex items-center justify-between text-[0.65rem] text-slate-400">
                  <span>Toronto, Ontario</span>
                  
                </div>
                <div className="pointer-events-none absolute -bottom-8 right-4 h-16 w-16 rounded-full bg-primary-500/40 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Grid sections */}
        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
          <motion.section
            id="about"
            {...fadeUp(0.1)}
            className="glass-panel p-6 md:p-7"
          >
            <p className="section-title">Profile</p>
            <h2 className="mb-3 text-lg font-semibold text-slate-100">
              Computer Science Student · Software Developer
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              I&apos;m an undergraduate Computer Science student with a strong foundation
              in Java programming, object-oriented design, and core software engineering
              principles. I also have experience building responsive web interfaces using
              React and Tailwind CSS as supporting tools.
            </p>
          </motion.section>

          <motion.section
            {...fadeUp(0.15)}
            className="glass-panel flex flex-col gap-4 p-6 md:p-7"
          >
            <p className="section-title">Contact</p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-slate-400">Phone:</span>{' '}
                <span className="font-medium text-slate-100">437-974-5796</span>
              </p>
              <p>
                <span className="text-slate-400">Email:</span>{' '}
                <a
                  href="mailto:Abelaab141@gmail.com"
                  className="font-medium text-primary-400 hover:text-primary-300"
                >
                  Abelaab141@gmail.com
                </a>
              </p>
            </div>

            <div className="mt-2 grid grid-cols-1 gap-2 text-xs md:grid-cols-2">
              <a
                href="https://www.linkedin.com/in/abel-takele-985409216"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-slate-700/80 bg-slate-900/60 px-3 py-2 transition hover:border-primary-500/70 hover:text-primary-200"
              >
                <span>LinkedIn</span>
                <span className="text-slate-400">/abel-takele-985409216</span>
              </a>
              <a
                href="https://github.com/abel-takele"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-slate-700/80 bg-slate-900/60 px-3 py-2 transition hover:border-primary-500/70 hover:text-primary-200"
              >
                <span>GitHub</span>
                <span className="text-slate-400">@abel-takele</span>
              </a>
              <a
                href="https://abel-takele/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-slate-700/80 bg-slate-900/60 px-3 py-2 transition hover:border-primary-500/70 hover:text-primary-200"
              >
                <span>Portfolio</span>
                <span className="text-slate-400">abel-takele</span>
              </a>
            </div>
          </motion.section>
        </div>

        {/* Skills & Interests */}
        <motion.section
          id="skills"
          {...fadeUp(0.18)}
          className="glass-panel grid gap-6 p-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] md:p-7"
        >
          <div>
            <p className="section-title">Technical Skills</p>
            <h2 className="mb-3 text-lg font-semibold text-slate-100">
              Technologies & Concepts
            </h2>
            <div className="flex flex-wrap gap-2">
              {techBadges.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-xs text-slate-100 shadow-sm shadow-slate-900/60"
                >
                  <span className="mr-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="mt-4 grid gap-3 text-xs text-slate-300 md:grid-cols-2">
              <div>
                <p className="font-semibold text-slate-200">Concepts</p>
                <p>Component-based architecture, basic OOP, SDLC fundamentals.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-200">Tools & Platforms</p>
                <p>Git, GitHub, VS Code, Vercel deployment.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
        
            <div>
              <p className="section-title">Activities & Interests</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-300">
                 <li>Java and C programming</li>
                 <li>Backend and database fundamentals</li>
                <li>Learning new frontend technologies</li>
                <li>Tech blogs and developer communities</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          {...fadeUp(0.2)}
          className="glass-panel p-6 md:p-7"
        >
          <p className="section-title">Projects</p>
          <h2 className="mb-4 text-lg font-semibold text-slate-100">
            Selected Work
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.05 * index,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-lg shadow-slate-950/80"
              >
                <div className="pointer-events-none absolute -right-10 top-0 h-24 w-24 rounded-full bg-primary-500/20 blur-2xl transition group-hover:bg-accent-500/25" />
                <h3 className="mb-1 text-sm font-semibold text-slate-100">
                  {project.title}
                </h3>
                <p className="mb-2 text-[0.74rem] uppercase tracking-[0.2em] text-slate-400">
                  {project.stack.join(' · ')}
                </p>
                <p className="mb-2 text-xs text-slate-300">{project.description}</p>
                <p className="text-[0.7rem] text-primary-300">
                  {project.highlight}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Education & timeline */}
        <motion.section
          id="education"
          {...fadeUp(0.22)}
          className="glass-panel grid gap-6 p-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] md:p-7"
        >
          <div>
            <p className="section-title">Education</p>
            <h2 className="mb-2 text-lg font-semibold text-slate-100">
              Bachelor&apos;s Degree in Computer Science
            </h2>
            <p className="text-sm text-slate-300">
              York University  · Class of 2027
            </p>
            <p className="mt-2 text-xs text-slate-400">Relevant courses and core CS foundations</p>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <p className="font-semibold text-slate-200">Relevant Coursework</p>
              <ul className="list-disc space-y-1 pl-4">
                <li>Data Structures and Algorithms</li>
                <li>Object-Oriented Programming (Java)</li>
                <li>Database Systems</li>
                <li>SQL & Relational Databases</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3 text-xs text-slate-300">
            <p className="section-title">Focus Areas</p>
            <p>
              Strengthening core computer science skills including Java programming,
              data structures, algorithms, and software design principles.
            </p>
            <p>
              Interested in software engineering internships where I can contribute
              to real-world systems, learn from experienced engineers, and grow as a
              developer.
            </p>
          </div>
        </motion.section>

        {/* Contact footer */}
        <motion.section
          id="contact"
          {...fadeUp(0.25)}
          className="mb-6 flex flex-col items-center gap-3 text-center text-sm text-slate-300"
        >
          <p className="section-title">Let&apos;s Connect</p>
          <p>
            I&apos;m actively looking for software engineering internship opportunities
            where I can learn, build, and contribute to real-world systems.
          </p>
          <a
            href="mailto:Abelaab141@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-2 text-xs font-medium text-slate-950 shadow-glow shadow-primary-500/50 transition hover:bg-primary-600"
          >
            Email Me
            <span>✉️</span>
          </a>
        </motion.section>
      </main>
    </div>
  );
}

export default App;


