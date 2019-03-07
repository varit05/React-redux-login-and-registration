import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { authActions } from "../../store/actions/auth.actions";

const Header = props => (
  <header className="containe-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">React/Redux</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={props.logOut}>
              Log out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(authActions.logOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
