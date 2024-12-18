import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Contact from "../components/contact/contact"
import About from "../components/about/about"
import "./index.css"

const IndexPage = () => (
    <Layout>
        <SEO />
        <Hero />
        <About />
        <Contact />
    </Layout>
)

export default IndexPage
