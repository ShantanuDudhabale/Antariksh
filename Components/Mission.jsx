'use client';

import React from 'react';
import '../styles/Mission.css';

function Mission() {
  const missions = [
    {
      title: 'Discover',
      description: 'Uncover new celestial objects, phenomena, and insights about the universe through continuous observation and analysis.',
      points: ['Meteor shower tracking', 'Galaxy mapping', 'Exoplanet detection']
    },
    {
      title: 'Educate',
      description: 'Empower students and the public with knowledge about astronomy, space science, and the wonders of the cosmos.',
      points: ['Monthly workshops', 'School programs', 'Public observatories']
    },
    {
      title: 'Collaborate',
      description: 'Partner with international research institutions and contribute data to global astronomical databases.',
      points: ['Research partnerships', 'Data sharing', 'Joint expeditions']
    }
  ];

  return (
    <section id="mission" className="mission-section">
      <div className="mission-content">
        <div className="mission-header">
          <h2 className="mission-title">Our Core Mission</h2>
          <p className="mission-subtitle">Three pillars of astronomical excellence</p>
        </div>

        <div className="mission-grid">
          {missions.map((mission, index) => (
            <div key={index} className="mission-card">
              <div className="mission-number">{String(index + 1).padStart(2, '0')}</div>
              <h3>{mission.title}</h3>
              <p className="mission-description">{mission.description}</p>
              <ul className="mission-points">
                {mission.points.map((point, idx) => (
                  <li key={idx}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mission-cta">
          <p>Join thousands of astronomy enthusiasts exploring the cosmos</p>
          <button className="btn-primary">Become a Member</button>
        </div>
      </div>
    </section>
  );
}

export default Mission;
