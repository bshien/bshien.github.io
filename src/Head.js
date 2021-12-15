import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import test3 from "./images/test3.jpeg";
import "./head.css";

const head = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={{ span: 6, offset: 3 }} md={{ span: 2, offset: 5 }}>
          <p>
            <Image
              className="profile_picture"
              src={test3}
              alt="Brandon Shien"
              roundedCircle
              fluid
            />
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center brandon">Brandon Shien</Col>
      </Row>
    </Container>
  );
};

export default head;
