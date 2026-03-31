const RESUME_PATH = '/image/dev_resume%20(1).pdf';

export default function Hero() {
  return (
    <section id="home" className="hero-section home-section">
      <div className="hero-left">
        <div className="badge">👋 Hello, I&apos;m</div>

        <h1>
          Piyush <br />
          <span>Jha</span>
        </h1>

        <h2 className="typing-role">Software Developer</h2>

        <p>
          An aspiring Software Developer with strong fundamentals in full-stack web development and application design.
          Passionate about building scalable, clean, and efficient digital solutions.
        </p>

        <div className="hero-buttons">
          <a href="#contacts" className="primary-btn">
            Get In Touch
          </a>
          <a href={RESUME_PATH} download className="secondary-btn">
            Download CV
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src="/image/Profile.jpeg" alt="Piyush Jha" width={350} height={350} />
      </div>
    </section>
  );
}
