
import React from "react"

import { useStaticQuery, graphql } from "gatsby"


const Layout = ({ children }) => {
    //     const data = useStaticQuery(graphql`
    //     query SiteTitleQuery {
    //       site {
    //         siteMetadata {
    //           title
    //         }
    //       }
    //     }
    //   `)

    return (
        <>
            <h1>Hello!</h1>
            {children}
        </>
    )
}


export default Layout
