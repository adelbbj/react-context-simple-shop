import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderType } from "../../../interfaces/HeaderType";

import Container from "../Container";

import "./Header.css";

const Header: React.FC<HeaderType> = ({
  isLoggedIn,
  onLogout,
  cartCount,
}): JSX.Element => {
  return (
    <header className="header">
      <Container>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
          <NavLink className="navbar-brand" to="/">
            BBJ Shop
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
              {isLoggedIn ? (
                <>
                  <li className="nav-item ml-2">
                    <NavLink to="/cart">
                      <button className="btn btn-dark btn-sm">
                        Cart{" "}
                        {cartCount ? (
                          <span className="badge badge-light">{cartCount}</span>
                        ) : null}
                      </button>
                    </NavLink>
                  </li>
                  <li className="nav-item ml-2">
                    <button className="btn btn-dark btn-sm" onClick={onLogout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <NavLink to="/login">
                    <button className="btn btn-dark btn-sm">Login</button>
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
