import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './components/ReactIcon';

export default function App() {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-900">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} />
                <OrbitControls />
                <Model />
            </Canvas>
        </div>
    );
}
