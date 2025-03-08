import { Html, useGLTF, useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { projects } from '../../data';

gsap.registerPlugin(ScrollTrigger);

function Model({ triggerRef, ...props }) {
    const { nodes, materials } = useGLTF('/models/scene.glb');
    const { viewport } = useThree();
    const texture = useTexture(props.item?.img || '/images/black.jpg');
    const htmlRef = useRef();
    const groupRef = useRef();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (groupRef.current) {
            groupRef.current.rotation.set(0, Math.PI, 0);
        }
    }, []);

    useGSAP(() => {
        if (!groupRef.current || !triggerRef?.current) return;

        gsap.fromTo(
            groupRef.current.position,
            { x: -viewport.width * 1.5, y: 0 }, // Start far left only
            {
                x: 0,
                y: 0,
                duration: 2.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'top center',
                    toggleActions: 'play none none none',
                    once: true,
                },
            }
        );

        gsap.fromTo(
            groupRef.current.rotation,
            { y: Math.PI },
            {
                y: Math.PI * 3,
                duration: 2.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'top center',
                    toggleActions: 'play none none none',
                    once: true,
                },
            }
        );
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

            setIsVisible(dot > 0.05);
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
                <mesh ref={htmlRef} position={[0, 0, -0.0154]}>
                    <Html
                        transform
                        distanceFactor={1}
                        scale={0.25}
                        zIndexRange={[10, 100]}
                        anchorX="center"
                        anchorY="middle"
                        occlude
                        style={{ transform: 'rotateY(180deg)' }}
                    >
                        <div className="w-[300px] h-[620px] p-6 py-12 bg-black-100 bg-opacity-50 rounded-[3.25rem] flex flex-col items-end justify-between select-none">
                            <div className="grid grid-cols-3 justify-items-center w-full gap-3">
                                {projects.map(proj => (
                                    <a
                                        key={proj.id}
                                        href={proj.href}
                                        target="_blank"
                                        className="bg-gray-400 backdrop-blur-lg bg-opacity-50 flex flex-col justify-center items-center p-4 rounded-lg relative w-[76px] h-[76px]"
                                    >
                                        <img
                                            src={proj.img}
                                            alt="project"
                                            className={`h-10 w-10
                                            `}
                                        />
                                        <span className="text-sm font-medium absolute bottom-0">
                                            {proj.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                            <div className="flex w-full justify-around bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-3xl">
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
                </mesh>
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
