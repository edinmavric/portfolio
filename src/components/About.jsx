import { IoCopyOutline } from 'react-icons/io5';
import Button from './Button';
import { useState } from 'react';
import bg1 from '/images/bg1.svg';
import bg2 from '/images/b2.svg';
import bg3 from '/images/bg3.png';
import bg4 from '/images/bg4.jpg';
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
            <div className="grid grid-cols-4 grid-rows-5 gap-4 w-full max-sm:grid-cols-1 max-sm:grid-rows-6">
                <Card
                    positionClasses="col-span-2 row-span-3 bg-black-100 relative overflow-hidden"
                    otherClasses="flex items-end p-8"
                >
                    <h3 className="lg:text-3xl text-xl font-semibold">
                        I prioritize client collaboration, fostering open
                        comunications
                    </h3>
                    <img
                        src={bg4}
                        alt="bg4"
                        className="absolute top-0 bottom-0 right-0 left-0 opacity-15 w-full h-full object-cover"
                    />
                </Card>
                <Card
                    positionClasses="col-span-2 row-span-1 bg-black-100 relative overflow-hidden"
                    otherClasses="p-8 flex justify-center text-center"
                >
                    <p className="lg:text-3xl text-xl font-semibold bg-gradient-to-l from-black-100 to-black-100">
                        I'm very flexible with time zone communications
                    </p>
                    <img
                        src={bg3}
                        alt="bg3"
                        className="absolute max-sm:hidden w-1/2 opacity-60 object-cover"
                    />
                </Card>
                <Card
                    positionClasses="col-span-2 row-span-1 bg-black-100 relative overflow-hidden"
                    otherClasses="p-8 flex flex-col justify-center"
                >
                    <div className="lg:w-5/12">
                        <p className="text-slate-500">
                            I constantly try to improve
                        </p>
                        <p className="lg:text-3xl text-xl font-semibold">
                            My Tech Stack
                        </p>
                    </div>
                    <div className="flex justify-between max-sm:hidden">
                        <div className="absolute bottom-0 right-4 flex flex-col gap-2">
                            {['ThreeJS', 'Tailwind', 'SQL', ''].map(
                                (item, i) => (
                                    <div
                                        key={i}
                                        className="bg-slate-800 rounded-md p-3"
                                    >
                                        {item}
                                    </div>
                                )
                            )}
                        </div>

                        <div className="absolute top-0 right-28 flex flex-col gap-2">
                            {['', 'NextJS', 'ReactJS', 'Express'].map(
                                (item, i) => (
                                    <div
                                        key={i}
                                        className="bg-slate-800 rounded-md p-3"
                                    >
                                        {item}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </Card>
                <Card
                    positionClasses="col-span-2 row-span-3 bg-black-100 relative"
                    otherClasses="p-8"
                >
                    <div>
                        <p className="text-slate-500">The Inside Scoop</p>
                        <p className="lg:text-3xl text-xl font-semibold">
                            Currently building Software for Learning
                        </p>
                    </div>
                    <img
                        src={bg2}
                        alt="bg2"
                        className="absolute bottom-0 right-0 opacity-90 max-sm:w-1/2"
                    />
                </Card>
                <Card
                    positionClasses="col-span-2 row-span-1 bg-black-100 relative"
                    otherClasses="p-8 flex items-center"
                >
                    <p className="lg:text-3xl text-xl font-semibold">
                        Tech enthusiast with a passion for development.
                    </p>
                    <img
                        src={bg1}
                        alt="bg1"
                        className="absolute bottom-0 right-0"
                    />
                </Card>
                <Card
                    positionClasses="col-span-2 row-span-1"
                    otherClasses="p-8 flex flex-col items-center justify-center bg-gradient-to-r from-indigo-800 to-indigo-900"
                >
                    <p className="lg:text-3xl text-xl font-semibold text-center pb-2">
                        Do you want to start a project together?
                    </p>
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
