'use client';
import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import logoImg from '../assets/images/image.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <div className="logo-symbol"></div>
          <img src={logoImg} alt="Antariksh Logo" />
          <div className="logo-text-group">
          </div>
        </div>

        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToSection('milestones')}>
              Milestones
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToSection('discovery')}>
              Timeline
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToSection('about')}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToSection('events')}>
              Events
            </a>
          </li>
          <li className="nav-item nav-item-btn">
            <button className="join-btn" onClick={() => scrollToSection('contact')}>
              Join Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;