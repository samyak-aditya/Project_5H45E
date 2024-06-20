// src/components/Works.js
import React from 'react';

const Works = () => {
  const works = [
    {
      title: 'TU MERI',
      youtube: 'https://youtu.be/O0eLnJ_-v-s',
      description: 'This song reflects a boy\'s realization that his life has improved and become more vibrant since the girl who caused him pain is no longer a part of it.',
      albumArt: 'path/to/tu-meri-album-art.jpg' // Add the path to the album art
    },
    {
      title: 'ABHI NAHI',
      youtube: 'https://youtu.be/qDIvZx6fF5w',
      description: 'This song narrates a boy\'s frustration as he tries to focus on an assassination mission while his girlfriend incessantly discusses her emotional issues, prompting him to repeatedly sing that he doesn\'t want to talk and will address it later.',
      albumArt: 'path/to/abhi-nahi-album-art.jpg' // Add the path to the album art
    }
  ];

  const spotifyLinks = [
    {
      title: 'AUDACITY',
      link: 'https://open.spotify.com/track/1N4TubxZXkhFTGEICOqAht?si=4f46d6aaf29b462b',
      albumArt: 'https://marketplace.canva.com/EAFy2GgsPAo/2/0/1600w/canva-red-minimalist-creative-man-without-head-album-cover-_bB_o4a7jdE.jpg' // Add the path to the album art
    },
    {
      title: 'SULTRY',
      link: 'https://open.spotify.com/track/4FW7RGggxRZ0f8nRNzUOLd?si=b180815f4b394f0b',
      albumArt: 'https://marketplace.canva.com/EAFy2GgsPAo/2/0/1600w/canva-red-minimalist-creative-man-without-head-album-cover-_bB_o4a7jdE.jpg' // Add the path to the album art
    },
    {
      title: 'SLIDE ZARA',
      link: 'https://open.spotify.com/track/5svinFbE044frhIYJzs2GZ?si=be8e6e4beb354195',
      albumArt: 'https://marketplace.canva.com/EAFy2GgsPAo/2/0/1600w/canva-red-minimalist-creative-man-without-head-album-cover-_bB_o4a7jdE.jpg' // Add the path to the album art
    },
    {
      title: 'FIROZI FITOOR',
      link: 'https://open.spotify.com/track/327vFaJvqx2yD9gyUTYB9U?si=59a6f8d6ac454e95',
      albumArt: 'https://marketplace.canva.com/EAFy2GgsPAo/2/0/1600w/canva-red-minimalist-creative-man-without-head-album-cover-_bB_o4a7jdE.jpg' // Add the path to the album art
    }
  ];

  return (
    <section className="works">
      <h2>Works</h2>
      {works.map((work, index) => (
        <div key={index} className="work-item">
          <a href={work.youtube} target="_blank" rel="noopener noreferrer" className="work-title">
            <img src={work.albumArt} alt={`${work.title} album art`} className="album-art" />
            {work.title}
          </a>
          <p>{work.description}</p>
        </div>
      ))}
      <h2>Discography</h2>
      <div className="spotify-links">
        {spotifyLinks.map((spotify, index) => (
          <a key={index} href={spotify.link} target="_blank" rel="noopener noreferrer" className="spotify-item">
            <img src={spotify.albumArt} alt={`${spotify.title} album art`} className="large-album-art" />
            <span>{spotify.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Works;
