// Import necessary dependencies
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// Claim component
const Claim = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [claimDescription, setClaimDescription] = useState('');
  const [specificDetail, setSpecificDetail] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [file, setFile] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle file upload (not implemented in this example)
    console.log('File:', file);
    // Add logic to store form data in the database (not implemented in this example)
    console.log('Form submitted:', { name, email, contact, claimDescription, specificDetail, acceptTerms });
  };

  return (
    <div className="claim-page claim-h">
      <Container className="claim-container">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            {/* Inner box */}
            <div className="inner-box claim-m">
              <h2 className="text-right">I would like to claim this item</h2>
              <Form onSubmit={handleSubmit}>
                {/* Complete Name */}
                <Form.Group controlId="formName">
                  <Form.Label>Complete Name</Form.Label>
                  <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </Form.Group>

                {/* Email */}
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>

                {/* Contact */}
                <Form.Group controlId="formContact">
                  <Form.Label>Contact</Form.Label>
                  <Form.Control type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
                </Form.Group>

                {/* Claim Description */}
                <Form.Group controlId="formClaimDescription">
                  <Form.Label>Please state why this item is yours</Form.Label>
                  <Form.Control as="textarea" rows={4} value={claimDescription} onChange={(e) => setClaimDescription(e.target.value)} required />
                </Form.Group>

                {/* Specific Detail */}
                <Form.Group controlId="formSpecificDetail">
                  <Form.Label>Can you name specific details about this item</Form.Label>
                  <Form.Control as="textarea" rows={4} value={specificDetail} onChange={(e) => setSpecificDetail(e.target.value)} required />
                </Form.Group>

                {/* File Upload */}
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload supporting documents (optional)</Form.Label>
                  <Form.Control type="file" onChange={(e) => setFile(e.target.files[0])} />
                </Form.Group>

                {/* Accept Terms and Conditions */}
                <Form.Group controlId="formAcceptTerms" className="mb-3">
                  <Form.Check type="checkbox" label="I accept the terms and conditions" checked={acceptTerms} onChange={() => setAcceptTerms(!acceptTerms)} required />
                </Form.Group>

                {/* Submit Button */}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Claim;
