// Report.jsx

import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Report = () => {
  const [itemPicture, setItemPicture] = useState(null);
  const [itemKeyword, setItemKeyword] = useState('');
  const [reportType, setReportType] = useState('');
  const [category, setCategory] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [specificDetailsVisible, setSpecificDetailsVisible] = useState(true);
  const [specificDetails, setSpecificDetails] = useState({
    model: '',
    serialNumber: '',
    primaryColor: '',
    secondaryColor: '',
    brand: '',
    specificDescription: '',
    specificLocation: '',
  });
  const [addressInfo, setAddressInfo] = useState({
    address: '',
    zipcode: '',
    city: '',
    country: '',
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = () => {
    // Implement form submission logic here (e.g., send data to the backend)
  };

  const handleToggleSpecificDetails = () => {
    setSpecificDetailsVisible(!specificDetailsVisible);
  };

  return (
    <Container className="report-outer-container" fluid>
      {/* Outer box */}
      <Row className="report-outer-row">
        <Col className="report-outer-col">
          {/* Inner box */}
          <div className="report-inner-box inner-box-m">
            {/* Item Picture section */}
            <div className="form-section">
              <h3>Item Picture</h3>
              <Button>Upload File</Button>
              {/* Display uploaded picture here */}
            </div>

            {/* Item Information section */}
            <div className="form-section report-sect-spacing">
              <h3>Item Information</h3>
              <Form>
                {/* Input for Item Keyword/Title */}
                <Form.Group controlId="itemKeyword">
                  <Form.Label>Item Keyword/Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter item keyword/title"
                    value={itemKeyword}
                    onChange={(e) => setItemKeyword(e.target.value)}
                  />
                </Form.Group>

                {/* Radio buttons for Report Type */}
                <Form.Group>
                  <Form.Label>Report Type</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Lost"
                    name="reportType"
                    id="lost"
                    checked={reportType === 'lost'}
                    onChange={() => setReportType('lost')}
                  />
                  <Form.Check
                    type="radio"
                    label="Found"
                    name="reportType"
                    id="found"
                    checked={reportType === 'found'}
                    onChange={() => setReportType('found')}
                  />
                </Form.Group>

                {/* Dropdown for Category */}
                <Form.Group controlId="category">
                  <Form.Label>Category</Form.Label>
                  {/* Replace the options with actual data fetched from the database */}
                  <Form.Control
                    as="select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>Choose Category</option>
                    {/* Add options dynamically here */}
                  </Form.Control>
                </Form.Group>

                {/* Date and Time picker */}
                <Form.Group controlId="dateTime">
                  <Form.Label>Date and Time</Form.Label>
                  {/* Implement a date and time picker component or use a library */}
                  <Form.Control
                    type="datetime-local"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </div>

            {/* Specific Details section */}
            <div className="form-section report-sect-spacing">
              <div
                className="collapsible-header"
                onClick={handleToggleSpecificDetails}
              >
                <h3>Specific Details</h3>
                <button type="button" className="toggle-button">
                  {specificDetailsVisible ? 'Hide' : 'Show'} Details
                </button>
              </div>
              {specificDetailsVisible && (
                <Form.Group controlId="specificDetails">
                  <Form.Label>Model</Form.Label>
                  <Form.Control
                    type="text"
                    value={specificDetails.model}
                    onChange={(e) =>
                      setSpecificDetails({
                        ...specificDetails,
                        model: e.target.value,
                      })
                    }
                  />

                  <Form.Label>Serial Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={specificDetails.serialNumber}
                    onChange={(e) =>
                      setSpecificDetails({
                        ...specificDetails,
                        serialNumber: e.target.value,
                      })
                    }
                  />

                  <Form.Label>Primary Color</Form.Label>
                  <Form.Control
                    type="text"
                    value={specificDetails.primaryColor}
                    onChange={(e) =>
                      setSpecificDetails({
                        ...specificDetails,
                        primaryColor: e.target.value,
                      })
                    }
                  />

                  <Form.Label>Secondary Color</Form.Label>
                  <Form.Control
                    type="text"
                    value={specificDetails.secondaryColor}
                    onChange={(e) =>
                      setSpecificDetails({
                        ...specificDetails,
                        secondaryColor: e.target.value,
                      })
                    }
                  />

                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    type="text"
                    value={specificDetails.brand}
                    onChange={(e) =>
                      setSpecificDetails({
                        ...specificDetails,
                        brand: e.target.value,
                      })
                    }
                  />

                  <Form.Label>Specific Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={specificDetails.specificDescription}
                    onChange={(e) =>
                      setSpecificDetails({
                        ...specificDetails,
                        specificDescription: e.target.value,
                      })
                    }
                  />

                  <Form.Label>Specific Location</Form.Label>
                  <Form.Control
                    type="text"
                    value={specificDetails.specificLocation}
                    onChange={(e) =>
                      setSpecificDetails({
                        ...specificDetails,
                        specificLocation: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              )}
            </div>

            {/* Address Information section */}
            <div className="form-section report-sect-spacing">
              <h3>Address Information</h3>
              <Form.Group controlId="addressInfo">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  value={addressInfo.address}
                  onChange={(e) =>
                    setAddressInfo({
                      ...addressInfo,
                      address: e.target.value,
                    })
                  }
                />

                <Form.Label>Zipcode</Form.Label>
                <Form.Control
                  type="text"
                  value={addressInfo.zipcode}
                  onChange={(e) =>
                    setAddressInfo({
                      ...addressInfo,
                      zipcode: e.target.value,
                    })
                  }
                />

                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  value={addressInfo.city}
                  onChange={(e) =>
                    setAddressInfo({
                      ...addressInfo,
                      city: e.target.value,
                    })
                  }
                />

                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  value={addressInfo.country}
                  onChange={(e) =>
                    setAddressInfo({
                      ...addressInfo,
                      country: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </div>

            {/* Accept Terms and Conditions */}
            <Form.Check
              type="checkbox"
              label="I accept terms and conditions"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
            />

            {/* Submit button */}
            <Button className='report-btn-m' onClick={handleSubmit}>Submit</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Report;
