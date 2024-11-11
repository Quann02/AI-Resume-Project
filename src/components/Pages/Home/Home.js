import React from 'react';
import Navbar from '../../NavBar/NavBar.js';
import HeroSection from '../../HeroSection/HeroSection.js';
import Footer from '../../Footer/Footer.js';
import './Home.css';

function Home() {
  return (
    <div className="homepage-container">
      <HeroSection />
      <Footer />
    </div>
  );
}

export default Home;
