import React from "react"
import styles from "./about.module.css"
import { IoIosPeople, IoIosListBox } from "react-icons/io"
import { GiSandsOfTime } from "react-icons/gi"

const AboutStats = () => {
  return (
    <section className={`section ${styles.stats}`}>
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
  )
}

export default AboutStats
