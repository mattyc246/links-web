import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../images/links.png"
import { Navbar, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 28px;
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
  z-index: 3;
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

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  return (
    <StyledNav open={open} className="p-4 navbar bg-dark navbar-dark d-md-none">
      <div className="w-100 d-flex justify-content-between align-items-center">
        <Navbar.Brand>
          <img
            src={Logo}
            height="40"
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
        <Nav.Item>
          <Nav.Link as={Link} activeClassName="active" to="/about">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} activeClassName="active" to="/tuning">
            Tuning
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} activeClassName="active" to="/products">
            Products
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} activeClassName="active" to="/contact">
            Contact
          </Nav.Link>
        </Nav.Item>
      </StyledLinks>
    </StyledNav>
  )
}

export default MobileNav
