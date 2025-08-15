
'use client';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import styles from './page.module.css';

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "Developed a fully functional e-commerce web app with product listing, category filtering, search functionality, and cart management. Integrated a responsive UI for a seamless shopping experience.",
    imageSrc: "/shopping.png",
    techStack: ["React.js", "CSS Modules/Tailwind CSS", "JavaScript", "REST API"],
    projectLink: "https://prismatic-griffin-b67e66.netlify.app/",
  },
  {
    title: "Atlas Website",
    description:
      "Responsive web application to explore countries and continents using an interactive map. Displays capital, population, region, supports dark mode, and adapts to all devices.",
    imageSrc: "/atlas.png",
    techStack: ["React.js", "HTML", "CSS", "JavaScript", "REST API"],
    projectLink: "https://celadon-longma-7e6b3c.netlify.app/",
  },
  {
    title: "React Calculator Application",
    description:
      "Responsive and user-friendly calculator that performs arithmetic operations with decimal support. Designed a clean UI using CSS Modules and React state management.",
    imageSrc: "/calculator.png",
    techStack: ["React.js", "JavaScript", "CSS Modules"],
    projectLink: "https://splendorous-taffy-54995a.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>💼 My Projects</h2>
      <div className={styles.grid}>
        {projects.map(({ title, description, imageSrc, techStack, projectLink }, idx) => (
          <div
            key={idx}
            className={styles.card}
            style={{ animationDelay: `${idx * 150}ms` }}
          >
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

