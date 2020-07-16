import React from 'react'
import styled from "styled-components"

const StyledBanner = styled.div`
  display: none;

  p {
    margin: 0;
  }

  @media screen and (min-width: 992px){
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
`

const Banner = () => {
  return (
    <StyledBanner className="bg-dark text-white">
      <p>Servicing</p>
      <p>ECU Tuning</p>
      <p>Exhaust Systems</p>
      <p>Repairs</p>
      <p>Maintenance</p>
    </StyledBanner>
  )
}

export default Banner
