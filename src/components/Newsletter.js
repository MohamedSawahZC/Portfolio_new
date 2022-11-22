import { Col, Row } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  return (
    <Col className="d-flex justify-content-center" lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <a href="https://github.com/MohamedSawahZC">
            <button className="btn github" type="submit">
              GitHub
            </button>
          </a>
        </Row>
      </div>
    </Col>
  );
};
