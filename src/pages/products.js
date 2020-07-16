import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import { Container, Row, Col, Button } from 'react-bootstrap'

const Products = () => {
  return (
    <Layout>
      <SEO title="Products" />
      <Section light="true">
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="text-center text-lg-left my-4">Products</h2>
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
              <Button className="mx-auto d-block my-4" variant="primary">Contact Us</Button>
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="text-center text-lg-left my-4">Tuning</h2>
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
            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>
      <Section light="true">
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="text-center text-lg-left my-4">Servicing</h2>
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
            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="text-center text-lg-left my-4">Repairs</h2>
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
            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export default Products
