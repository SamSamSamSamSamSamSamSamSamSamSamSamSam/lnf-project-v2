// Search.jsx

import { useState } from 'react';
import { Container, Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import ItemCard from '../components/ItemCard'; // Make sure to adjust the import path based on your project structure
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [dateTime, setDateTime] = useState(null); // Initialize with null, as no date is selected initially
  const [category, setCategory] = useState('Choose Category');
  const [location, setLocation] = useState('');
  // Dummy data for item cards (replace with actual data fetched from the database)
  const dummyItemData = [
    { id: '1', title: 'Lost Phone', location: 'City1, State1', dateTime: 'January 1, 2023 12:00 PM' },
    { id: '2', title: 'Found Keys', location: 'City2, State2', dateTime: 'January 2, 2023 2:30 PM' },
    // Add more dummy data as needed
  ];

  // Dummy data for dropdown options (replace with actual data fetched from the database)
  const dummyCategoryOptions = ['Choose Category', 'Electronics', 'Clothing', 'Accessories', 'Other'];

  return (
    <Container className='search-m-container'>
      {/* Header Section */}
      <div className="header-section search-m">
        <h2>Search for Lost and Found Items</h2>
        {/* Search Form */}
        <Form className="search-form search-m-form">
          <Row>
            {/* Input for item keyword */}
            <Col>
              <Form.Control
                type="text"
                placeholder="Item Keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </Col>
            {/* Input for date and time with calendar icon and pop-up */}
            <Col>
              <Form.Group controlId="dateTimeInput">
                <DatePicker
                  selected={dateTime}
                  onChange={(date) => setDateTime(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  placeholderText="Date and Time"
                  className="form-control"
                />
              </Form.Group>
            </Col>
            {/* Dropdown input for category */}
            <Col>
              <Form.Control as="select" value={category} onChange={(e) => setCategory(e.target.value)}>
                {dummyCategoryOptions.map((cat, index) => (
                  <option key={index}>{cat}</option>
                ))}
              </Form.Control>
            </Col>
            {/* Input for location */}
            <Col>
              <Form.Control
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Col>
            {/* Submit button with magnifying glass icon */}
            <Col>
              <Button variant="primary" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Col>
          </Row>
        </Form>
      </div>

      {/* Main Section */}
      <div className="main-section">
        {/* Search Result Header */}
        <Row className="search-result-header">
          <Col>
            <h4>Search Results</h4>
          </Col>
          {/* Dropdown for filtering searches */}
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Filter
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* Add filter options here */}
                <Dropdown.Item>Option 1</Dropdown.Item>
                <Dropdown.Item>Option 2</Dropdown.Item>
                {/* Add more options as needed */}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        {/* Item Cards */}
        <Row className="item-cards search-m-form">
          {dummyItemData.map((item) => (
            <Col key={item.id} md={4}>
              <ItemCard itemId={item.id} />
            </Col>
          ))}
        </Row>

        {/* Show More Button */}
        <div className="show-more-button search-m-form">
          <Button variant="primary">Show More Items</Button>
        </div>
      </div>
    </Container>
  );
};

export default Search;
