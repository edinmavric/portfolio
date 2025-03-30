import { projectsSm } from '../../data';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section className='flex flex-col items-center'>
            {projectsSm.map((item, key) => (
                <ProjectCard
                    key={key}
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
