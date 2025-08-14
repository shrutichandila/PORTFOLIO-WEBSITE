'use client';
import styles from "../styles/Navbar.module.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div>
          {/* <img className={styles.logo} src="/Shruti2.png" alt="Logo" /> */}
          <h1 className={styles.headi}>SHRUTI</h1>
        </div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`${styles.links} ${isOpen ? styles.active : ''}`}>
          <Link
            href="/"
            className={`${styles.link} ${pathname === '/' ? styles.activeLink : ''}`} onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${styles.link} ${pathname === '/about' ? styles.activeLink : ''}`} onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/skills"
            className={`${styles.link} ${pathname === '/project' ? styles.activeLink : ''}`} onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="/project"
            className={`${styles.link} ${pathname === '/project' ? styles.activeLink : ''}`} onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`${styles.link} ${pathname === '/contact' ? styles.activeLink : ''}`} onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
