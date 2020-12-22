import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import Logo from "../images/links.png"
import { Navbar, Nav, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const StyledLink = styled(Nav.Link)`
  text-transform: uppercase;
  margin: 0 1rem;
  color: white;
  opacity: 0.7;

  :hover {
    opacity: 1;
    text-decoration: none;
    color: white;
  }
`

const Navigator = () => {
  return (
    <Navbar className="py-2 d-none d-md-flex navbar-dark" bg="dark" expand="md">
      <Container fluid className="pl-5">
        <Navbar.Brand as={Link} activeClassName="active" to="/">
          <img
            src={Logo}
            height="30"
            className="d-inline-block align-top"
            alt="links logo"
          />
        </Navbar.Brand>
        <Nav className="ml-auto d-flex align-items-center">
          {/* <StyledLink as={Link} activeClassName="active" to="/about">
            About
          </StyledLink>
          <StyledLink as={Link} activeClassName="active" to="/tuning">
            Tuning
          </StyledLink>
          <StyledLink as={Link} activeClassName="active" to="/services">
            Services
          </StyledLink>
          <StyledLink as={Link} activeClassName="active" to="/contact">
            Contact
          </StyledLink> */}
          <StyledLink>
            <FontAwesomeIcon icon={faWhatsapp} />
          </StyledLink>
          <StyledLink>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </StyledLink>
          <StyledLink>
            <FontAwesomeIcon icon={faInstagram} />
          </StyledLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigator
