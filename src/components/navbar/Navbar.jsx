import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import contactImg from "../../assets/images/contact.png";
import menu from "../../assets/images/menu.png";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
  return (
    <div className={colorChange ? 'navbar_body colorChange' : 'navbar_body'}>
      <nav className="navbar" >
        <div className="desktopMenu">
          <Link to="home" smooth={true} offset={-100} spy={true} duration={500} className="desktopMenuListItem">
            Home
          </Link>
          <Link to="about" smooth={true} offset={-50} spy={true} duration={500} className="desktopMenuListItem">
            About
          </Link>
          <Link to="themes" smooth={true} offset={-50} spy={true} duration={500} className="desktopMenuListItem">
            Themes
          </Link>
          <Link to="participation" smooth={true} offset={-100} spy={true} duration={500} className="desktopMenuListItem">
            Participation
          </Link>
        </div>
        <button
          className="desktopMenuBtn contactButton"
          onClick={() => {
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={contactImg} className="desktopMenuImg" alt="Contact" />
          Contact Us
        </button>
        <img
          src={menu}
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
          alt="Menu"
        />
        <div className={`navMenu ${showMenu ? "active" : ""}`}>
          <Link to="home" smooth={true} offset={-100} spy={true} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>
            Home
          </Link>
          <Link to="about" smooth={true} offset={-50} spy={true} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>
            About
          </Link>
          <Link to="themes" smooth={true} offset={-50} spy={true} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>
            Themes
          </Link>
          <Link to="participation" smooth={true} offset={-100} spy={true} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>
            Participation
          </Link>
          <Link to="contact" smooth={true} offset={-50} spy={true} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
