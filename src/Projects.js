import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import react2 from "./images/react2.png";
import user_login_system from "./images/user-login-system.png";
import when_to_run from "./images/when-to-run.png";
import kruskal_alg from "./images/kruskal-alg.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import github_logo from "./images/Github.png";

const print = (e) => {
  console.log(e.target.id);
};

const redirect = (e) => {
  if (e.target.id === "react-github") {
    window.open("https://github.com/bshien/User-Login-System", "_blank");
  } else if (e.target.id === "user-github") {
    window.open("https://github.com/bshien/User-Login-System", "_blank");
  } else if (e.target.id === "kruskal-github") {
    window.open("https://github.com/bshien/k", "_blank");
  } else if (e.target.id === "run-github") {
    window.open("https://github.com/bshien/whentorun", "_blank");
  }
};

const Projects = () => {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  return (
    <>
      <Container>
        <Row xs={1} sm={2} md={4}>
          <Col>
            <Card onClick={handleShow1}>
              <Card.Img
                style={{ height: "12rem" }}
                variant="top"
                src={react2}
              />
              <Card.Title className="text-center">React Website</Card.Title>
              <Card.Subtitle className="pl-5" style={{ opacity: 0.5 }}>
                React
              </Card.Subtitle>
            </Card>
          </Col>
          <Col>
            <Card onClick={handleShow2}>
              <Card.Img
                style={{ height: "12rem" }}
                variant="top"
                src={user_login_system}
              />
              <Card.Title className="text-center">User Login System</Card.Title>
              <Card.Subtitle style={{ opacity: 0.5 }}>Javascript</Card.Subtitle>
            </Card>
          </Col>
          <Col>
            <Card onClick={handleShow3}>
              <Card.Img
                style={{ height: "12rem" }}
                variant="top"
                src={kruskal_alg}
              />
              <Card.Title className="text-center">
                Kruskal's Algorithm
              </Card.Title>
              <Card.Subtitle style={{ opacity: 0.5 }}>Java</Card.Subtitle>
            </Card>
          </Col>
          <Col>
            <Card onClick={handleShow4}>
              <Card.Img
                style={{ height: "12rem" }}
                variant="top"
                src={when_to_run}
              />
              <Card.Title className="text-center">When to Run</Card.Title>
              <Card.Subtitle style={{ opacity: 0.5 }}>Python</Card.Subtitle>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>React Website</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <p>The website you are looking at right now!</p>
            <p>-A static website written in React and React Bootstrap</p>
            <p>-Fully responsive, adjusts format for different screen sizes</p>
            <p>-Portfolio which displays skills and projects</p>
          </>
        </Modal.Body>
        <Image
          id="react-github"
          className="mx-auto"
          src={github_logo}
          style={{ height: "8rem", width: "8rem", opacity: 0.5 }}
          alt="clickable_github_logo"
          onClick={redirect}
          roundedCircle
          fluid
        />
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>User Login System</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            -Uses Javascript, EJS, express.js, MongoDB, bcrypt.js, passport.js,
            AWS Simple Email Service
          </p>
          <p>-User can create an account and log in</p>
          <p>
            -Once logged in the site will display time since account creation
          </p>
          <p>-Includes forgot password functionality</p>
        </Modal.Body>
        <Image
          id="user-github"
          className="mx-auto"
          src={github_logo}
          style={{ height: "8rem", width: "8rem", opacity: 0.5 }}
          alt="clickable_github_logo"
          onClick={redirect}
          roundedCircle
          fluid
        />
      </Modal>
      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Kruskal's Algorithm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>-Finds the minimum weight spanning tree of a graph</p>
          <p>-Wrote an ADT for the Disjoint Set data structure</p>
        </Modal.Body>
        <Image
          id="kruskal-github"
          className="mx-auto"
          src={github_logo}
          style={{ height: "8rem", width: "8rem", opacity: 0.5 }}
          alt="clickable_github_logo"
          onClick={redirect}
          roundedCircle
          fluid
        />
      </Modal>
      <Modal show={show4} onHide={handleClose4}>
        <Modal.Header closeButton>
          <Modal.Title>When to Run</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            -Uses tkinter to display next available time to run under a user set
            temperature and location
          </p>
          <p>-Temperature data received from Dark Sky API</p>
          <p>
            -Geocoder is used to get the longitude and latitude from location
            name
          </p>
        </Modal.Body>
        <Image
          id="run-github"
          className="mx-auto"
          src={github_logo}
          style={{ height: "8rem", width: "8rem", opacity: 0.5 }}
          alt="clickable_github_logo"
          onClick={redirect}
          roundedCircle
          fluid
        />
      </Modal>
    </>
  );
};

export default Projects;
