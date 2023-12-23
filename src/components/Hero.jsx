import "./Hero.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-section">
        <Container>
          <Row>
            <Col lg={6}>
              <h1>Elevate Your Reading Experience with BookBuddy</h1>
              <p>Effortlessly Track Your Reading Journey, One Page at a Time</p>
              <Button variant="primary">Start Tracking Now</Button>
            </Col>
            <Col lg={6}>{/* Add an image or illustration here */}</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;
