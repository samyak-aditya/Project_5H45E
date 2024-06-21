import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Works from './components/Works';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AtomLoader from './components/AtomLoader';
import './App.css';
import Tilt from 'react-parallax-tilt';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <AtomLoader />
      ) : (
        <>
          <Header />
          <div className="main-content">
            <div className="content">
              <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8}>
                <Works />
              </Tilt>
              <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8}>
                <Skills />
              </Tilt>
              <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8}>
                <Contact />
              </Tilt>
            </div>
            <div className="image">
              <Tilt tiltMaxAngleY={10} tiltMaxAngleX={10}>
                <iframe className='spotify-tile'
                  title="Spotify Artist Embed"
                  src="https://open.spotify.com/embed/artist/2Dn3hmaNC3HmbbJV0Ig2Cl?utm_source=generator&theme=0"
                  
                  height="352"
                  style={{ borderRadius: '12px' }}
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </Tilt>
              <div className="video-container">
                <Tilt tiltMaxAngleY={10} tiltMaxAngleX={10}>
                  <iframe className='youtube-tile'
                    width="100%"
                    height="352"
                    style={{ borderRadius: '12px' }}
                    src="https://www.youtube.com/embed/JwQcKaOriOc?si=EOH1LDyqHIXGm7PE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </Tilt>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
