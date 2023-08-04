import React from 'react';
import "./navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand" style={{color:"white"}}>Live the code 2.0</a>

        <ul className="nav-links"> {/* Add the class for styling the navigation links in a single line */}
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
    </nav>
  )
}