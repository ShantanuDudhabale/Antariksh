import React from 'react';
import '../styles/EventsHighlight.css';

// Import event images
import meteorShowerImg from '../assets/images/events/meteor_shower.png';
import lunarEclipseImg from '../assets/images/events/lunar_eclipse.png';

function EventsHighlight() {
  const events = [
    {
      date: 'Jan 3-4',
      time: '22:00 - 05:00 UTC',
      title: 'Quadrantids Meteor Shower',
      description: 'One of the best annual meteor showers producing up to 40 meteors per hour at its peak. Best viewing in dark sky conditions after midnight.',
      details: 'The Quadrantids are known for their bright fireball meteors. Radiant point in constellation Boötes.',
      image: meteorShowerImg,
      wikiLink: 'https://en.wikipedia.org/wiki/Quadrantids',
      intensity: 'High',
      visibility: 'Northern Hemisphere'
    },
    {
      date: 'Mar 14',
      time: '06:55 UTC',
      title: 'Total Lunar Eclipse',
      description: 'The Moon will be completely covered by Earth\'s umbral shadow, turning a beautiful red-orange color known as a "Blood Moon".',
      details: 'This total eclipse will be visible from the Americas, Europe, and Africa. Duration of totality approximately 65 minutes.',
      image: lunarEclipseImg,
      wikiLink: 'https://en.wikipedia.org/wiki/March_2025_lunar_eclipse',
      intensity: 'High',
      visibility: 'Americas, Europe, Africa'
    },
    {
      date: 'Mar 20',
      time: '09:01 UTC',
      title: 'March Equinox',
      description: 'The astronomical beginning of spring in the Northern Hemisphere and autumn in the Southern Hemisphere.',
      details: 'Day and night are approximately equal length. The Sun crosses the celestial equator moving northward.',
      image: null,
      wikiLink: 'https://en.wikipedia.org/wiki/March_equinox',
      intensity: 'Low',
      visibility: 'Worldwide'
    },
    {
      date: 'Apr 22-23',
      time: '00:00 - 06:00 UTC',
      title: 'Lyrids Meteor Shower',
      description: 'An average shower producing about 20 meteors per hour at peak. Known for occasional bright dust trails.',
      details: 'Produced by debris from comet C/1861 G1 Thatcher. Radiant point near star Vega in constellation Lyra.',
      image: meteorShowerImg,
      wikiLink: 'https://en.wikipedia.org/wiki/Lyrids',
      intensity: 'Moderate',
      visibility: 'Worldwide'
    },
    {
      date: 'Aug 12-13',
      time: '00:00 - 05:00 UTC',
      title: 'Perseids Meteor Shower',
      description: 'The most popular meteor shower of the year, producing up to 100 meteors per hour at peak with many bright fireballs.',
      details: 'Associated with comet Swift-Tuttle. Best viewed in the Northern Hemisphere from a dark location.',
      image: meteorShowerImg,
      wikiLink: 'https://en.wikipedia.org/wiki/Perseids',
      intensity: 'High',
      visibility: 'Northern Hemisphere'
    },
    {
      date: 'Sep 7',
      time: '18:09 UTC',
      title: 'Total Lunar Eclipse',
      description: 'Another spectacular total lunar eclipse of 2025, with the Moon passing through the center of Earth\'s shadow.',
      details: 'Visible from Europe, Africa, Asia and Australia. Will display the beautiful red-orange Blood Moon effect.',
      image: lunarEclipseImg,
      wikiLink: 'https://en.wikipedia.org/wiki/September_2025_lunar_eclipse',
      intensity: 'High',
      visibility: 'Europe, Africa, Asia, Australia'
    },
    {
      date: 'Oct 21-22',
      time: '00:00 - 05:00 UTC',
      title: 'Orionids Meteor Shower',
      description: 'Produced by debris from Halley\'s Comet, this shower produces about 20 fast meteors per hour.',
      details: 'Meteors radiate from the constellation Orion. Known for bright meteors and persistent trains.',
      image: meteorShowerImg,
      wikiLink: 'https://en.wikipedia.org/wiki/Orionids',
      intensity: 'Moderate',
      visibility: 'Worldwide'
    },
    {
      date: 'Dec 13-14',
      time: '22:00 - 05:00 UTC',
      title: 'Geminids Meteor Shower',
      description: 'The king of meteor showers! Produces up to 150 multicolored meteors per hour at its peak.',
      details: 'Debris from asteroid 3200 Phaethon. One of the few showers visible before midnight.',
      image: meteorShowerImg,
      wikiLink: 'https://en.wikipedia.org/wiki/Geminids',
      intensity: 'High',
      visibility: 'Worldwide'
    }
  ];


  return (
    <section id="events" className="events-highlight">
      {/* Cosmic background effect matching hero */}
      <div className="events-background">
        <div className="events-nebula events-nebula-1"></div>
        <div className="events-nebula events-nebula-2"></div>
      </div>

      <div className="events-content">
        <div className="events-header">
          <div className="events-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">2025 Astronomical Calendar</span>
          </div>

          <h2 className="events-title">
            Celestial Events
            <br />
            <span className="events-subtitle-accent">Worth Observing</span>
          </h2>

          <p className="events-description">
            Mark your calendar for these remarkable astronomical phenomena. From meteor showers
            to eclipses, these events offer unique opportunities for observation and discovery.
          </p>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <div
              key={index}
              className="event-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {event.image ? (
                <div className="event-image-container">
                  <img src={event.image} alt={event.title} className="event-image" loading="lazy" />
                </div>
              ) : (
                <div className="event-symbol">◉</div>
              )}

              <div className="event-header">
                <div className="event-date-time">
                  <div className="event-date">{event.date}</div>
                  <div className="event-time">{event.time}</div>
                </div>

                <div className="event-meta">
                  <span className={`event-intensity intensity-${event.intensity.toLowerCase()}`}>
                    {event.intensity}
                  </span>
                </div>
              </div>

              <h3 className="event-title">{event.title}</h3>

              <p className="event-description">{event.description}</p>

              <div className="event-details">
                <div className="event-visibility">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>{event.visibility}</span>
                </div>
              </div>

              <a
                href={event.wikiLink}
                target="_blank"
                rel="noopener noreferrer"
                className="event-wiki-link"
              >
                <span>Learn More</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="events-cta">
          <p className="cta-text">Want to stay updated on astronomical events?</p>
          <button className="events-cta-btn">
            Join Our Newsletter
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default EventsHighlight;