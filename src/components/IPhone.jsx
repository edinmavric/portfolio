import { Html, useGLTF, useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import * as THREE from 'three';
import { projects } from '../../data';

function Model(props) {
    const { nodes, materials } = useGLTF('/models/scene.glb');
    const { viewport } = useThree();
    const texture = useTexture(props.item?.img || '/images/black.jpg');
    const htmlRef = useRef();
    const groupRef = useRef();
    const [isVisible, setIsVisible] = useState(true);
    const [htmlPosition, setHtmlPosition] = useState([0, 0, 0]);

    useEffect(() => {
        const updatePosition = () => {
            const viewportHeight =
                window.visualViewport?.height || window.innerHeight;
            const offset = (window.innerHeight - viewportHeight) / 2;

            setHtmlPosition([0, -offset * 0.001, 0]);
        };

        window.visualViewport?.addEventListener('resize', updatePosition);
        updatePosition();

        return () =>
            window.visualViewport?.removeEventListener(
                'resize',
                updatePosition
            );
    }, []);

    useEffect(() => {
        if (groupRef.current) {
            groupRef.current.rotation.set(0, Math.PI, 0);
        }
    }, []);

    useFrame(({ camera }) => {
        if (groupRef.current) {
            const phoneForward = new THREE.Vector3();
            groupRef.current.getWorldDirection(phoneForward);

            phoneForward.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);

            const toCamera = camera.position
                .clone()
                .sub(groupRef.current.position)
                .normalize();

            const dot = phoneForward.dot(toCamera);

            setIsVisible(dot > 0.2);
        }
    });

    const scaleFactor = viewport.width < 2 ? 5 : 10;

    return (
        <group
            {...props}
            dispose={null}
            ref={groupRef}
            scale={[scaleFactor, scaleFactor, scaleFactor]}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.ttmRoLdJipiIOmf.geometry}
                material={materials.hUlRcbieVuIiOXG}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.DjsDkGiopeiEJZK.geometry}
                material={materials.PaletteMaterial001}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.buRWvyqhBBgcJFo.geometry}
                material={materials.PaletteMaterial002}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.MrMmlCAsAxJpYqQ_0.geometry}
                material={materials.dxCVrUCvYhjVxqy}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wqbHSzWaUxBCwxY_0.geometry}
                material={materials.MHFGNLrDQbTNima}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.QvGDcbDApaGssma.geometry}
                material={materials.kUhjpatHUvkBwfM}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.vFwJFNASGvEHWhs.geometry}
                material={materials.RJoymvEsaIItifI}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.evAxFwhaQUwXuua.geometry}
                material={materials.KSIxMqttXxxmOYl}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.USxQiqZgxHbRvqB.geometry}
                material={materials.mcPrzcBUcdqUybC}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.TvgBVmqNmSrFVfW.geometry}
                material={materials.pIhYLPqiSQOZTjn}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.GuYJryuYunhpphO.geometry}
                material={materials.eShKpuMNVJTRrgg}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pvdHknDTGDzVpwc.geometry}
                material={materials.xdyiJLYTYRfJffH}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.CfghdUoyzvwzIum.geometry}
                material={materials.jpGaQNgTtEGkTfo}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.DjdhycfQYjKMDyn.geometry}
                material={materials.ujsvqBWRMnqdwPx}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.usFLmqcyrnltBUr.geometry}
                material={materials.sxNzrmuTqVeaXdg}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.xXDHkMplTIDAXLN.geometry}
                material={materials.pIJKfZsazmcpEiU}
                scale={0.025}
            >
                <meshStandardMaterial roughness={1} map={texture} />
            </mesh>

            {isVisible && (
                <Html
                    ref={htmlRef}
                    position={htmlPosition}
                    transform
                    scale={0.025}
                    zIndexRange={[10, 20]}
                >
                    <div
                        style={{ transform: 'rotateY(180deg)' }}
                        className="bg-black bg-opacity-25 w-[300px] h-[640px] p-6 rounded-[3rem] flex flex-col items-end justify-between"
                    >
                        <div className="grid grid-cols-3 justify-items-center w-full mt-16 gap-3">
                            {projects.map(proj => (
                                <a
                                    key={proj.id}
                                    href={proj.href}
                                    target="_blank"
                                    className="bg-gray-400 bg-opacity-50 flex flex-col justify-center items-center p-4 rounded-lg relative w-full h-full"
                                >
                                    <img
                                        src={proj.img}
                                        alt="project"
                                        className={`${
                                            proj.name === 'Apple'
                                                ? 'h-8 w-8'
                                                : ''
                                        }`}
                                    />
                                    <span className="text-sm font-medium absolute bottom-0">
                                        {proj.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                        <div className="flex w-full justify-around bg-white bg-opacity-20 p-4 rounded-3xl">
                            <a
                                href="https://github.com/edinmavric"
                                target="_blank"
                            >
                                <FaGithub
                                    style={{
                                        width: '35px',
                                        height: '35px',
                                        color: 'white',
                                    }}
                                />
                            </a>
                            <a
                                href="https://linkedin.com/in/edinmavric"
                                target="_blank"
                            >
                                <FaLinkedin
                                    style={{
                                        width: '35px',
                                        height: '35px',
                                        color: 'white',
                                    }}
                                />
                            </a>
                            <a href="mailto:edinmavric10@gmail.com">
                                <FaEnvelope
                                    style={{
                                        width: '35px',
                                        height: '35px',
                                        color: 'white',
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </Html>
            )}

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.vELORlCJixqPHsZ.geometry}
                material={materials.zFdeDaGNRwzccye}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.EbQGKrWAqhBHiMv.geometry}
                material={materials.TBLSREBUyLMVtJa}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.EddVrWkqZTlvmci.geometry}
                material={materials.xNrofRCqOXXHVZt}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.KSWlaxBcnPDpFCs.geometry}
                material={materials.yQQySPTfbEJufve}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.TakBsdEjEytCAMK.geometry}
                material={materials.PaletteMaterial003}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.IykfmVvLplTsTEW.geometry}
                material={materials.PaletteMaterial004}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wLfSXtbwRlBrwof.geometry}
                material={materials.oZRkkORNzkufnGD}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.WJwwVjsahIXbJpU.geometry}
                material={materials.yhcAXNGcJWCqtIS}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.YfrJNXgMvGOAfzz.geometry}
                material={materials.bCgzXjHOanGdTFV}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.DCLCbjzqejuvsqH.geometry}
                material={materials.vhaEJjZoqGtyLdo}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.CdalkzDVnwgdEhS.geometry}
                material={materials.jlzuBkUzuJqgiAK}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.NtjcIgolNGgYlCg.geometry}
                material={materials.PpwUTnTFZJXxCoE}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pXBNoLiaMwsDHRF.geometry}
                material={materials.yiDkEwDSyEhavuP}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.IkoiNqATMVoZFKD.geometry}
                material={materials.hiVunnLeAHkwGEo}
                scale={0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.rqgRAGHOwnuBypi.geometry}
                material={materials.HGhEhpqSBZRnjHC}
                scale={0.025}
            />
        </group>
    );
}

export default Model;

useGLTF.preload('/models/scene.glb');
