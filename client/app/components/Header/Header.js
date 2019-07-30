import React from "react";
import { Nav, Navbar, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo_nav from "../../../public/assets/img/logo-nav.png";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.scss";

const Header = () => (
  <header>
    <Navbar bg="dark" expand="md" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" id="main-navbar">
          <Link to="/">
            <Image id="logo" src={logo_nav} alt={"logo"} />
          </Link>
          <Link to="/">
            <Button id="button-menu" variant="dark">
              Home
            </Button>
          </Link>
          <Link to="/login">
            <Button id="button-menu" variant="dark">
              login
            </Button>
          </Link>

          <Link to="/composePoem">
            <Button variant="dark">Compose!</Button>
          </Link>
          <SearchForm />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;
