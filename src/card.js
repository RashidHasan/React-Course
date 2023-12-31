import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function CardComp(props) {
  let [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);

  function addToFavorites() {
    setCounter(counter + 1);
  }

  function handleShow() {
    setShow(!show);
  }

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image_url} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          {/* <Card.Text>{props.description}</Card.Text> */}
          <Card.Text>❤️{counter}</Card.Text>
          {/* <Button variant="primary" onClick={addToFavorites}>
            Add Favorites
          </Button> */}

          <Button variant="primary" onClick={handleShow}>
            Show Details
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.description} <br /> <b>Category: {props.category}.</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleShow}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardComp;
