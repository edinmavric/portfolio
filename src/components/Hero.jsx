import { FaLocationArrow } from 'react-icons/fa';
import Button from './Button';

const Hero = () => {
    return (
        <section
            id="hero"
            className="h-full pb-20 pt-36 flex flex-col items-center justify-center"
        >
            <p className="uppercase tracking-widest text-xs text-gray-300">
                MAKING MAGIC HAPPEN ON WEB
            </p>
            <h1 className="text-white text-center mb-5 mt-2 text-[40px] md:text-5xl lg:text-6xl">
                Transforming Ideas into{' '}
                <span className="text-blue-600">&lt;p&gt;</span>
                <span className="font-medium">Reality</span>
                <span className="text-blue-600">&lt;/p&gt;</span>
            </h1>
            <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white-100">
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
