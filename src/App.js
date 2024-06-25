import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Works from './components/Works';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Loader from './components/AtomLoader';
import './App.css';
import Tilt from 'react-parallax-tilt';
import qrcode from './images/shahe_qrcode.png';
import Background from './components/Background';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400); // Simulate a 2-second loading delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading && <Loader />} {/* Show loader while loading */}
      
      {/* Main content and background after loading */}
      {!loading && (
        <>
          <Background />
          <Header />
          <div className="main-content">
            <div className="content">
              <Tilt tiltMaxAngleY={3} tiltMaxAngleX={3}>
                <Works />
              </Tilt>
              <Tilt tiltMaxAngleY={3} tiltMaxAngleX={3}>
                <Skills />
              </Tilt>
              <Tilt tiltMaxAngleY={3} tiltMaxAngleX={3}>
                <Contact />
              </Tilt>
            </div>
            <div className="image">
              <div className='about'>
                <h2>About Me</h2>
                <p>
                  Hi, I'm Shahe, an artist, professional vocalist, singer/songwriter, and producer with over six years of experience in music production, specializing in pop and dance music. With half a million streams and views across all platforms, I write lyrics, produce tracks, and mix and master them to a stream-ready quality. I have collaborated with some of India's top labels and am proficient in playing guitar and keys. Using industry-standard DAWs like FL Studio, I ensure my tracks are clear, impactful, and ready for streaming.
                </p>
              </div>

              <Tilt tiltMaxAngleY={10} tiltMaxAngleX={10}>
                <iframe
                  className='spotify-tile'
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
                  <iframe
                    className='youtube-tile'
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
              <div className='qr code'>
                <Tilt tiltMaxAngleY={2} tiltMaxAngleX={2}>
                  <img
                    src={qrcode}
                    alt='qr code'
                    style={{
                      width: '100%',
                      borderRadius: '20px'
                    }}
                  />
                </Tilt>
              </div>
              <div className='gallery'></div>
            </div>
          </div>
          
        </>
      )}
    </div>
  );
}

export default App;
