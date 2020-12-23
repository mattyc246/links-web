import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import Logo from "../images/links.png"
import { Navbar, Nav, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"
import Dropdown from "react-bootstrap/Dropdown"

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

const NavButtonDD = styled(Dropdown.Toggle)`
  padding: 1rem;
  background-color: transparent;
  height: 100%;
  outline: none;
  display: flex;
  align-items: center;
  text-transform: uppercase;

  :hover {
    background-color: rgba(0,0,0,0.2);
  }

  :focus {
    box-shadow: none;
  }
`

const DDMenu = styled(Dropdown.Menu)`
  text-transform: uppercase;
  font-size: 14px;
`

const Navigator = () => {
  return (
    <Navbar className="d-none d-md-flex navbar-dark p-0" bg="dark" expand="md">
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
          <Dropdown>
            <NavButtonDD variant="transparent">
              About
            </NavButtonDD>
            <DDMenu>
              <Dropdown.Item as={Link} to="/">About Us</Dropdown.Item>
              <Dropdown.Item as={Link} to="/blog">Blog</Dropdown.Item>
            </DDMenu>
          </Dropdown>
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
