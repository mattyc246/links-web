import React from 'react'
import styled from 'styled-components'

const BodyContent = styled.div`
  padding: 1rem;

  h1,h2,h3,h4,h5,h6 {
    font-weight: 400;
    margin: 1.5rem 0;
  }

  p {
    text-align: justify;
  }
`

const Content = ({children}) => {
  return (
    <BodyContent>
      {children}
    </BodyContent>
  )
}

export default Content
