import React from 'react';
import PropTypes from 'prop-types';
import InteractiveGrid from './InteractiveGrid';
import brandVisualImg from '../../assets/projects/Brand-visual.jpg';
import logoDesignImg from '../../assets/projects/Logo-design.png';
import posterDesignImg from '../../assets/projects/Poster-design.png';
import socialCampaignImg from '../../assets/projects/Social-campign.png';

const ProjectsTab = ({ openTab }) => {
  return (
    <div className="portfolio-container">
      {/* Interactive Grid Overlay */}
      <InteractiveGrid />

      <div className="projects-layout">
         <div className="projects-header">
            <h2 className="canvas-title" style={{fontSize: '48px', letterSpacing: '-1px', margin: 0}}>
              Selected <span className="canvas-highlight">Works</span>.
            </h2>
            <p className="canvas-subtitle" style={{marginTop: '10px'}}>
              A collection of my recent design projects.
            </p>
         </div>

         <div className="projects-grid">
            {/* Project 01 */}
            <div className="project-card">
              <button 
                type="button" 
                onClick={() => openTab('project_img_brand', 'Brand visual mockup')} 
                style={{ padding: 0, border: 'none', background: 'none', cursor: 'pointer', display: 'block', width: '100%' }}
                aria-label="View Brand visual mockup project"
                className="project-image-btn"
              >
                <img src={brandVisualImg} alt="Brand visual mockup" className="project-image" />
              </button>
              <h3 className="project-title">Brand visual mockup</h3>
              <p className="project-category">Branding </p>
            </div>
            
            {/* Project 02 */}
            <div className="project-card">
              <button 
                type="button" 
                onClick={() => openTab('project_img_logo', 'Logo Designing')} 
                style={{ padding: 0, border: 'none', background: 'none', cursor: 'pointer', display: 'block', width: '100%' }}
                aria-label="View Logo Designing project"
                className="project-image-btn"
              >
                <img src={logoDesignImg} alt="Logo Designing" className="project-image" />
              </button>
              <h3 className="project-title">Logo Designing</h3>
              <p className="project-category">Logo & Brand Design</p>
            </div>

            {/* Project 03 */}
            <div className="project-card">
              <button 
                type="button" 
                onClick={() => openTab('project_img_social', 'Social Media Campaign')} 
                style={{ padding: 0, border: 'none', background: 'none', cursor: 'pointer', display: 'block', width: '100%' }}
                aria-label="View Social Media Campaign project"
                className="project-image-btn"
              >
                <img src={socialCampaignImg} alt="Social Media Campaign" className="project-image" />
              </button>
              <h3 className="project-title">Social Media Campaign</h3>
              <p className="project-category">Marketing / Graphics</p>
            </div>

            {/* Project 04 */}
            <div className="project-card">
              <button 
                type="button" 
                onClick={() => openTab('project_img_poster', 'Poster designing')} 
                style={{ padding: 0, border: 'none', background: 'none', cursor: 'pointer', display: 'block', width: '100%' }}
                aria-label="View Poster designing project"
                className="project-image-btn"
              >
                <img src={posterDesignImg} alt="Poster designing" className="project-image" />
              </button>
              <h3 className="project-title">Poster designing</h3>
              <p className="project-category">Graphics Post</p>
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

ProjectsTab.propTypes = {
  openTab: PropTypes.func.isRequired,
};

export default ProjectsTab;
