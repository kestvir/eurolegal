import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import styles from "./about.module.css"
import styled from 'styled-components'
import { IoIosPeople, IoIosListBox } from "react-icons/io"
import { GiSandsOfTime } from "react-icons/gi"
import BackgroundImage from 'gatsby-background-image'


const query = graphql`
  {
    file(relativePath: { eq: "about-stats.jpg" }) {
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
    filter: brightness(
      30%
    );
  }
  background-attachment: fixed;
`

const AboutStats = ({ className }) => {
    const {
        file: {
            childImageSharp: { fluid },
        },
    } = useStaticQuery(query)

    const imageData = fluid

    return (
        <section className={`section ${styles.stats}`}>
            {/* <div className={`section-center ${styles.statsCenter}`}>
                <StyledBackground
                    fluid={imageData}
                    className={className}
                    style={{ position: "static" }}
                >
                    <div className={styles.statsWrapper}>
                        <div className={styles.stat}>
                            <IoIosPeople />
                            <h4>Clients</h4>
                            <h5>1500+</h5>
                        </div>

                        <div className={styles.stat}>
                            <IoIosPeople />
                            <h4>Clients</h4>
                            <h5>1500+</h5>
                        </div>

                        <div className={styles.stat}>
                            <IoIosPeople />
                            <h4>Clients</h4>
                            <h5>1500+</h5>
                        </div>
                    </div>
                </StyledBackground>
            </div> */}


            <div className={`section-center ${styles.statsCenter}`}>
                <div className={styles.statsWrapper}>
                    <div className={styles.stat}>
                        <IoIosPeople />
                        <h4>1500+</h4>
                        <h5>Clients</h5>
                    </div>

                    <div className={styles.stat}>
                        <GiSandsOfTime />
                        <h4>20+ years</h4>
                        <h5>Experience</h5>
                    </div>

                    <div className={styles.stat}>
                        <IoIosListBox />
                        <h4>1750+</h4>
                        <h5>Successful Cases</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutStats;