import React, { useState } from 'react';
import './css/ContactUs.css';
import contact from './images/ContactUs.png';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling form submission (e.g., sending data to the server)
    console.log(formData);
  };

  return (
    <div className="contactus my-3" id='contactus'>
        <h2 className='text-center'>Contact Us</h2>
    <div className="contact-us-container">
      <div className="contact-us-img">
        <img src={contact} alt="Contact Us" />
      </div>
      <div className="container-form">
        <p>Have questions or feedback? Send us a message.</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Contact Us
        </button>
        </form>
      </div>
    </div>
    </div>
  );
}
