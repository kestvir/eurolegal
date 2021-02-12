import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "react-scroll"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import styles from "./hero.module.css"

const query = graphql`
  {
    file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const StyledBackground = styled(BackgroundImage)`
  &::before,
  &::after {
    filter: brightness(45%);
  }
  background-attachment: fixed;
`

const Hero = ({ className }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  const imageData = fluid

  return (
    <div className={styles.hero} id="hero-section">
      <div className={`section-center ${styles.heroCenter}`}>
        <StyledBackground
          fluid={imageData}
          className={className}
          style={{ position: "static" }}
        >
          <div className="text-center">
            <h3 className={styles.weAre}>We Are</h3>
            <h2 className={styles.heroName}>EuroLegal</h2>
            <h3 className={styles.heroDescriptionPosition}>
              Business and Legal consulting
            </h3>
            <Link
              className={styles.heroBtn}
              to="about-section"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              Learn More
            </Link>
          </div>
        </StyledBackground>
      </div>
    </div>
  )
}

export default Hero
