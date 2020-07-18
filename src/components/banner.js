import React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"

const StyledBanner = styled.div`
  display: none;

  p {
    margin: 0;
  }

  @media screen and (min-width: 992px) {
    display: block;
  }
`

const BannerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

const Banner = () => {
  return (
    <StyledBanner className="bg-dark text-white">
      <Container>
        <BannerContent>
          <p>Servicing</p>
          <p>ECU Tuning</p>
          <p>Exhaust Systems</p>
          <p>Repairs</p>
          <p>Maintenance</p>
        </BannerContent>
      </Container>
    </StyledBanner>
  )
}

export default Banner
