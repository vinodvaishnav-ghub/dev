import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    emailjs
      .send(
        "service_aa1fyla", // Replace with your EmailJS service ID
        "template_qdsn70a", // Replace with your EmailJS template ID
        formData,
        "myh2VdVrgLKfZIvbT" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          // setFormData({ name: "", email: "", message: "" });
          setFormData({ email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <div className="container">
      <div className="team-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our team for any inquiries</p>
      </div>

      <div className="profile-card">
        <form onSubmit={handleSubmit} className="contact-form">
          {status && <div className="status-message">{status}</div>}
          
          
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;