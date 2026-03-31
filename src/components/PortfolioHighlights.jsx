const HIGHLIGHTS = [
  {
    icon: '✨',
    title: 'Clean UI Design',
    description: 'Polished, consistent visuals with clear hierarchy and attention to detail.',
  },
  {
    icon: '📐',
    title: 'Responsive Layout',
    description: 'Layouts that adapt smoothly across phones, tablets, and desktops.',
  },
  {
    icon: '⚡',
    title: 'Fast Performance',
    description: 'Optimized assets and structure for quick load and smooth interaction.',
  },
  {
    icon: '🧩',
    title: 'Modern Tech Stack',
    description: 'Built with up-to-date tools and practices for maintainable, scalable work.',
  },
  {
    icon: '🤝',
    title: 'User Friendly Experience',
    description: 'Clear navigation and readable content so every visit feels effortless.',
  },
];

export default function PortfolioHighlights() {
  return (
    <section id="highlights" className="highlights-section" aria-labelledby="highlights-heading">
      <h2 id="highlights-heading" className="project-heading">
        Portfolio Highlights
      </h2>
      <div className="highlights-grid">
        {HIGHLIGHTS.map((item) => (
          <article key={item.title} className="highlight-card">
            <div className="icon-box highlight-card__icon" aria-hidden>
              {item.icon}
            </div>
            <h3 className="highlight-card__title">{item.title}</h3>
            <p className="highlight-card__text">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
