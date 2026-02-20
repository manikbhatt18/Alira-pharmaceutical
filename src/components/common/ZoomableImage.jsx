import React, { useState } from 'react';


// --- NEW: Image Zoom Sub-Component ---
const ZoomableImage = ({ src, alt }) => {
  const [position, setPosition] = useState({ x: '50%', y: '50%' });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    // Get the exact dimensions and position of the image container
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    
    // Calculate mouse position as a percentage
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setPosition({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <div
      className="w-full h-full overflow-hidden cursor-crosshair relative bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain transition-transform duration-200 ease-out"
        style={{
          // Scale up heavily on hover, stay normal otherwise
          transform: isHovered ? 'scale(2.5)' : 'scale(1)',
          // Move the transformation center to exactly where the mouse is
          transformOrigin: isHovered ? `${position.x} ${position.y}` : 'center center'
        }}
      />
    </div>
  );
};

export default ZoomableImage;