import React, { useState } from "react"
import Header from "./Header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const [isResponsiveNavOpen, setIsResponsiveNavOpen] = useState(false)

  const toggleResponsiveNav = () => {
    setIsResponsiveNavOpen(!isResponsiveNavOpen)
  }

  return (
    <>
      <Header
        isResponsiveNavOpen={isResponsiveNavOpen}
        toggleResponsiveNav={toggleResponsiveNav}
      />
      {children}
      <Footer />
    </>
  )
}

export default Layout
