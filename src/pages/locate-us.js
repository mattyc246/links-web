import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import { Container, Row, Col } from "react-bootstrap"
import PageTitle from "../components/pagetitle"

const LocateUs = ({ data }) => {
  const { seoMetaTags } = data.datoCmsLocation

  return (
    <Layout seo={seoMetaTags}>
      <Section light="false">
        <PageTitle className="my-4">Locate Us</PageTitle>
        <Container>
          <Row className="align-items-center">
            <Col md={9}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15937.170453715911!2d101.618019!3d3.015818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9031bb002ed83ee6!2sLinks%20Engineering%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1594900957675!5m2!1sen!2smy"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ borderRadius: "5px" }}
                allowFullScreen=""
                aria-hidden="false"
              ></iframe>
            </Col>
            <Col md={3}>
              <Row>
                <Col xs={12}>
                  <h4>Address:</h4>
                  <p>
                    112, Jalan Puteri 5/5, <br />
                    Bandar Puteri, Puchong, <br />
                    47100, Selangor DE, <br />
                    Malaysia
                  </p>
                  <hr />
                </Col>
                <Col xs={12}>
                  <h4>Office Hours:</h4>
                  <p>
                    Monday: 9:00am - 7:00pm <br />
                    Tuesday: 9:00am - 7:00pm <br />
                    Wednesday: 9:00am - 7:00pm <br />
                    Thursday: 9:00am - 7:00pm <br />
                    Friday: 9:00am - 7:00pm <br />
                    Saturday: 9:00am - 7:00pm <br />
                    Sunday: Closed
                  </p>
                  <hr />
                </Col>
                <Col xs={12}>
                  <h4>Email:</h4>
                  <a href="mailto:linksracing@gmail.com" rel="noreferrer">
                    linksracing@gmail.com
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export const PageQuery = graphql`
  {
    datoCmsLocation {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`

export default LocateUs
