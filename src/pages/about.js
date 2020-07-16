import React from 'react'
import styled from "styled-components"
import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import Banner from '../components/banner'
import Speedo from "../images/speedometer-gauge.jpg"

const LowerLayer = styled.section`
  width: 100vw;
  min-height: 300px;
  position: relative;
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const UpperLayer = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  background-color: rgba(255,255,255,0.6);
  color: #313131;
  padding: 3rem 0;
`

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Section light="true">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="text-center text-lg-left my-4">About Us</h2>
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
              <Button
                className="w-25 mx-auto my-4 d-block"
                as={Link}
                to="/contact"
                variant="primary"
              >
                Contact Us
              </Button>
            </Col>
            <Col lg={{ span: 5, offset: 1 }}></Col>
          </Row>
        </Container>
      </Section>
      <Banner />
      <Section>
        <Container>
          <Row>
            <Col>
              <h2 className="text-center text-lg-left my-4">Our Mission</h2>
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
      <LowerLayer imageUrl={Speedo}>
        <UpperLayer>
          <Container>
            <Row>
              <Col lg={{span: 4, offset: 8}}>
                <h4 className="text-center text-lg-left my-4">Find out more about the products and services we have to offer.</h4>
                <Button className="mx-auto d-block my-4" variant="primary">View Products</Button>
              </Col>
            </Row>
          </Container>
        </UpperLayer>
      </LowerLayer>
    </Layout>
  )
}

export default About
