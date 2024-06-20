// src/App.js
import React from 'react';
import Header from './components/Header';
import Works from './components/Works';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="content">
          <Works />
          <Skills />
          <Contact />
        </div>
        <div className="image">
          
          <iframe style={{borderRadius:"12px"}}
           src="https://open.spotify.com/embed/artist/2Dn3hmaNC3HmbbJV0Ig2Cl?utm_source=generator&theme=0" 
           width="100%" 
           height="352" 
           frameBorder="0"
            allowfullscreen="true" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
