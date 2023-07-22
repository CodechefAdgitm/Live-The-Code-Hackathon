import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Rules.css";
export default function Rules() {
  return (
    <div className="ruleclass">
      <Container>
        <Row>
          <h2 className="RuleHead">Partcipation Rules</h2>
        </Row>
        <Row className="RulePoints">
          <Col>1. Team size: 1-4 members</Col>
        </Row>
        <Row className="RulePoints2">
          <Col>2. Individual participation is allowed</Col>
        </Row>
        <Row className="RulePoints">
          <Col>3. Any participant will be part of only 1 team</Col>
        </Row>
        <Row className="RulePoints2">
          <Col>
            4.Teams can choose any of the listed themes and build working
            protoype at the end of coding phase
          </Col>
        </Row>
        <Row className="RulePoints">
          <Col>
            5.No development may start before the actual date and time of the
            event.
          </Col>
        </Row>
        <Row className="RulePoints2">
          <Col>
            6.Any teams that violate this rule will be automatically
            disqualified
          </Col>
        </Row>
        <Row className="RulePoints">
          <Col>
            7.Objection to the codes will be processed accordingly by the
            designated mentor.
          </Col>
        </Row>
        <Row className="RulePoints2">
          <Col>
            8.Breach of code of conduct by one will result in the
            Disqualification of Whole team.
          </Col>
        </Row>
      </Container>
      <div className="faltudiv"></div>
    </div>
  );
}
