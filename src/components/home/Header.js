import React from "react";
import Container from "react-bootstrap/Container";
import { FaAngleDown, FaFacebookMessenger } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="home-header">
      <Container>
        <div className="header-content">
          <div className="right-side">
            <span className="insta-logo">Instagram</span>
            <FaAngleDown className="insta-logo-icon"></FaAngleDown>
          </div>
          <Link
            state={{ idOfUser: "1" }}
            to={"/messages"}
            className="messanger-logo">
            <FaFacebookMessenger></FaFacebookMessenger>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Header;
