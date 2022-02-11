import React from "react";
import "./styles.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavigationContainer } from "./navigation-bar.styles";

const NavigationBar = () => {
  return (
    <NavigationContainer className="navigation-bar" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="./star_wars_icon.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Nelson Rosales
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavigationContainer>
  );
};

export default NavigationBar;
