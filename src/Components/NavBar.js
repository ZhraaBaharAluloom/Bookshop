import React, { useState } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

// Store
import authStore from "../stores/authStore";
import vendorStore from "../stores/vendorStore";

//style
import { ThemeButton, NavItem, NavLogo, UsernameStyled } from "../styles";
import { FiLogOut } from "react-icons/fi";

// Components
import VendorModal from "./modals/VendorModal";
import SignupButton from "./Buttons/SignupButton";
import SigninButton from "./Buttons/SigninButton";
import VendorDetail from "./VendorDetail";

const NavBar = ({ logo, currentTheme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const vendor = authStore.user
    ? vendorStore.vendors.find((vendor) => vendor.userId === authStore.user.id)
    : null;

  return (
    <nav className="navbar navbar-expand-lg ">
      {/* logo */}
      <Link to="/" className="navbar-brand">
        <NavLogo className="pic" src={logo} width="50" />
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {authStore.user?.role === "admin" && (
          <>
            <NavItem
              className="nav-item"
              to="/books"
              style={{ margin: 10, float: "right" }}
            >
              <NavLogo src="https://images.squarespace-cdn.com/content/v1/5569ead6e4b0abcb10515865/1502336619233-1CPGYDJ4MNNJPJ34OOHF/ke17ZwdGBToddI8pDm48kGfiFqkITS6axXxhYYUCnlRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxQ1ibo-zdhORxWnJtmNCajDe36aQmu-4Z4SFOss0oowgxUaachD66r8Ra2gwuBSqM/textbook+icon.png?format=1500w" />
            </NavItem>
            <NavItem
              className="nav-item"
              to="/vendors"
              style={{ margin: 10, float: "right" }}
            >
              SHOPS
            </NavItem>
          </>
        )}

        {authStore.user && !vendor && (
          <UsernameStyled onClick={openModal}>Create Shop</UsernameStyled>
        )}
        <VendorModal isOpen={isOpen} closeModal={closeModal} />
        {authStore.user ? (
          <ul className="navbar-nav ml-auto">
            <div className="nav-item active">
              <UsernameStyled>
                Hello, {authStore.user.username}{" "}
                {vendor && (
                  <NavItem to={`/vendors/${vendor.slug}`}>My shop</NavItem>
                )}
                <FiLogOut onClick={authStore.signout} color="red" margin="2" />
              </UsernameStyled>
            </div>
          </ul>
        ) : (
          <ul className="navbar-nav ml-auto">
            <div className="nav-item active">
              <SigninButton />
            </div>
            <div className="nav-item active">
              <SignupButton />
            </div>
          </ul>
        )}

        {/* <ThemeButton className="nav-item active" onClick={toggleTheme}>
            {currentTheme === "light" ? "Dark Mode" : "Light Mode"}
          </ThemeButton> */}
      </div>
    </nav>
  );
};

export default observer(NavBar);
