import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #2b2727;
`

const Icons = styled.div`
  svg {
    font-size: 36px;
  }
`

const Footer = () => {
  return (
    <StyledFooter className="py-5">
      <Container>
        <Row>
          <Col xs={6} lg={4}>
            <h6>Links Engineering Sdn Bhd</h6>
            <Navbar className="navbar-dark">
              <Nav className="nav d-flex flex-column">
                <Nav.Item>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/tuning">
                  Tuning
                </Nav.Link>
                <Nav.Link as={Link} to="/products">
                  Products
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>
          <Col className="text-center" xs={6} lg={4}>
            <h6>Find us on social media:</h6>
            <Icons className="my-4 d-flex justify-content-center">
              <a
                href="https://www.facebook.com/links.com.my/"
                rel="noreferrer"
                target="_blank"
                className="text-primary"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-primary"
              >
                <FontAwesomeIcon className="mx-3" icon={faYoutube} />
              </a>
              <a
                href="https://instagram.com/shirleylinks"
                rel="noreferrer"
                target="_blank"
                className="text-primary"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </Icons>
          </Col>
          <Col className="text-center d-none d-lg-block" xs={0} lg={4}>
            <h6>Address:</h6>
            <div className="w-50 my-4 ml-auto text-left">
              <p>
                112, Jalan Puteri 5/5, <br />
                Bandar Puteri, Puchong, <br />
                47100, Selangor, <br />
                Malaysia
              </p>
            </div>
          </Col>
        </Row>
        <small className="text-center d-block">
          © {new Date().getFullYear()} Links Engineering Sdn Bhd
        </small>
      </Container>
    </StyledFooter>
  )
}

export default Footer
