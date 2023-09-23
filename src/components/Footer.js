import React from 'react';
import './css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="col-lg-4 col-md-6 my-3">
            <h4>About Us</h4>
            <p>Learn more about our gym's history, values, and mission.</p>
          </div>
          <div className="col-lg-4 col-md-6 my-3">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/membership">Membership Plans</a></li>
              <li><a href="/classes">Classes and Schedule</a></li>
              <li><a href="/trainers">Trainers</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12">
            <h4>Contact Us</h4>
            <p>123 Gym Street<br />City, State 12345<br />Phone: (123) 456-7890<br />Email: info@example.com</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <p>&copy; {new Date().getFullYear()} Your Gym Name</p>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
