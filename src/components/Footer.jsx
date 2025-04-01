import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '/data';
import Button from './Button';

const Footer = () => {
    return (
        <footer className="md:w-11/12 lg:w-full w-full pt-40 pb-10 relative" id="contact">
            <div className="w-full absolute left-0 right-0 bottom-0 min-h-96 max-lg:h-96">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full"
                />
            </div>

            <div className="flex flex-col items-center">
                <h1 className="font-bold text-4xl md:text-5xl text-center lg:max-w-[45vw] text-white">
                    Ready to take <span className="text-purple">your</span>{' '}
                    digital presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help
                    you achieve your goals.
                </p>
                <a href="mailto:edinmavric10@gmail.com">
                    <Button
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light text-white-100 mb-6 md:mb-0">
                    Copyright © {new Date().getFullYear()} Edin Mavric
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map(info => (
                        <a
                            key={info.id}
                            href={info.href}
                            target="_blank"
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <img
                                src={info.img}
                                alt="icons"
                                width={20}
                                height={20}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
