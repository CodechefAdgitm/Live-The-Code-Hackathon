import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import pandn from "./img1.jpg";
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
        <h4> Productivity & Networking</h4>
        <p>
          Productivity is important to get more of your work done while
          networking is what catalyzes it and you need to build something that
          accelerates both. People use various apps for productivity and
          networking so give them a reason to use a new one.
        </p>
      </Modal.Body>
      <Modal.Footer className="modals">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default function pan() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Card style={{ width: "25rem" }} border="danger" className="cardclass">
        <Card.Img variant="top" src={pandn} className="cardimgbg" />
        <Card.Body className="cardtxtbg">
          <Card.Title>Productivity & Networking</Card.Title>
          <Card.Text>
            Productivity is important to get more of your work done while
            networking is what catalyzes it and you need to build something that
            accelerates both. People use various apps for productivity and
            networking so...
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
