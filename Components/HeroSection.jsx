import React, { useState, useEffect } from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 10,
        y: (e.clientY / window.innerHeight) * 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span className="badge-text">Amateur Astronomers • Big Curiosity</span>
        </div>

        <h1 className="hero-title">
          Exploring the Universe

          <br />
          <span className="subtitle-accent">Through Astronomy</span>
        </h1>

        <p className="hero-description">
          Our Astronomy Club brings together students passionate about space, stars, and science. 
We organize stargazing sessions, workshops, lectures, and research discussions to explore the universe beyond textbooks.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary">Explore Our Activities</button>
          <button className="btn btn-secondary">Connect With Us</button>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL TO CONTINUE</span>
          <div className="scroll-arrow">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
