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
  { title: 'Theme 1', description: 'Description of Theme 1' },
  { title: 'Theme 2', description: 'Description of Theme 2' },
  { title: 'Theme 3', description: 'Description of Theme 3' },
  { title: 'Theme 4', description: 'Description of Theme 4' },
  { title: 'Theme 1', description: 'Description of Theme 1' },
  { title: 'Theme 2', description: 'Description of Theme 2' },
  { title: 'Theme 3', description: 'Description of Theme 3' },
  { title: 'Theme 4', description: 'Description of Theme 4' },
  // Add more themes as needed
];

export default function Themes() {
  return (
    <>
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
