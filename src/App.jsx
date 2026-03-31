import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioHighlights from './components/PortfolioHighlights';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';
import RevealOnScroll from './components/RevealOnScroll';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <RevealOnScroll>
          <Hero />
        </RevealOnScroll>
        <RevealOnScroll>
          <PortfolioHighlights />
        </RevealOnScroll>
        <RevealOnScroll>
          <Skills />
        </RevealOnScroll>
        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>
        <RevealOnScroll>
          <Certificates />
        </RevealOnScroll>
        <RevealOnScroll>
          <Resume />
        </RevealOnScroll>
        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
      </main>
    </>
  );
}
