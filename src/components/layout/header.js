import React, { useEffect } from "react"
import logo from "../../images/header_logo.jpg"
import NavLinks from "../../constants/nav-links"
import { GiHamburgerMenu } from "react-icons/gi"
import styles from "./css/header.module.css"

const Header = ({ toggleResponsiveNav, isResponsiveNavOpen }) => {
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarPosition)
  }, [])

  const changeNavbarPosition = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      headerEl = document.getElementById("header-nav")

    if (distanceY > 0) {
      headerEl.classList.add("sticky")
    } else {
      headerEl.classList.remove("sticky")
    }
  }

  return (
    <header id="header">
      <nav className={styles.navbar} id="header-nav">
        <div className={styles.navCenter}>
          <div className={styles.topNav}>
            <div className={styles.brand}>
              <img src={logo} className="logo" />
              <div className={styles.brandInfo}>
                <span className={styles.brandName}>Eurolegal Baltic</span>
                <span className={styles.brandRole}>
                Business and project supervision
                </span>
              </div>
            </div>
            <GiHamburgerMenu
              className={styles.hamburgerIcon}
              onClick={toggleResponsiveNav}
            />
          </div>
          <div
            className={`${styles.navLinksContainer} ${
              isResponsiveNavOpen && styles.responsiveNavContainer
            }`}
          >
            <NavLinks
              styleClass={`${styles.navLinks} ${
                isResponsiveNavOpen && styles.responsiveNavLinksList
              } `}
            />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
