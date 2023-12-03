// ItemCard.jsx

import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ItemCard = ({ itemId }) => {
  // Dummy data (replace with actual data fetched from the database)
  const dummyData = {
    image: 'path/to/item-image.jpg',
    title: 'Lost Phone',
    location: 'City, State',
    dateTime: 'January 1, 2023 12:00 PM',
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dummyData.image} alt={dummyData.title} />
      <Card.Body>
        <Card.Title>{dummyData.title}</Card.Title>
        <Card.Text>
          <strong>Location:</strong> {dummyData.location}
        </Card.Text>
        <Card.Text>
          <strong>Date and Time:</strong> {dummyData.dateTime}
        </Card.Text>
        {/* "View Item" button linking to the ItemView page with the specific itemId */}
        <Link to={`/item/${itemId}`}>
          <Button variant="primary">View Item</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

// PropTypes for prop validation
ItemCard.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default ItemCard;
