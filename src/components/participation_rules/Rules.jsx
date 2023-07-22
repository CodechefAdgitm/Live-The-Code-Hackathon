import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Rules.css";
import codeImg from "../../assets/images/codeimg.jpg";
export default function Rules() {
  return (
    <section className="participation-rules">
      <div className="image-container">
        <img src={codeImg} alt="hackathon" className="image" />
      </div>
      <div className="points-container">
        <h2 className="heading">Participation Rules</h2>
        <ul className="rules-list">
          <li>1. Team size: 1-4 members</li>
          <li>2. Individual participation is allowed</li>
          <li>3. Any participant will be part of only 1 team</li>
          <li>4. Teams can choose any of the listed themes and build a working prototype at the end of the coding phase</li>
          <li>5. No development may start before the actual date and time of the event</li>
          <li>6. Any teams that violate this rule will be automatically disqualified</li>
          <li>7. Objection to the codes will be processed accordingly by the designated mentor</li>
          <li>8. Breach of the code of conduct by one will result in the disqualification of the whole team</li>
        </ul>
      </div>
    </section>
  );
}
