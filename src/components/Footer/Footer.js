import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Footer.css";
import { tada } from "react-awesome-reveal";
const Footer = () => {
  return (
    <footer className="footer">
      <tada>
        <div className="footer-content">
          <h4>Portfolio made by Aryan Bansal &copy; 2024</h4>
          <ul className="footer-icons">
            <li>
              <a href="#" className="footer-icon">
                <FaTwitter size={24} />
              </a>
            </li>
            <li>
              <a href="#" className="footer-icon">
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a href="#" className="footer-icon">
                <FaFacebook size={24} />
              </a>
            </li>
          </ul>
        </div>
      </tada>
    </footer>
  );
};

export default Footer;
