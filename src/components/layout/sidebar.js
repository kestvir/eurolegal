import React from "react"
import NavLinks from "../../constants/nav-links"
import { FaTimes } from "react-icons/fa"
import styles from "./css/nav.module.css"


const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <aside className={`${styles.sidebar} ${isOpen ? styles.showSidebar : ""}`}>
            <button className={styles.closeBtn} onClick={toggleSidebar}>
                <FaTimes />
            </button>
            <div className={styles.sideContainer}>
                <NavLinks styleClass={`${isOpen ? styles.sidebarLinks : ""} `} />
            </div>
        </aside>
    )
}

export default Sidebar;