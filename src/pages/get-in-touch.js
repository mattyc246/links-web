import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import { Container, Row, Col } from "react-bootstrap"
import ContactForm from "../components/contactform"
import PageTitle from "../components/pagetitle"

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 42px;
`

const GetInTouch = ({ data }) => {
  const { seoMetaTags } = data.datoCmsContact
  return (
    <Layout seo={seoMetaTags}>
      <Section light="true">
        <PageTitle className="my-4">Get In Touch</PageTitle>
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }}>
              <ContactForm />
              <hr />
              <div className="d-flex justify-content-between">
                <a
                  href="https://www.facebook.com/links.com.my/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary"
                >
                  <StyledIcon icon={faFacebookSquare} />
                </a>
                <a
                  href="https://www.instagram.com/shirleylinks/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary"
                >
                  <StyledIcon icon={faInstagram} />
                </a>
                <a
                  href="https://wa.link/vihotg"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary"
                >
                  <StyledIcon icon={faWhatsapp} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export const PageQuery = graphql`
  {
    datoCmsContact {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`

export default GetInTouch
