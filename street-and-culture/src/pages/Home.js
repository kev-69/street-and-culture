import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import './Home.css';
import homeBg1 from '../assets/images/home-bg1.jpg';
import homeBg2 from '../assets/images/home-bg2.jpg';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [homeBg1, homeBg2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <Navbar />
      {/* Banner Section */}
      <div className="banner-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Street culture banner ${index + 1}`}
            className={`banner-image ${currentImage === index ? 'active' : ''}`}
          />
        ))}
        <h1 className="banner-overlay">CULTURE, BEYOND THE STREET</h1>
        <p className="banner-description">A platform for street clothing brand owners to sell their products.</p>
      </div>
      {/* Banner Section End */}
      {/* Featured Brands Section */}
      <Footer />
    </div>
  );
};

export default Home;
