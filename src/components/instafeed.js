import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const InstaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    width: 20%;
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
            const { original, timestamp } = post.node
            return (
              <img src={original} alt={timestamp} />
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
          allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 10) {
            edges {
              node {
                original
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
