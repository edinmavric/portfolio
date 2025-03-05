import { FaLocationArrow } from 'react-icons/fa';
import Button from './Button';

const Hero = () => {
    return (
        <section
            id="hero"
            className="py-60 pt-80 flex flex-col items-center justify-center"
        >
            {/* <div className='absolute opacity-5'>
                <svg
                    width="1000"
                    height="1000"
                    viewBox="0 0 200 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <text
                        x="50%"
                        y="50%"
                        font-size="50"
                        font-family="Arial, sans-serif"
                        font-weight="regular"
                        fill="white"
                        text-anchor="middle"
                        alignment-baseline="middle"
                    >
                        EM
                    </text>
                </svg>
            </div> */}

            <p className="uppercase font-light tracking-widest text-sm text-gray-300">
                making magic happen on web
            </p>
            <h1 className="text-white text-center mb-6 mt-3 font-bold text-[40px] md:text-5xl lg:text-6xl">
                Transforming Ideas into{' '}
                <span className="text-purple">&lt;p&gt;</span>
                <span className="font-medium">Reality</span>
                <span className="text-purple">&lt;/p&gt;</span>
            </h1>
            <p className="md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl text-white-100">
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
