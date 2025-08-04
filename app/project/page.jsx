'use client';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import styles from './page.module.css';

const projects = [
  {
    title: "Project One",
    description: "Shopping",
    imageSrc: "/shopping.png",
    techStack: ["Bootstrap", "CSS", "React"],
    projectLink: "https://prismatic-griffin-b67e66.netlify.app/"
  },
  {
    title: "Project Two",
    description: "World Atlas website",
    imageSrc: "/atlas.png",
    techStack: ["React", "API Integration"],
    projectLink: "https://celadon-longma-7e6b3c.netlify.app/"
  },
  {
    title: "Project Three",
    description: "Calculator",
    imageSrc: "/calculator.png",
    techStack: ["React", "JavaScript", "CSS"],
    projectLink: "https://splendorous-taffy-54995a.netlify.app/"
  }
];

export default function Projects() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>💼 My Projects</h2>

      <div className={styles.grid}>
        {projects.map(({ title, description, imageSrc, techStack, projectLink }, idx) => (
          <div key={idx} className={styles.card} style={{ animationDelay: `${idx * 150}ms` }}>
            <div className={styles.imageContainer}>
              <Image
                src={imageSrc}
                alt={`${title} screenshot`}
                fill
                className={styles.image}
                placeholder="blur"
                blurDataURL="/placeholder.png"
              />
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>

              <div className={styles.techStack}>
                {techStack.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={projectLink}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                View Project <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
