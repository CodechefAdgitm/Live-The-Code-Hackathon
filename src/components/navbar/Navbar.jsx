import React from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand"><span>Hackathon</span></a>
<ul className="nav-links"> {/* Add the class for styling the navigation links in a single line */}
          <Link Name="nav-item">
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
