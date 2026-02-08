import React, { useState } from 'react';
import '../styles/Milestones.css';

function Milestones() {
    const [activeIndex, setActiveIndex] = useState(0);

    const milestones = [
        {
            year: '1543',
            title: 'Heliocentric Revolution',
            description: 'Nicolaus Copernicus publishes "De revolutionibus orbium coelestium", proposing that Earth and other planets revolve around the Sun.',
            impact: 'Fundamentally changed humanity\'s understanding of our place in the cosmos.',
            symbol: '◉',
            wikiLink: 'https://en.wikipedia.org/wiki/Copernican_heliocentrism'
        },
        {
            year: '1610',
            title: 'Galileo\'s Observations',
            description: 'Galileo Galilei uses a telescope to discover Jupiter\'s moons, phases of Venus, and craters on our Moon.',
            impact: 'Provided the first direct evidence supporting the Copernican model.',
            symbol: '◎',
            wikiLink: 'https://en.wikipedia.org/wiki/Galileo_Galilei'
        },
        {
            year: '1687',
            title: 'Laws of Motion & Gravity',
            description: 'Isaac Newton publishes "Principia Mathematica", describing universal gravitation and the three laws of motion.',
            impact: 'Explained planetary orbits and laid the foundation for classical mechanics.',
            symbol: '∞',
            wikiLink: 'https://en.wikipedia.org/wiki/Philosophi%C3%A6_Naturalis_Principia_Mathematica'
        },
        {
            year: '1781',
            title: 'Discovery of Uranus',
            description: 'William Herschel discovers Uranus, the first planet found using a telescope and the first new planet discovered in modern times.',
            impact: 'Doubled the known size of the solar system.',
            symbol: '⊕',
            wikiLink: 'https://en.wikipedia.org/wiki/Discovery_of_Uranus'
        },
        {
            year: '1905',
            title: 'Special Relativity',
            description: 'Albert Einstein publishes his theory of special relativity, introducing E=mc² and revolutionizing physics.',
            impact: 'Changed our understanding of space, time, and the relationship between mass and energy.',
            symbol: 'E',
            wikiLink: 'https://en.wikipedia.org/wiki/Special_relativity'
        },
        {
            year: '1929',
            title: 'Expanding Universe',
            description: 'Edwin Hubble proves that galaxies are moving away from us, demonstrating that the universe is expanding.',
            impact: 'Led to the Big Bang theory and modern cosmology.',
            symbol: '⟐',
            wikiLink: 'https://en.wikipedia.org/wiki/Hubble%27s_law'
        },
        {
            year: '1969',
            title: 'Moon Landing',
            description: 'Apollo 11 successfully lands humans on the Moon. Neil Armstrong and Buzz Aldrin become the first humans to walk on another world.',
            impact: 'Humanity\'s greatest technological achievement and exploration milestone.',
            symbol: '☽',
            wikiLink: 'https://en.wikipedia.org/wiki/Apollo_11'
        },
        {
            year: '1990',
            title: 'Hubble Space Telescope',
            description: 'The Hubble Space Telescope is deployed, providing unprecedented views of distant galaxies and nebulae.',
            impact: 'Transformed our understanding of the universe\'s age, size, and structure.',
            symbol: '◇',
            wikiLink: 'https://en.wikipedia.org/wiki/Hubble_Space_Telescope'
        },
        {
            year: '2019',
            title: 'First Black Hole Image',
            description: 'The Event Horizon Telescope captures the first direct image of a black hole in galaxy M87.',
            impact: 'Confirmed visual predictions of Einstein\'s general relativity.',
            symbol: '●',
            wikiLink: 'https://en.wikipedia.org/wiki/Event_Horizon_Telescope'
        },
        {
            year: '2022',
            title: 'James Webb Telescope',
            description: 'NASA\'s James Webb Space Telescope begins transmitting the deepest and sharpest infrared images of the distant universe.',
            impact: 'Opening new windows into the earliest galaxies and exoplanet atmospheres.',
            symbol: '✧',
            wikiLink: 'https://en.wikipedia.org/wiki/James_Webb_Space_Telescope'
        },
        {
            year: '2023',
            title: 'First Images from JWST',
            description: 'The first full-color images and spectroscopic data from James Webb are released to the world, revealing galaxies from 13.6 billion years ago.',
            impact: 'Revolutionized deep space imaging and opened unprecedented views of the early universe.',
            symbol: '🖼️',
            wikiLink: 'https://en.wikipedia.org/wiki/James_Webb_Space_Telescope'
        },
        {
            year: '2024',
            title: 'Breakthrough in Habitable Exoplanets',
            description: 'Multiple earth-like exoplanets discovered in habitable zones around nearby stars, rekindling hopes for discovering biosignatures.',
            impact: 'Accelerated research into potential extraterrestrial life and habitable worlds.',
            symbol: '🌍',
            wikiLink: 'https://en.wikipedia.org/wiki/Exoplanet'
        },
        {
            year: '1859',
            title: 'Spectroscopy of the Sun',
            description: 'Gustav Kirchhoff and Robert Bunsen pioneer spectroscopy, decoding the composition of celestial objects through light analysis.',
            impact: 'Enabled scientists to determine the chemical composition of stars and distant galaxies.',
            symbol: '📊',
            wikiLink: 'https://en.wikipedia.org/wiki/Spectroscopy'
        },
        {
            year: '1912',
            title: 'Cepheid Variable Stars',
            description: 'Henrietta Leavitt discovers the period-luminosity relationship in Cepheid variables, creating a cosmic distance measurement tool.',
            impact: 'Allowed astronomers to measure distances to distant galaxies and map the universe\'s scale.',
            symbol: '⭐',
            wikiLink: 'https://en.wikipedia.org/wiki/Cepheid_variable'
        },
        {
            year: '1998',
            title: 'Accelerating Universe',
            description: 'Discovery that the universe\'s expansion is accelerating, revealing the existence of dark energy.',
            impact: 'Led to new physics theories and revealed that 95% of the universe is mysterious dark matter and dark energy.',
            symbol: '🌌',
            wikiLink: 'https://en.wikipedia.org/wiki/Accelerating_expansion_of_the_universe'
        },
        {
            year: '2015',
            title: 'Gravitational Waves Detected',
            description: 'LIGO detects gravitational waves from merging black holes, confirming Einstein\'s century-old prediction.',
            impact: 'Opened a new era of gravitational wave astronomy and detection of cosmic events.',
            symbol: '〰️',
            wikiLink: 'https://en.wikipedia.org/wiki/Gravitational_wave'
        }
    ];

    return (
        <section id="milestones" className="milestones-section">
            <div className="milestones-content">
                <div className="milestones-header">
                    <div className="milestones-badge">
                        <span className="badge-dot"></span>
                        <span className="badge-text">Key Moments in Astronomy</span>
                    </div>

                    <h2 className="milestones-title">
                        Historic Milestones
                        <br />
                        <span className="milestones-subtitle-accent">That Shaped Our Understanding</span>
                    </h2>

                    <p className="milestones-description">
                        From ancient observations to modern discoveries, explore the pivotal moments
                        that transformed our understanding of the cosmos.
                    </p>
                </div>

                <div className="milestones-timeline">
                    <div className="timeline-track">
                        {milestones.map((milestone, index) => (
                            <button
                                key={index}
                                className={`timeline-point ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`View ${milestone.year} milestone`}
                            >
                                <span className="timeline-year">{milestone.year}</span>
                                <span className="timeline-dot"></span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="milestone-display">
                    <div className="milestone-card">
                        <div className="milestone-symbol">{milestones[activeIndex].symbol}</div>

                        <div className="milestone-info">
                            <div className="milestone-year-large">{milestones[activeIndex].year}</div>
                            <h3 className="milestone-title">{milestones[activeIndex].title}</h3>
                            <p className="milestone-description">{milestones[activeIndex].description}</p>

                            <div className="milestone-impact">
                                <span className="impact-label">Impact:</span>
                                <p>{milestones[activeIndex].impact}</p>
                            </div>

                            <a
                                href={milestones[activeIndex].wikiLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="milestone-wiki-link"
                            >
                                <span>Learn More on Wikipedia</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="milestones-nav">
                    <button
                        className="nav-btn nav-prev"
                        onClick={() => setActiveIndex(prev => prev === 0 ? milestones.length - 1 : prev - 1)}
                        aria-label="Previous milestone"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    <span className="nav-counter">
                        {String(activeIndex + 1).padStart(2, '0')} / {String(milestones.length).padStart(2, '0')}
                    </span>

                    <button
                        className="nav-btn nav-next"
                        onClick={() => setActiveIndex(prev => prev === milestones.length - 1 ? 0 : prev + 1)}
                        aria-label="Next milestone"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Milestones;
