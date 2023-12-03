// Home.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const Home = () => {
  // State for input values
  const [itemKeyword, setItemKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the values to other pages or perform other actions as needed
    // For now, let's just log them
    console.log('Item Keyword:', itemKeyword);
    console.log('Location:', location);
  };

  return (
    <div>
      {/* Header Section */}
      <Container
        fluid
        className="text-white text-left text-md-left p-5"
        style={{
          height: '100vh',
          backgroundImage: 'url("/src/images/helping-hands.jpg")', // Replace with the actual path to your image
          backgroundSize: 'cover',
        }}
      >
        <h1 className="font-weight-bold home-header-text">Welcome to Lost and Found </h1>
        <Link to="/report">
          <Button variant="primary">I found Something!</Button>
        </Link>
        <Form className="mt-3" onSubmit={handleSubmit}>
          <Row noGutters>
            <Col>
              <Form.Control
                type="text"
                placeholder="Item Keyword"
                value={itemKeyword}
                onChange={(e) => setItemKeyword(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Col>
            <Col>
              <Button variant="info" type="submit">
                <FaSearch />
              </Button>
            </Col>
          </Row>
        </Form>
        <p className="text-center mt-3 home-btm-text">Find lost items or report something you found!</p>
      </Container>

      {/* Report Section */}
      <Container fluid className="report-sect text-white text-center py-5" >
        <h1 className="font-weight-bold display-4">Report Section</h1>
        <Row className="mt-5">
          <Col>
            <Link to="/report" className="text-white text-decoration-none">
              <Button variant="outline-light" className="rounded-circle p-4">
                <FaSearch size={40} />
              </Button>
              <p className="mt-2">REPORT LOST</p>
            </Link>
          </Col>
          <Col>
            <Link to="/report" className="text-white text-decoration-none">
              <Button variant="outline-light" className="rounded-circle p-4">
                <FaSearch size={40} />
              </Button>
              <p className="mt-2">REPORT FOUND</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
