// SignUp.jsx

import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you'll use react-router for navigation

const SignUp = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      username: '',
      email: '',
      contactNumber: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    });
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your logic to handle form submission here
    };
  
    return (
      <div className="outer-box">
        <Container className="d-flex align-items-center justify-content-center vh-100">
          <div className="inner-box">
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="fullName">
                <Form.Label>Complete Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="contactNumber">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
  
              {/* Repeat similar Form.Group blocks for other input fields */}
  
              <Form.Group className="mb-3" controlId="acceptTerms">
                <Form.Check
                  type="checkbox"
                  label={
                    <>
                      I accept the{' '}
                      <Link to="/terms-and-conditions">terms and conditions</Link> and the{' '}
                      <Link to="/privacy-policy">privacy policy</Link>
                    </>
                  }
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
  
              <Button variant="primary" type="submit" className="mb-3">
                Create Account
              </Button>
  
              <p>
                Already have an account? <Link to="/login">Log in here</Link>
              </p>
            </Form>
          </div>
        </Container>
      </div>
    );
  };
  
  export default SignUp;