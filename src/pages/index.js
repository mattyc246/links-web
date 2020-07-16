import React from "react"
import styled from "styled-components"
import Mustang from "../images/mustang.jpg"
import Mustang2 from "../images/mustang-2.jpg"

import Section from "../components/section"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Button } from "react-bootstrap"
import Banner from "../components/banner"

const HeroContent = styled.div`
  color: #fff;
  padding: 2rem 1.5rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section noPad>
      <Container fluid>
        <Row className="align-items-center">
          <Col lg={8}>
            <img className="w-100 my-auto" src={Mustang} alt="Mustang" />
          </Col>
          <Col lg={4}>
            <HeroContent>
              <h3 className="text-center my-4">Latest Feature</h3>
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
            <h3 className="text-center text-lg-left my-4">Our History</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </Col>
          <Col lg={{span: 5, offset: 1}}>
            <img className="w-100" src={Mustang2} alt="mustang" />
          </Col>
        </Row>
      </Container>
    </Section>
  </Layout>
)

export default IndexPage
