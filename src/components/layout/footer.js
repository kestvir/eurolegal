import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GoMail, GoLocation } from "react-icons/go"
import { GiPhone } from "react-icons/gi"
import styles from "./css/footer.module.css"

const query = graphql`
  {
    allContentfulContact {
      nodes {
        email
        address
        phone
      }
    }
  }
`

const Footer = () => {
  const {
    allContentfulContact: { nodes: footerContactinfo },
  } = useStaticQuery(query)

  const { email, address, phone } = footerContactinfo[0]

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footerContact}>
        <div className={`text-center ${styles.contactHeading}`}>
          Contact Info
        </div>
        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <GoMail />
            <span>{email}</span>
          </div>
          <div className={styles.contactInfo}>
            <GoLocation />
            <span>{address}</span>
          </div>
          <div className={styles.contactInfo}>
            <GiPhone />
            <span>{phone}</span>
          </div>
        </div>
      </div>
      <div className={styles.tinyFooter}>
        <span>Eurolegal Baltic {new Date().getFullYear()} © All Rights Reserved</span>
      </div>
    </footer>
  )
}

export default Footer
