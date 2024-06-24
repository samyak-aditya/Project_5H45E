// Contact.js
import React from 'react';

import emailGif from '../images/email_nobg.gif';

const contactDetails = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
    title: 'Email',
    info: 'shahe@example.com',
    link: 'mailto:shahe@example.com',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/0/488.png',
    title: 'Contact Number',
    info: '+1234567890',
    link: 'tel:+1234567890',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/15713/15713420.png',
    title: 'Instagram',
    info: '@shahemusic',
    link: 'https://www.instagram.com/shahemusic',
  },
];

const ContactCard = ({ icon, title, info, link }) => {
  return (
    <div className="contact-card" style={cardStyle}>
      <div style={iconStyle}>
        <a href={link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <img src={icon} alt={title} className="icon-img" />
        </a>
      </div>
      <h3 style={titleStyle}>{title}</h3>
      <p style={infoStyle}>{info}</p>
    </div>
  );
};

const Contact = () => {
  return (
    <section className='contacts' style={contactsStyle}>
      <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        Contacts
        <img src={emailGif} alt="email" style={{ height: '105px', width: '105px', marginLeft: '10px' }} />
      </h2>
      <div style={cardsContainerStyle}>
        {contactDetails.map((contact, index) => (
          <ContactCard 
            key={index} 
            icon={contact.icon} 
            title={contact.title} 
            info={contact.info} 
            link={contact.link} 
          />
        ))}
      </div>
    </section>
  );
};

const contactsStyle = {
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '1000px',
  margin: '0 0',
};

const cardsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  margin: '10px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '250px',
  transition: 'transform 0.3s ease',
};

const iconStyle = {
  marginBottom: '10px',
};

const titleStyle = {
  fontSize: '20px',
  marginBottom: '10px',
};

const infoStyle = {
  fontSize: '16px',
  color: '#555',
};

const linkStyle = {
  color: '#7C47E1',
  textDecoration: 'none',
};

export default Contact;
