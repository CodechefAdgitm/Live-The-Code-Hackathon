import React, { useState } from 'react';
import { RxCross1 } from "react-icons/Rx";
import { FiMenu } from "react-icons/fi";
import "./navbar.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${showMenu ? 'mobile-menu' : ''}`}>
      <div className="container">
        <a href="/" className="navbar-brand">Live the Code Hackathon</a>

        <div className={`nav-links ${showMenu ? 'show' : 'hide'}`}>
          {/* Use the Bootstrap Navbar component */}
          <ul className={`nav ${showMenu ? 'flex-column' : 'd-flex'}`}>
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#themes" className="nav-link">Themes</a>
            </li>
            <li className="nav-item">
              <a href="#participation" className="nav-link">Participation</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>

        {/* Hamburger menu icon */}
        <div className="hamburger-menu" onClick={handleMenuClick}>
          {showMenu ? <RxCross1 /> : <FiMenu />}
        </div>
      </div>
    </nav>
  )
}
