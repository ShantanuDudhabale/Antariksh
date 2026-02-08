import React, { useState } from 'react';
import '../styles/TimelineCard.css';

function TimelineCard({ event, index, isVisible }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div
      id={event.id}
      className={`timeline-card ${isLeft ? 'left' : 'right'} ${isVisible ? 'visible' : ''} ${
        isExpanded ? 'expanded' : ''
      }`}
    >
      <div className="card-dot" style={{ backgroundColor: event.color }}></div>

      <div className="card-content" style={{ borderLeftColor: event.color }}>
        <div className="card-header">
          <div className="card-year-badge" style={{ backgroundColor: event.color }}>
            <span className="year">{event.year}</span>
            <span className="era">{event.era}</span>
          </div>
          <div className="card-icon">{event.icon}</div>
        </div>

        <h3 className="card-title">{event.title}</h3>

        <p className="card-description">{event.description}</p>

        <div className="card-tags">
          {event.tags.map((tag, i) => (
            <span key={i} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <button className="card-expand-btn" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Show Less' : 'Learn More'}
        </button>
      </div>
    </div>
  );
}

export default TimelineCard;
