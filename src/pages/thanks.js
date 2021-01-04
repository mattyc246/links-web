import React from "react"
import Logo from "../images/links.png"
import styled from "styled-components"
import Layout from "../components/layout"
import Section from "../components/section"

const seoMetaTags = {
  tags: [{ content: "Thanks | Links", tagName: "title" }],
}

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  text-align: center;

  img {
    width: 250px;
    display: block;
    margin: 1rem auto;
  }

  h2 {
    font-size: 48px;
    font-weight: 600;
  }
`

const Thanks = () => {
  return (
    <Layout seo={seoMetaTags}>
      <Section light="false">
        <Container>
          <img src={Logo} alt="Links Engineering" />
          <h2>Thank you. We will get back to you shortly.</h2>
        </Container>
      </Section>
    </Layout>
  )
}

export default Thanks
