import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../images/links.png"
import { Navbar, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import NavDropdown from "react-bootstrap/NavDropdown"
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu"

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 22px;
  cursor: pointer;
`

const StyledNav = styled.nav`
  width: 100vw;
  ${props => (props.open ? "height: 100vh;" : "")}
  position: ${props => (props.open ? "fixed" : "sticky")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0px;
  left: 0px;
  z-index: 99;
  transition: height 0.5s ease-in;
`

const StyledLinks = styled(Nav)`
  flex-grow: 1;
  display: ${props => (props.open ? "flex!important" : "none")};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .nav-item {
    text-align: center;
  }

  .nav-link {
    color: #fff;
    opacity: 0.7;

    :hover {
      opacity: 1;
    }
  }
`

const MobileNav = ({ allDatoCmsServicing, makes, models }) => {
  const [open, setOpen] = useState(false)

  return (
    <StyledNav
      open={open}
      className="py-4 navbar bg-dark navbar-dark d-md-none"
    >
      <div className="w-100 d-flex justify-content-between align-items-center">
        <Navbar.Brand>
          <img
            src={Logo}
            height="30"
            className="d-inline-block align-top"
            alt="links logo"
          />
        </Navbar.Brand>
        <StyledIcon onClick={() => setOpen(!open)} icon={faBars} />
      </div>
      <StyledLinks className="nav" open={open}>
        <Nav.Item>
          <Nav.Link as={Link} activeClassName="active" to="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <NavDropdownMenu title="About">
          <NavDropdown.Item as={Link} to="/">
            About Us
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/blog">
            Blog
          </NavDropdown.Item>
        </NavDropdownMenu>
        <NavDropdownMenu title="Upgrades">
          {makes.distinct.map((make, idx) => {
            return (
              <DropdownSubmenu title={make} key={`sub-upgrade-${idx}`}>
                {models.edges.map(({ node: model }, idx) => {
                  if (model.make === make) {
                    return (
                      <NavDropdown.Item
                        key={`service-${model + idx}`}
                        as={Link}
                        to={`/upgrades/${model.slug}`}
                      >
                        {model.modelDesignation}
                      </NavDropdown.Item>
                    )
                  }
                })}
              </DropdownSubmenu>
            )
          })}
        </NavDropdownMenu>
        <NavDropdownMenu title="Servicing">
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
        </NavDropdownMenu>
      </StyledLinks>
    </StyledNav>
  )
}

export default MobileNav
