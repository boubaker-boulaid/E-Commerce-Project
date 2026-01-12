import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="h2 section-title">Contact Us</h2>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <div className="info-content">
                <h3 className="h4">Address</h3>
                <address>2751 S Parker Rd, Aurora, CO 80014, United States</address>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <ion-icon name="call-outline"></ion-icon>
              </div>
              <div className="info-content">
                <h3 className="h4">Phone</h3>
                <a href="tel:+557343673257">+557343673257</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="info-content">
                <h3 className="h4">Email</h3>
                <a href="mailto:footcap@help.com">footcap@help.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <ion-icon name="time-outline"></ion-icon>
              </div>
              <div className="info-content">
                <h3 className="h4">Opening Hours</h3>
                <p>Mon - Tue: 8AM - 10PM</p>
                <p>Wed: 8AM - 7PM</p>
                <p>Fri: 7AM - 12PM</p>
                <p>Sat: 9AM - 8PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit="" className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value=""
                  onChange=""
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="5"
                  className="form-input"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                <span>Send Message</span>
                <ion-icon name="paper-plane-outline" aria-hidden="true"></ion-icon>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
