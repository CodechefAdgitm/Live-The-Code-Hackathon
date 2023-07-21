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

export default function Themes() {
  return (
    <>
      <div className="faltudiv"></div>
      <div className="abc">
        <Container className="con">
          <Row className="rowclass">
            <Col md>
              <h2 id="themes" className="glow">
                THEMES
              </h2>
            </Col>
          </Row>
          <Row className="rowclass">
            <Col md>
              <Pan />
            </Col>
            <Col md>
              <Healthcare />
            </Col>
            <Col md>
              <Web3 />
            </Col>
          </Row>
          <Row className="rowclass">
            <Col md>
              <Edtech />
            </Col>
            <Col md>
              <Arvr />
            </Col>
            <Col md>
              <Fintech />
            </Col>
          </Row>
          <Row className="rowclass">
            <Col md>
              <Open />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="abc2">
        <Container md>
          <Row>
            <Col md>
              <h2 id="themes" className="glow">
                THEMES
              </h2>
            </Col>
          </Row>
          <Row>
            <Carousel data-bs-theme="light" className="ca">
              <Carousel.Item>
                <Pan />
              </Carousel.Item>
              <Carousel.Item>
                <Healthcare />
              </Carousel.Item>
              <Carousel.Item>
                <Web3 />
              </Carousel.Item>
              <Carousel.Item>
                <Edtech />
              </Carousel.Item>
              <Carousel.Item>
                <Arvr />
              </Carousel.Item>
              <Carousel.Item>
                <Fintech />
              </Carousel.Item>
              <Carousel.Item>
                <Open />
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </div>
      <div className="faltudiv"></div>
    </>
  );
}
