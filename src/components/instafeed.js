import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const InstaContainer = styled.ul`
  display: none;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;

  @media screen and (min-width: 992px) {
    display: flex;
  }

  li {
    height: 50vh;
    flex-grow: 1;

    @media screen and (min-width: 992px) {
      height: 30vh;
    }
  }

  img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
`

const Feed = ({
  data: {
    allInstaNode: { edges },
  },
}) => {
  return (
    <InstaContainer>
      {edges.length > 0
        ? edges.map(post => {
            const {thumbnails, timestamp} = post.node
            return (
              <li key={timestamp}>
                <img
                  src={thumbnails[4].src}
                  alt={timestamp}
                />
              </li>
            )
          })
        : ""}
    </InstaContainer>
  )
}

const InstaFeed = () => {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 8) {
            edges {
              node {
                thumbnails {
                  src
                  config_width
                  config_height
                }
                timestamp
              }
            }
          }
        }
      `}
      render={data => {
        return <Feed data={data} />
      }}
    />
  )
}

export default InstaFeed
