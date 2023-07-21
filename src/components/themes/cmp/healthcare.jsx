import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import healthimg from "./img2.jpg";
// import "./Themes.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modals">
        <Modal.Title id="contained-modal-title-vcenter">
          Problem Statement
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modals">
        <h4>HealthCare</h4>
        <p>
          Testing and healthcare solutions are the need of the hour! The
          participants will have to develop a model to tackle the challenges
          revolving around healthcare. Some well knows healthcare applications
          like GENERIS: DNA & Nutrition App, Medlife, and 1mg which help in
          either providing consultations or delivering prescribed drugs would
          prove resourceful to get an idea of developing models in the field of
          healthcare.
        </p>
      </Modal.Body>
      <Modal.Footer className="modals">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default function healthcare() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Card style={{ width: "25rem" }} border="danger" className="cardclass">
        <Card.Img variant="top" src={healthimg} className="cardimgbg" />
        <Card.Body className="cardtxtbg">
          <Card.Title>Healthcare</Card.Title>
          <Card.Text>
            Testing and healthcare solutions are the need of the hour! The
            participants will have to develop a model to tackle the challenges
            revolving around healthcare. Some well knows healthcare applications
            like...
            <a href="#cardclass" onClick={() => setModalShow(true)}>
              View more..
            </a>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
