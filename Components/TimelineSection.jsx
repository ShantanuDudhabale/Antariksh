'use client';

import React, { useState, useEffect } from 'react';
import TimelineCard from './TimelineCard';
import '../styles/TimelineSection.css';

function TimelineSection({ scrollY }) {
  const [visibleCards, setVisibleCards] = useState([]);

  const events = [
    {
      id: 1,
      year: '3000 BCE',
      era: 'Ancient Era',
      title: 'Ancient Astronomy Begins',
      description:
        'Ancient civilizations in Mesopotamia, Egypt, and China begin systematic observations of celestial bodies, tracking the sun, moon, and planets for calendars and agriculture.',
      icon: '👁️',
      color: '#9333ea',
      tags: ['Observation', 'Calendars'],
    },
    {
      id: 2,
      year: '1608',
      era: 'Scientific Revolution',
      title: 'Telescope Invented',
      description:
        'Hans Lippershey invents the telescope, and Galileo Galilei improves it, discovering Jupiter\'s moons, Saturn\'s rings, and lunar features.',
      icon: '🔭',
      color: '#0ea5e9',
      tags: ['Innovation', 'Discovery'],
    },
    {
      id: 3,
      year: '1687',
      era: 'Enlightenment',
      title: "Newton's Universal Laws",
      description:
        'Isaac Newton publishes Principia Mathematica, establishing the laws of motion and universal gravitation, revolutionizing our understanding of the cosmos.',
      icon: '⚡',
      color: '#06b6d4',
      tags: ['Theory', 'Physics'],
    },
    {
      id: 4,
      year: '1905',
      era: 'Modern Era',
      title: 'Einstein\'s Relativity',
      description:
        'Albert Einstein develops special relativity, reshaping our understanding of space, time, and gravity.',
      icon: '🌌',
      color: '#7c3aed',
      tags: ['Theory', 'Physics'],
    },
    {
      id: 5,
      year: '1957',
      era: 'Space Age',
      title: 'First Satellite in Orbit',
      description:
        'The Soviet Union launches Sputnik 1, the first artificial satellite, marking the beginning of the space age and the intense space race between superpowers.',
      icon: '🛰️',
      color: '#ec4899',
      tags: ['Space', 'Technology'],
    },
    {
      id: 6,
      year: '1969',
      era: 'Space Age',
      title: 'Moon Landing',
      description:
        'Apollo 11 astronauts Neil Armstrong and Buzz Aldrin land on the moon, achieving humanity\'s greatest space exploration milestone.',
      icon: '🌙',
      color: '#f59e0b',
      tags: ['Achievement', 'Exploration'],
    },
    {
      id: 7,
      year: '1990',
      era: 'Modern Astronomy',
      title: 'Hubble Space Telescope Launched',
      description:
        'The Hubble Space Telescope begins its journey, revealing deep space mysteries and transforming our understanding of the universe\'s scale and history.',
      icon: '🔬',
      color: '#3b82f6',
      tags: ['Technology', 'Discovery'],
    },
    {
      id: 8,
      year: '2021',
      era: 'Modern Era',
      title: 'James Webb Space Telescope Launches',
      description:
        'The most powerful space telescope ever built launches, designed to peer deeper into space and time, revealing the earliest galaxies and exoplanet atmospheres.',
      icon: '🌠',
      color: '#10b981',
      tags: ['Technology', 'Discovery'],
    },
    {
      id: 9,
      year: '2024',
      era: 'Recent Discovery',
      title: 'Breakthrough in Exoplanet Detection',
      description:
        'Scientists discover potentially habitable exoplanets in the habitable zone, bringing us closer to answering the question: Are we alone?',
      icon: '🪐',
      color: '#8b5cf6',
      tags: ['Discovery', 'Habitability'],
    },
    {
      id: 10,
      year: '2023',
      era: 'Modern Era',
      title: 'First Images from James Webb',
      description:
        'NASA releases the first full-color images and spectroscopic data from the James Webb Space Telescope, showcasing galaxies from over 13.6 billion years ago.',
      icon: '🔬',
      color: '#06b6d4',
      tags: ['Imaging', 'Discovery'],
    },
    {
      id: 11,
      year: '2020',
      era: 'Modern Era',
      title: 'First Supermassive Black Hole Imaged',
      description:
        'The Event Horizon Telescope captures the image of M87, a colossal black hole 6.5 billion times the mass of our Sun, confirming Einstein\'s predictions.',
      icon: '●',
      color: '#f43f5e',
      tags: ['Breakthrough', 'Physics'],
    },
    {
      id: 12,
      year: '2012',
      era: 'Modern Era',
      title: 'Discovery of Higgs Boson',
      description:
        'Scientists at CERN discover the Higgs boson particle, confirming the Standard Model of particle physics and its connection to cosmic origins.',
      icon: '⚛️',
      color: '#14b8a6',
      tags: ['Physics', 'Particle'],
    },
    {
      id: 13,
      year: '2008',
      era: 'Modern Era',
      title: 'Kepler Space Telescope Launched',
      description:
        'NASA\'s Kepler mission begins searching for Earth-like exoplanets, discovering over 2,600 confirmed exoplanets during its mission lifespan.',
      icon: '🛰️',
      color: '#a855f7',
      tags: ['Technology', 'Exoplanets'],
    },
    {
      id: 14,
      year: '2003',
      era: 'Modern Era',
      title: 'First Human in Space Anniversary',
      description:
        'Celebration of 50 years since Yuri Gagarin became the first human in space, paving the way for the Space Age and human space exploration.',
      icon: '👨‍🚀',
      color: '#f97316',
      tags: ['Achievement', 'History'],
    },
    {
      id: 15,
      year: '1965',
      era: 'Space Age',
      title: 'First Spacewalk',
      description:
        'Cosmonaut Alexei Leonov performs the first extravehicular activity (spacewalk) from Voskhod 2, opening new possibilities for human space exploration.',
      icon: '🌌',
      color: '#8b5cf6',
      tags: ['Achievement', 'Exploration'],
    },
    {
      id: 16,
      year: '1846',
      era: 'Classical Astronomy',
      title: 'Discovery of Neptune',
      description:
        'Urbain Le Verrier and John Couch Adams predict Neptune\'s existence mathematically, and Johann Galle observes it, validating computational astronomy.',
      icon: '🔵',
      color: '#0ea5e9',
      tags: ['Discovery', 'Planetary'],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, entry.target.id])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.timeline-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="timeline-section">
      <div className="section-header">
        <div className="section-badge">
          <span>⏳ ASTRONOMY THROUGH TIME</span>
        </div>
        <h2 className="section-title">Milestones of Discovery</h2>
        <p className="section-description">
          From ancient stargazers to modern space explorers, trace humanity&apos;s journey through the cosmos
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        <div className="timeline-cards">
          {events.map((event, index) => (
            <TimelineCard
              key={event.id}
              event={event}
              index={index}
              isVisible={visibleCards.includes(String(event.id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;
