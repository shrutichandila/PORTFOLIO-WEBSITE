import Image from 'next/image';
import profilePic from '../public/pic.jpg';
import About from './about/page';
import Projects from './project/page';
import Contact from './contact/page';
import styles from "./styles/page.module.css"

export default function Home() {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.gridContainer}>
          <div className={styles.img}>
              <Image
                src={profilePic}
                alt="Shruti's Profile"
                className={styles.image}
                width={400}
                height={400}
              />
            </div>
          
          
          <div>
            <h1 className={styles.heading}>Hi, I'm <span className={styles.name}>Shruti</span></h1>
            <h2 className={styles.h2}>A Passionate Web Developer 🚀</h2>
            <h3 className={styles.h3}>I build responsive web apps with React, Next.js, and beautiful UI.</h3>
            <p className={styles.p}>
              I specialize in building robust and scalable web applications. With expertise in both frontend and backend technologies, I turn ideas into beautifully crafted digital experiences. Let’s bring visions to life, one line of code at a time.
            </p>
            <button className={styles.projectButton}>
              <a className={styles.pro} href="/project">View My Projects</a>
            </button>

            
            <a
              href="https://drive.google.com/file/d/1-0tSteaNc-1WadB4ckOv15-Rlb1h6_Oa/view"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.a}
            >
              View CV
            </a>
          </div>

          
          
          </div>
        </div>
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
}
