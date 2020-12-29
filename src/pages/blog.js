import React, { useEffect, useState } from "react"
import PageTitle from "../components/pagetitle"
import moment from "moment"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Layout from "../components/layout"
import Section from "../components/section"

const ClickableTag = styled.span`
  color: #f79a3c;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    padding-left: 1rem;
    text-transform: capitalize;
  }
`

const seoMetaTags = {
  tags: [{ content: "Blog | Links", tagName: "title" }],
}

const Blog = ({ data }) => {
  const {
    blog: { edges },
  } = data

  const [filterCategory, setFilterCategory] = useState(null)

  const [blogPosts, setBlogPosts] = useState(edges)

  const [categories, setCategories] = useState([])

  useEffect(() => {
    let allCategories = []
    edges.forEach(blog => {
      let splitTags = blog.node.tags.split(",")
      allCategories = [...allCategories, ...splitTags]
      allCategories = [...new Set(allCategories)]
    })
    setCategories(allCategories.sort())
  }, [edges])

  useEffect(() => {
    if (filterCategory === null) {
      setBlogPosts([...edges])
    } else {
      let filteredBlogs = edges.filter(blog =>
        blog.node.tags.split(",").includes(filterCategory)
      )
      setBlogPosts(filteredBlogs)
    }
  }, [filterCategory, edges])

  return (
    <Layout seo={seoMetaTags}>
      <Section light="true">
        <Container>
          <PageTitle className="my-4">
            Blog {filterCategory ? `- ${filterCategory}` : ""}
          </PageTitle>
          <Row>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 9, order: 1 }}>
              {blogPosts.map((blog, index) => {
                const { title, slug, blurb, thumbnail, tags, meta } = blog.node
                return (
                  <React.Fragment key={index}>
                    <Row>
                      <Col md={5}>
                        <Img fluid={thumbnail.fluid} />
                      </Col>
                      <Col md={7} className="h-100">
                        <div className="d-flex flex-column">
                          <h2>{title}</h2>
                          <small className="text-light">
                            Published On:{" "}
                            {moment(meta.publishedAt).format("MMMM Do YYYY")}
                          </small>
                          <p className="my-3">
                            Tags:{" "}
                            {tags.split(",").map((tag, idx) => {
                              if (idx === tags.split(",").length - 1) {
                                return (
                                  <ClickableTag
                                    key={idx}
                                    onClick={() => setFilterCategory(tag)}
                                  >
                                    {tag}
                                  </ClickableTag>
                                )
                              } else {
                                return (
                                  <>
                                    <ClickableTag
                                      key={idx}
                                      onClick={() => setFilterCategory(tag)}
                                    >
                                      {tag}
                                    </ClickableTag>
                                    {", "}
                                  </>
                                )
                              }
                            })}
                          </p>
                          <p>{blurb}</p>
                          <div className="d-flex justify-content-end">
                            <Button
                              variant="link"
                              as={Link}
                              to={`/blog/${slug}`}
                            >
                              Read More
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr />
                  </React.Fragment>
                )
              })}
            </Col>
            <Col
              className="d-none d-md-block"
              xs={{ span: 12, order: 1 }}
              md={{ span: 3, order: 2 }}
            >
              <div className="border-left p-3">
                <h3>Latest Posts</h3>
                <hr />
                <StyledList>
                  {edges.slice(0, 5).map((blog, index) => {
                    const { title, slug } = blog.node

                    return (
                      <li key={`post-${index}`}>
                        <Link to={`/blog/${slug}`}>{title}</Link>
                      </li>
                    )
                  })}
                </StyledList>
                <h3 className="mt-4">Categories</h3>
                <hr />
                {filterCategory ? (
                  <Button
                    className="my-3"
                    variant="dark"
                    onClick={() => setFilterCategory(null)}
                    block
                  >
                    Clear Filter
                  </Button>
                ) : (
                  ""
                )}
                <StyledList>
                  {categories.map((category, idx) => {
                    return (
                      <li key={`cat-${idx}`}>
                        <ClickableTag
                          onClick={() => setFilterCategory(category)}
                        >
                          {category}
                        </ClickableTag>
                      </li>
                    )
                  })}
                </StyledList>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export const PageQuery = graphql`
  query Blog {
    blog: allDatoCmsBlog(sort: { fields: meta___publishedAt, order: DESC }) {
      edges {
        node {
          title
          slug
          thumbnail {
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
            alt
          }
          blurb
          tags
          meta {
            publishedAt
          }
        }
      }
    }
  }
`

export default Blog
