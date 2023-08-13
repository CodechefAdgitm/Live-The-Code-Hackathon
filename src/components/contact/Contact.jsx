import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <>
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Contact Us</h3>
          <p>Email: codechef.adgitm@adgitmdelhi.ac.in <br/>codechefadgitmchapter@gmail.com</p>
          <p>Phone:  Himanshu Gupta - +91 9899141418 <br/>Tanisha Bansal - +91 92131 16476 <br/>Mansi Sharma - +91 99539 30377</p>
        </div>
        <div className="footer-right">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://facebook.com/hackathon" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a></li>
            <li><a href="https://twitter.com/hackathon" target="_blank" rel="noopener noreferrer"><FaInstagram/></a></li>
            <li><a href="https://instagram.com/hackathon" target="_blank" rel="noopener noreferrer"><FaTwitter/></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hackathon Site. All rights reserved.</p>
      </div>
    </footer></>
    
  );
}
