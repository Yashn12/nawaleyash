import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Validate all fields
    if (!name || !email || !message) {
      alert('All fields are required!');
      return;
    }

    // EmailJS Integration
    emailjs
      .send(
        'service_q2nrasg', // Replace with your EmailJS Service ID
        'template_1kfjrh2', // Replace with your EmailJS Template ID
        formData,
        'mR1vTMubGgnNhsG8O' // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again later.');
        }
      );
  };

  return (
    <div id='contact'>
      <h1 className="heading">Let's Connect</h1>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="input-field message-field"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
        {isSubmitted && <p className="success-message">Thank you for your message!</p>}
      </div>
    </div>
  );
}

export default Contact;
