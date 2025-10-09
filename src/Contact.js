import React from 'react';
import './Contact.css';

function Contact() {
  const contactInfo = [
    {
      title: 'Email',
      detail: 'esergjoka@gmail.com',
      link: 'mailto:esergjoka@gmail.com',
      icon: '📧'
    },
    {
      title: 'Phone',
      detail: '+1 (862) 215-5647',
      link: 'tel:+18622155647',
      icon: '📱'
    },
    {
      title: 'Location',
      detail: 'Garfield, Nj',
      link: null,
      icon: '📍'
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="info-title">Contact Information</h3>
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-card">
              <span className="contact-icon">{info.icon}</span>
              {info.link ? (
                <span><strong>{info.title}:</strong> <a href={info.link} className="contact-value">{info.detail}</a></span>
              ) : (
                <span><strong>{info.title}:</strong> <span className="contact-value">{info.detail}</span></span>
              )}
            </div>
          ))}
          
          <div className="social-media">
            <h4 className="social-title">Follow Me</h4>
            <div className="social-links">
              <a href="https://github.com/eser00" className="social-link github">
                <span className="social-icon">🐙</span> GitHub
              </a>
              <a href="https://www.linkedin.com/in/eser-gjoka-570576291/" className="social-link linkedin">
                <span className="social-icon">💼</span> LinkedIn
              </a>
              <a href="https://x.com/Cristiano" className="social-link twitter">
                <span className="social-icon">🐦</span> Twitter
              </a>
              <a href="https://www.instagram.com/cristiano/" className="social-link instagram">
                <span className="social-icon">📸</span> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;