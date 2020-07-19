import React from "react"
import { graphql } from "gatsby"
import Markdown from "react-markdown"
import styled from "styled-components"

import Section from "../components/section"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Button } from "react-bootstrap"
import Banner from "../components/banner"
import InstaFeed from "../components/instafeed"

const HeroContent = styled.div`
  color: #fff;
  padding: 2rem 1.5rem;
`

const IndexPage = ({ data }) => {
  const {
    hero_body,
    hero_image,
    history_body,
    history_image,
    services_body,
    services_images,
  } = data.strapiHomepage
  return (
    <Layout>
      <SEO title="Home" />
      <Section noPad>
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={8}>
              <img className="w-100 my-auto" src={hero_image[0].url} alt={hero_image[0].alternativeText} />
            </Col>
            <Col lg={4}>
              <HeroContent>
                <h3 className="text-center my-4">Latest Feature</h3>
                <div className="text-justify">
                  <Markdown source={hero_body} />
                </div>
                <Button className="mx-auto d-block my-4" variant="primary">
                  See More
                </Button>
              </HeroContent>
            </Col>
          </Row>
        </Container>
      </Section>
      <Banner />
      <Section light="true">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="text-center text-lg-left my-4">Our History</h2>
              <div className="text-justify">
                <Markdown source={history_body} />
              </div>
            </Col>
            <Col lg={{ span: 5, offset: 1 }}>
              <img className="w-100" src={history_image[0].url} alt={history_image[0].alternativeText} />
            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <InstaFeed />
      </Section>
      <Section light="true">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <Row>
                {
                  services_images.map(image => {
                    return (
                      <Col key={image.id} className="my-3" xs={6} lg={4}>
                        <img
                          className="w-75 mx-auto d-block"
                          src={image.url}
                          alt={image.alternativeText}
                        />
                      </Col>
                    )
                  })
                }
              </Row>
            </Col>
            <Col lg={{ span: 5, offset: 1 }}>
              <h2 className="text-center text-lg-left my-4">Our Services</h2>
              <div className="text-justify">
                <Markdown source={services_body} />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export const PageQuery = graphql`
  query Homepage {
    strapiHomepage {
      hero_body
      hero_image {
        alternativeText
        url
      }
      history_body
      history_image {
        alternativeText
        url
      }
      services_body
      services_images {
        alternativeText
        url
        id
      }
    }
  }
`

export default IndexPage
