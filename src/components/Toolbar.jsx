import React, { useState } from 'react';
import { 
  Move, 
  MousePointer2, 
  Lasso, 
  Wand2, 
  Crop, 
  Paintbrush, 
  Eraser, 
  Type, 
  PenTool, 
  Search,
  Square
} from 'lucide-react';

const Toolbar = () => {
  const [activeTool, setActiveTool] = useState('move');

  const tools = [
    { id: 'move', icon: <Move size={16} /> },
    { id: 'marquee', icon: <Square size={16} /> },
    { id: 'lasso', icon: <Lasso size={16} /> },
    { id: 'wand', icon: <Wand2 size={16} /> },
    { id: 'crop', icon: <Crop size={16} /> },
    { id: 'brush', icon: <Paintbrush size={16} /> },
    { id: 'eraser', icon: <Eraser size={16} /> },
    { id: 'pen', icon: <PenTool size={16} /> },
    { id: 'type', icon: <Type size={16} /> },
    { id: 'zoom', icon: <Search size={16} /> },
  ];

  return (
    <div style={styles.toolbarContainer}>
      <div style={styles.tools}>
        {tools.map((tool) => (
          <div 
            key={tool.id} 
            style={{
              ...styles.toolBtn,
              backgroundColor: activeTool === tool.id ? 'var(--ps-highlight)' : 'transparent',
            }}
            onClick={() => setActiveTool(tool.id)}
          >
            {tool.icon}
          </div>
        ))}
      </div>
      
      <div style={styles.colorsArea}>
        <div style={styles.colorBoxContainer}>
          <div style={{...styles.colorBox, ...styles.bgBox}}></div>
          <div style={{...styles.colorBox, ...styles.fgBox}}></div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  toolbarContainer: {
    width: '40px',
    backgroundColor: 'var(--ps-panel-bg)',
    borderRight: '1px solid var(--ps-border)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 0',
    flexShrink: 0,
  },
  tools: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    width: '100%',
    alignItems: 'center',
  },
  toolBtn: {
    width: '28px',
    height: '28px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    cursor: 'pointer',
    color: 'var(--ps-text)',
  },
  colorsArea: {
    marginTop: 'auto',
    marginBottom: '20px',
  },
  colorBoxContainer: {
    position: 'relative',
    width: '24px',
    height: '24px',
  },
  colorBox: {
    width: '14px',
    height: '14px',
    border: '1px solid #fff',
    position: 'absolute',
    borderRadius: '2px',
  },
  fgBox: {
    backgroundColor: '#ffffff',
    top: 0,
    left: 0,
    zIndex: 2,
  },
  bgBox: {
    backgroundColor: '#000000',
    bottom: 0,
    right: 0,
    zIndex: 1,
  }
};

export default Toolbar;
