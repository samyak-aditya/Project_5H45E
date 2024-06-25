// Contact.js
import React from 'react';


import emailGif from '../images/email_nobg.gif';


const contactDetails = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
    title: 'shahemusic@gmail.com',
    info: '',
    link: 'mailto:shahe@example.com',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/0/488.png',
    title: '+91 7970856179',
    info: '',
    link: 'tel:+1234567890',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/15713/15713420.png',
    title: '@shahemusic',
    info: '',
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
  background: 'rgba(234, 0, 234,0.2)',

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
 
  borderRadius: '8px',
  
  padding: '20px',
  margin: '10px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '27%',
  minWidth:'200px',
 display: 'flex',
 flexDirection: 'column',
 justifyContent: 'center',

  transition: 'transform 0.3s ease',
  background: 'rgba(45, 45, 255,0.3)' 

};

const iconStyle = {
  marginBottom: '10px',
};

const titleStyle = {
  fontSize: '1.35em',
  marginBottom: '10px',
  //backgroundColor: 'rgba(255, 255, 255, 1)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
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
