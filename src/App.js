import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Works from './components/Works';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AtomLoader from './components/AtomLoader';
import './App.css';

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
       {loading ? ( // Show loader while loading is true
        <AtomLoader />
      ) : ( // Render content after loading is false
        <>
      <Header />
      <div className="main-content">
        <div className="content">
          <Works />
          <Skills />
          <Contact />
        </div>

        
          <div className="image">
            {/* Spotify Artist Embed */}
            <iframe
              title="Spotify Artist Embed"
              src="https://open.spotify.com/embed/artist/2Dn3hmaNC3HmbbJV0Ig2Cl?utm_source=generator&theme=0"
              width="100%"
              height="352"
              style={{ borderRadius: '12px' }}
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          

          {/* Bottom YouTube Video */}
          <div className="video-container">
            <iframe
              width="460"
              height="352"
              style={{ borderRadius: '12px' }}
              src="https://www.youtube.com/embed/JwQcKaOriOc?si=EOH1LDyqHIXGm7PE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      </>
      )}
    </div>
  );
}

export default App;
