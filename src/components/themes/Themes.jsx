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
import {FaLightbulb, FaMoneyCheck, FaTwitter} from "react-icons/fa";;
import {BsBook} from "react-icons/bs";
import {GiHealthNormal} from "react-icons/gi";
import {SiHiveBlockchain} from "react-icons/si";
import {BiNetworkChart} from "react-icons/bi";
import {PiVirtualRealityLight} from "react-icons/pi";

const themesData = [
  { title: 'Open Innovation', icon: <FaLightbulb/> },
  { title: 'EdTech', icon: <BsBook/> },
  { title: 'AR/VR', icon: <PiVirtualRealityLight/>},
  { title: 'FinTech', icon: <FaMoneyCheck/> },
  { title: 'Productivity & Networking', icon: <BiNetworkChart/> },
  { title: 'Healthcare', icon: <GiHealthNormal/> },
  { title: 'Web3', icon: <SiHiveBlockchain/> },
  
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
    <div className="heading"><h2>Themes</h2></div>
      <div data-aos="fade-up">
      <div className="themes-container">
        {themesData.map((theme, index) => (
          <div className="theme-box" key={index}>
            <div className="circleShape">{theme.icon}</div>

            <h3>{theme.title}</h3>
          </div>
        ))}
      </div>
      </div>
    </section>
    </>
  );
}
