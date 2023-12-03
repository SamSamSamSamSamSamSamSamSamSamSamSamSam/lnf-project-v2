// src/pages/ContactUs.jsx

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactUs = () => {
  return (
    <div className="contact-us contact-m">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className="display-4 mb-4">Contact Us</h1>
            <p className="lead">
              We're here to assist you. Feel free to reach out to us using the contact form below.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={8} className="mx-auto">
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Type your message here" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
