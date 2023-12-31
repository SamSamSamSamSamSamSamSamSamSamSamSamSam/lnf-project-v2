// Login.jsx

import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const toggleSignUp = () => {

    navigate("/signup")

  }

  const handleLogin = () => {
    // Add logic to handle login, you can use props or a state management library to pass the data to other pages.
    console.log('Username:', username);
    console.log('Password:', password);
    // Add logic to redirect or perform other actions after login.
  };

  return (
    <div className="login-background">
      <Container className="login-box">
        <Row>
          <Col md={6}>
            <div className="login-box-inner login-box-m">
              <h2 className="text-center">Login</h2>
              <Form>
                <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Text className="text-muted mb-2">
                  <a href="#">Forgot Password?</a>
                </Form.Text>
                <Button className='login-btn-m' variant="primary" onClick={handleLogin}>
                  Login
                </Button>
              <br />
              <br />
              <div className="signup-text">
                  <p className="mb-0">Don't have an account? </p>
                  <p className="fw-bold mb-0"
                   style={{ cursor: 'pointer' }} 
                   onClick={toggleSignUp}>
                    <span className="text-decoration-underline">
                      SIGN UP!
                      </span>
                      </p>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
