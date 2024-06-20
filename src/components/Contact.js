import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section>
      <h2>Contact</h2>
      <p><FaEnvelope /> Email: shahe@example.com</p>
      <p><FaPhone /> Contact Number: +1234567890</p>
      <p><FaInstagram /> Instagram: @shahemusic</p>
    </section>
  );
};

export default Contact;