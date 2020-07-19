import React from "react"
import styled from "styled-components"
import Mustang from "../images/mustang.jpg"
import Mustang2 from "../images/mustang-2.jpg"
import Brake from "../images/automobile.png"
import Oil from "../images/motor.png"
import Piston from "../images/piston.png"
import Wrench from "../images/repair-wrenches.png"
import Speedo from "../images/speed.png"
import Suspension from "../images/suspension.png"

import Section from "../components/section"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Button } from "react-bootstrap"
import Banner from "../components/banner"
import InstaFeed from "../components/instafeed"

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
            <h2 className="text-center text-lg-left my-4">Our History</h2>
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
          <Col lg={{ span: 5, offset: 1 }}>
            <img className="w-100" src={Mustang2} alt="mustang" />
          </Col>
        </Row>
      </Container>
    </Section>
    <Section>
        <InstaFeed />
    </Section>
    <Section light="true">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <Row>
              <Col className="my-3" xs={6} lg={4}>
                <img
                  className="w-75 mx-auto d-block"
                  src={Wrench}
                  alt="Wrench"
                />
              </Col>
              <Col className="my-3" xs={6} lg={4}>
                <img
                  className="w-75 mx-auto d-block"
                  src={Speedo}
                  alt="Speedometer"
                />
              </Col>
              <Col className="my-3" xs={6} lg={4}>
                <img
                  className="w-75 mx-auto d-block"
                  src={Piston}
                  alt="Piston"
                />
              </Col>
              <Col className="my-3" xs={6} lg={4}>
                <img
                  className="w-75 mx-auto d-block"
                  src={Suspension}
                  alt="Suspension"
                />
              </Col>
              <Col className="my-3" xs={6} lg={4}>
                <img className="w-75 mx-auto d-block" src={Brake} alt="Brake" />
              </Col>
              <Col className="my-3" xs={6} lg={4}>
                <img className="w-75 mx-auto d-block" src={Oil} alt="Oil" />
              </Col>
            </Row>
          </Col>
          <Col lg={{ span: 5, offset: 1 }}>
            <h2 className="text-center text-lg-left my-4">Our Services</h2>
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
        </Row>
      </Container>
    </Section>
  </Layout>
)

export default IndexPage
