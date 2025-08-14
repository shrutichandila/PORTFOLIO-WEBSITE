'use client';

import styles from './page.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiDjango, SiMysql, SiNextdotjs } from 'react-icons/si';

export default function Skills() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Skills</h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2 className={styles.h2}>Frontend</h2>
          <div className={styles.icons}>
            <FaHtml5 className={styles.icon} title="HTML" color="#e34c26" />
            <FaCss3Alt className={styles.icon} title="CSS" color="#1572B6" />
            <FaJs className={styles.icon} title="JavaScript" color="#f7df1e" />
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.h2}>Backend</h2>
          <div className={styles.icons}>
            <FaPython className={styles.icon} title="Python" color="#3776AB" />
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.h2}>Technologies / Frameworks</h2>
          <div className={styles.icons}>
            <FaReact className={styles.icon} title="React" color="#61DAFB" />
            <SiNextdotjs className={styles.icon} title="Next.js" color="white" />
            <SiDjango className={styles.icon} title="Django" color="#092E20" />
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.h2}>Databases</h2>
          <div className={styles.icons}>
            <SiMysql className={styles.icon} title="MySQL" color="#00758F" />
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.h2}>Tools</h2>
          <div className={styles.icons}>
            <FaGithub className={styles.icon} title="GitHub" color="white" />
            <FaLinkedin className={styles.icon} title="LinkedIn" color="#0A66C2" />
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.h2}>Concepts</h2>
          <p className={styles.p}>SEO, SMO, Web App Development</p>
        </div>
      </div>
    </div>
  );
}
