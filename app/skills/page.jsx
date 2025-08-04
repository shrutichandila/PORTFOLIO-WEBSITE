'use client';

import styles from './page.module.css';

export default function Skills() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Skills</h1>

      <div className={styles.skillSection}>
        <h2>Frontend</h2>
        <p>HTML, CSS, JavaScript</p>
      </div>

      <div className={styles.skillSection}>
        <h2>Backend</h2>
        <p>Python</p>
      </div>

      <div className={styles.skillSection}>
        <h2>Technologies / Frameworks</h2>
        <p>React, Next.js, Django</p>
      </div>

      <div className={styles.skillSection}>
        <h2>Databases</h2>
        <p>MySQL</p>
      </div>

      <div className={styles.skillSection}>
        <h2>Tools</h2>
        <p>GitHub, LinkedIn</p>
      </div>

      <div className={styles.skillSection}>
        <h2>Concepts</h2>
        <p>SEO, SMO, Web App Development</p>
      </div>
    </div>
  );
}
