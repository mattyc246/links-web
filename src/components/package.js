import React from "react"
import styled from "styled-components"

const StyledContent = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }

  hr {
    background-color: white;
    margin: 1rem 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
`

const Package = ({ children }) => {
  return <StyledContent>{children}</StyledContent>
}

export default Package
