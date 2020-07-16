import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  width: 100%;
  ${props => props.noPad ? "padding: 0;" : "padding: 3rem 0;"}
  background-color: ${props => (props.light ? "#fff" : "transparent")};
  color: ${props => props.light ? "#313131" : "#fff"};
`

const Section = ({children, light, noPad}) => {
  return (
    <StyledSection light={light} noPad={noPad}>
      { children }
    </StyledSection>
  )
}

export default Section
