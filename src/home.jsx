import React from 'react';
import './navbar.css';
import './skill.css';
function Home() {
  return (
    <div>


      <h1 className="hed" data-aos="fade-down">Home Page:</h1>
      <div className='home' data-aos="fade-up">
        <img src="swaranraj.jpg" alt="swaranraj pic" onClick={() => document.getElementById("fullscreen-pic").style.display = "flex"} className='pic' data-aos="zoom-in" />
        <div
          id="fullscreen-pic"
          className="fullscreen-pic"
          onClick={() => document.getElementById("fullscreen-pic").style.display = "none"}
        >
          <img src="/swaranraj.jpg" alt="Swaranraj Full" />
        </div>
        <center>
          <h1 data-aos="zoom-in">MR. Swaranraj M</h1>
        </center>

        <h2 data-aos="fade-right">About Me:</h2>
        <p data-aos="fade-left">
          Hello! I'm <strong>Swaranraj</strong>, an enthusiastic and dedicated engineering student at
          <strong> CARE College of Engineering, Trichy</strong>, specializing in software development.
        </p><br />

        <p data-aos="fade-left" data-aos-delay="100">
          I started my tech journey during my school days at
          <strong> Government Higher Secondary School, Killpennthur</strong>. Since then, I've been continuously learning and building.
        </p>
<br />
        <p data-aos="fade-right" data-aos-delay="200">Here are some of the projects I’m currently working on:</p>
        <ul data-aos="fade-up" data-aos-delay="300"><br />
          <li><strong>Smart SOS & Location Sharing App:</strong> Emergency support app with live tracking.</li><br />
          <li><strong>Simple Calculator :</strong> A calculator built using Streamlit.</li>
        </ul>
<br />
        <p data-aos="fade-right" data-aos-delay="400">I have hands-on experience in:</p>
        <ul data-aos="fade-up" data-aos-delay="500">
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript, Streamlit</li>
          <li><strong>Backend:</strong> Python</li>
          <li><strong>Database:</strong> MySQL</li>
          <li><strong>Technologies:</strong> Figma</li>
        </ul>
<br />
        <p data-aos="fade-left" data-aos-delay="600">
          I recently participated in a hackathon at
          <strong> Ramkrishna College of Engineering</strong> to gain real-world experience.
        </p>
<br />
        <p data-aos="zoom-in-up" data-aos-delay="700">
          Thank you for visiting my portfolio. Feel free to explore my work and connect with me!
        </p>
      </div>

      <div className="home1" data-aos="fade-up">
        <p className="copy" >&copy; 2025 Swaranraj. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Home;
