import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsSm } from '../../data';
import ProjectCard from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            const cards = gsap.utils.toArray('.project-card');

            cards.forEach((card, index) => {
                const initialY = 100;

                gsap.set(card, { opacity: 0, y: initialY });

                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                        once: true,
                    },
                });
            });
        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            className="flex flex-col items-center"
        >
            {projectsSm.map((item, key) => (
                <ProjectCard
                    key={key}
                    otherClasses="project-card"
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    technologies={item.technologies}
                />
            ))}
        </section>
    );
};

export default Projects;
