const PROJECTS = [
  {
    img: '/image/project1.png',
    title: 'Snake Game',
    info: 'Classic Snake Game built with HTML, CSS & JS.',
    buttons: [
      { href: 'https://piyush786-coder.github.io/snake-game/', label: 'Play Game', live: true },
      { href: 'https://github.com/Piyush786-coder', label: 'GitHub', live: false },
    ],
  },
  {
    img: '/image/project2.png',
    title: 'Blog Website',
    info: 'Simple blog website built with HTML, CSS & JS.',
    comingSoon: true,
  },
];

export default function Projects() {
  return (
    <section id="project">
      <h2 className="project-heading">My Projects</h2>
      <div className="project-container">
        {PROJECTS.map((p) => (
          <article key={p.title} className="project-card">
            <img src={p.img} alt="" className="project-img" width={800} height={300} loading="lazy" />
            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-info">{p.info}</p>
              <div className="project-btn-grp">
                {p.comingSoon ? (
                  <button type="button" className="project-btn">
                    Coming Soon
                  </button>
                ) : (
                  p.buttons?.map((b) => (
                    <a
                      key={b.label}
                      href={b.href}
                      className={`project-btn${b.live ? ' live' : ''}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {b.label}
                    </a>
                  ))
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
