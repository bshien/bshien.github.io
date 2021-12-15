import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import "./progbar.css";

const progbar = (props) => {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <ProgressBar
            id="bootstrap-overrides"
            className="progress"
            striped
            now={props.prog}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default progbar;
