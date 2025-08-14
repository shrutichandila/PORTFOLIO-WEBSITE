"use client";

import styles from './page.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiDjango, SiMysql } from 'react-icons/si';

 const techStack = [
   { name: 'HTML', type: 'Frontend', icon: <FaHtml5 className={styles.icon} title="HTML" color="#e34c26" /> },
   { name: 'CSS', type: 'Frontend', icon: <FaCss3Alt className={styles.icon} title="CSS" color="#1572B6" /> },
   { name: 'JavaScript', type: 'Frontend', icon: <FaJs className={styles.icon} title="JavaScript" color="#f7df1e" /> },
   { name: 'React', type: 'Frontend', icon: <FaReact className={styles.icon} title="React" color="#61DAFB" /> },
   { name: 'Next.js', type: 'Frontend', icon: <SiNextdotjs className={styles.icon} title="Next.js" color="white" /> },
   { name: 'Python', type: 'Backend', icon: <FaPython className={styles.icon} title="Python" color="#3776AB" /> },
   { name: 'Django', type: 'Backend', icon: <SiDjango className={styles.icon} title="Django" color="#092E20" /> },
   { name: 'MySQL', type: 'Database', icon: <SiMysql className={styles.icon} title="MySQL" color="#00758F" /> },
 ];

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.head}>
      <h1 className={styles.h1}>About Me</h1>
      <p className={styles.intro}>
        I'm a passionate full-stack developer skilled in building responsive and user-friendly web applications.
        With hands-on experience in both frontend and backend technologies, I enjoy turning ideas into functional, scalable solutions.
      </p></div>
      <div className={styles.languageContainer}>
             {techStack.map((tech, idx) => (
               <div key={idx} className={styles.div}>
                 {tech.icon}
                 <h3 className={styles.h33}>{tech.name}</h3>
                 <p className={styles.pp}>{tech.type}</p>
               </div>
             ))}
             </div>

      <section className={styles.section}>
        <h2 className={styles.h2}>📚 Background</h2>
        <p className={styles.p}>
          I began my journey in tech with a strong curiosity for how websites work. After learning HTML, CSS, and JavaScript, I quickly progressed into advanced frameworks like React and backend technologies like Django and MySQL.
        </p>
        <p className={styles.p}>
          Currently, I use Next.js to build powerful full-stack applications with seamless routing and server-side rendering.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>✨ Passion & Goals</h2>
        <p className={styles.p}>
          I'm passionate about creating clean, efficient, and accessible user interfaces. I love solving real-world problems and continuously learning new tools and technologies to improve my skills.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>📫 Let’s Connect</h2>
        <p className={styles.p}>
          I'm open to freelance projects, collaborations, or full-time opportunities. Feel free to reach out via the contact page or through my social links below.
        </p>
      </section>
    </div>
    
  );
}