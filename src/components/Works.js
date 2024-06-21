// src/components/Works.js
import React from 'react';
import music from '../images/audio.gif'

const Works = () => {
  const works = [
    {
      title: 'TU MERI',
      youtube: 'https://youtu.be/O0eLnJ_-v-s',
      description: 'This song reflects a boy\'s realization that his life has improved and become more vibrant since the girl who caused him pain is no longer a part of it.',
      albumArt: 'path/to/tu-meri-album-art.jpg', // Add the path to the album art
      spotifyEmbed: 'https://open.spotify.com/embed/track/1N4TubxZXkhFTGEICOqAht?utm_source=generator'
    },
    {
      title: 'ABHI NAHI',
      youtube: 'https://youtu.be/qDIvZx6fF5w',
      description: 'This song narrates a boy\'s frustration as he tries to focus on an assassination mission while his girlfriend incessantly discusses her emotional issues, prompting him to repeatedly sing that he doesn\'t want to talk and will address it later.',
      albumArt: 'path/to/abhi-nahi-album-art.jpg', // Add the path to the album art
      spotifyEmbed: 'https://open.spotify.com/embed/track/4FW7RGggxRZ0f8nRNzUOLd?utm_source=generator'
    },
    {
      title: 'SLIDE ZARA',
      youtube: 'https://youtu.be/link-to-slide-zara',
      description: 'Description of Slide Zara.',
      albumArt: 'path/to/slide-zara-album-art.jpg', // Add the path to the album art
      spotifyEmbed: 'https://open.spotify.com/embed/track/5svinFbE044frhIYJzs2GZ?utm_source=generator'
    },
    {
      title: 'FIROZI FITOOR',
      youtube: 'https://youtu.be/link-to-firozi-fitoor',
      description: 'Description of Firozi Fitoor.',
      albumArt: 'path/to/firozi-fitoor-album-art.jpg', // Add the path to the album art
      spotifyEmbed: 'https://open.spotify.com/embed/track/327vFaJvqx2yD9gyUTYB9U?utm_source=generator'
    }
  ];

  return (
    <section className="works">
     <h2 style={{ display: 'flex', alignItems: 'center' }}>
      Works
      <img src={music} alt="music" style={{ height: '45px', width: '45px', marginLeft: '10px' }} />
    </h2>

      
      
      <iframe 
      style={{borderRadius:"12px" }}
      src="https://open.spotify.com/embed/track/1N4TubxZXkhFTGEICOqAht" 
      width="100%" height="152" 
      frameBorder="0" 
      allowfullscreen="1" 
      //allow="autoplay; clipboard-write; encrypted-media;" 
      loading="lazy"></iframe>
        
      
    </section>
  );
};

export default Works;
