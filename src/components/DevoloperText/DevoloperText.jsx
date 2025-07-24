// DeveloperText.jsx
import React, { useState, useEffect } from 'react';

const DeveloperText = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return visible ? (
    <div
      className="pointer-events-none fixed text-sm md:text-xl font-semibold text-black bg-white px-3 py-1 rounded-full shadow-md transition duration-150"
      style={{
        top: position.y + 20,
        left: position.x + 20,
        zIndex: 9999,
      }}
    >
      Developer
    </div>
  ) : null;
};

export default DeveloperText;
