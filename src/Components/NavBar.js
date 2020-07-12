import React from "react";
import { ThemeButton, NavItem, NavLogo } from "../styles";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ logo, currentTheme, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <Link to="/" className="navbar-brand">
        <NavLogo className="pic" src={logo} width="50" />
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
          <NavLogo src="https://images.squarespace-cdn.com/content/v1/5569ead6e4b0abcb10515865/1502336619233-1CPGYDJ4MNNJPJ34OOHF/ke17ZwdGBToddI8pDm48kGfiFqkITS6axXxhYYUCnlRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxQ1ibo-zdhORxWnJtmNCajDe36aQmu-4Z4SFOss0oowgxUaachD66r8Ra2gwuBSqM/textbook+icon.png?format=1500w" />
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
