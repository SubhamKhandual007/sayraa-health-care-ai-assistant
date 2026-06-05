import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
const icon = '/suu2.webp';
const icon1 = '/suu1.webp';
const icon2 = '/suu3.webp';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../lib/AuthContext';

const Main = () => {
  const navigate = useNavigate();
  const { user, loginWithGoogle } = useAuth();

  const handleChatNowClick = async () => {
    console.log("Chat button clicked, user:", user);
    if (user) {
      navigate('/chat');
    } else {
      try {
        console.log("Attempting Google login...");
        await loginWithGoogle();
        console.log("Login successful, navigating to chat");
        navigate('/chat');
      } catch (err) {
        console.error("Login Error:", err);
      }
    }
  };

  const handleVideoConsultClick = () => {
    navigate('/video-consultation');
  };


  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <>
      <section className="main">
        {/* Animated Background Blobs */}
        <div className="blob-container">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>

        {/* First Section */}
        <section className="hero-section">
          <motion.div
            className="container custom-container"
            {...fadeInUp}
          >
            <div className="row align-items-center">
              <div className="col-md-6 order-2 order-md-1">
                <motion.img
                  src={icon}
                  alt="Sayraa AI Assistant"
                  className="img-fluid custom-image"
                  fetchPriority="high"
                  loading="eager"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <div className="col-md-6 order-1 order-md-2 text-center">
                <h1 className="header">
                  <b>Meet</b> <span className="sayraaText">Sayraa</span>, <br />
                  <b>Your Smart Health Care AI Assistant</b>
                </h1>
                <p className="content-text">Sayraa stands for Smart Universal User Support & Resource Integration, providing intelligent healthcare guidance, symptom analysis, and wellness support.</p>
                <button className="button-69" role="button" onClick={handleChatNowClick}>
                  <span className="text">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <b>CHAT NOW</b>
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Second Section */}
        <section className="hero-section">
          <motion.div
            className="container custom-container"
            {...fadeInUp}
          >
            <div className="row align-items-center">
              <div className="col-md-6 order-1 order-md-1 text-center">
                <h1 className="header">
                  <b>Your</b> <span className="sayraaText">Personalized</span> <br />
                  <b>Healthcare Intelligence</b>
                </h1>
                <p className="content-text">Sayraa is designed to provide proactive health tracking, analyze your symptoms, and enhance your medical awareness with precise, reliable, and empathetic AI responses.</p>
                <button className="button-69" role="button" onClick={handleVideoConsultClick}>
                  <span className="text">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                    <b style={{ marginLeft: "8px" }}>VIDEO CONSULT</b>
                  </span>
                </button>
              </div>
              <div className="col-md-6 order-2 order-md-2">
                <motion.img
                  src={icon1}
                  alt="Sayraa AI"
                  className="img-fluid custom-image"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Third Section */}
        <section className="hero-section">
          <motion.div
            className="container custom-container"
            {...fadeInUp}
          >
            <div className="row align-items-center">
              <div className="col-md-6 order-2 order-md-1">
                <motion.img
                  src={icon2}
                  alt="Intelligent Assistant"
                  className="img-fluid custom-image"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <div className="col-md-6 order-1 order-md-2 text-center">
                <h1 className="header">
                  <b>Discover</b> <span className="sayraaText">Wellness</span>, <br />
                  <b>Smart Diagnostics</b>
                </h1>
                <p className="content-text">With cutting-edge medical AI, Sayraa empowers you with accurate symptom analysis, smart health suggestions, and meaningful clinical insights.</p>
                <button className="button-69" role="button" onClick={handleChatNowClick}>
                  <span className="text">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <b>CHAT NOW</b>
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Why Choose Section */}
        <div className="feature-section-wrapper">
          <motion.div
            className="container"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h2 className="header mb-5">Why Choose Sayraa?</h2>
            <div className="row">
              {[
                { title: "Instant Triage", desc: "Immediate symptom analysis powered by clinical AI algorithms." },
                { title: "Medical Context", desc: "Engaging, health-aware conversations that prioritize your well-being." },
                { title: "Personalized Care", desc: "Tailored wellness suggestions that understand your unique health profile." }
              ].map((feature, idx) => (
                <div className="col-md-4" key={idx}>
                  <motion.div
                    className="feature-box"
                    variants={fadeInUp}
                  >
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Main;
