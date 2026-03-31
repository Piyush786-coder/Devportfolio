const ITEMS = [
  { img: '/Certificates/android1.jpg', href: '/Certificates/googleandroid.pdf' },
  { img: '/Certificates/python.jpg', href: '/Certificates/Microsoft_python.pdf' },
  { img: '/Certificates/mongo.jpg', href: '/Certificates/mongodb.pdf' },
  { img: '/Certificates/hack.jpg', href: '/Certificates/yukti1.0.pdf' },
];

export default function Certificates() {
  return (
    <section id="certificates">
      <h2 className="project-heading">Certificates</h2>
      <div className="project-container cert-grid">
        {ITEMS.map((c, i) => (
          <div key={c.href} className="project-card cert-card">
            <img src={c.img} alt={`Certificate ${i + 1}`} className="project-img" width={800} height={300} loading="lazy" />
            <a href={c.href} className="cert-btn" target="_blank" rel="noreferrer">
              Open Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
