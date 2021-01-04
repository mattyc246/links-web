import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  width: 100%;
  ${props => (props.noPad ? "padding: 0;" : "padding: 1rem 0;")}
  background-color: ${props => (props.light ? "#fff" : "#313131")};
  color: ${props => (props.light ? "#313131" : "#fff")};
`

const Section = ({ children, ...rest}) => {
  return (
    <StyledSection {...rest}>
      {children}
    </StyledSection>
  )
}

export default Section
