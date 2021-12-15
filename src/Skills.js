import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import javascript_logo from "./images/javascript.png";
import python_logo from "./images/python.png";
import c_logo from "./images/C.svg.png";
import htmlcss_logo from "./images/htmlcss.png";
import java_logo from "./images/Java.jpg";
import react_logo from "./images/react2.png";

const Skills = () => {
  return (
    <Container fluid>
      <Row xs={1} sm={2} md={6}>
        <Col>
          <Card>
            <Card.Img
              style={{ height: "12rem" }}
              variant="top"
              src={javascript_logo}
            />
            <Card.Title className="text-center">Javascript</Card.Title>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ height: "12rem" }}
              variant="top"
              src={react_logo}
            />
            <Card.Title className="text-center">React</Card.Title>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ height: "12rem" }}
              variant="top"
              src={htmlcss_logo}
            />
            <Card.Title className="text-center">HTML/CSS</Card.Title>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={python_logo} />
            <Card.Title className="text-center">Python</Card.Title>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={java_logo} />
            <Card.Title className="text-center">Java</Card.Title>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img style={{ height: "12rem" }} variant="top" src={c_logo} />
            <Card.Title className="text-center">C</Card.Title>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
