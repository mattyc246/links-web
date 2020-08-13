import React, { useState } from "react"
import { graphql } from "gatsby"
import Markdown from "react-markdown"
import styled from "styled-components"
import Aventador from "../videos/aventador_lfe.mp4"
import Section from "../components/section"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import Banner from "../components/banner"
import InstaFeed from "../components/instafeed"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons"

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 10px;

  .scrolly {
    display: none;
  }

  @media screen and (min-width: 992px) {
    .scrolly {
      display: block;
      text-align: center;

      .bouncy {
        position: relative;
        animation: bounce 0.5s infinite alternate-reverse;
      }
    }
  }
`

const VideoContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;

  video {
    width: 100%;
    height: 100%;
  }


  @media screen and (min-width: 1024px) {
    height: calc(100vh - 82px);

    video {
      height: 100%;
      width: 177.77777778vh; /* 100 * 16 / 9 */
      min-width: 100%;
      min-height: 56.25vw; /* 100 * 9 / 16 */
    }
  }
`

const IndexPage = ({ data }) => {
  const [isMuted, setIsMuted] = useState(true)
  const {
    history_body,
    history_image,
    services_body,
    services_images,
  } = data.strapiHomepage
  return (
    <Layout>
      <SEO title="Home" />
      <Section noPad>
        <VideoContainer>
          <video src={Aventador} autoPlay loop {...(isMuted ? {muted: true} : {muted: false})}></video>
          <Overlay>
            <div className="scrolly w-100 d-flex justify-content-between">
              <div />
              <FontAwesomeIcon className="bouncy" icon={faChevronDown} />
              {
                isMuted ? <FontAwesomeIcon onClick={() => setIsMuted(false)} icon={faVolumeMute} /> : <FontAwesomeIcon onClick={() => setIsMuted(true)} icon={faVolumeUp} />
              }
            </div>
          </Overlay>
        </VideoContainer>
      </Section>
      <Banner />
      <Section light="true">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="text-center text-lg-left my-4">Our History</h2>
              <div className="text-justify">
                <Markdown source={history_body} />
              </div>
            </Col>
            <Col lg={{ span: 5, offset: 1 }}>
              <img
                className="w-100"
                src={history_image[0].url}
                alt={history_image[0].alternativeText}
              />
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
                {services_images.map(image => {
                  return (
                    <Col key={image.id} className="my-3" xs={6} lg={4}>
                      <img
                        className="w-75 mx-auto d-block"
                        src={image.url}
                        alt={image.alternativeText}
                      />
                    </Col>
                  )
                })}
              </Row>
            </Col>
            <Col lg={{ span: 5, offset: 1 }}>
              <h2 className="text-center text-lg-left my-4">Our Services</h2>
              <div className="text-justify">
                <Markdown source={services_body} />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export const PageQuery = graphql`
  query Homepage {
    strapiHomepage {
      hero_body
      hero_image {
        alternativeText
        url
      }
      history_body
      history_image {
        alternativeText
        url
      }
      services_body
      services_images {
        alternativeText
        url
        id
      }
    }
  }
`

export default IndexPage
