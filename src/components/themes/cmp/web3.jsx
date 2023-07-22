import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import webimg from "./img3.webp";
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
        <h4>WEB3</h4>
        <p>
          Web3 is need of Future. Blockchain and Cryptocurrency have been in the
          limelight for a while now. However, Web3 is a much larger field that
          aims to improve financial services by using software and emerging tech
          solutions.
        </p>
      </Modal.Body>
      <Modal.Footer className="modals">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default function web3() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Card style={{ width: "25rem" }} border="danger" className="cardclass">
        <Card.Img variant="top" src={webimg} className="cardimgbg" />
        <Card.Body className="cardtxtbg">
          <Card.Title>WEB3</Card.Title>
          <Card.Text>
            Web3 is need of Future. Blockchain and Cryptocurrency have been in
            the limelight for a while now. However, Web3 is a much larger field
            that aims to improve financial services by using software and...
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
