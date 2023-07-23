import React from "react";
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

const themesData = [
  {
    title: "Open Innovation",
    description:
      "Open innovation is based on the notion that ideas can come from anywhere. It means opening up the innovation process beyond boundaries in order to increase one's own creative potential through the active strategic use of the environment.",
  },
  {
    title: "EdTech",
    description:
      "The education system continues to face multiple challenges in terms of the quality and delivery of education. Tech-based solutions can bridge the gap in learning and streamline the education system.",
  },
  {
    title: "AR/VR",
    description:
      "Augmented reality merges the real and virtual worlds by processing the actual environment through the computer's vision. The participants will have to develop a combination of real-world and computer-generated pictures which should have the potential to revolutionize the way we interact with our surroundings forever. AR and VR could mix our perceptions and senses in a variety of situations, including driving, video games, and healthcare",
  },
  {
    title: "FinTech",
    description:
      "You will have to develop a financial technology or a product that may come in handy for consumers and institutional customers. To help you get a better idea we have a few example applications which include innovation in risk management, mobile payments, big data, trading, retail banking, investing, personal finance, and so on.",
  },
  {
    title: "Productivity & Networking",
    description:
      "Productivity is important to get more of your work done while networking is what catalyzes it and you need to build something that accelerates both. People use various apps for productivity and networking so give them a reason to use a new one.",
  },
  {
    title: "Healthcare",
    description:
      "Testing and healthcare solutions are the need of the hour! The participants will have to develop a model to tackle the challenges revolving around healthcare. Some well knows healthcare applications like GENERIS: DNA & Nutrition App, Medlife, and 1mg which help in either providing consultations or delivering prescribed drugs would prove resourceful to get an idea of developing models in the field of healthcare.",
  },
  {
    title: "Web3",
    description:
      "Web3 is need of Future. Blockchain and Cryptocurrency have been in the limelight for a while now. However, Web3 is a much larger field that aims to improve financial services by using software and emerging tech solutions.",
  },

  // Add more themes as needed
];

export default function Themes() {
  return (
    <>
      ~
      <section className="themes">
        <div className="themes-container">
          {themesData.map((theme, index) => (
            <div className="theme-box" key={index}>
              <h3>{theme.title}</h3>
              <p>{theme.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
