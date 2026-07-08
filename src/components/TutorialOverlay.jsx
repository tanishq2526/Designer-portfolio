import React, { useState, useEffect } from 'react';
import { X, Search, Paintbrush, Palette } from 'lucide-react';

const TutorialOverlay = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show tutorial only once per session or use localStorage to show only on first visit
    const hasSeenTutorial = sessionStorage.getItem('portfolio_tutorial_seen');
    if (!hasSeenTutorial) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500); // Small delay before showing
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('portfolio_tutorial_seen', 'true');
  };

  if (!isVisible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <h2 style={styles.title}>Welcome to the Workspace! 🎨</h2>
          <button style={styles.closeBtn} onClick={handleClose}>
            <X size={18} />
          </button>
        </div>
        
        <p style={styles.text}>
          This portfolio is fully interactive, just like your favorite design software. Try out the tools on the left and right panels!
        </p>

        <div style={styles.featuresList}>
          
          <div style={styles.featureItem}>
            <div style={styles.iconBox}><Search size={20} color="var(--ps-accent)" /></div>
            <div>
              <h3 style={styles.featureTitle}>Zoom Tool</h3>
              <p style={styles.featureText}>Select the magnifying glass and hover over the canvas to focus and magnify specific details.</p>
            </div>
          </div>
          
          <div style={styles.featureItem}>
            <div style={styles.iconBox}><Paintbrush size={20} color="var(--ps-accent)" /></div>
            <div>
              <h3 style={styles.featureTitle}>Brush Tool</h3>
              <p style={styles.featureText}>Select the brush to temporarily paint directly on the canvas! Your strokes will vanish automatically after a few seconds.</p>
            </div>
          </div>

          <div style={styles.featureItem}>
            <div style={styles.iconBox}><Palette size={20} color="var(--ps-accent)" /></div>
            <div>
              <h3 style={styles.featureTitle}>Color Panel (Right)</h3>
              <p style={styles.featureText}>Use the sliders on the right panel to dynamically change the accent color of the entire portfolio!</p>
            </div>
          </div>

        </div>

        <button style={styles.actionBtn} onClick={handleClose}>
          Got it, let's explore!
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(3px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999,
  },
  modal: {
    backgroundColor: 'var(--ps-panel-bg)',
    border: '1px solid var(--ps-border)',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '500px',
    padding: '30px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    color: 'var(--ps-text)',
    fontFamily: 'system-ui, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    margin: 0,
    fontSize: '22px',
    color: '#ffffff',
  },
  closeBtn: {
    background: 'transparent',
    border: 'none',
    color: 'var(--ps-text-dim)',
    cursor: 'pointer',
    display: 'flex',
    padding: '4px',
  },
  text: {
    fontSize: '15px',
    lineHeight: 1.5,
    color: 'var(--ps-text-dim)',
    marginBottom: '30px',
  },
  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '30px',
  },
  featureItem: {
    display: 'flex',
    gap: '15px',
    alignItems: 'flex-start',
  },
  iconBox: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: '10px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureTitle: {
    margin: '0 0 5px 0',
    fontSize: '16px',
    color: '#ffffff',
  },
  featureText: {
    margin: 0,
    fontSize: '13px',
    color: 'var(--ps-text-dim)',
    lineHeight: 1.4,
  },
  actionBtn: {
    width: '100%',
    padding: '12px',
    backgroundColor: 'var(--canvas-accent)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  }
};

export default TutorialOverlay;
