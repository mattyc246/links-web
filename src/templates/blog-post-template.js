import React from "react"
import moment from "moment"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

const BlogHeader = styled.div`
  width: 100%;
  position: relative;

  .btn {
    position: absolute;
    top: 0;
    left: 0;
  }

  .details {
    position: absolute;
    padding: 0.5rem;
    bottom: 0;
    right: 0;
    max-width: 70%;
    min-height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-color: rgba(248, 155, 76, 0.8);
    color: white;

    h1 {
      font-size: 24px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0% 90%;
  }
`

const BlogBody = styled.div`
  padding: 0 1rem;

  a {
    color: #f89b4c;

    :hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 17px;
  }

  img {
    max-width: 75%;
    display: block;
    margin: 2rem auto;
  }

  @media screen and (min-width: 768px) {
    padding: 0 5rem;

    img {
      max-width: 50%;
    }
  }
`

const BlogTemplate = ({ data }) => {
  const {
    datoCmsBlog: { title, bodyNode, thumbnail, seoMetaTags, meta },
  } = data

  return (
    <Layout seo={seoMetaTags}>
      <BlogHeader>
        <Button className="my-2" as={Link} to="/blog" variant="primary">
          Back To Blog
        </Button>
        <img src={thumbnail.url} alt={thumbnail.alt} />
        <div className="details">
          <h1 className="my-0">{title}</h1>
        </div>
      </BlogHeader>
      <Section light="true">
        <Container>
          <BlogBody>
            <h2>{title}</h2>
            <small className="text-light">
              <strong>Published On:</strong>{" "}
              {moment(meta.publishedAt).format("MMMM Do YYYY")}
            </small>
            <hr />
            <div
              className="my-3"
              dangerouslySetInnerHTML={{
                __html: bodyNode.childMarkdownRemark.html,
              }}
            ></div>
          </BlogBody>
        </Container>
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    datoCmsBlog(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      slug
      title
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
      thumbnail {
        url
        alt
      }
      meta {
        publishedAt
      }
    }
  }
`

export default BlogTemplate
