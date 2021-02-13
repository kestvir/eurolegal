import React, { useState } from "react"
import Header from "./hgeader"
import Footer from "./footer"

const Layout = ({ children }) => {
  const [isResponsiveNavOpen, setIsResponsiveNavOpen] = useState(false)

  const toggleResponsiveNav = () => {
    setIsResponsiveNavOpen(prevState => !prevState)
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
