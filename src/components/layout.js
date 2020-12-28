import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import Navbar from "./navbar"
import Footer from "./footer"
import MobileNav from "./mobilenav"
import PageTransition from "gatsby-plugin-page-transitions"

const MainContent = styled.main`
  background-color: white;
  min-height: calc(100vh - 155px);

  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 125px);
  }
`

const Layout = ({ children, seo }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
        }
      `}
      render={data => (
        <>
          <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} seo={seo} />
          <Navbar />
          <MobileNav />
          <PageTransition
            defaultStyle={{
              transition: `opacity 300ms ease-in-out`,
              opacity: 0,
            }}
            transitionStyles={{
              entering: { opacity: "1" },
              entered: { opacity: "1" },
              exiting: { opacity: "0" },
            }}
            transitionTime={500}
          >
            <MainContent>{children}</MainContent>
          </PageTransition>
          <Footer />
        </>
      )}
    />
  )
}

export default Layout
