import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import Navbar from "./navbar"
import Footer from "./footer"
import MobileNav from "./mobilenav"
import PageTransition from "gatsby-plugin-page-transitions"

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
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </>
      )}
    />
  )
}

export default Layout
