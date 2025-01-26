import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div>
      {/* <Navbar /> */}
      <main className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p className="subtitle">Get in touch with our team</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>📍 Location</h3>
              <p>123 Street Photography Lane<br />Urban District, City 12345</p>
            </div>
            <div className="info-item">
              <h3>📧 Email</h3>
              <p>info@streetandculture.com</p>
            </div>
            <div className="info-item">
              <h3>📱 Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="info-item">
              <h3>⏰ Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Weekend: By Appointment</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default ContactUs;
