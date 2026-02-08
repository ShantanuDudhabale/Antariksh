import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import RealisticPlanets from '../Components/RealisticPlanets';
import DiscoveriesSection from '../Components/DiscoveriesSection';
import FeaturesShowcase from '../Components/FeaturesShowcase';
import Footer from '../Components/Footer';
import CosmicBackground from '../Components/CosmicBackground';
import AboutClub from '../Components/AboutClub';
import EventsHighlight from '../Components/EventsHighlight';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <CosmicBackground />
      <Navbar />
      <RealisticPlanets />
      <HeroSection />
      <DiscoveriesSection />
      <AboutClub />
      <EventsHighlight />
      <FeaturesShowcase />
      <Footer />
    </div>
  );
}

export default App;
