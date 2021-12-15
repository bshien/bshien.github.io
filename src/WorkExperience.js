import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import ucsc_logo from "./images/ucsc.png";
import bashpole_logo from "./images/bashpole.jpg";
import { useState } from "react";

const WorkExperience = () => {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return (
    <>
      <Container fluid>
        <Row xs={1} sm={2}>
          <Col>
            <Container fluid>
              <Card onClick={handleShow1}>
                <Card.Img
                  style={{ height: "12rem", width: "16rem" }}
                  className="mx-auto"
                  variant="top"
                  src={bashpole_logo}
                />
                <Card.Title className="text-center">DevOps Intern</Card.Title>
              </Card>
            </Container>
          </Col>
          <Col>
            <Container fluid>
              <Card className="mx-auto" onClick={handleShow2}>
                <Card.Img
                  style={{ height: "12rem", width: "16rem" }}
                  className="mx-auto"
                  variant="top"
                  src={ucsc_logo}
                />
                <Card.Title className="text-center">UCSC Tutor</Card.Title>
              </Card>
            </Container>
          </Col>
        </Row>
      </Container>
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>DevOps Intern at Bashpole Inc.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <p>(June 2021 - September 2021)</p>
            <p>
              - Familiarized myself with AWS EC2, Bash, and DevOps tools such as
              Grafana, Sonarqube, Jenkins, Gogs.
            </p>
            <p>
              -Wrote Bash scripts to automate the transfer of files across EC2
              instances, to automate the backup and restoration of MariaDB/MySQL
              databases, and to automate keeping Git repositories updated
              through Gogs.
            </p>
          </>
        </Modal.Body>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>UCSC Tutor for CSE 12</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>(January 2020 - June 2020)</p>
          <p>-Tutored for Computer Systems and Assembly Language</p>
          <p>
            -Demonstrated debugging and problem solving skills to 50 students.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WorkExperience;
