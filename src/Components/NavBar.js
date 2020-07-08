import React from "react";
import { ThemeButton, NavItem } from "../styles";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ logo, currentTheme, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <Link to="/" className="navbar-brand">
        <img src={logo} width="50" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <NavItem
          className="nav-item"
          to="/books"
          style={{ margin: 10, float: "right" }}
        >
          {" "}
          Books{" "}
        </NavItem>
        <ul className="navbar-nav ml-auto">
          <ThemeButton className="nav-item active" onClick={toggleTheme}>
            {currentTheme === "light" ? "Dark Mode" : "Light Mode"}
          </ThemeButton>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
