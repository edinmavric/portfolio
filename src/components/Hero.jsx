import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import Button from './Button';

const Hero = () => {
    const heroRef = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl.from('.hero-text', {
                opacity: 0,
                y: 30,
                stagger: 0.2,
                duration: 1.2,
                ease: 'power3.out',
            });

            tl.from('.hero-title span', {
                opacity: 0,
                y: 20,
                stagger: 0.3,
                duration: 0.8,
                ease: 'power3.out',
            });
        },
        { scope: heroRef }
    );

    return (
        <section
            ref={heroRef}
            id="hero"
            className="py-60 pt-80 flex flex-col items-center justify-center"
        >
            <div className="w-full absolute max-md:bottom-0 left-0 right-0 top-0 min-h-96">
                <img src="/grid.svg" alt="grid" className="w-full h-full" />
            </div>

            <p className="hero-text uppercase font-light tracking-widest text-sm text-gray-300">
                making magic happen on web
            </p>
            <h1 className="hero-title text-white text-center mb-6 mt-3 font-bold text-[40px] md:text-5xl lg:text-6xl">
                <span>Transforming</span> <span>Ideas</span> <span>into</span>{' '}
                <span className="text-purple">&lt;p&gt;</span>
                <span className="font-medium">Reality</span>
                <span className="text-purple">&lt;/p&gt;</span>
            </h1>
            <p className="hero-text md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl text-white-100">
                Hi! I'm Edin, a Web Developer based in Serbia.
            </p>

            <a href="#about">
                <Button
                    title="See my work"
                    icon={<FaLocationArrow />}
                    position="right"
                />
            </a>
        </section>
    );
};

export default Hero;
