import React, { useRef, useEffect } from 'react';

const InteractiveGrid = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!overlayRef.current) return;
      const rect = overlayRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      overlayRef.current.style.maskImage = `radial-gradient(circle 120px at ${x}px ${y}px, black, transparent)`;
      overlayRef.current.style.WebkitMaskImage = `radial-gradient(circle 120px at ${x}px ${y}px, black, transparent)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={overlayRef}
      className="grid-overlay"
    />
  );
};

export default InteractiveGrid;
