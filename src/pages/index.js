import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql } from "gatsby"
import Markdown from "react-markdown"
import Section from "../components/section"
import Layout from "../components/layout"
import Content from "../components/content"
import { Container, Row, Col } from "react-bootstrap"
import Banner from "../components/banner"
import CarouselBanner from "../components/carouselbanner"
import HomeVideo from "../components/homevideo"

const HomeTitle = styled.h2`
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  margin: 1.5rem 0rem;
`

const IndexPage = ({ data }) => {
  const {
    heroCarousel,
    latestVideo,
    videoDescriptionNode,
    aboutUsNode,
    performanceTuningNode,
    servicesNode,
    servicesIcons,
    seoMetaTags,
  } = data.home

  return (
    <>
      <Layout seo={seoMetaTags}>
        <Section noPad>
          <CarouselBanner images={heroCarousel} />
        </Section>
        <Banner />
        <Section light="true">
          <Container>
            <HomeTitle>Malaysia's Premier Performance Car Center</HomeTitle>
            <Row>
              <Col lg={6}>
                <Content>
                  <Markdown
                    source={aboutUsNode.childMarkdownRemark.rawMarkdownBody}
                  />
                </Content>
              </Col>
              <Col lg={6}>
                <Content>
                  <Markdown
                    source={
                      performanceTuningNode.childMarkdownRemark.rawMarkdownBody
                    }
                  />
                </Content>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section light="true">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <Content>
                  <Markdown
                    source={servicesNode.childMarkdownRemark.rawMarkdownBody}
                  />
                </Content>
              </Col>
              <Col lg={6}>
                <Row>
                  {servicesIcons.map(image => {
                    return (
                      <Col key={image.originalId} className="my-3" xs={4}>
                        <Img
                          className="w-75 mx-auto d-block"
                          fluid={image.fluid}
                          alt={image.alt}
                        />
                      </Col>
                    )
                  })}
                </Row>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section light="true">
          <Container>
            <Row>
              <Col>
                <Content>
                  <Markdown
                    source={
                      videoDescriptionNode.childMarkdownRemark.rawMarkdownBody
                    }
                  />
                </Content>
                <HomeVideo url={latestVideo.url} />
              </Col>
            </Row>
          </Container>
        </Section>
      </Layout>
    </>
  )
}

export const PageQuery = graphql`
  query Homepage {
    home: datoCmsHomepage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      aboutUsNode {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      heroCarousel {
        fluid(maxWidth: 1920, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
        alt
      }
      performanceTuningNode {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      videoDescriptionNode {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      servicesNode {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      servicesIcons {
        alt
        originalId
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      latestVideo {
        url
      }
    }
  }
`

export default IndexPage
