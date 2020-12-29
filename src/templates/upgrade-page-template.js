import React from "react"
import { graphql, Link } from "gatsby"
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
        <Img fluid={bannerImage.fluid} style={{ maxHeight: "500px" }} />
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
            {packages.length > 0 ? (
              <Card className="my-5">
                <Card.Body className="shadow">
                  <Tab.Container defaultActiveKey={packages[0].id}>
                    <Row>
                      <Col sm={3}>
                        <Img className="my-3" fluid={bannerImage.fluid} />
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
                        <img
                          className="d-block mx-auto my-4"
                          src={Logo}
                          alt="Links Engineering"
                          style={{ width: "25%" }}
                        />
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
                                    </Package>
                                    <div className="my-4 text-right">
                                      <h4>
                                        Price:{" "}
                                        <Badge variant="primary">
                                          RM{pkg.price}
                                        </Badge>
                                      </h4>
                                    </div>
                                  </Container>
                                </Section>
                              </Tab.Pane>
                            )
                          })}
                          <Button
                            className="mx-auto d-block"
                            as={Link}
                            to="/contact"
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
          <div className="d-flex">
            {gallery.map((image, idx) => {
              return (
                <Img
                  key={`gallery-${idx}`}
                  fluid={image.fluid}
                  style={{ width: "25%" }}
                />
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
        fluid(maxWidth: 1920, imgixParams: { fm: "jpg", auto: "compress" }) {
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
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
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
