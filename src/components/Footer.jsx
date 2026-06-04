import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2026 Syra. All rights reserved.</p>
        
        <div className="footer-about">
          <p><b>Meet Syra, Your Smart Health Care AI Assistant 🤖✨</b></p>
          <p>Syra — Smart Universal User Support & Resource Integration</p>
          <p>An AI-powered healthcare chatbot, created by Subham Khandual.</p>
          <p>Your 24/7 health companion — ready to assist with symptoms, medication info,</p>
          <p>wellness tips, and general health guidance anytime you need it.</p>
          <p>Built with love, code, and a dash of coffee by Subham! ☕</p>
        </div>

        <div className="footer-social">
          <a href="https://x.com/Subham34713" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://www.facebook.com/profile.php?id=100057584082708" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://github.com/SubhamKhandual007" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/subham-khandual/" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>

        <p className="footer-smiley">Your AI-powered healthcare companion. 😄💻</p>
      </div>
    </footer>
  );
};

export default Footer;
