import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import MobileNav from "./mobilenav"

const Layout = ({ children }) => {
  return (
    <>
        <Navbar />
        <MobileNav />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default Layout
