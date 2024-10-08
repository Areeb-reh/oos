import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/header.css'; // Ensure you have this CSS file
import image from "../images/OSS_logo.png"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 60 },
    },
    closed: {
      opacity: 0,
      x: '-100%',
      transition: { type: 'spring', stiffness: 60 },
    },
  };

  const webMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
      },
    },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {isMobile ? (
          <>
            <motion.div
              className="menu-icon"
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
            >
              &#9776;
            </motion.div>
            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  className={`menu ${isOpen ? 'open' : ''}`} // Add conditional class
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={mobileMenuVariants}
                >
                  <li className="menu-item"><a href="#home">Home</a></li>
                  <li className="menu-item"><a href="#about">About</a></li>
                  <li className="menu-item"><a href="#services">Services</a></li>
                  <li className="menu-item"><a href="#contact">Contact</a></li>
                </motion.ul>
              )}
            </AnimatePresence>
          </>
        ) : (
          <motion.div
            className="menu"
            initial="hidden"
            animate="visible"
            variants={webMenuVariants}
          >
            <h1 className=" oss-heading"><img src={image} alt="" style={{height:"20vh"}} /></h1>
            <ul className="menu-items">
              <li className="menu-item"><a href="#home">Work</a></li>
              <li className="menu-item"><a href="#about">Services</a></li>
              <li className="menu-item"><a href="#services">About</a></li>
              <li className="menu-item"><a href="#services">News</a></li>
              <li className="menu-item"><a href="#services">Team</a></li>
            </ul>
            <button className="contact-button"><a href="#contact">Contact</a></button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Header;
