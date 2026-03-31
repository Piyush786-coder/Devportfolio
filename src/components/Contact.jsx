import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
      alert('Email is not configured. Add VITE_EMAILJS_* variables to your .env file.');
      return;
    }

    setStatus('sending');
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        alert('Message Sent Successfully!');
        formRef.current?.reset();
        setStatus('idle');
      })
      .catch((err) => {
        console.error(err);
        alert('Failed to send message.');
        setStatus('idle');
      });
  };

  return (
    <section id="contacts" className="contact-section">
      <div className="contact-left">
        <h2>Get in Touch</h2>
        <p>
          I love turning ideas into real-world digital solutions. Whether it&apos;s a startup concept, a web platform, or
          a collaboration project — I&apos;m always excited to build, learn, and innovate. Let&apos;s create something
          meaningful.
        </p>

        <div className="contact-card">
          <div className="icon-box">📧</div>
          <div>
            <span>Email</span>
            <h4>jhap54862@gmail.com</h4>
          </div>
        </div>

        <div className="contact-card">
          <div className="icon-box">📞</div>
          <div>
            <span>Phone</span>
            <h4>+91 6388828392</h4>
          </div>
        </div>

        <div className="contact-card">
          <div className="icon-box">📍</div>
          <div>
            <span>Location</span>
            <h4>Kanpur, Uttar Pradesh, India</h4>
          </div>
        </div>

        <div className="social-icons">
          <a href="https://github.com/Piyush786-coder" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width={40} height={40} />
          </a>
          <a href="https://www.linkedin.com/in/piyush-jha-7bb199291" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width={40} height={40} />
          </a>
          <a href="mailto:jhap54862@gmail.com">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Email" width={40} height={40} />
          </a>
        </div>
      </div>

      <div className="contact-right">
        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="from_name" placeholder="Your Name" required autoComplete="name" />
          <input type="email" name="from_email" placeholder="Email Address" required autoComplete="email" />
          <input type="text" name="subject" placeholder="Subject *" required />
          <textarea name="message" placeholder="Your Message" required rows={6} />
          <button type="submit" className="send-btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
