import phone_icon from "./images/phone.png";
import linkedin_icon from "./images/linkedin.png";
import email_icon from "./images/gmail.png";
import github_logo from "./images/Github.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "./contact.css";

const handleClick = (e) => {
  if (e.target.id === "linkedin") {
    window.open("https://www.linkedin.com/in/brandonshien/", "_blank");
  } else if (e.target.id === "github") {
    window.open("https://github.com/bshien", "_blank");
  }
};

const Contact = () => {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return (
    <>
      <Container fluid>
        <Row xs={1} sm={2} md={4}>
          <Col>
            <Image
              id="email"
              src={email_icon}
              className="icons"
              alt="clickable_email_icon"
              onClick={handleShow1}
            />
          </Col>
          <Col>
            <Image
              id="linkedin"
              className="icons pt-4"
              src={linkedin_icon}
              style={{ width: "10rem", height: "11rem", opacity: 0.8 }}
              alt="clickable_email_icon"
              onClick={handleClick}
              fluid
            />
          </Col>
          <Col>
            <Image
              id="github"
              className="icons"
              src={github_logo}
              style={{ height: "12rem", opacity: 0.8 }}
              alt="clickable_email_icon"
              onClick={handleClick}
              fluid
            />
          </Col>
          <Col>
            <Image
              id="phone"
              className="icons pt-4"
              src={phone_icon}
              style={{ width: "10rem", height: "11rem", opacity: 0.8 }}
              alt="clickable_email_icon"
              onClick={handleShow2}
              fluid
            />
          </Col>
        </Row>
      </Container>
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>bshien5124@gmail.com</p>
        </Modal.Body>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Phone Number</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>925-523-8066</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Contact;
