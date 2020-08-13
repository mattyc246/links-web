import React from 'react'
import styled from "styled-components"
import {graphql} from "gatsby"
import Markdown from "react-markdown"
import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'
import { Container, Row, Col } from 'react-bootstrap'
import Content from '../components/content'

const DoubleImage = styled.div`
  width: 100%;
  min-height: 50vh;
  position: relative;

  img {
    width: 55%;
    height: 25vh;
    object-fit: cover;
    position: absolute;
    top: 25%;
    left: 25%;
    transform: translate(-50%, -50%);
    z-index: 2;


    :last-child {
      top: 70%;
      left: 70%;
      z-index: 1;
    }
  }
`

const Tuning = ({data}) => {
  const {tuning_image, tuning_body, disclaimer_body} = data.strapiTuningPage
  return (
    <Layout>
      <SEO title="Tuning" />
      <Section>
        <Container>
          <Row className="align-items-center flex-column-reverse flex-lg-row">
            <Col lg={6}>
              <DoubleImage>
                {
                  tuning_image.map(image => {
                    return(
                      <img className="shadow-lg" key={image.id} src={image.url} alt={image.alternativeText} />
                    )
                  })
                }
              </DoubleImage>
            </Col>
            <Col lg={{span: 5, offset: 1}}>
              <Content>
                <Markdown source={tuning_body} />
              </Content>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section light="true">
        <Container>
          <div className="text-justify">
            <Markdown source={disclaimer_body} />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center my-4">Interactive Tuning Menu Coming Soon...</h2>
        </Container>
      </Section>
    </Layout>
  )
}

export const PageQuery = graphql`
  query Tuningpage {
    strapiTuningPage {
      tuning_body
      tuning_image {
        alternativeText
        url
        id
      }
      disclaimer_body
    }
  }
`

export default Tuning
