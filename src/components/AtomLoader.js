import React, { useEffect, useState } from 'react';
import './Loader.css';
import Typewriter from 'typewriter-effect';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 10; // Random increment to simulate stutter
        const newProgress = prev + increment > 100 ? 100 : prev + increment;
        return newProgress;
      });
    }, 77);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-color">
      <div className="loader-container">
        <h1 className='loader' data-shadow='Fruits Creatives'>Fruits <br />Creatives</h1>
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${progress}%` }}></div>
          <div className="loading-percentage">{`${Math.floor(progress)}%`}</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
