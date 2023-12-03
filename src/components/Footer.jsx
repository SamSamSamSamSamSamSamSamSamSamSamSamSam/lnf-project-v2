// Footer.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './Footer.css'; // Import custom CSS for additional styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-4">
            <div className="footer-section left-section">
              <span className="font-weight-bold large-font">Website Name</span>
            </div>
          </div>

          {/* Center Section */}
          <div className="col-md-4">
            <div className="footer-section center-section text-left">
              {/* Div 1 */}
              <div className="footer-div">
                <h5>Home</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Link 1</a></li>
                  <li><a href="#">Link 2</a></li>
                  <li><a href="#">Link 3</a></li>
                </ul>
              </div>

              {/* Div 2 */}
              <div className="footer-div">
                <h5>More</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Link 1</a></li>
                  <li><a href="#">Link 2</a></li>
                  <li><a href="#">Link 3</a></li>
                </ul>
              </div>

              {/* Div 3 */}
              <div className="footer-div">
                <h5>Connect</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Link 1</a></li>
                  <li><a href="#">Link 2</a></li>
                  <li><a href="#">Link 3</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-4">
            <div className="footer-section right-section d-flex flex-column align-items-start">
              <p className="subscribe-text mb-1">Subscribe for the latest updates</p>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Enter your email" aria-label="Recipient's email" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="container text-left">
        <p className="bottom-text">Copyrights @2023</p>
      </div>
    </footer>
  );
};

export default Footer;
