import React from 'react';
import PropTypes from 'prop-types';
import InteractiveGrid from './InteractiveGrid';

const ProfileTab = ({ currentDate }) => {
  return (
    <div className="portfolio-container">
      {/* Interactive Grid Overlay */}
      <InteractiveGrid />

      {/* Top Left Corner */}
      <div className="top-left">
        <div className="top-date">{currentDate}</div>
        <div className="top-title"><span className="canvas-highlight">Creative Website</span></div>
        <div className="top-subtitle">by: Tanishq</div>
      </div>

      {/* Middle Meta Row - Moved down closer to Portfolio */}
      <div className="meta-row">
        <div className="meta-left">
          Graphic Designer &nbsp;/&nbsp; Brand Designer &nbsp;/&nbsp; Illustrator
        </div>
        <div className="meta-right">
          <span>PrimePixels@gmail.com</span>
          <span>+91 9571613261</span>
          <span>Jaipur/Rajasthan</span>
        </div>
      </div>

      {/* Huge Center Text */}
      <div className="huge-text-container">
        <h1 className="portfolio-huge-text">Portfolio</h1>
      </div>

      {/* Bottom Footer Row */}
      <div className="footer-row">
        <div className="canvas-highlight">Creative Website</div>
        <div>{currentDate}</div>
      </div>
    </div>
  );
};

ProfileTab.propTypes = {
  currentDate: PropTypes.string.isRequired,
};

export default ProfileTab;
