import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWhatsapp,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { Container } from "react-bootstrap"

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #2b2727;
`
const FlexyFooter = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: center;
    .mobile-only {
      display: none;
    }
  }
`
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

const Footer = () => {
  return (
    <StyledFooter className="py-4">
      <Container>
        <FlexyFooter>
          <small className="text-center d-block">
            © {new Date().getFullYear()} Links Engineering Sdn Bhd
          </small>
          <div class="mobile-only">
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
          </div>
        </FlexyFooter>
      </Container>
    </StyledFooter>
  )
}

export default Footer
