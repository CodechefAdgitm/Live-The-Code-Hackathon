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
          <h5>Email:</h5>
          <p> Codechef <br/> codechef.adgitm@adgitmdelhi.ac.in <br/> codechefadgitmchapter@gmail.com <br/> Elixir <br/>techcommunityelixir@gmail.com </p>
         
        </div>
        <div className="footer-middle">
          <h5>Phone: </h5>
          <p> Codechef <br/>Mansi Sharma - +91 99539 30377  <br/> Tanisha Bansal - +91 92131 16476 <br/> Elixir <br/>  Ansh Saxena - +91 73557 43158 <br/></p>
        </div>
        <div className="footer-right">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://www.linkedin.com/company/codechefadgitm/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a></li>
            <li><a href="https://www.instagram.com/codechefadgitm/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a></li>
            <li><a href="https://twitter.com/hackathon " target="_blank" rel="noopener noreferrer"><FaTwitter/></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Live the code Hackathon 2.0 All rights reserved.</p>
      </div>
    </footer></>
    
  );
}
