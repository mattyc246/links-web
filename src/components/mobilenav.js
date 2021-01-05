import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../images/links.png"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Accordion from "react-bootstrap/Accordion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

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
  width: 100%;
  flex-grow: 1;
  display: ${props => (props.open ? "flex!important" : "none")};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .nav-link {
    width: 100%;
    display: block;
    text-align: center;
    color: #fff;
    padding: 1rem 0;

    :hover {
      background-color: #262626;
    }
  }
`

const FirstLevel = styled(Accordion.Collapse)`
  width: 100%;
  margin: 0 auto;
  background-color: #363636;

  .nav-link {
    :hover {
      background-color: #343434;
    }
  }
`

const SecondLevel = styled(Accordion.Collapse)`
  width: 100%;
  margin: 0 auto;
  background-color: #262626;

  .nav-link {
    padding: 1rem 0;

    :hover {
      background-color: rgba(255, 255, 255, 0.1);
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
      <StyledLinks className="nav py-4" open={open}>
        <Nav.Link as={Link} activeClassName="active" to="/">
          Home
        </Nav.Link>
        <Accordion className="w-100 text-center">
          <Accordion.Toggle as={Nav.Link} variant="link" eventKey="0">
            About
          </Accordion.Toggle>
          <FirstLevel eventKey="0">
            <div className="d-flex flex-column align-items-center">
              <Nav.Link as={Link} activeClassName="active" to="/">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} activeClassName="active" to="/blog">
                Blog
              </Nav.Link>
            </div>
          </FirstLevel>
        </Accordion>
        <Accordion className="w-100 text-center">
          <Accordion.Toggle as={Nav.Link} variant="link" eventKey="1">
            Upgrades
          </Accordion.Toggle>
          <FirstLevel eventKey="1">
            <div>
              {makes.distinct.map((make, idx) => {
                return (
                  <Accordion key={`make-${make}`}>
                    <Accordion.Toggle
                      as={Nav.Link}
                      variant="link"
                      eventKey={`2.${idx}`}
                    >
                      {make}
                    </Accordion.Toggle>
                    <SecondLevel eventKey={`2.${idx}`}>
                      <div>
                        {models.edges
                          .filter(({ node: model }) => model.make === make)
                          .map(({ node: model }, idx) => {
                            return (
                              <Nav.Link
                                key={`model-${model}`}
                                as={Link}
                                activeClassName="active"
                                to={`/upgrades/${model.slug}`}
                              >
                                {model.modelDesignation}
                              </Nav.Link>
                            )
                          })}
                      </div>
                    </SecondLevel>
                  </Accordion>
                )
              })}
            </div>
          </FirstLevel>
        </Accordion>
        <Accordion className="w-100 text-center">
          <Accordion.Toggle as={Nav.Link} variant="link" eventKey="2">
            Servicing
          </Accordion.Toggle>
          <FirstLevel eventKey="2">
            <div>
              {allDatoCmsServicing.edges.map(({ node: service }, idx) => {
                return (
                  <Nav.Link
                    key={`service-${service.title}`}
                    as={Link}
                    activeClassName="active"
                    to={`/servicing/${service.slug}`}
                  >
                    {service.title}
                  </Nav.Link>
                )
              })}
            </div>
          </FirstLevel>
        </Accordion>
        <Accordion className="w-100 text-center">
          <Accordion.Toggle as={Nav.Link} variant="link" eventKey="3">
            Contact
          </Accordion.Toggle>
          <FirstLevel eventKey="3">
            <div className="d-flex flex-column align-items-center">
              <Nav.Link as={Link} activeClassName="active" to="/get-in-touch">
                Get In Touch
              </Nav.Link>
              <Nav.Link as={Link} activeClassName="active" to="/locate-us">
                Locate Us
              </Nav.Link>
            </div>
          </FirstLevel>
        </Accordion>
      </StyledLinks>
    </StyledNav>
  )
}

export default MobileNav
