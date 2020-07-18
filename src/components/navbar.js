import React from "react"
import {Link} from "gatsby"
import Logo from "../images/links.png"
import { Navbar, Nav, Container } from "react-bootstrap"

const Navigator = () => {
  return (
    <Navbar className="py-3 d-none d-md-flex navbar-dark" bg="dark" expand="md">
      <Container>
        <Nav className="w-100 d-flex align-items-center justify-content-between">
          <Nav.Link as={Link} activeClassName="active" to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} activeClassName="active" to="/tuning">
            Tuning
          </Nav.Link>
          <Navbar.Brand as={Link} activeClassName="active" to="/">
            <img
              src={Logo}
              height="40"
              className="d-inline-block align-top"
              alt="links logo"
            />
          </Navbar.Brand>
          <Nav.Link as={Link} activeClassName="active" to="/products">
            Products
          </Nav.Link>
          <Nav.Link as={Link} activeClassName="active" to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigator
