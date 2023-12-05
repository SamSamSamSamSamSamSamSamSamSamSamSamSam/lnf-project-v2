
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPen } from 'react-icons/fa';

const AdminDashboard = () => {
  // Dummy data for statistics, reports, categories, users, and claims
  const dummyStatistics = {
    successfulClaims: 120,
    totalReports: 300,
    totalCategories: 10,
    totalUsers: 50,
    totalClaims: 80,
  };

  const dummyCategories = [
    { id: 1, name: 'Electronics', description: 'Electronic items' },
    { id: 2, name: 'Clothing', description: 'Clothing items' },
  ];

  const dummyUsers = [
    { id: 1, username: 'admin1', fullName: 'Admin One', userType: 'admin', status: 'active' },
    { id: 2, username: 'user1', fullName: 'User One', userType: 'regular', status: 'inactive' },
  ];

  const dummyClaims = [
    { id: 1, title: 'Claim 1', status: 'Pending' },
    { id: 2, title: 'Claim 2', status: 'Under Review' },
  ];

  // Function to handle editing category
  const handleEditCategory = (category) => {
    // Placeholder logic for editing category
    console.log(`Editing category: ${category.name}`);
    // Implement your logic for editing category
  };

  // Function to handle editing user status
  const handleEditUserStatus = (user) => {
    // Placeholder logic for editing user status
    console.log(`Editing status for user: ${user.username}`);
    // Implement your logic for editing user status
  };

  // Function to handle editing claim status
  const handleEditClaimStatus = (claim) => {
    // Placeholder logic for editing claim status
    console.log(`Editing status for claim: ${claim.title}`);
    // Implement your logic for editing claim status
  };

  return (
    <Container fluid>
      {/* Statistics Section */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <h3>Statistics</h3>
              <p>Successful Claims: {dummyStatistics.successfulClaims}</p>
              <p>Total Reports: {dummyStatistics.totalReports}</p>
              <p>Total Categories: {dummyStatistics.totalCategories}</p>
              <p>Total Users: {dummyStatistics.totalUsers}</p>
              <p>Total Claims: {dummyStatistics.totalClaims}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Categories Section */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <h3>Categories</h3>
              {dummyCategories.map((category) => (
                <div key={category.id} className="mb-3">
                  <p>Name: {category.name}</p>
                  <p>Description: {category.description}</p>
                  <button type="button" className="btn btn-link" onClick={() => handleEditCategory(category)}>
                    <FaPen /> Edit
                  </button>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Users Section */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <h3>Users</h3>
              {dummyUsers.map((user) => (
                <div key={user.id} className="mb-3">
                  <p>Username: {user.username}</p>
                  <p>Full Name: {user.fullName}</p>
                  <p>User Type: {user.userType}</p>
                  <p>Status: {user.status}</p>
                  <button type="button" className="btn btn-link" onClick={() => handleEditUserStatus(user)}>
                    <FaPen /> Edit Status
                  </button>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Claims Section */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <h3>Claims</h3>
              {dummyClaims.map((claim) => (
                <div key={claim.id} className="mb-3">
                  <p>{claim.title}</p>
                  <p>Status: {claim.status}</p>
                  <button type="button" className="btn btn-link" onClick={() => handleEditClaimStatus(claim)}>
                    <FaPen /> Edit Status
                  </button>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
