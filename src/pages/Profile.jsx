// pages/Profile.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import the bootstrap-icons CSS file

//import '../styles/Profile.css';

const Profile = () => {
  // Dummy data (replace this with actual data fetching logic)
  const dummyData = {
    username: 'john_doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'John Doe',
    contact: '+1234567890',
    email: 'john@example.com',
    itemsClaimed: 10,
    itemsReported: 15,
  };

  return (
    <Container className="profile-container">
      <div className="profile-inner-box">
        <h1 className="mt-4 mb-4">Profile</h1>
        <Row>
          <Col md={4}>
            <img
              src="path/to/avatar.jpg" // Replace with actual path or avatar URL
              alt="Profile Avatar"
              className="img-fluid rounded-circle mb-3"
            />
          </Col>
          <Col md={8}>
            <h2>{dummyData.username}</h2>
            <p>{dummyData.bio}</p>
            <hr />
            <h3>Details:</h3>
            <ul>
              <li>
                <strong>Name:</strong> {dummyData.name}
              </li>
              <li>
                <strong>Contact:</strong> {dummyData.contact}
              </li>
              <li>
                <strong>Email:</strong> {dummyData.email}
              </li>
              <li>
                <strong>Items Claimed:</strong> {dummyData.itemsClaimed}
              </li>
              <li>
                <strong>Items Reported:</strong> {dummyData.itemsReported}
              </li>
            </ul>
          </Col>
        </Row>
        <Button variant="primary" className="update-profile-btn">
          <i className="bi bi-pencil-fill"></i> {/* Use the PencilFill icon */}
        </Button>
      </div>
    </Container>
  );
};

export default Profile;
