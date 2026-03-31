const SKILLS = [
  { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Java (Basics)', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
];

const EXTRA = [
  'REST API Design',
  'Data Structures',
  'Problem Solving',
  'Scalable Architecture',
  'Deployment',
  'Version Control',
  'Responsive Design',
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-left">
        <div className="skills-icon-grid">
          {SKILLS.map((s) => (
            <div key={s.name} className="skill skill--grid" data-name={s.name}>
              <img src={s.src} alt="" width={48} height={48} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="skills-right">
        <h2>Skills & Technologies</h2>
        <div className="underline" />
        <p>
          Interactive skill cloud showcasing the technologies I work with. I focus on building scalable, high-performance
          and user-friendly web applications using modern development tools and frameworks.
        </p>
        <div className="extra-skills">
          {EXTRA.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
