import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Resume Review AI</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
