// Import necessary libraries and components

import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemView = () => {
  // Dummy data (replace with actual data from the database)
  const itemData = {
    id: 1,
    pictures: ['image.jpg', 'image2.jpg', 'image3.jpg'],
    title: 'Lost Keys',
    postedBy: 'John Doe',
    itemType: 'Lost',
    category: 'Personal Items',
    location: 'City, Country',
    dateTime: 'January 1, 2023',
    contactNumber: '123-456-7890',
    email: 'john.doe@example.com',
    specificDescription: 'A set of keys with a keychain.',
    specificLocation: 'Near the park entrance',
  };

  // Display only three pictures initially
  const displayedPictures = itemData.pictures.slice(0, 3);

  // Handle the show more pictures button click
  const handleShowMore = () => {
    // Implement logic to show all pictures
    console.log('Show more pictures clicked');
  };

  return (
    <div className="item-view-container itemview-h">
      {/* Outer box */}
      <Container fluid className="outer-box">
        {/* Inner box */}
        <Container className="inner-box itemview-m">
          {/* Row with two columns */}
          <Row>
            {/* Left side for pictures */}
            <Col md={6} className="left-side">
              {/* Displayed pictures */}
              <Row>
                {displayedPictures.map((picture, index) => (
                  <Col key={index} xs={4} className="picture-col">
                    <img src={picture} alt={`Item ${index + 1}`} className="item-picture" />
                  </Col>
                ))}
              </Row>
              {/* Show more button */}
              {itemData.pictures.length > 3 && (
                <Col xs={12} className="show-more-col">
                  <Button variant="outline-primary" onClick={handleShowMore}>
                    Show More Pictures
                  </Button>
                </Col>
              )}
            </Col>

            {/* Right side for item information */}
            <Col md={6} className="right-side">
              <h1 className="item-title">{itemData.title}</h1>
              <p className="posted-by">Posted by: {itemData.postedBy}</p>
              <p className="item-type">{itemData.itemType}</p>
              <p className="category">{itemData.category}</p>
              <p className="location">
                <i className="bi bi-geo-alt"></i> {itemData.location}
              </p>
              <p className="date-time">
                <i className="bi bi-calendar"></i> {itemData.dateTime}
              </p>
              <div className="contact-info">
                <h4>Contact</h4>
                <p className="contact-number">{itemData.contactNumber}</p>
                <p className="email">{itemData.email}</p>
              </div>
              <div className="specific-description">
                <h4>Specific Description</h4>
                <p>{itemData.specificDescription}</p>
              </div>
              <div className="specific-location">
                <h4>Specific Location</h4>
                <p>{itemData.specificLocation}</p>
              </div>
              <Link to="/claim">
                <Button variant="success" className="claim-button">
                  Claim
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default ItemView;
