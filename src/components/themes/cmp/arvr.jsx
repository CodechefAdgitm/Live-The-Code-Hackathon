import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Arvrimg from "./img5.jpg";
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
        <h4>AR/VR</h4>
        <p>
          Augmented reality merges the real and virtual worlds by processing the
          actual environment through the computer's vision. The participants
          will have to develop a combination of real-world and
          computer-generated pictures which should have the potential to
          revolutionize the way we interact with our surroundings forever. AR
          and VR could mix our perceptions and senses in a variety of
          situations, including driving, video games, and healthcare.
        </p>
      </Modal.Body>
      <Modal.Footer className="modals">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default function arvr() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Card style={{ width: "25rem" }} border="danger" className="cardclass">
        <Card.Img variant="top" src={Arvrimg} className="cardimgbg" />
        <Card.Body className="cardtxtbg">
          <Card.Title>AR/VR</Card.Title>
          <Card.Text>
            Augmented reality merges the real and virtual worlds by processing
            the actual environment through the computer's vision. The
            participants will have to develop a combination of real-world and
            computer-...
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
