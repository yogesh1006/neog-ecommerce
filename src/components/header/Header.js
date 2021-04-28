import React from "react";
import "./header.css";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import SearchBox from "../SearchBox";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Navbar.Brand href="/">U shop We Ship</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <SearchBox />
          <Nav className="ml-auto">
            <NavLink className="link" activeClassName="active" to="/cart">
              <i className="fas fa-shopping-cart"></i> Cart
            </NavLink>

            <NavLink className="link" activeClassName="active" to="/wishlist">
              <i className="fas fa-heart"></i> Wishlist
            </NavLink>
            <NavLink className="link" activeClassName="active" to="/login">
              <i className="fas fa-user"></i> Sign In
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
