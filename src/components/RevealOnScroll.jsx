import { useRef, useState, useLayoutEffect } from 'react';

/**
 * Wraps block content; fades in and slides up slightly once when scrolled into view.
 */
export default function RevealOnScroll({ children, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const show = () => {
      setVisible(true);
    };

    const alreadyInView = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < vh * 0.92 && rect.bottom > 8;
    };

    if (alreadyInView()) {
      show();
      return undefined;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          obs.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll${visible ? ' reveal-on-scroll--visible' : ''}${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  );
}
