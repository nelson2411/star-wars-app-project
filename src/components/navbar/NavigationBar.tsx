import React from "react"
import "./styles.css"
import { Navbar, Container, Nav } from "react-bootstrap"
import { NavigationContainer } from "./navigation-bar.styles"
import { Link } from "react-router-dom"

const NavigationBar = () => {
  return (
    <NavigationContainer className="navigation-bar" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img
              alt=""
              src="./star_wars_icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Nelson Rosales
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavigationContainer>
  )
}

export default NavigationBar
