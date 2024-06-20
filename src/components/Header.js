import React from 'react';
import { FaGuitar, FaMicrophone, FaMusic } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <h1>Shahe</h1>
      <p>
        Hi, I'm Shahe, an artist, professional vocalist, singer/songwriter, and producer with over six years of experience in music production, specializing in pop and dance music.
      </p>
      <div className="icons">
        <FaGuitar />
        <FaMicrophone />
        <FaMusic />
      </div>
    </header>
  );
};

export default Header;