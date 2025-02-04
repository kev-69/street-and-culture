import React from 'react';
import './AboutUs.css';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <div>
    <Helmet>
      <title>About Us</title>
    </Helmet>
      <main className="about-container">
        <div className="about-header">
          <h1>About Street & Culture</h1>
          <p className="subtitle">Capturing Urban Life Through Our Lens</p>
        </div>
        
        <div className="about-content">
          <section className="mission-section">
            <h2>Our Mission</h2>
            <p>
              At Street & Culture, we're passionate about documenting and celebrating 
              the vibrant tapestry of urban life. Our mission is to showcase the raw, 
              authentic moments that make city living extraordinary.
            </p>
          </section>

          <section className="vision-section">
            <h2>Our Vision</h2>
            <p>
              We strive to be the leading platform for urban photography and cultural 
              documentation, creating a space where photographers and enthusiasts can 
              share their unique perspectives on city life.
            </p>
          </section>

          <section className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Authenticity</h3>
                <p>We believe in capturing real moments and genuine stories.</p>
              </div>
              <div className="value-item">
                <h3>Creativity</h3>
                <p>We encourage unique perspectives and innovative approaches.</p>
              </div>
              <div className="value-item">
                <h3>Community</h3>
                <p>We foster a supportive environment for artists and enthusiasts.</p>
              </div>
              <div className="value-item">
                <h3>Excellence</h3>
                <p>We maintain high standards in everything we do.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
