// src/pages/AboutUs.jsx

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutUs = () => {
  return (
    <div className="about-us">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className="display-4 mb-4">Welcome to Lost & Found Hub</h1>
            <p className="lead">
              Lost & Found Hub is a community-driven platform dedicated to helping people reunite with their lost belongings.
              Our mission is to make the process of reporting and claiming lost items as seamless as possible.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={6}>
            <h2 className="mb-3">Our Vision</h2>
            <p>
              We envision a world where losing something doesn't mean losing hope. Our platform strives to create
              a connected community that supports each other in recovering lost items and fostering a sense of
              responsibility towards each other's belongings.
            </p>
          </Col>

          <Col md={6}>
            <h2 className="mb-3">How it Works</h2>
            <p>
              Lost & Found Hub provides a simple and efficient way to report lost or found items. Users can submit
              details about the lost or found item, and our platform facilitates communication between the owner
              and the finder to ensure a smooth process of retrieval.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12} className="text-center">
            <h2 className="mb-4">Join Us in Building a Connected Community</h2>
            <p>
              Whether you've lost something valuable or found an item that doesn't belong to you, Lost & Found Hub is here to help.
              Join our community today and contribute to creating a world where lost items find their way back home.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
