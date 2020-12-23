import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

const BlogHeader = styled.div`
  width: 100%;
  height: 520px;
  position: relative;

  .details {
    border-top-left-radius: 10px;
    position: absolute;
    padding: 1rem;
    bottom: 0;
    right: 0;
    max-width: 70%;
    min-height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
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
    datoCmsBlog: { title, bodyNode, thumbnail, seoMetaTags },
  } = data

  return (
    <Layout seo={seoMetaTags}>
      <Section light="true">
        <Container>
          <Button className="my-2" as={Link} to="/blog" variant="primary">
            Back To Blog
          </Button>
          <BlogHeader className="my-3">
            <img src={thumbnail.url} alt={thumbnail.alt} />
            <div className="details">
              <h1 className="my-0">{title}</h1>
            </div>
          </BlogHeader>
          <BlogBody
            dangerouslySetInnerHTML={{
              __html: bodyNode.childMarkdownRemark.html,
            }}
          ></BlogBody>
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
    }
  }
`

export default BlogTemplate
