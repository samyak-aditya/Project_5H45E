// AtomLoader.js

import React from 'react';
import './AtomLoader.css'; // Import the CSS for the AtomLoader

const AtomLoader = () => {
  return (
    <main className='main-loader'>
      <div className="atom">
        <div className="electron"></div>
        <div className="electron-alpha"></div>
        <div className="electron-omega"></div>
      </div>
      
    </main>
  );
};

export default AtomLoader;
