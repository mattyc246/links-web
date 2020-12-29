import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  margin: 2rem 0 5rem 0;
`

const PageTitle = ({ children, ...rest }) => {
  return <Title {...rest}>{children}</Title>
}

export default PageTitle
