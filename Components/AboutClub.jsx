'use client';

import React from 'react';
import '../styles/AboutClub.css';

function AboutClub() {
  return (
    <section id="about" className="about-club">
      <div className="about-content">
        <div className="about-header">
          <h2 className="about-title">About Antariksh Club</h2>
          <p className="about-subtitle">Advancing Astronomical Research and Education</p>
        </div>

        <div className="about-description">
          <p>
            The Antariksh Club is a premier institution dedicated to advancing astronomical research and education. 
            We explore the cosmos through rigorous observation, scientific analysis, and collaboration with the global 
            scientific community. Our mission is to unlock the mysteries of the universe and inspire the next generation 
            of astronomers and space enthusiasts.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="card-background">
              <div className="card-glow"></div>
            </div>
            <div className="card-icon-wrapper">
              <svg className="card-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="telescopeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#0ea5e9', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#06b6d4', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="url(#telescopeGrad)" opacity="0.1"/>
                <path d="M50 20 L60 35 L50 38 L40 35 Z" fill="currentColor"/>
                <rect x="45" y="38" width="10" height="30" fill="currentColor"/>
                <circle cx="50" cy="72" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                <line x1="50" y1="80" x2="50" y2="88" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Research & Observation</h3>
            <p>Conduct advanced astronomical research using state-of-the-art telescopes and equipment to study celestial objects and phenomena.</p>
          </div>

          <div className="about-card">
            <div className="card-background">
              <div className="card-glow"></div>
            </div>
            <div className="card-icon-wrapper">
              <svg className="card-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#7c3aed', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <rect x="25" y="20" width="50" height="60" rx="2" fill="url(#bookGrad)" opacity="0.1"/>
                <path d="M50 20 L50 80" stroke="currentColor" strokeWidth="2"/>
                <line x1="30" y1="30" x2="45" y2="30" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="30" y1="40" x2="45" y2="40" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="30" y1="50" x2="45" y2="50" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="30" y1="60" x2="45" y2="60" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="55" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="55" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="55" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="55" y1="60" x2="70" y2="60" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3>Education & Outreach</h3>
            <p>Provide comprehensive astronomy education through workshops, seminars, and public engagement programs for all skill levels.</p>
          </div>

          <div className="about-card">
            <div className="card-background">
              <div className="card-glow"></div>
            </div>
            <div className="card-icon-wrapper">
              <svg className="card-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="galaxyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#0891b2', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="35" fill="none" stroke="url(#galaxyGrad)" strokeWidth="1.5"/>
                <circle cx="50" cy="50" r="28" fill="none" stroke="url(#galaxyGrad)" strokeWidth="1" opacity="0.6"/>
                <circle cx="50" cy="50" r="20" fill="url(#galaxyGrad)" opacity="0.2"/>
                <circle cx="35" cy="45" r="3" fill="currentColor"/>
                <circle cx="65" cy="52" r="2.5" fill="currentColor"/>
                <circle cx="50" cy="30" r="2" fill="currentColor"/>
                <circle cx="58" cy="65" r="2.5" fill="currentColor"/>
              </svg>
            </div>
            <h3>Scientific Discovery</h3>
            <p>Contribute to global astronomical databases and participate in international research collaborations to advance our understanding of space.</p>
          </div>

          <div className="about-card">
            <div className="card-background">
              <div className="card-glow"></div>
            </div>
            <div className="card-icon-wrapper">
              <svg className="card-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="communityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#f43f5e', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#e11d48', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <circle cx="35" cy="35" r="12" fill="url(#communityGrad)" opacity="0.2"/>
                <circle cx="35" cy="35" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="65" cy="35" r="12" fill="url(#communityGrad)" opacity="0.2"/>
                <circle cx="65" cy="35" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="50" cy="60" r="12" fill="url(#communityGrad)" opacity="0.2"/>
                <circle cx="50" cy="60" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="42" y1="42" x2="58" y2="52" stroke="currentColor" strokeWidth="1"/>
                <line x1="58" y1="42" x2="42" y2="52" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </div>
            <h3>Community Building</h3>
            <p>Foster a passionate community of astronomers, researchers, and enthusiasts who share a common love for exploring the universe.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutClub;
