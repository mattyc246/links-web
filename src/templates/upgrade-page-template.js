import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import PPLogo from "../images/links-pp.png"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Section from "../components/section"
import Container from "react-bootstrap/Container"
import Logo from "../images/links.png"
import Tab from "react-bootstrap/Tab"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Nav from "react-bootstrap/Nav"
import Badge from "react-bootstrap/Badge"
import Package from "../components/package"
import Button from "react-bootstrap/Button"
import PageTitle from "../components/pagetitle"

const FlexImg = styled.div`
  width: 50%;

  @media screen and (min-width: 768px) {
    width: 25%;
  }
`

const UpgradePageTemplate = ({ data: { datoCmsUpgrade } }) => {
  const {
    make,
    modelDesignation,
    bannerImage,
    gallery,
    descriptionNode,
    packages,
    seoMetaTags,
  } = datoCmsUpgrade

  return (
    <Layout seo={seoMetaTags}>
      <Section light="true" noPad>
        <Img fluid={bannerImage.fluid} alt={bannerImage.alt} />
        <Section light="true">
          <img
            className="d-block mx-auto my-4"
            src={Logo}
            alt="Links Engineering"
            style={{ width: "25%" }}
          />
          <PageTitle className="text-center mb-4">
            {make} {modelDesignation} Performance & Tuning
          </PageTitle>
          <Container className="my-5 px-5">
            <div
              dangerouslySetInnerHTML={{
                __html: descriptionNode.childMarkdownRemark.html,
              }}
            ></div>
          </Container>
          <Section className="my-3">
            <Container>
              {packages.length > 0 ? (
                <Card
                  style={{ backgroundColor: "transparent" }}
                  className="my-5 border-0"
                >
                  <Card.Body>
                    <Tab.Container defaultActiveKey={packages[0].id}>
                      <Row>
                        <Col sm={3}>
                          <img
                            className="my-3 w-75 d-block mx-auto"
                            src={PPLogo}
                            alt="Links Performance Packages"
                          />
                          <Nav variant="pills" className="flex-column">
                            {packages.map(pkg => {
                              return (
                                <Nav.Item key={pkg.id}>
                                  <Nav.Link eventKey={pkg.id}>
                                    {pkg.packageTitle}
                                  </Nav.Link>
                                </Nav.Item>
                              )
                            })}
                          </Nav>
                        </Col>
                        <Col sm={9}>
                          <Tab.Content>
                            {packages.map(pkg => {
                              return (
                                <Tab.Pane key={pkg.id} eventKey={pkg.id}>
                                  <Section>
                                    <Container>
                                      <Package>
                                        <div
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              pkg.packageDetailsNode
                                                .childMarkdownRemark.html,
                                          }}
                                        />
                                        <div className="my-4 text-right">
                                          <h4>
                                            Price:{" "}
                                            <Badge variant="primary">
                                              RM{pkg.price}
                                            </Badge>
                                          </h4>
                                        </div>
                                      </Package>
                                    </Container>
                                  </Section>
                                </Tab.Pane>
                              )
                            })}
                            <Button
                              className="mx-auto d-block"
                              as={Link}
                              to="/get-in-touch"
                              style={{ width: "80%" }}
                            >
                              Contact Us
                            </Button>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </Card.Body>
                </Card>
              ) : (
                <h3 className="text-center my-5">Contact Us To Discuss</h3>
              )}
            </Container>
          </Section>
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
    datoCmsUpgrade(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      make
      modelDesignation
      bannerImage {
        fluid(maxWidth: 1920) {
          ...GatsbyDatoCmsSizes
        }
        alt
      }
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      gallery {
        fluid(maxWidth: 600) {
          ...GatsbyDatoCmsSizes
        }
        alt
      }
      packages {
        packageDetailsNode {
          childMarkdownRemark {
            html
          }
        }
        id
        packageTitle
        price
      }
    }
  }
`

export default UpgradePageTemplate
