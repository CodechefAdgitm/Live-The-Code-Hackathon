import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Ask.css";
export default function Ask() {
  return (
    <div className="ruleclass">
      <Container>
        <Row>
          <h2 className="RuleHead">Our Ask</h2>
        </Row>
        <Row className="RulePoints">
          <Col>Table</Col>
        </Row>
        
      </Container>
      <div className="faltudiv"></div>
    </div>
  );
}
