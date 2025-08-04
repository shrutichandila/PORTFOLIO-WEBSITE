import styles from "../styles/Footer.module.css"
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.name}>© 2025 Shruti Chandila. All rights reserved.
</p>
        <div className={styles.socials}>
          <a href="https://github.com/shrutichandila" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/miss-shuruti-240674313/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:shrutichandila29@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}


