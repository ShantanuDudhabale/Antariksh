import React from 'react';
import '../styles/FeaturesShowcase.css';

function FeaturesShowcase() {
  const features = [
    {
      title: 'Monthly Stargazing',
      description: 'Join us for monthly observing sessions through powerful telescopes.'
    },
    {
      title: 'Workshops & Education',
      description: 'Learn astrophysics, cosmology, and telescope mechanics from experts.'
    },
    {
      title: 'Research Collaboration',
      description: 'Contribute to real astronomical research projects and global databases.'
    }
  ];

  return (
    <section id="features" className="features-showcase">
      <div className="features-content">
        <div className="features-header">
          <h2 className="features-title">Our Services</h2>
          <p className="features-subtitle">Explore what we offer to our community</p>
        </div>

        <div className="features-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="features-cta">
          <button className="btn-primary">Learn More</button>
          <button className="btn-secondary">Explore All</button>
        </div>
      </div>
    </section>
  );
}

export default FeaturesShowcase;
