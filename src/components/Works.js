import React from 'react';

const Works = () => {
  const works = [
    {
      title: 'TU MERI',
      youtube: 'https://youtu.be/O0eLnJ_-v-s',
      description: 'A boy’s realization that his life has improved and become more vibrant since the girl who caused him pain is no longer a part of it.'
    },
    {
      title: 'ABHI NAHI',
      youtube: 'https://youtu.be/qDIvZx6fF5w',
      description: 'A boy’s frustration as he tries to focus on an assassination mission while his girlfriend incessantly discusses her emotional issues.'
    }
  ];

  const spotifyLinks = [
    'https://open.spotify.com/track/1N4TubxZXkhFTGEICOqAht',
    'https://open.spotify.com/track/4FW7RGggxRZ0f8nRNzUOLd'
  ];

  return (
    <section>
      <h2>Works</h2>
      {works.map((work, index) => (
        <div key={index}>
          <h3>{work.title}</h3>
          <p>{work.description}</p>
          <a href={work.youtube} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
        </div>
      ))}
      <h3>Spotify</h3>
      {spotifyLinks.map((link, index) => (
        <a key={index} href={link} target="_blank" rel="noopener noreferrer">Listen on Spotify</a>
      ))}
    </section>
  );
};

export default Works;