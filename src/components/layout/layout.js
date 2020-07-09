
import React, { useState } from "react"
import Nav from "./nav"
import Sidebar from "./sidebar"
import Footer from "./footer"


const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
        console.log('works')
    }

    return (
        <>
            <Nav toggleSidebar={toggleSidebar} />
            {/* <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} /> */}
            {children}
            <Footer />
        </>
    )
}


export default Layout
