import React from "react"

const Layout = ({ children }) => {
  return (
    <>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
        </footer>
    </>
  )
}

export default Layout
