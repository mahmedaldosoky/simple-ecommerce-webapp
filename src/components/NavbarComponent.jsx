import React from "react";

import { Link } from "react-router-dom";

const NavbarComponent = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand px-5" to="/home">
        Ecommerce
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact-us">
              Contact us
            </Link>
          </li>
        </ul>
        
      </div>
<button className="btn mx-5 px-4"><i className="fa-solid fa-cart-shopping mx-2"></i>{props.cartProductsNum}</button>
    </nav>
  );
};

export default NavbarComponent;
