import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Approach from './components/Approach';
import Experience from './components/Experience';
import Footer from './components/Footer';
import IPhoneView from './components/IPhoneView';
import './index.css';
import { useRef } from 'react';

export default function App() {
    const triggerRef = useRef(null);

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

            <div className="h-[90dvh] w-full overflow-hidden">
                <h1
                    id="projects"
                    className="font-bold text-4xl md:text-5xl text-center text-white pt-20"
                    ref={triggerRef}
                >
                    A small selection of{' '}
                    <span className="text-purple">recent projects</span>
                </h1>

                <IPhoneView triggerRef={triggerRef} />
            </div>

            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center max-md:w-[90%]">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
