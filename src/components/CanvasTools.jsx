import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const CanvasTools = ({ activeTool, children }) => {
  const canvasRef = useRef(null);
  const drawingCanvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const isZoomActive = activeTool === 'zoom';
  const isBrushActive = activeTool === 'brush';

  const getCursor = () => {
    if (isZoomActive) return 'zoom-in';
    if (isBrushActive) return 'crosshair';
    return 'default';
  };

  const handleMouseMove = (e) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set CSS variables for zoom transform-origin
    canvasRef.current.style.setProperty('--mouse-x', `${x}px`);
    canvasRef.current.style.setProperty('--mouse-y', `${y}px`);
    
    if (activeTool === 'brush') {
      draw(e);
    }
  };

  const startDrawing = (e) => {
    if (activeTool !== 'brush' || !drawingCanvasRef.current) return;
    const ctx = drawingCanvasRef.current.getContext('2d');
    const rect = drawingCanvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };
  
  const draw = (e) => {
    if (!isDrawing || activeTool !== 'brush' || !drawingCanvasRef.current) return;
    const ctx = drawingCanvasRef.current.getContext('2d');
    const rect = drawingCanvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctx.lineTo(x, y);
    // Get computed accent color or use orange
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--canvas-accent').trim() || '#ff6b00';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.stroke();
  };
  
  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    
    setTimeout(() => {
      if (drawingCanvasRef.current) {
         const ctx = drawingCanvasRef.current.getContext('2d');
         ctx.clearRect(0, 0, drawingCanvasRef.current.width, drawingCanvasRef.current.height);
      }
    }, 2000); // Clears after 2 seconds
  };

  return (
    <div className="canvas-scroll-wrapper" 
         style={{ cursor: getCursor() }}
         onMouseDown={startDrawing}
         onMouseUp={stopDrawing}
         onMouseLeave={stopDrawing}
    >
      <div className="canvas" style={{ position: 'relative', overflow: isZoomActive ? 'hidden' : 'visible' }} ref={canvasRef} onMouseMove={handleMouseMove}>
        
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transform: isZoomActive ? 'scale(1.4)' : 'scale(1)',
          transformOrigin: 'var(--mouse-x, 0px) var(--mouse-y, 0px)',
          transition: isZoomActive ? 'transform 0.1s ease-out' : 'transform 0.3s ease',
        }}>
          {children}
        </div>

        {/* Brush overlay canvas */}
        <canvas
          ref={drawingCanvasRef}
          width={1000}
          height={800}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9999
          }}
        />

      </div>
    </div>
  );
};

CanvasTools.propTypes = {
  activeTool: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CanvasTools;
