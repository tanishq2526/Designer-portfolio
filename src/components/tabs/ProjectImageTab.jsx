import React from 'react';
import PropTypes from 'prop-types';
import brandVisualImg from '../../assets/projects/Brand-visual.jpg';
import logoDesignImg from '../../assets/projects/Logo-design.png';
import posterDesignImg from '../../assets/projects/Poster-design.png';
import socialCampaignImg from '../../assets/projects/Social-campign.png';

const projectImages = {
  'project_img_brand': brandVisualImg,
  'project_img_logo': logoDesignImg,
  'project_img_social': socialCampaignImg,
  'project_img_poster': posterDesignImg
};

const ProjectImageTab = ({ activeTabId }) => {
  const imgSrc = projectImages[activeTabId];
  return (
    <div className="portfolio-container" style={{ padding: 0, backgroundColor: '#111', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
      <img src={imgSrc} style={{ width: '100%', height: 'auto', display: 'block' }} alt="Project View" />
    </div>
  );
};

ProjectImageTab.propTypes = {
  activeTabId: PropTypes.string.isRequired,
};

export default ProjectImageTab;
