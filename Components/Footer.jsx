import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">ANTARIKSH</span>
              <span className="logo-subtitle">Astronomy Club</span>
            </div>
            <p className="footer-description">
              Exploring the cosmos together, one discovery at a time. Join us in our journey through the
              stars.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                f
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                𝕏
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                📷
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                ▶
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#timeline">Timeline</a>
              </li>
              <li>
                <a href="#discoveries">Discoveries</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:info@antariksh.club">
                  <span>📧</span> info@antariksh.club
                </a>
              </li>
              <li>
                <a href="tel:+12345678901">
                  <span>📱</span> +1 (234) 567-8901
                </a>
              </li>
              <li>
                <span>
                  <span>📍</span> Join us for monthly meetings
                </span>
              </li>
              <li>
                <button className="join-footer-btn">
                  <span>Join Club</span>
                  <span>→</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 Antariksh Astronomy Club. All rights reserved. | "Look up at the stars and not down
            at your feet." - Stephen Hawking
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
