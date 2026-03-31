import { useEffect, useState, useCallback } from 'react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'skills', label: 'Skills' },
  { id: 'project', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'resume', label: 'Resume' },
  { id: 'contacts', label: 'Contact' },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero) return undefined;

    const obs = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry?.isIntersecting ?? true);
      },
      { root: null, threshold: 0, rootMargin: '-80px' }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-hero-hidden', !isHeroVisible);
  }, [isHeroVisible]);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (id) => {
    setActiveId(id);
    closeMenu();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`premium-navbar${menuOpen ? ' is-open' : ''}`} aria-label="Main">
      <div className="nav-container">
        <div className="nav-logo">
          Piyush<span>.dev</span>
        </div>

        <button
          type="button"
          className="nav-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="hamburger" aria-hidden />
        </button>

        <ul id="primary-navigation" className={`nav-links${menuOpen ? ' open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className={`link${activeId === item.id ? ' active' : ''}`}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {menuOpen ? (
        <button type="button" className="nav-backdrop" aria-label="Close menu" onClick={closeMenu} />
      ) : null}
    </nav>
  );
}
