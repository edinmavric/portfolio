import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './components/IPhone';
import Lights from './components/Lights';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import { useEffect, useState } from 'react';

export default function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex flex-col bg-gray-900">
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center max-sm:w-[90%]">
                    <Navbar />
                    <Hero />
                    <About />
                </div>
            </div>

            <div className="h-[100dvh]">
                <Canvas>
                    <ambientLight intensity={0.3} />
                    <Lights />
                    <OrbitControls
                        enablePan={false}
                        enableZoom={false}
                        enableRotate={!isMobile}
                        rotateSpeed={0.4}
                    />
                    <Model />
                </Canvas>
            </div>
        </div>
    );
}
