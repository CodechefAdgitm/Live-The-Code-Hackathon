import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import fintechimg from "./img6.jpg";
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
        <h4>FinTech</h4>
        <p>
          You will have to develop a financial technology or a product that may
          come in handy for consumers and institutional customers. To help you
          get a better idea we have a few example applications which include
          innovation in risk management, mobile payments, big data, trading,
          retail banking, investing, personal finance, and so on.
        </p>
      </Modal.Body>
      <Modal.Footer className="modals">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default function Fintech() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Card style={{ width: "25rem" }} border="danger" className="cardclass">
        <Card.Img variant="top" src={fintechimg} className="cardimgbg" />
        <Card.Body className="cardtxtbg">
          <Card.Title>FinTech</Card.Title>
          <Card.Text>
            ou will have to develop a financial technology or a product that may
            come in handy for consumers and institutional customers. To help you
            get a better idea we have a few example applications which
            include... like...
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
