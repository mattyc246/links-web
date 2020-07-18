import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import Banner from "../components/banner"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookMessenger,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 34px;
  margin-right: 2rem;
`

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
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15937.170453715911!2d101.618019!3d3.015818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9031bb002ed83ee6!2sLinks%20Engineering%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1594900957675!5m2!1sen!2smy"
                width="100%"
                height="450"
                frameborder="0"
                style={{ borderRadius: "5px" }}
                allowfullscreen=""
                aria-hidden="false"
              ></iframe>
            </Col>
            <Col lg={6}>
              <Row>
                <Col xs={5}>
                  <div className="w-100 p-3">
                    <p>
                      Address:
                    </p>
                    <p>
                      112, Jalan Puteri 5/5, <br />
                      Bandar Puteri, Puchong, <br />
                      47100, Selangor DE, <br />
                      Malaysia
                    </p>
                  </div>
                </Col>
                <Col xs={7}>
                  <div className="p-3 text-right">
                    <p>
                      <span className="mr-3">Tel:</span> 03-1234-5678
                      (Office) <br />
                      012-392-2022 (Mr. Kee) <br /> 012-202-2822 (Shirley){" "}
                      <br /> 012-332-3232 (Chester)
                    </p>
                    <p>
                      <span className="mr-3">Email: </span>{" "}
                      linksracing@gmail.com
                    </p>
                  </div>
                </Col>
              </Row>
              <hr className="border border-light" />
              <Row>
                <Col>
                  <div className="p-4 text-center">
                    <h5>Social Media:</h5>
                    <div className="d-flex align-items-center p-3 mx-auto my-4">
                      <StyledIcon icon={faFacebook} />
                      <p className="m-0">
                        Drop us a like and share on Facebook
                      </p>
                    </div>
                    <div className="d-flex align-items-center p-3 mx-auto my-4">
                      <StyledIcon icon={faFacebookMessenger} />
                      <p className="m-0">
                        Send your enquiries via Facebook Messenger
                      </p>
                    </div>
                    <div className="d-flex align-items-center p-3 mx-auto my-4">
                      <StyledIcon icon={faInstagram} />
                      <p className="m-0">
                        Like, comment and DM us on Instagram
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
      <Banner />
      <Section light="true">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }}>
              <h2 className="text-center my-4">Get in touch with us</h2>
              <p>
                Drop us a message, we will aim to respond to all enquiries
                within 24-48 hours.
              </p>
              <Form>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className="border border-dark"
                    type="text"
                    placeholder="Full Name"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="border border-dark"
                    type="email"
                    placeholder="Email Address"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control className="border border-dark" as="select">
                    <option disabled>Choose your enquiry type</option>
                    <option>General</option>
                    <option>Business</option>
                    <option>Dealer</option>
                    <option>Support</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    className="border border-dark"
                    as="textarea"
                    rows="3"
                  />
                </Form.Group>
                <Button variant="primary" className="mx-auto d-block">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export default Contact
