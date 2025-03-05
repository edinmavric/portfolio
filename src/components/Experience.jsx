import { experience } from '/data';
import ExpCard from './ExpCard';

const Experience = () => {
    return (
        <section id="experience" className="w-10/12">
            <h1 className="font-bold text-4xl md:text-5xl text-center text-white">
                My <span className="text-purple">work experience</span>
            </h1>

            <div className="lg:grid grid-cols-2 flex flex-col items-center justify-center gap-10 py-20 lg:items-stretch">
                {experience.map(item => (
                    <ExpCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Experience;
