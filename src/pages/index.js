import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Contact from "../components/contact/contact"
import About from "../components/about/about"
import AboutStats from "../components/about/aboutStats"
import Services from "../components/services/services"
import "./index.css"

const IndexPage = () => (
    <Layout>
        <SEO />
        <Hero />
        <About />
        <AboutStats />
        <Services />
        <Contact />
    </Layout>
)

export default IndexPage
