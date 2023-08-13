import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/images/codechef-logo.jpg";
import { Link } from "react-scroll";
import contactImg from '../../assets/images/contact.png'
import menu from '../../assets/images/menu.png'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbar-body">
        <nav className="navbar">
          <img src={logo} className="logo" />
          <div className="desktopMenu">
            <Link activeClass='active'to='home' smooth={true} offset={-100} spy={true} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active'to='about' smooth={true} offset={-100} spy={true} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active'to='themes' smooth={true} offset={-100} spy={true} duration={500} className="desktopMenuListItem">Themes</Link>
            <Link activeClass='active'to='participation' smooth={true} offset={-100} spy={true} duration={500} className="desktopMenuListItem">Participation</Link>
          </div>
          <button className="desktopMenuBtn" onClick={()=>{
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
          }}>
            <img src={contactImg} className="desktopMenuImg" />Contact Us</button>

          <img src={menu} className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
          <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active'to='home' smooth={true} offset={-100} spy={true} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active'to='about' smooth={true} offset={-50} spy={true} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active'to='themes' smooth={true} offset={-50} spy={true} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Themes</Link>
            <Link activeClass='active'to='participation' smooth={true} offset={-100} spy={true} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Participation</Link>
            <Link activeClass='active'to='contact' smooth={true} offset={-50} spy={true} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
          </div>
        </nav>
    </div>
  );
}
