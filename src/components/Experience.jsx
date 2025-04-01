import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experience } from '/data';
import ExpCard from './ExpCard';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            const cards = gsap.utils.toArray('.exp-card');

            cards.forEach((card, index) => {
                const initialX = (index + 1) % 2 !== 0 ? -100 : 100;

                gsap.set(card, { opacity: 0, x: initialX });

                gsap.to(card, {
                    opacity: 1,
                    x: 0,
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
            id="experience"
            className="w-10/12 overflow-x-hidden"
        >
            <h1 className="font-bold text-4xl md:text-5xl text-center text-white">
                <span>My</span>{' '}
                <span className="text-purple">work experience</span>
            </h1>

            <div className="lg:grid grid-cols-2 flex flex-col lg:items-stretch justify-center gap-6 py-16 items-center lg:h-full">
                {experience.map((item, index) => (
                    <ExpCard
                        key={item.id}
                        otherClasses="exp-card"
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
