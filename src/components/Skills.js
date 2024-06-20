import React from 'react';
import { FaTools } from 'react-icons/fa';

const Skills = () => {
  const skills = ['Mix and Master', 'Vocalist, Singer & Songwriter', 'Guitar & Keys', 'FL Studio & Plugins'];

  return (
    <section>
      <h2>Skills</h2>
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