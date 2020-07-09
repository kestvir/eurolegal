import React from 'react';
import Title from "../title"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from "./about.module.css"

const query = graphql`
{
    allContentfulAbout {
      nodes {
        info {
          json
        }
      }
    }
    file(relativePath: { eq: "about.png" }) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid
            }
        }
    }
  }
`


const About = () => {
    const { allContentfulAbout: { nodes } } = useStaticQuery(query)
    const aboutUsText = nodes[0].info.json

    const {
        file: {
            childImageSharp: { fluid }
        }
    } = useStaticQuery(query)

    const imageData = fluid


    return (
        <section className={`section ${styles.about}`} id="about-section">
            <Title title={"About Us"} />
            <div className={`section-center ${styles.aboutCenter}`}>
                <article className={styles.aboutText}>
                    {documentToReactComponents(aboutUsText)}
                </article>
                <div className={styles.aboutImages}>
                    <Image fluid={imageData} className={styles.aboutImg} />
                </div>
            </div>
        </section>
    )
}


export default About