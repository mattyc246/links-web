import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Layout from "../components/layout"
import Section from "../components/section"

const seoMetaTags = {
  tags: [{ content: "Blog | Links", tagName: "title" }],
}

const Blog = ({ data }) => {
  const {
    blog: { edges },
  } = data

  return (
    <Layout seo={seoMetaTags}>
      <Section light="true">
        <Container>
          <h1 className="my-4">Blog</h1>
          <Row>
            <Col xs={12} md={9}>
              {edges.map((blog, index) => {
                const { title, slug, blurb, thumbnail } = blog.node
                return (
                  <React.Fragment key={index}>
                    <Row>
                      <Col md={5}>
                        <Img fluid={thumbnail.fluid} />
                      </Col>
                      <Col md={7}>
                        <h3>{title}</h3>
                        <p>{blurb}</p>
                        <div className="d-flex justify-content-end">
                          <Button variant="link" as={Link} to={`/blog/${slug}`}>
                            Read More
                          </Button>
                        </div>
                      </Col>
                    </Row>
                    <hr />
                  </React.Fragment>
                )
              })}
            </Col>
            <Col xs={0} md={3}></Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export const PageQuery = graphql`
  query Blog {
    blog: allDatoCmsBlog {
      edges {
        node {
          title
          slug
          thumbnail {
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
            alt
          }
          blurb
        }
      }
    }
  }
`

export default Blog
