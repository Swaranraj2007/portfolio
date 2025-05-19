import './navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <span><Link to="/">Home</Link></span>
      <span><Link to="/skill">skill</Link></span>
      <span><Link to="/project">Project</Link></span>
      <span><Link to="/signup">Contect</Link></span>
    </nav>
  );
}
export default Navbar;