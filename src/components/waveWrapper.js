import React from 'react';
import WaveAnimation from './wave'; // Adjust the path based on your file structure

const BackgroundWrapper = ({ children }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <WaveAnimation />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;
