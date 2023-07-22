import React from 'react'
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import codeImg from "../../assets/images/codeimg.jpg";
import "./Offerings.css";

export default function Offerings  () {
  return (
    <>
    <section className="ruleclass">
      <Container>
        <Row>
          <div className="points-container">
            <h2 className="heading">Our Offerings</h2>
            <ul className="rules-list">
              <li>1. Help your brand app/website get more clicks or downloads.</li>
              <li>2. With the help of our social media reach, we can help your organization get better social media presence.</li>
              <li>3. In this digital era, meme marketing and moment marketing is a must, and our team can help your brand with that.</li>
              <li>4. In our hackathon, we are expecting a footfall of around 5000+ so we can help in increasing your brand on-ground presence too.</li>
              <li>5. Special videos, posts, and reels dedicated to your brand.</li>
              <li>6. Logos on posts, certificates, banners, etc.</li>
              <li>7. Offline goodies distribution of your brand to increase brand awareness.</li>
            </ul>
          </div>
          <div className="image-container">
            <img src={codeImg} alt="hackathon" className="image" />
          </div>
        </Row>
      </Container>
      <div className="faltudiv"></div>
    </section>
    </>
    
  );
}
