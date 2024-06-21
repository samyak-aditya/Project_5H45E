import React from 'react';
import { FaTools } from 'react-icons/fa';
import guitar from '../images/electric-guitar.gif'
const Skills = () => {
  const skills = ['Mix and Master', 'Vocalist, Singer & Songwriter', 'Guitar & Keys', 'FL Studio & Plugins'];

  return (
    <section className='skills'>
      <h2 style={{ display: 'flex', alignItems: 'center' }}>
      Skills
      <img src={guitar} alt="music" style={{ height: '45px', width: '45px', marginLeft: '10px' }} />
    </h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <FaTools /> {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;