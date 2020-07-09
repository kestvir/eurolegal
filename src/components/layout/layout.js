
import React, { useState } from "react"
import Nav from "./nav"
import Footer from "./footer"


const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleResponsiveNav = () => {
        setIsOpen(!isOpen)
        console.log('works')
    }

    return (
        <>
            <Nav isOpen={isOpen} toggleResponsiveNav={toggleResponsiveNav} />
            {children}
            <Footer />
        </>
    )
}


export default Layout
