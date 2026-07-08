import React from 'react';
import PropTypes from 'prop-types';
import { X } from 'lucide-react';
import CanvasTools from './CanvasTools';
import ProfileTab from './tabs/ProfileTab';
import AboutTab from './tabs/AboutTab';
import ContactTab from './tabs/ContactTab';
import ExperienceTab from './tabs/ExperienceTab';
import ProjectsTab from './tabs/ProjectsTab';
import FeedbackTab from './tabs/FeedbackTab';
import ProjectImageTab from './tabs/ProjectImageTab';

const Workspace = ({ openTabs, activeTabId, setActiveTabId, closeTab, isCanvasEmpty, openTab, activeTool }) => {
  // Format current date like "09 Jan, 2026"
  const formatDate = () => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date().toLocaleDateString('en-GB', options).replace(/ /g, ' ');
  };

  const currentDate = formatDate();

  // Content generator based on active tab
  const getTabContent = () => {
    if (activeTabId === 'profile') return <ProfileTab currentDate={currentDate} />;
    if (activeTabId === 'about') return <AboutTab />;
    if (activeTabId === 'contact') return <ContactTab />;
    if (activeTabId === 'experience') return <ExperienceTab />;
    if (activeTabId === 'projects') return <ProjectsTab openTab={openTab} />;
    if (activeTabId === 'feedback') return <FeedbackTab />;
    if (activeTabId && activeTabId.startsWith('project_img_')) return <ProjectImageTab activeTabId={activeTabId} />;

    // Default minimalist fallback for other tabs
    const tabName = openTabs.find(t => t.id === activeTabId)?.name || 'Document';

    return (
      <div className="content-container">
        <div className="hero-text-container">
          <h1 className="canvas-title hero-title">
            {tabName}
          </h1>
          <p className="canvas-subtitle hero-subtitle">
            Discover my work and <span className="canvas-highlight">creativity</span>.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="workspace-container">
      {/* Document Tabs Bar */}
      <div className="tabs-bar">
        {openTabs.map(tab => (
          <div
            key={tab.id}
            className="tab"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveTabId(tab.id);
              }
            }}
            style={{
              backgroundColor: activeTabId === tab.id ? 'var(--ps-panel-header)' : 'var(--ps-panel-bg)',
              color: activeTabId === tab.id ? 'var(--ps-text)' : 'var(--ps-text-dim)',
              borderTop: activeTabId === tab.id ? `2px solid var(--canvas-accent)` : '2px solid transparent',
            }}
            onClick={() => setActiveTabId(tab.id)}
          >
            <span className="tab-name">{tab.name} @ 100% (RGB/8) *</span>
            <button
              type="button"
              className="close-btn"
              aria-label={`Close ${tab.name} tab`}
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab.id, e);
              }}
            >
              <X size={12} />
            </button>
          </div>
        ))}
      </div>

      <div className="canvas-area">
        {!isCanvasEmpty ? (
          <CanvasTools activeTool={activeTool}>
            {getTabContent()}
          </CanvasTools>
        ) : (
          <div className="empty-state">
            <p className="empty-state-text">No documents open. Click 'Profile' to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

Workspace.propTypes = {
  openTabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  activeTabId: PropTypes.string,
  setActiveTabId: PropTypes.func.isRequired,
  closeTab: PropTypes.func.isRequired,
  isCanvasEmpty: PropTypes.bool.isRequired,
  openTab: PropTypes.func.isRequired,
  activeTool: PropTypes.string.isRequired,
};

export default Workspace;
