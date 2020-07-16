import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import Banner from "../components/banner"
import { Container, Row, Col } from "react-bootstrap"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Section>
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="text-center text-lg-left my-4">Find Us</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15937.170453715911!2d101.618019!3d3.015818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9031bb002ed83ee6!2sLinks%20Engineering%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1594900957675!5m2!1sen!2smy"
                width="100%"
                height="450"
                frameborder="0"
                style={{borderRadius: "5px"}}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>
      <Banner />
      <Section light="true">
        <Row></Row>
      </Section>
    </Layout>
  )
}

export default Contact
