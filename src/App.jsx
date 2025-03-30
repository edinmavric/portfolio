import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Approach from './components/Approach';
import Experience from './components/Experience';
import Footer from './components/Footer';
import IPhoneView from './components/IPhoneView';
import './index.css';
import { useRef, useState, useEffect } from 'react';
import Projects from './components/Projects';

export default function App() {
    const triggerRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex flex-col items-center bg-black-100">
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center max-md:w-[90%]">
                    <Navbar />
                    <Hero />
                    <About />
                    <Approach />
                    <Experience />
                </div>
            </div>

            <div className="lg:h-[90dvh] lg:w-full lg:overflow-hidden w-10/12 max-md:flex flex-col items-center">
                <h1
                    id="projects"
                    className="font-bold text-4xl md:text-5xl text-center text-white pt-20 max-lg:mb-12"
                    ref={triggerRef}
                >
                    A small selection of{' '}
                    <span className="text-purple">recent projects</span>
                </h1>

                {isDesktop ? (
                    <IPhoneView triggerRef={triggerRef} />
                ) : (
                    <Projects />
                )}
            </div>

            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center max-md:w-[90%]">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
