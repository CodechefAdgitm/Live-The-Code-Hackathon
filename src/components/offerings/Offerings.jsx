import React from 'react'
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Offerings.css";

export default function Offerings  () {
  return (
    <div className="ruleclass">
     <Container>
     <Row>
          <h2 className="RuleHead">Our Offerings</h2>
        </Row>
        <Row className="RulePoints">
          <Col>1. Help your brand app/website get more clicks or downloads.
</Col>
        </Row>
        <Row className="RulePoints">
          <Col>2. With the help of our social media reach, we can help your organisation get better social media presence.</Col>
        </Row>
        <Row className="RulePoints">
          <Col>3. In this digital era, meme marketing and moment marketing is a must and our team can help your brand with that.</Col>
        </Row>
        <Row className="RulePoints">
          <Col>4. In our hackathon, we are expecting a footfall of around 5000+ so we can help in increasing your brand on-ground presence too.</Col>

        </Row>
        <Row className="RulePoints">
          <Col>5. Special videos, posts and reels dedicated to your brand.
</Col>
        </Row>
        <Row className="RulePoints">
          <Col>6. Logos on posts, certificates, banners, etc.
</Col>
        </Row>
        <Row className="RulePoints">
          <Col>
7. Offline goodies distribution of your brand to increase brand awareness.

</Col>
        </Row>
        </Container>
        <div className="faltudiv"></div>
    </div>
    
  );
}
