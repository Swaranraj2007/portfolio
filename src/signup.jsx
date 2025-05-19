// src/signup.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS CSS for animations
import './navbar.css';
import './skill.css';

function Contect() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duration of the animation
      easing: 'ease-in-out',  // Easing function
      once: true,  // Trigger animation only once
    });
  }, []);

  return (
    <div>
      <h1 className='hed' data-aos="fade-up">Contact Page:</h1>

      <div className='home1 con' data-aos="fade-up">
        <div data-aos="fade-right">
          <h2>Name:</h2>
          <p>Swaranraj M</p>
        </div>
        <div data-aos="fade-left">
          <h2>Phone number:</h2>
          <p>7538830928</p>
        </div>
        <div data-aos="fade-right">
          <h2>Email:</h2>
          <p><a href="mailto:rswaran3452gmail.com" className='mail'>rswaran345@gmail.com</a></p>
        </div>
        <div data-aos="fade-left">
          <h2>GitHub:</h2>
          <p>Swaranraj2007</p>
        </div>
        <div data-aos="fade-up">
          <h2>Linkedin:</h2>
          <p><a href="http://www.linkedin.com/in/swaranraj-m-207480327" target='_black' rel="noopener noreferrer">Go to linkedin</a></p>
        </div>
      </div>

      <div className="home1 skill-container" data-aos="fade-up">
        <p className="copy">&copy; 2025 Swaranraj. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Contect;
