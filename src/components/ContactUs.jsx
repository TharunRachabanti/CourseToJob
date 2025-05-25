import React, { useState } from 'react';
import '../styles/contactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just alert the form data
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({name: '', email: '', subject: '', message: ''});
  };

  return (
    <section className="contact-us-section" id="contact-us">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name<span>*</span></label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email<span>*</span></label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your email address" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject<span>*</span></label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subject of your message" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message<span>*</span></label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Write your message here..." rows="5" />
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
  );
};

export default ContactUs;
