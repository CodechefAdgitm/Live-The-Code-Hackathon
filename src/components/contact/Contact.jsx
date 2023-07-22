import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="ruleclass">
      <Container>
        <Row>
          <h2 className="RuleHead">Contact Details</h2>
        </Row>
        <Row className="RulePoints">
          <Col> Emails:</Col>
        </Row>
        <Row className="RulePoints">
          <Col> <a href="mailto:codechef.adgitm@adgitmdelhi.ac.in">codechef.adgitm@adgitmdelhi.ac.in</a></Col>
        </Row>
        <Row className="RulePoints">
          <Col> <a href="mailto:codechefadgitmchapter@gmail.com">codechefadgitmchapter@gmail.com</a></Col>
        </Row>
        <Row className="RulePoints">
          <Col>
           Phone Numbers:
          </Col>
        </Row>
        <Row className="RulePoints">
          <Col>
           Himanshu Gupta - +91 9899141418
          </Col>
        </Row>
        <Row className="RulePoints">
          <Col>
           Tanisha Bansal - +91 92131 16476 
          </Col>
        </Row>
        <Row className="RulePoints">
          <Col>
         Mansi Sharma - +91 99539 30377
          </Col>
        </Row>
      </Container>
      <div className="faltudiv"></div>
    </div>
  );
}
