import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "../images/links.png"
import { Navbar, Nav, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import NavDropdown from "react-bootstrap/NavDropdown"
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu"

const StyledLink = styled.a`
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

const StyledNavDD = styled(NavDropdownMenu)`
  padding: 0.5rem 1rem;
  background-color: transparent;
  height: 100%;
  outline: none;
  display: flex;
  align-items: center;
  text-transform: uppercase;

  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  :focus {
    box-shadow: none;
  }

  .dropdown-item {
    font-size: 14px;
  }
`

const Navigator = ({ allDatoCmsServicing, makes, models }) => {
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
          <StyledNavDD title="About">
            <NavDropdown.Item as={Link} to="/">
              About Us
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/blog">
              Blog
            </NavDropdown.Item>
          </StyledNavDD>
          <StyledNavDD title="Upgrades">
            {makes.distinct.map((make, idx) => {
              return (
                <DropdownSubmenu title={make} key={`sub-upgrade-${idx}`}>
                  {models.edges
                    .filter(({ node: model }) => model.make === make)
                    .map(({ node: model }, idx) => {
                      return (
                        <NavDropdown.Item
                          key={`service-${model + idx}`}
                          as={Link}
                          to={`/upgrades/${model.slug}`}
                        >
                          {model.modelDesignation}
                        </NavDropdown.Item>
                      )
                    })}
                </DropdownSubmenu>
              )
            })}
          </StyledNavDD>
          <StyledNavDD title="Servicing">
            {allDatoCmsServicing.edges.map(({ node: service }, idx) => {
              return (
                <NavDropdown.Item
                  key={`service-${idx}`}
                  as={Link}
                  to={`/servicing/${service.slug}`}
                >
                  {service.title}
                </NavDropdown.Item>
              )
            })}
          </StyledNavDD>
          <StyledNavDD title="Contact">
            <NavDropdown.Item as={Link} to="/get-in-touch">
              Get In Touch
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/locate-us">
              Locate Us
            </NavDropdown.Item>
          </StyledNavDD>
          <StyledLink
            href="https://wa.link/vihotg"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </StyledLink>
          <StyledLink
            href="https://www.facebook.com/links.com.my/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </StyledLink>
          <StyledLink
            href="https://www.instagram.com/shirleylinks/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </StyledLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigator
