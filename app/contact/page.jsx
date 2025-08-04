'use client';

import ContactForm from "../components/contactform";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.heading}>
          📬 Get In Touch
        </h1>
        <p className={styles.subtext}>
          Have a project, idea, or just want to say hi? Fill out the form and I’ll get back to you soon!
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
