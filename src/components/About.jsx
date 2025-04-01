import { IoCopyOutline } from 'react-icons/io5';
import Button from './Button';
import { useState } from 'react';
import bg1 from '/images/bg1.svg';
import bg2 from '/images/b2.svg';
import bg3 from '/images/bg3.png';
import bg4 from '/images/971.jpg';
import { FaCheck } from 'react-icons/fa';
import Card from './Card';

const About = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const text = 'edinmavric10@gmail.com';
        navigator.clipboard.writeText(text);
        setCopied(true);
    };

    return (
        <section
            id="about"
            className="w-10/12 h-full flex flex-col items-center justify-center pt-12 text-white-100"
        >
            <div className="grid grid-cols-4 auto-rows-fr gap-4 w-full max-sm:grid-cols-1 max-sm:auto-rows-fr">
                <Card
                    positionClasses="col-span-2 row-span-2 bg-black-100 relative overflow-hidden min-h-[180px]"
                    otherClasses="flex items-end p-4"
                >
                    <div className="transition-transform duration-300 group-hover:translate-x-2">
                        <h3 className="lg:text-2xl text-lg font-semibold lg:w-8/12">
                            I prioritize client collaboration, fostering open
                            communications
                        </h3>
                    </div>
                    <img
                        src={bg4}
                        alt="bg4"
                        className="absolute top-0 bottom-0 right-0 left-0 -z-10 opacity-50 w-full h-full object-cover"
                    />
                </Card>

                <Card
                    positionClasses="col-span-2 row-span-1 bg-black-100 relative overflow-hidden min-h-[180px]"
                    otherClasses="p-4 flex justify-center text-center duration-300 hover:bg-gray-900"
                >
                    <div className="transition-transform duration-300 group-hover:translate-x-2 flex items-center justify-center lg:items-start lg:justify-start">
                        <p className="lg:text-2xl text-lg font-semibold">
                            I'm very flexible with time zone communications
                        </p>
                    </div>
                    <img
                        src={bg3}
                        alt="bg3"
                        className="absolute max-sm:hidden -bottom-44 w-1/2 opacity-60 object-cover"
                    />
                </Card>

                <Card
                    positionClasses="col-span-2 row-span-1 bg-black-100 relative overflow-hidden min-h-[180px]"
                    otherClasses="p-4 flex flex-col justify-center duration-300 hover:bg-gray-900"
                >
                    <div className="transition-transform duration-300 group-hover:translate-x-2">
                        <div className="lg:w-5/12">
                            <p className="text-slate-500 text-sm">
                                I constantly try to improve
                            </p>
                            <p className="lg:text-2xl text-lg font-semibold">
                                My Tech Stack
                            </p>
                        </div>
                    </div>

                    <div className="lg:flex justify-between hidden opacity-75">
                        <div className="absolute bottom-0 right-4 flex flex-col gap-2">
                            {['ThreeJS', 'Tailwind', 'SQL', ''].map(
                                (item, i) => (
                                    <div
                                        key={i}
                                        className={`bg-slate-800 rounded-md p-3 px-4 text-sm min-w-[100px] ${
                                            i === 3 ? 'rounded-b-none' : ''
                                        }

                                        ${i === 0 ? 'rounded-t-none' : ''}`}
                                    >
                                        {item}
                                    </div>
                                )
                            )}
                        </div>

                        <div className="absolute top-0 right-32 flex flex-col gap-2">
                            {['', 'NextJS', 'ReactJS', 'TypeScript'].map(
                                (item, i) => (
                                    <div
                                        key={i}
                                        className={`bg-slate-800 rounded-md p-3 px-4 text-sm min-w-[100px] ${
                                            i === 0 ? 'rounded-t-none' : ''
                                        }
                                        ${i === 3 ? 'rounded-b-none' : ''}`}
                                    >
                                        {item}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </Card>

                <Card
                    positionClasses="col-span-2 row-span-1 bg-black-100 relative min-h-[180px]"
                    otherClasses="p-4 flex items-center duration-300 hover:bg-gray-900"
                >
                    <div className="transition-transform duration-300 group-hover:translate-x-2">
                        <p className="lg:text-2xl text-lg font-semibold">
                            Tech enthusiast with a passion for development.
                        </p>
                    </div>
                    <img
                        src={bg1}
                        alt="bg1"
                        className="absolute bottom-0 right-0"
                    />
                </Card>

                <Card
                    positionClasses="col-span-2 row-span-2 bg-black-100 relative min-h-[180px]"
                    otherClasses="p-4 duration-300 hover:bg-gray-900"
                >
                    <div className="transition-transform duration-300 group-hover:translate-x-2">
                        <p className="text-slate-500 text-sm">
                            The Inside Scoop
                        </p>
                        <p className="lg:text-2xl text-lg font-semibold lg:w-8/12">
                            Currently building Software for Learning
                        </p>
                    </div>
                    <img
                        src={bg2}
                        alt="bg2"
                        className="absolute bottom-0 right-0 opacity-90"
                    />
                </Card>

                <Card
                    positionClasses="col-span-2 row-span-1 min-h-[180px]"
                    otherClasses="p-4 flex flex-col items-center justify-center bg-gradient-to-r to-indigo-900 from-slate-950"
                >
                    <div className="transition-transform duration-300 group-hover:translate-x-2 text-center">
                        <p className="lg:text-2xl text-lg font-semibold pb-2">
                            Do you want to start a project together?
                        </p>
                    </div>
                    <Button
                        title={copied ? 'Email is Copied!' : 'Copy my Email'}
                        icon={copied ? <FaCheck /> : <IoCopyOutline />}
                        position="left"
                        handleClick={handleCopy}
                    />
                </Card>
            </div>
        </section>
    );
};

export default About;
