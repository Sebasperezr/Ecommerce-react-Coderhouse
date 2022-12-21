import React from "react";
import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          Morita
        </Link>
        <div className="navbar-toggler cart">
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/category/1">
                ACCESORIOS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/2">
                CEJAS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/3">
                LABIOS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/4">
                CUIDADO DE PIE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/5">
                OJOS
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
