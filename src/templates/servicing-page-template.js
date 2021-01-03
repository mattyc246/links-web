import React from "react"
import styled from "styled-components"
import PageTitle from "../components/pagetitle"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Section from "../components/section"
import Container from "react-bootstrap/Container"
import Logo from "../images/links.png"

const FlexImg = styled.div`
  width: 50%;

  @media screen and (min-width: 768px) {
    width: 25%;
  }
`

const ServicingPageTemplate = ({ data }) => {
  const {
    datoCmsServicing: { title, bodyNode, bannerImage, gallery, seoMetaTags },
  } = data

  return (
    <Layout seo={seoMetaTags}>
      <Section light="true" noPad>
        <Img fluid={bannerImage.fluid} alt={bannerImage.alt} />
        <Section light="true">
          <img
            className="d-block mx-auto my-4"
            src={Logo}
            alt="Links Engineering"
            style={{ width: "300px" }}
          />
          <PageTitle className="text-center mb-4">{title} Servicing</PageTitle>
          <Container className="my-5 px-5">
            <div
              dangerouslySetInnerHTML={{
                __html: bodyNode.childMarkdownRemark.html,
              }}
            ></div>
          </Container>
          <div className="d-flex flex-wrap">
            {gallery.map((image, idx) => {
              return (
                <FlexImg key={`gallery-${idx}`}>
                  <Img fluid={image.fluid} alt={image.alt} />
                </FlexImg>
              )
            })}
          </div>
        </Section>
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    datoCmsServicing(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      slug
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
      bannerImage {
        fluid(maxWidth: 1920) {
          ...GatsbyDatoCmsSizes
        }
        alt
      }
      gallery {
        fluid(maxWidth: 600) {
          ...GatsbyDatoCmsSizes
        }
        alt
      }
    }
  }
`

export default ServicingPageTemplate
