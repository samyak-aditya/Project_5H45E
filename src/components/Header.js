import React from 'react';
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
const Header = () => {
  return (
    <header >
        <motion.div
        
        initial={{ x: '-100%',opacity:"0" }} // Starting position
        animate={{ x: '0%',opacity:"1" }} // Ending position
        transition={{type:"spring", delay: 1, ease: 'easeOut', duration: 2 }} // Animation settings
      >
        <h1>SHAHE</h1>
      </motion.div>
      <p>
      
      Hi, I'm Shahe<Typewriter
  options={{
    strings: ['an artist', 'a professional vocalist', 'a singer', 'a songwriter','and producer'],
    autoStart: true,
    loop: true,
  }}
/>
       
      </p>
      
    </header>
  );
};

export default Header;