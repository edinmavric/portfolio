import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import HoverTextCard from './HoverTextCard';
import { approach } from '../../data';

gsap.registerPlugin(ScrollTrigger);

const Approach = () => {
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            const cards = gsap.utils.toArray('.approach-card');

            cards.forEach((card, index) => {
                const initialX = index === 0 ? -100 : index === 2 ? 100 : 0;

                gsap.set(card, { opacity: 0, x: initialX, y: 50 });

                gsap.to(card, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 1,
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
            id="approach"
            className="text-white my-24 lg:mt-32 overflow-x-hidden"
        >
            <h1 className="font-bold text-4xl md:text-5xl text-center">
                <span>My</span> <span className="text-purple">approach</span>
            </h1>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 my-16">
                {approach.map(item => (
                    <HoverTextCard
                        key={item.id}
                        otherClasses="approach-card"
                        stepText={`Step ${item.id}`}
                        hoverHeading={item.heading}
                        hoverText={item.text}
                    />
                ))}
            </div>
        </section>
    );
};

export default Approach;
