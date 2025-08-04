'use client';

import ContactForm from "../components/contactform";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.heading}>
          Contact Me
        </h1>
        <p className={styles.subtext}>
          Let’s connect. I’d love to hear from you and discuss your project or collaboration.
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
