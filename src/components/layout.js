import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import MobileNav from "./mobilenav"
import PageTransition from "gatsby-plugin-page-transitions"

const Layout = ({ children }) => {
  return (
    <>
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
  )
}

export default Layout
