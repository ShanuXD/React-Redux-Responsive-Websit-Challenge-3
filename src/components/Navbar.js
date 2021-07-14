import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar container">
        <div className="navbar__logo">
          <Link className="icon" to="/"></Link>
        </div>
        <ul className="navbar__links">
          <li>
            <Link className="navbar--link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar--link" to="/headphones">
              Headphone
            </Link>
          </li>
          <li>
            <Link className="navbar--link" to="/speakers">
              Speakers
            </Link>
          </li>
          <li>
            <Link className="navbar--link" to="/earphones">
              Earphones
            </Link>
          </li>
        </ul>
        <div className="cart-icon">
          <Link className="icon" to="/checkout"></Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
