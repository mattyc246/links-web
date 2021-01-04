import React from "react"
import { Link } from "gatsby"
import Logo from "../images/links.png"
import styled from "styled-components"
import Layout from "../components/layout"
import Section from "../components/section"

const seoMetaTags = {
  tags: [{ content: "Page Not Found | Links", tagName: "title" }],
}

const Container = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 250px;
    display: block;
    margin: 1rem auto;
  }
`

const NotFoundPage = () => (
  <Layout seo={seoMetaTags}>
    <Section light="false">
      <Container>
        <img src={Logo} alt="Links Engineering" />
        <h1>PAGE NOT FOUND</h1>
        <p>Try heading here instead: <Link to="/">Home</Link></p>
      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage
