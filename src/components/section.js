import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  width: 100%;
  padding: 2rem 0;
  background-color: ${props => (props.light ? "#fff" : "transparent")};
`

const Section = ({children, light}) => {
  return (
    <StyledSection light={light}>
      { children }
    </StyledSection>
  )
}

export default Section
