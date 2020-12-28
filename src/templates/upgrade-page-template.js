import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Section from "../components/section"
import Container from "react-bootstrap/Container"
import Logo from "../images/links.png"

const UpgradePageTemplate = ({ data: { datoCmsUpgrade } }) => {
  const { make, modelDesignation, seoMetaTags } = datoCmsUpgrade

  return (
    <Layout seo={seoMetaTags}>
      <Section light="true" noPad>
        {/* <Img fluid={bannerImage.fluid} style={{ maxHeight: "500px" }} /> */}
        <Section light="true">
          <img
            className="d-block mx-auto my-4"
            src={Logo}
            alt="Links Engineering"
            style={{ width: "300px" }}
          />
          <h1 className="text-center mb-4">
            {make} {modelDesignation} Performance & Tuning
          </h1>
        </Section>
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    datoCmsUpgrade(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      make
      modelDesignation
    }
  }
`

export default UpgradePageTemplate
