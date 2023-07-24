import React, {useEffect} from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Pan from "./cmp/pan.jsx";
import Healthcare from "./cmp/healthcare.jsx";
import Web3 from "./cmp/web3.jsx";
import Open from "./cmp/open.jsx";
import Edtech from "./cmp/edtech.jsx";
import Arvr from "./cmp/arvr.jsx";
import Fintech from "./cmp/Fintech.jsx";
import Carousel from "react-bootstrap/Carousel";
import "./Themes.css";
import AOS from 'aos';



const themesData = [
  { title: 'Open Innovation', description: 'Description of Theme 1' },
  { title: 'EdTech', description: 'Description of Theme 2' },
  { title: 'AR/VR', description: 'Description of Theme 3' },
  { title: 'FinTech', description: 'Description of Theme 4' },
  { title: 'Productivity & Networking', description: 'Description of Theme 1' },
  { title: 'Healthcare', description: 'Description of Theme 2' },
  { title: 'Web3', description: 'Description of Theme 3' },
  
];

export default function Themes() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <>
      <section className="themes">
      <div data-aos="fade-up">
      <div className="themes-container">
        {themesData.map((theme, index) => (
          <div className="theme-box" key={index}>
            <h3>{theme.title}</h3>
          </div>
        ))}
      </div>
      </div>
    </section>
    </>
  );
}
