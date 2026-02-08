'use client';

import React, { useState } from 'react';
import '../styles/DiscoveryCard.css';

function DiscoveryCard({ id, discovery, index, isVisible }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id={id}
      className={`discovery-card ${isVisible ? 'visible' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--stagger-delay': `${index * 0.1}s`,
        '--card-color': discovery.color,
      }}
    >
      <div className="card-blur-bg"></div>

      <div className="card-header">
        <div className="card-icon-wrapper">
          <span className="card-icon">{discovery.icon}</span>
        </div>
        <span className="card-accent" style={{ backgroundColor: discovery.color }}></span>
      </div>

      <div className="card-body">
        <h3 className="card-main-title">{discovery.title}</h3>
        <p className="card-subtitle">{discovery.subtitle}</p>

        <p className="card-desc">{discovery.description}</p>

        <div className="card-details">
          <span className="detail-badge">{discovery.details}</span>
        </div>

        <div className={`card-expand-content ${isHovered ? 'visible' : ''}`}>
          <button className="explore-btn">
            <span>Explore More</span>
            <span className="arrow">→</span>
          </button>
        </div>
      </div>

      <div className="card-glow" style={{ backgroundColor: discovery.color }}></div>
    </div>
  );
}

export default DiscoveryCard;
