import React from 'react';
import LayerPanel from './LayerPanel';

const Panels = ({ layers, activeLayerId, setActiveLayerId, accentColor, setAccentColor }) => {
  return (
    <div className="panels-container">
      <div className="panel-section">
        <div className="panel-header">
          <span>Color</span>
        </div>
        <div className="panel-content">
          {/* Functional native color picker overlaying the spectrum */}
          <div className="color-spectrum-wrapper">
            <div className="color-spectrum"></div>
            <input 
              type="color" 
              value={accentColor || '#ff6b00'} 
              onChange={(e) => setAccentColor(e.target.value)}
              className="color-input"
              title="Choose accent color"
            />
          </div>
          <div className="color-sliders">
             <div className="slider"><span style={{color: 'red'}}>R</span> <div className="slider-bar"></div></div>
             <div className="slider"><span style={{color: 'green'}}>G</span> <div className="slider-bar"></div></div>
             <div className="slider"><span style={{color: 'blue'}}>B</span> <div className="slider-bar"></div></div>
          </div>
        </div>
      </div>
      
      <div className="panel-section">
        <div className="panel-header">
          <span>Properties</span>
        </div>
        <div className="panel-content">
          <div className="property-item">
            <span>W: 1920px</span>
            <span>H: 1080px</span>
          </div>
          <div className="property-item">
            <span>X: 0px</span>
            <span>Y: 0px</span>
          </div>
        </div>
      </div>
      
      {/* Layers Panel */}
      <LayerPanel 
        layers={layers} 
        activeLayerId={activeLayerId} 
        setActiveLayerId={setActiveLayerId} 
      />
    </div>
  );
};

export default Panels;
