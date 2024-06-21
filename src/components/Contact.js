import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';
import email from '../images/email.gif'
const Contact = () => {
  return (
    <section className='contacts'>
     <h2 style={{ display: 'flex', alignItems: 'center' }}>
      Contacts
      <img src={email} alt="music" style={{ height: '45px', width: '45px', marginLeft: '10px' }} />
    </h2>
      <p><FaEnvelope /> Email: shahe@example.com</p>
      <p><FaPhone /> Contact Number: +1234567890</p>
      <p><FaInstagram /> Instagram: @shahemusic</p>
    </section>
  );
};

export default Contact;