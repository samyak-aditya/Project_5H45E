import React from 'react';
import { FaTools } from 'react-icons/fa';
import guitar from '../images/electric-guitar.gif';
import mic from '../images/shahe-mic.jpg';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  const skills = [
    {
      name: 'Mix and Master',
      backgroundImage: mic
    },
    {
      name: 'Vocalist, Singer & Songwriter',
      backgroundImage: mic
    },
    {
      name: 'Guitar & Keys',
      backgroundImage: mic
    },
    {
      name: 'FL Studio & Plugins',
      backgroundImage: mic
    }
  ];

  return (
    <section className="skills">
      <h2 style={{ display: 'flex', alignItems: 'center' }}>
        Skills
        <img src={guitar} alt="music" style={{ height: '45px', width: '45px', marginLeft: '10px' }} />
      </h2>
      <ul className="listskill">
        {skills.map((skill, index) => (
                          <Tilt tiltMaxAngleY={5} tiltMaxAngleX={5} tiltReverse>
          <li key={index} style={{ position: 'relative', height: '250px', marginBottom: '10px', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${skill.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              zIndex: 0,
              filter: 'brightness(0.7)'
            }}></div>
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', padding: '10px', color: 'white' }}>
              <FaTools style={{ marginRight: '10px' }} /> {skill.name}
            </div>
          </li></Tilt>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
