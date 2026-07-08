import React from 'react';
import { Eye, EyeOff, Lock, Image as ImageIcon, Type, Folder } from 'lucide-react';

const LayerPanel = ({ layers, activeLayerId, setActiveLayerId }) => {
  return (
    <div style={styles.panelContainer}>
      <div style={styles.panelHeader}>
        <span>Layers</span>
      </div>
      
      <div style={styles.layerControls}>
        <span style={styles.controlText}>Kind</span>
        <div style={styles.iconsRow}>
           <ImageIcon size={14} />
           <Type size={14} />
           <Folder size={14} />
        </div>
      </div>
      
      <div style={styles.layersList}>
        {layers.map(layer => (
          <button 
            type="button"
            key={layer.id} 
            aria-label={`Select layer ${layer.name}`}
            style={{
              ...styles.layerItem,
              backgroundColor: activeLayerId === layer.id ? 'var(--ps-highlight)' : 'transparent',
              border: 'none',
              borderBottom: '1px solid var(--ps-border)',
              padding: '4px 10px',
              width: '100%',
              textAlign: 'left',
              color: 'inherit',
              font: 'inherit'
            }}
            onClick={() => setActiveLayerId(layer.id)}
          >
            <div style={styles.eyeIcon}>
              <Eye size={16} />
            </div>
            <div style={styles.thumbnail}>
              <div style={styles.thumbnailInner}></div>
            </div>
            <span style={styles.layerName}>{layer.name}</span>
            {layer.locked && <Lock size={12} style={{marginLeft: 'auto', color: 'var(--ps-text-dim)'}} />}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  panelContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    borderTop: '1px solid var(--ps-border)',
  },
  panelHeader: {
    backgroundColor: 'var(--ps-panel-header)',
    padding: '4px 10px',
    fontSize: '11px',
    fontWeight: 'bold',
    borderBottom: '1px solid var(--ps-border)',
  },
  layerControls: {
    display: 'flex',
    alignItems: 'center',
    padding: '6px 10px',
    borderBottom: '1px solid var(--ps-border)',
    fontSize: '11px',
    gap: '10px'
  },
  controlText: {
    color: 'var(--ps-text-dim)',
  },
  iconsRow: {
    display: 'flex',
    gap: '8px',
    color: 'var(--ps-text-dim)',
  },
  layersList: {
    flex: 1,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column-reverse', // To simulate PS bottom-up layering conceptually, or just normal order
  },
  layerItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '4px 10px',
    cursor: 'pointer',
    borderBottom: '1px solid var(--ps-border)',
  },
  eyeIcon: {
    marginRight: '10px',
    color: 'var(--ps-text)',
  },
  thumbnail: {
    width: '30px',
    height: '20px',
    backgroundColor: '#fff',
    marginRight: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid var(--ps-border)'
  },
  thumbnailInner: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eee', // simulated content
  },
  layerName: {
    fontSize: '12px',
  }
};

export default LayerPanel;
