import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'
import { Container, Row, Col } from 'react-bootstrap'

const Tuning = () => {
  return (
    <Layout>
      <SEO title="Tuning" />
      <Section>
        <Container>
          <Row>
            <Col lg={6}></Col>
            <Col lg={6}>
              <h2 className="text-center text-lg-left my-4">Links Tuning</h2>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section light="true">
        <Container>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center text-lg-left my-4">Tuning Menu</h2>
        </Container>
      </Section>
    </Layout>
  )
}

export default Tuning
