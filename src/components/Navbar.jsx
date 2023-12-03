import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const CustomNavbar = ({ isLoggedIn }) => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg" className="justify-content-around">
      <Container>
        <Navbar.Brand href="#">Website Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mr-auto ml-sect">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/search" className="nav-link">Search</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/support" className="nav-link">Support</Link>
          </Nav>
          <Nav className="ml-auto ml-sect">
            {isLoggedIn ? (
              <>
                <Link to="/settings" className="nav-link">
                  <Button variant="outline-light">Settings</Button>
                </Link>
                <Link to="/profile" className="nav-link">
                  <Button variant="outline-light">Profile</Button>
                </Link>
                <Link to="/login" className="nav-link">
                  <Button variant="outline-light">Logout</Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link">
                  <Button variant="outline-light">Login</Button>
                </Link>
                <Link to="/signup" className="nav-link">
                  <Button variant="outline-light">Signup</Button>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

CustomNavbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default CustomNavbar;
