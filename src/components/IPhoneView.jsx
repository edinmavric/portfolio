import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './IPhone';
import Lights from './Lights';

const IPhoneView = () => {
    return (
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
    );
};

export default IPhoneView;
