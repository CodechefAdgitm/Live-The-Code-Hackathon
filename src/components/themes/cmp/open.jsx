import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import openimg from "./img7.jpg";
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
        <h4>Open Innovation</h4>
        <p>
          Open innovation is based on the notion that ideas can come from
          anywhere. It means opening up the innovation process beyond boundaries
          in order to increase one's own creative potential through the active
          strategic use of the environment.
        </p>
      </Modal.Body>
      <Modal.Footer className="modals">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default function open() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Card style={{ width: "25rem" }} border="danger" className="cardclass">
        <Card.Img variant="top" src={openimg} className="cardimgbg" />
        <Card.Body className="cardtxtbg">
          <Card.Title>Open Innovation</Card.Title>
          <Card.Text>
            Open innovation is based on the notion that ideas can come from
            anywhere. It means opening up the innovation process beyond
            boundaries in order to increase one's own creative potential through
            the...
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
