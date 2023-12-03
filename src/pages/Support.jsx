// src/pages/Support.jsx

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Support = () => {
  return (
    <div className="support support-m">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className="display-4 mb-4">Support Center</h1>
            <p className="lead">
              Our support team is here to assist you. Explore the resources below for help and guidance.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={6}>
            <h2 className="mb-3">FAQs</h2>
            <p>
              Check out our Frequently Asked Questions for answers to common queries. If you can't find what you're looking for,
              feel free to reach out to our support team.
            </p>
          </Col>

          <Col md={6}>
            <h2 className="mb-3">Contact Support</h2>
            <p>
              If you need personalized assistance or have specific questions, don't hesitate to contact our support team through
              the contact form or email. We're here to help!
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12} className="text-center">
            <h2 className="mb-4">Community Forum</h2>
            <p>
              Join our community forum to connect with other users, share experiences, and seek advice. Our forum is a place
              where users can support each other in the process of finding lost items.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Support;
