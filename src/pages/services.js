import React from "react"
import Markdown from "react-markdown"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import { Container, Row, Col, Button } from "react-bootstrap"
import Content from "../components/content"

const Services = ({ data }) => {
  const {
    products_body,
    products_image,
    tuning_body,
    tuning_image,
    servicing_body,
    servicing_image,
    repairs_body,
    repairs_image,
  } = data.strapiProductspage
  return (
    <Layout>
      <SEO title="Services" />
      <Section light="true">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <Content>
                <Markdown source={products_body} />
              </Content>
              <Button as={Link} to="/contact" className="mx-auto d-inline-block my-3" variant="primary">
                Contact Us
              </Button>
            </Col>
            <Col lg={{ span: 5, offset: 1 }}>
              <img
                className="mx-auto my-4 d-block w-100 shadow-lg"
                src={products_image[0].url}
                alt={products_image[0].alternateText}
              />
            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <Content>
                <Markdown source={tuning_body} />
              </Content>
            </Col>
            <Col lg={{ span: 4, offset: 2 }}>
              <img
                className="mx-auto my-4 d-block w-100 shadow-lg"
                src={tuning_image[0].url}
                alt={tuning_image[0].alternateText}
              />
            </Col>
          </Row>
        </Container>
      </Section>
      <Section light="true">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <Content>
                <Markdown source={servicing_body} />
              </Content>
            </Col>
            <Col lg={{ span: 4, offset: 2 }}>
              <img
                className="mx-auto my-4 d-block w-100 shadow-lg"
                src={servicing_image[0].url}
                alt={servicing_image[0].alternateText}
              />
            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <Content>
                <Markdown source={repairs_body} />
              </Content>
            </Col>
            <Col lg={{ span: 4, offset: 2 }}>
              <img
                className="mx-auto my-4 d-block w-100 shadow-lg"
                src={repairs_image[0].url}
                alt={repairs_image[0].alternateText}
              />
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export const PageQuery = graphql`
  query Productspage {
    strapiProductspage {
      products_body
      products_image {
        alternativeText
        url
        id
      }
      tuning_body
      tuning_image {
        alternativeText
        url
        id
      }
      servicing_body
      servicing_image {
        alternativeText
        url
        id
      }
      repairs_body
      repairs_image {
        alternativeText
        url
        id
      }
    }
  }
`

export default Services
