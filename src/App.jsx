import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './components/IPhone';
import Lights from './components/Lights';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';

export default function App() {
    return (
        <div className="flex flex-col items-center bg-gray-900">
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center max-md:w-[90%]">
                    <Navbar />
                    <Hero />
                    <About />
                </div>
            </div>

            <div className="h-[100dvh] w-full">
                <Canvas>
                    <ambientLight intensity={0.3} />
                    <Lights />
                    <OrbitControls
                        enablePan={false}
                        enableZoom={false}
                        rotateSpeed={0.4}
                    />
                    <Model />
                </Canvas>
            </div>
        </div>
    );
}
