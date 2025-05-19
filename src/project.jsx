import React from 'react';
import './skill.css';
function Project() {
  return (
    <div>
      <h1 className='hed' data-aos="fade-up">Project Page:</h1>
      <div className="skill-container">
      <h1 data-aos="fade-left" data-aos-delay="100"> My Projects:</h1>
      
      <div className='home1'>
      <h2 data-aos="fade-left" data-aos-delay="200">Calcaltor:</h2>
      <p>A simple and interactive calculator built using Streamlit, offering real-time basic arithmetic operations (addition, subtraction, multiplication, division) with a clean and responsive UI. Ideal for demonstrating frontend logic with Python and Streamlit framework</p>

    </div>
      <div className='home1'>
      <h2 data-aos="fade-left" data-aos-delay="300">Emergency SOS Assistance App:</h2>
      <p>A powerful emergency response app developed using Streamlit. Features include a One-Tap SOS button, live location sharing, emergency contact management, and offline support for sending SOS messages. Designed for fast, reliable help in critical situations with a user-friendly interface.</p>

    </div>
      <div className='home1'>
      <h2 data-aos="fade-left" data-aos-delay="400"> My Portfolio Website:</h2>
      <p>This is my personal portfolio website, designed and developed using React JS. It showcases my projects, skills, and contact information with a modern, responsive UI. Built to reflect my passion for development and provide a professional online presence.</p>

      </div>
    <div className="home1">
        <p className="copy" data-aos="fade-left" data-aos-delay="50">&copy; 2025 Swaranraj. All rights reserved.</p>
      </div>
      </div>
    </div>
  );
}

export default Project;