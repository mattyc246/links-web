import React from "react"
import { graphql } from "gatsby"
import Markdown from "react-markdown"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "gatsby"
import Banner from "../components/banner"
import Content from "../components/content"

const LowerLayer = styled.section`
  width: 100vw;
  min-height: 300px;
  position: relative;
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const UpperLayer = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  color: #313131;
  padding: 3rem 0;
`

const TripleImage = styled.div`
  width: 100%;
  min-height: 50vh;
  position: relative;

  img {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 75%;
    left: 45%;
    transform: translate(-50%, -50%);
    z-index: 4;
    object-fit: cover;

    :first-child {
      top: 30%;
      left: 25%;
      z-index: 5;
    }

    :last-child {
      top: 35%;
      left: 75%;
      z-index: 3;
    }
  }

`

const About = ({data}) => {
  const {about_body, about_image, mission_body, cta_image} = data.strapiAboutpage
  return (
    <Layout>
      <SEO title="About" />
      <Section light="true">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <Content>
                <Markdown source={about_body} />
              </Content>
              <Button
                className="mx-auto my-4 d-inline-block"
                as={Link}
                to="/contact"
                variant="primary"
              >
                Get In Touch
              </Button>
            </Col>
            <Col lg={{ span: 5, offset: 1 }}>
              <TripleImage>
                {
                  about_image.map(image => {
                    return(
                      <img className="shadow-lg" key={image.id} src={image.url} alt={image.alternativeText} />
                    )
                  })
                }
              </TripleImage>
            </Col>
          </Row>
        </Container>
      </Section>
      <Banner />
      <Section>
        <Container>
          <Row className="align-items-center">
            <Col>
              <Content>
                <Markdown source={mission_body} />
              </Content>
            </Col>
          </Row>
        </Container>
      </Section>
      <LowerLayer imageUrl={cta_image[0].url}>
        <UpperLayer>
          <Container>
            <Row className="align-items-center">
              <Col lg={{ span: 4, offset: 8 }}>
                <h4 className="text-center text-lg-left my-4">
                  Find out more about the products and services we have to
                  offer.
                </h4>
                <Button as={Link} to="/services" className="d-inline-block my-3" variant="primary">
                  View Products & Services
                </Button>
              </Col>
            </Row>
          </Container>
        </UpperLayer>
      </LowerLayer>
    </Layout>
  )
}

export const PageQuery = graphql`
  query Aboutpage {
    strapiAboutpage {
      about_body
      about_image {
        alternativeText
        url
        id
      }
      mission_body
      cta_image {
        alternativeText
        url
      }
    }
  }
`

export default About
