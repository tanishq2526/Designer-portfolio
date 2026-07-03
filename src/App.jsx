import React, { useState, useEffect } from 'react';
import './App.css';
import TopNav from './components/TopNav.jsx';
import Toolbar from './components/Toolbar.jsx';
import Workspace from './components/Workspace.jsx';
import Panels from './components/Panels.jsx';

function App() {
  const [activeLayerId, setActiveLayerId] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [accentColor, setAccentColor] = useState('#ff6b00'); // Default bright orange

  // Update CSS variable dynamically
  useEffect(() => {
    document.documentElement.style.setProperty('--canvas-accent', accentColor);
  }, [accentColor]);

  // Initial set of documents (tabs)
  const initialTabs = [
    { id: 'profile', name: 'Profile' },
  ];
  
  const [openTabs, setOpenTabs] = useState(initialTabs);
  const [activeTabId, setActiveTabId] = useState('profile');

  // Define the layers/pages of the portfolio for the right panel
  const layers = [
    { id: 'contact', name: 'Contact', locked: false },
    { id: 'experience', name: 'Experience', locked: false },
    { id: 'projects', name: 'Projects', locked: false },
    { id: 'about', name: 'About Me', locked: false },
    { id: 'profile', name: 'Home / Hero', locked: true },
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openTab = (tabId, tabName) => {
    if (!openTabs.find(tab => tab.id === tabId)) {
      setOpenTabs([...openTabs, { id: tabId, name: tabName }]);
    }
    setActiveTabId(tabId);
    setActiveLayerId(tabId);
  };

  const handleLayerClick = (layerId) => {
    setActiveLayerId(layerId);
    const layer = layers.find(l => l.id === layerId);
    if (layer) {
      openTab(layer.id, layer.name);
    }
  };

  const closeTab = (tabIdToClose, e) => {
    e.stopPropagation();
    const updatedTabs = openTabs.filter(tab => tab.id !== tabIdToClose);
    setOpenTabs(updatedTabs);
    if (activeTabId === tabIdToClose) {
      if (updatedTabs.length > 0) {
        setActiveTabId(updatedTabs[updatedTabs.length - 1].id);
        setActiveLayerId(updatedTabs[updatedTabs.length - 1].id);
      } else {
        setActiveTabId(null);
        setActiveLayerId(null);
      }
    }
  };

  const isCanvasEmpty = openTabs.length === 0;

  return (
    <div className={`app-container ${!isDarkMode ? 'light-theme' : ''}`}>
      <TopNav 
        toggleTheme={toggleTheme} 
        isDarkMode={isDarkMode} 
        openTab={openTab}
        isCanvasEmpty={isCanvasEmpty}
      />
      <div className="main-layout">
        <Toolbar />
        <Workspace 
          openTabs={openTabs} 
          activeTabId={activeTabId} 
          setActiveTabId={setActiveTabId}
          closeTab={closeTab}
          isCanvasEmpty={isCanvasEmpty}
        />
        <Panels 
          layers={layers} 
          activeLayerId={activeLayerId} 
          setActiveLayerId={handleLayerClick}
          accentColor={accentColor}
          setAccentColor={setAccentColor}
        />
      </div>
    </div>
  );
}

export default App;
