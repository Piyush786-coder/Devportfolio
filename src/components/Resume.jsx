const RESUME_PATH = '/image/dev_resume%20(1).pdf';

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-header">
        <h2>Resume</h2>
        <div className="underline" />
        <p>Download my resume or view my professional journey below</p>

        <div className="resume-buttons">
          <a href={RESUME_PATH} download className="primary-btn">
            ⬇ Download Resume
          </a>
          <a href={RESUME_PATH} target="_blank" rel="noreferrer" className="secondary-btn">
            👁 Quick View
          </a>
        </div>
      </div>

      <div className="resume-content">
        <div className="resume-card">
          <div className="card-header blue">🎓 Education</div>
          <div className="timeline">
            <span className="dot" />
            <span className="date">2023 – Present</span>
            <h3>B.Tech in Computer Science and Engineering</h3>
            <p>Axis Institute of Technology & Management (Affiliated to AKTU)</p>
            <p>CGPA: 8.0 / 10</p>
          </div>
        </div>

        <div className="resume-card">
          <div className="card-header green">💼 Experience</div>
          <div className="timeline">
            <span className="dot green-dot" />
            <span className="date green-text">07/2025 – 10/2025</span>
            <h3>Web Development learning</h3>
            <p>Softpro Pvt.limited</p>
            <ul>
              <li>Developed a fully responsive blog website using HTML, CSS & JavaScript.</li>
              <li>Built scalable UI components with modern styling techniques.</li>
              <li>Improved performance and responsiveness across devices.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
