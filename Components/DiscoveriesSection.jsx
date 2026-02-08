import React, { useState } from 'react';
import '../styles/DiscoveriesSection.css';

// Import available images
import jupiterImg from '../assets/images/planets/jupiter.png';
import saturnImg from '../assets/images/planets/saturn.png';
import marsImg from '../assets/images/planets/mars.png';
import earthImg from '../assets/images/planets/earth.png';
import meteorImg from '../assets/images/events/meteor_shower.png';
import moonImg from '../assets/images/events/lunar_eclipse.png';

function DiscoveriesSection() {
  const [selectedEra, setSelectedEra] = useState('modern');
  const [selectedDiscovery, setSelectedDiscovery] = useState(null);

  // Organized by era for better navigation
  const discoveries = {
    renaissance: [
      {
        year: '1543',
        title: 'Heliocentric Model',
        description: 'Nicolaus Copernicus publishes his revolutionary theory placing the Sun at the center of the universe, fundamentally changing our cosmic perspective.',
        image: earthImg,
        wiki: 'https://en.wikipedia.org/wiki/Heliocentrism',
        category: 'Theory',
        featured: true
      },
      {
        year: '1610',
        title: 'Galilean Moons',
        description: 'Galileo discovers four moons orbiting Jupiter, providing crucial evidence against the Earth-centered model of the universe.',
        image: jupiterImg,
        wiki: 'https://en.wikipedia.org/wiki/Galilean_moons',
        category: 'Discovery',
        featured: true
      },
      {
        year: '1655',
        title: 'Rings of Saturn',
        description: 'Christiaan Huygens correctly identifies Saturn\'s rings, solving a mystery that had puzzled astronomers including Galileo.',
        image: saturnImg,
        wiki: 'https://en.wikipedia.org/wiki/Rings_of_Saturn',
        category: 'Discovery'
      },
      {
        year: '1666',
        title: 'Universal Gravitation',
        description: 'Isaac Newton formulates the law of universal gravitation, explaining planetary motion and laying the foundation for celestial mechanics.',
        image: meteorImg,
        wiki: 'https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation',
        category: 'Theory',
        featured: true
      }
    ],
    enlightenment: [
      {
        year: '1781',
        title: 'Discovery of Uranus',
        description: 'William Herschel discovers Uranus, the first planet found using a telescope, expanding the known solar system.',
        image: jupiterImg,
        wiki: 'https://en.wikipedia.org/wiki/Uranus',
        category: 'Discovery'
      },
      {
        year: '1846',
        title: 'Neptune Predicted',
        description: 'Neptune discovered through mathematical prediction before observation, validating Newton\'s laws and the power of theoretical astronomy.',
        image: saturnImg,
        wiki: 'https://en.wikipedia.org/wiki/Neptune',
        category: 'Discovery',
        featured: true
      }
    ],
    modern: [
      {
        year: '1929',
        title: 'Expanding Universe',
        description: 'Edwin Hubble proves the universe is expanding, revolutionizing cosmology and leading to the Big Bang theory.',
        image: earthImg,
        wiki: 'https://en.wikipedia.org/wiki/Hubble%27s_law',
        category: 'Theory',
        featured: true
      },
      {
        year: '1969',
        title: 'Moon Landing',
        description: 'Apollo 11 successfully lands humans on the Moon. Neil Armstrong\'s first steps represent humanity\'s greatest achievement in space exploration.',
        image: moonImg,
        wiki: 'https://en.wikipedia.org/wiki/Apollo_11',
        category: 'Human Spaceflight',
        featured: true
      },
      {
        year: '1990',
        title: 'Hubble Space Telescope',
        description: 'NASA launches the Hubble Space Telescope, providing unprecedented views of distant galaxies and revolutionizing our understanding of the universe.',
        image: jupiterImg,
        wiki: 'https://en.wikipedia.org/wiki/Hubble_Space_Telescope',
        category: 'Technology'
      }
    ],
    contemporary: [
      {
        year: '2015',
        title: 'Water on Mars',
        description: 'NASA confirms evidence of liquid water flowing on present-day Mars, dramatically increasing the potential for finding life beyond Earth.',
        image: marsImg,
        wiki: 'https://en.wikipedia.org/wiki/Water_on_Mars',
        category: 'Discovery',
        featured: true
      },
      {
        year: '2016',
        title: 'Gravitational Waves',
        description: 'First direct detection of gravitational waves confirms Einstein\'s century-old prediction and opens a new window to observe the universe.',
        image: meteorImg,
        wiki: 'https://en.wikipedia.org/wiki/First_observation_of_gravitational_waves',
        category: 'Physics',
        featured: true
      },
      {
        year: '2019',
        title: 'First Black Hole Image',
        description: 'Event Horizon Telescope captures the first image of a black hole\'s shadow in the M87 galaxy, making the invisible visible.',
        image: moonImg,
        wiki: 'https://en.wikipedia.org/wiki/Event_Horizon_Telescope',
        category: 'Discovery',
        featured: true
      },
      {
        year: '2022',
        title: 'James Webb Images',
        description: 'JWST releases its first images, revealing the universe in unprecedented infrared detail and peering deeper into space than ever before.',
        image: jupiterImg,
        wiki: 'https://en.wikipedia.org/wiki/James_Webb_Space_Telescope',
        category: 'Technology'
      }
    ]
  };

  const eras = [
    { id: 'renaissance', label: 'Early Discovery', period: '1543-1700' },
    { id: 'enlightenment', label: 'Enlightenment', period: '1701-1900' },
    { id: 'modern', label: 'Modern Era', period: '1901-1989' },
    { id: 'contemporary', label: 'Contemporary', period: '1990-Present' }
  ];

  const currentDiscoveries = discoveries[selectedEra];
  const featuredDiscoveries = currentDiscoveries.filter(d => d.featured);
  const otherDiscoveries = currentDiscoveries.filter(d => !d.featured);

  return (
    <section className="discoveries-section">
      <div className="discoveries-container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span>Timeline of Discovery</span>
          </div>
          
          <h2 className="section-title">
            Key Milestones
            <br />
            <span className="title-accent">in Astronomical Research</span>
          </h2>
          
          <p className="section-description">
            Navigate through centuries of discovery. Each era represents a fundamental shift 
            in our understanding of the cosmos.
          </p>
        </div>

        {/* Era Timeline Navigation */}
        <div className="era-timeline">
          {eras.map((era, index) => (
            <button
              key={era.id}
              className={`era-button ${selectedEra === era.id ? 'active' : ''}`}
              onClick={() => setSelectedEra(era.id)}
            >
              <span className="era-period">{era.period}</span>
              <span className="era-label">{era.label}</span>
              <div className="era-indicator"></div>
            </button>
          ))}
          <div className="timeline-track"></div>
        </div>

        {/* Featured Discoveries - Large Cards */}
        {featuredDiscoveries.length > 0 && (
          <div className="featured-section">
            <h3 className="featured-title">Major Breakthroughs</h3>
            <div className="featured-grid">
              {featuredDiscoveries.map((discovery, index) => (
                <div 
                  key={index}
                  className="featured-card"
                  onClick={() => setSelectedDiscovery(discovery)}
                >
                  <div className="featured-image">
                    <img src={discovery.image} alt={discovery.title} />
                    <div className="featured-overlay">
                      <span className="featured-year">{discovery.year}</span>
                    </div>
                  </div>
                  <div className="featured-content">
                    <span className="featured-category">{discovery.category}</span>
                    <h4 className="featured-card-title">{discovery.title}</h4>
                    <p className="featured-description">{discovery.description}</p>
                    <a 
                      href={discovery.wiki}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="featured-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Read Full Article
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Discoveries - Compact List */}
        {otherDiscoveries.length > 0 && (
          <div className="other-section">
            <h3 className="other-title">Additional Discoveries</h3>
            <div className="other-list">
              {otherDiscoveries.map((discovery, index) => (
                <div key={index} className="other-item">
                  <div className="other-year">{discovery.year}</div>
                  <div className="other-content">
                    <h5 className="other-item-title">{discovery.title}</h5>
                    <p className="other-description">{discovery.description}</p>
                  </div>
                  <a 
                    href={discovery.wiki}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="other-link"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Helper */}
        <div className="navigation-helper">
          <p>Select a time period above to explore discoveries from different eras</p>
        </div>
      </div>
    </section>
  );
}

export default DiscoveriesSection;