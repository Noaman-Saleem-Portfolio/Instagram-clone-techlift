import React from "react";
import Container from "react-bootstrap/Container";
import { FaAngleDown, FaFacebookMessenger } from "react-icons/fa";

const Header = () => {
  return (
    <div className="home-header">
      <Container>
        <div className="header-content">
          <div className="right-side">
            <span className="insta-logo">Instagram</span>
            <FaAngleDown className="insta-logo-icon"></FaAngleDown>
          </div>
          <div className="messanger-logo">
            <FaFacebookMessenger></FaFacebookMessenger>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
