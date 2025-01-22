import React from 'react';
import './Footer.css';
import beyondLogo from '../assets/images/web-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faChrome } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={beyondLogo} alt="Beyond Logo" className="footer-logo" />
          <p className="brand-description">
            Rep a Ghanaian brand today. Explore the wide variety of youth entrepreneur designers and pick and brand that suits the moment today.
          </p>
          <div className="contact-info">
            <p>📧 Email: beyondthestreet@gmail.com</p>
            <p>📍 Address: Labadi beach road, Labadi</p>
          </div>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" aria-label="Chrome"><FontAwesomeIcon icon={faChrome} /></a>
          </div>
          <p className="copyright">Beyond The Street {new Date().getFullYear()}</p>
        </div>

        <div className="link-column">
          <h3><u>QUICK LINKS</u></h3>
          <ul>
            <li><a href="#">Explore brands</a></li>
            <li><a href="#">Most popular</a></li>
            <li><a href="#">Most searched</a></li>
            <li><a href="#">Latest added brand</a></li>
            <li><a href="#">Read blog posts</a></li>
            <li><a href="#">Latest blogs</a></li>
            <li><a href="#">Most commented</a></li>
          </ul>
        </div>

        <div className="link-column">
          <h3><u>STREET WEARS</u></h3>
          <ul>
            <li><a href="#">Jeans street wears</a></li>
            <li><a href="#">Branded tees</a></li>
            {/* <li><a href="#">Explore brands</a></li>
            <li><a href="#">Explore brands</a></li>
            <li><a href="#">Explore brands</a></li> */}
          </ul>
        </div>

        <div className="link-column">
          <h3><u>DENIM JEANS</u></h3>
          <ul>
            <li><a href="#">Baggy jeans</a></li>
            <li><a href="#">Denim jeans</a></li>
            <li><a href="#">Painted jeans</a></li>
            <li><a href="#">Paint jeans</a></li>
            <li><a href="#">Embroidery jeans</a></li>
          </ul>
        </div>

        <div className="link-column">
          <h3><u>MERCH TEES</u></h3>
          <ul>
            <li><a href="#">Merch brands</a></li>
            <li><a href="#">Merch hoodies</a></li>
          </ul>
        </div>

        <div className="link-column">
          <h3><u>CUSTOMS</u></h3>
          <ul>
            <li><a href="#">Custom T-shirts</a></li>
            <li><a href="#">Custom hoodies</a></li>
            <li><a href="#">Custom hoodies</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;