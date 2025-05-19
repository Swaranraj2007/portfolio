import React from 'react';
import './skill.css';

function Skill() {
  return (
    <div>
      <h1 className='hed' data-aos="fade-down">Skill Page:</h1>
      <div className="skill-container">
        <div className='home1' >
          <h2  data-aos="fade-right">Frontend:</h2>
          <ul  data-aos="fade-right">
            <li>Html</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Streamlit</li>
          </ul>
        </div>

        <div className='home1' >
          <h2 data-aos="fade-left" data-aos-delay="100">Backend:</h2>
          <ul data-aos="fade-left" data-aos-delay="150"><li>Python</li></ul>
        </div>

        <div className='home1' >
          <h2 data-aos="fade-right" data-aos-delay="200">Database:</h2>
          <ul data-aos="fade-left" data-aos-delay="250"><li>MySQL</li></ul>
        </div>

        <div className='home1' >
          <h2 data-aos="fade-left" data-aos-delay="300">Server:</h2>
          <ul data-aos="fade-left" data-aos-delay="350"><li>WampServer</li></ul>
        </div>

        <div className='home1' >
          <h2 data-aos="fade-up" data-aos-delay="400">Technologies:</h2>
          <ul data-aos="fade-up" data-aos-delay="450"><li>Figma</li></ul>
        </div>
            <div className="home1">
        <p className="copy" data-aos="fade-left" data-aos-delay="50">&copy; 2025 Swaranraj. All rights reserved.</p>
      </div>
      </div>
    </div>
  );
}

export default Skill;
