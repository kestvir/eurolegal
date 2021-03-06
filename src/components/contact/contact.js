import React from "react"
import styles from "./contact.module.css"
import Title from "../title"

const Contact = () => {
  return (
    <section className={`section ${styles.contact}`} id="contact-section">
      <Title title="Contact Us" />
      <form action="https://formspree.io/mnqggylb" method="POST">
        <div className={styles.formGroup}>
          <input
            type="text"
            name="name"
            placeholder="name"
            className={styles.formControl}
            required
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            className={styles.formControl}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="message"
            className={styles.formControl}
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className={`${styles.submitBtn} btn`}>
            submit here
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contact
