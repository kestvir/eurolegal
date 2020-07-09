import React, { useEffect } from 'react';
import logo from "../../images/header_logo.jpg"
import NavLinks from "../../constants/nav-links"
import { GiHamburgerMenu } from "react-icons/gi"
import styles from "./css/nav.module.css"


const Nav = ({ toggleSidebar }) => {
    useEffect(() => {
        window.addEventListener("scroll", changeNavbarPosition);
    })

    const changeNavbarPosition = () => {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            headerEl = document.getElementById("header-nav");

        if (distanceY > 0) {
            headerEl.classList.add("sticky");
        } else {
            headerEl.classList.remove("sticky");
        }
    }


    return (
        <header id="header">
            <nav className={styles.navbar} id="header-nav">
                <div className={styles.navCenter}>
                    <div className={styles.brand}>
                        <img src={logo} className="logo" />
                        <div className={styles.brandInfo}>
                            <span className={styles.brandName}>EuroLegal</span>
                            <span className={styles.brandRole}>Business and Legal consulting</span>
                        </div>
                    </div>
                    <NavLinks styleClass={styles.navLinks} />
                    <GiHamburgerMenu className={styles.hamburgerIcon} onClick={toggleSidebar} />
                </div>
            </nav>
        </header>



    );
}

export default Nav;