import React from 'react';
import InteractiveGrid from './InteractiveGrid';
import profileImage from '../../assets/profile-image01.png';

const AboutTab = () => {
  return (
    <div className="portfolio-container">
      {/* Interactive Grid Overlay */}
      <InteractiveGrid />

      <div className="about-layout">
        {/* Left 30% for Image */}
        <div className="about-image-side">
          <img 
            src={profileImage} 
            alt="Tanishq" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }} 
          />
        </div>

        {/* Right 70% for Content */}
        <div className="about-content-side">
          <h2 className="canvas-highlight" style={{ fontSize: '20px', margin: 0 }}>About me</h2>
          <h1 className="portfolio-huge-text" style={{ fontSize: "72px", letterSpacing: "-4px", marginTop: "10px" }}>
            I'm Tanishq
          </h1>

          <div className="about-intro">
            <p className="canvas-body" style={{ fontSize: '15px', color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
              Hello! I am a passionate Graphic Designer and visual storyteller. My journey revolves around taking complex brand visions and turning them into striking, intuitive, and modern designs that leave a lasting impact.
            </p>
            <p className="canvas-body" style={{ fontSize: '15px', color: '#555', lineHeight: '1.6' }}>
              In early 2025, I took my passion to the next level by founding my own creative setup: <i><span style={{ color: "var(--canvas-accent, #ff6b00)", fontWeight: "normal", fontSize: "28px", fontFamily: "\"Playfair Display\", serif", padding: "0 4px" }}>PrimePixels</span></i>. Through PrimePixels, I collaborate with businesses and visionaries to completely reinvent their brand identities, design eye-catching social media layouts, and craft pixel-perfect visual experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Row */}
      <div className="footer-row">
        <div>PrimePixels@gmail.com</div>
        <div>+91 9571613261</div>
      </div>
    </div>
  );
};

export default AboutTab;
