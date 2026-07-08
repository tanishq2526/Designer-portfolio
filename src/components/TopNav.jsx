import React, { useState } from 'react';

const TopNav = ({ toggleTheme, isDarkMode, openTab, isCanvasEmpty }) => {
  const [showSkills, setShowSkills] = useState(false);

  const skillsList = [
    'Logo designing', 
    'Brand board', 
    'Thumbnails', 
    'Icons', 
    'Meta ads.', 
    'Social post', 
    'Creative Posters'
  ];

  const handleProfileClick = () => {
    openTab('profile', 'Profile');
  };

  const handleContactClick = () => {
    openTab('contact', 'Contact');
  };

  const handleFeedbackClick = () => {
    openTab('feedback', 'Feedback');
  };

  const handleResumeClick = () => {
    alert("Downloading Resume PDF... (This feature will be enabled later)");
  };

  const handleKeyDown = (e, callback) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  };

  return (
    <div className="nav-container">
      <div className="logo-area">
        <div className="ps-logo">Ts</div>
      </div>
      <div className="menu-items">
        <div 
          className={`menu-item ${isCanvasEmpty ? "blinking blink-animation" : ""}`} 
          role="button"
          tabIndex={0}
          onKeyDown={(e) => handleKeyDown(e, handleProfileClick)}
          onClick={handleProfileClick}
        >
          Profile
        </div>
        
        <div className="menu-item" role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, () => openTab('about', 'About'))} onClick={() => openTab('about', 'About')}>About</div>
        <div className="menu-item" role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, () => openTab('experience', 'Experience'))} onClick={() => openTab('experience', 'Experience')}>Experience</div>
        <div className="menu-item" role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, () => openTab('projects', 'Projects'))} onClick={() => openTab('projects', 'Projects')}>Projects</div>

        <div 
          className="menu-item-wrapper" 
          onMouseEnter={() => setShowSkills(true)}
          onMouseLeave={() => setShowSkills(false)}
        >
          <div className="menu-item" role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, () => setShowSkills(!showSkills))} onClick={() => setShowSkills(!showSkills)}>Skills</div>
          {showSkills && (
            <div className="dropdown">
              {skillsList.map((skill, index) => (
                <div 
                  key={index} 
                  className="dropdown-item"
                  style={{ cursor: 'default' }}
                >
                  {skill}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="menu-item" role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, handleResumeClick)} onClick={handleResumeClick}>Resume</div>
        <div className="menu-item" role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, handleContactClick)} onClick={handleContactClick}>Contact</div>
        <div className="menu-item" role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, handleFeedbackClick)} onClick={handleFeedbackClick}>Feedback</div>
      </div>
      
      <div className="right-controls">
         <div className="theme-btn" role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, toggleTheme)} onClick={toggleTheme}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
         </div>
      </div>
    </div>
  );
};

export default TopNav;
