import React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #2b2727;
`

const Footer = () => {
  return (
    <StyledFooter className="py-4">
      <Container>
        <small className="text-center d-block">
          © {new Date().getFullYear()} Links Engineering Sdn Bhd
        </small>
      </Container>
    </StyledFooter>
  )
}

export default Footer
