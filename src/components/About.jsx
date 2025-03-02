import { IoCopyOutline } from 'react-icons/io5';
import Button from './Button';
import { useState } from 'react';
import bg1 from '/images/bg1.svg';
import bg2 from '/images/b2.svg';
import { FaCheck } from 'react-icons/fa';

const About = () => {
    const leftLists = ['ReactJS', 'Express', 'Typescript'];
    const rightLists = ['VueJS', 'NuxtJS', 'GraphQL'];

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const text = 'edinmavric10@gmail.com';
        navigator.clipboard.writeText(text);
        setCopied(true);
    };

    return (
        <section
            id="about"
            className="w-10/12 h-full pt-36 flex flex-col items-center justify-center text-white-100"
        >
            <div className="grid grid-cols-4 grid-rows-5 gap-4 w-full max-sm:grid-cols-1 max-sm:grid-rows-6">
                <div className="col-span-2 row-span-3 bg-black-100 p-4 rounded-lg border border-slate-700 flex items-end">
                    <h3 className="lg:text-3xl text-xl font-semibold">
                        I prioritize client collaboration, fostering open
                        comunications
                    </h3>
                </div>
                <div className="col-span-2 row-span-1 bg-black-100 p-4 rounded-lg border border-slate-700 flex justify-center text-center">
                    <p className="lg:text-3xl text-xl font-semibold">
                        I'm very flexible with time zone communications
                    </p>
                </div>
                <div className="col-span-2 row-span-1 bg-black-100 p-4 rounded-lg border border-slate-700 flex flex-col justify-center relative">
                    <div className="w-5/12">
                        <p className="text-slate-500">
                            I constantly try to improve
                        </p>
                        <p className="lg:text-3xl text-xl font-semibold">
                            My Tech Stack
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <div className="absolute bottom-0 right-4 flex flex-col gap-2">
                            {['NextJS', 'ReactJS', 'Express'].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-slate-800 rounded-md border border-slate-700 p-2 opacity-40"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="absolute top-0 right-28 flex flex-col gap-2">
                            {['ThreeJS', 'Tailwind', 'SQL'].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-slate-800 rounded-md border border-slate-700 p-2 opacity-40"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-2 row-span-3 bg-black-100 p-4 rounded-lg border border-slate-700 flex items-center relative">
                    <div>
                        <p className="text-slate-500">The Inside Scoop</p>
                        <p className="lg:text-3xl text-xl font-semibold">
                            Currently building a JS Animation library
                        </p>
                    </div>
                    <img
                        src={bg2}
                        alt="bg2"
                        className="absolute bottom-0 right-0  opacity-50"
                    />
                </div>
                <div className="col-span-2 row-span-1 bg-black-100 p-4 rounded-lg border border-slate-700 flex items-center relative">
                    <p className="lg:text-3xl text-xl font-semibold">
                        Tech enthusiast with a passion for development.
                    </p>
                    <img
                        src={bg1}
                        alt="bg1"
                        className="absolute bottom-0 right-0"
                    />
                </div>
                <div className="col-span-2 row-span-1 bg-gradient-to-r from-indigo-800 to-indigo-900 p-4 rounded-lg border border-slate-700 flex flex-col items-center justify-center">
                    <p className="lg:text-3xl text-xl font-semibold text-center">
                        Do you want to start a project together?
                    </p>
                    <Button
                        title={
                            copied ? 'Copied to clipboard' : 'Copy to clipboard'
                        }
                        icon={copied ? <FaCheck /> : <IoCopyOutline />}
                        position="left"
                        handleClick={handleCopy}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
