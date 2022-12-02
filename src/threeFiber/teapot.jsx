import { useSpring, animated } from "@react-spring/three";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import teapot from "./models/teapot.glb";

function TeapotModel({ onHide }) {
  const { nodes } = useGLTF(teapot);
  const teapotGr = useRef();

  const [active, setActive] = useState(false);
  const [activeTop, setActiveTop] = useState(false);
  const {
    position,
    topPosition,
    handPosition,
    faucetPosition,
    rotation,
    scale,
  } = useSpring({
    position: active ? [0, 1, 0] : [0, 0, 0],
    topPosition: active ? [0, 0, 10] : [0, 0, 0],
    handPosition: active ? [-10, 0, 0] : [0, 0, 0],
    faucetPosition: active ? [10, 0, 0] : [0, 0, 0],
    rotation: active ? [-Math.PI / 2, Math.PI / 4, 0] : [-Math.PI / 2, 0, 0],
    scale: active ? 0.07 : 0.04,
  });

  return (
    <>
      <Suspense>
        <ambientLight position={[1, 1, 0]} />
        <directionalLight />
        <gridHelper />
        <animated.group
          ref={teapotGr}
          scale={0.04}
          rotation={[-Math.PI / 2, 0, 0]}
          position={position}
          onClick={() => setActive(!active)}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body.geometry}
            material={nodes.body.material}
          >
            {/* <meshStandardMaterial color="#ff4" transparent /> */}x
          </mesh>
          <animated.mesh
            castShadow
            receiveShadow
            position={handPosition}
            geometry={nodes.hand.geometry}
            material={nodes.hand.material}
          />
          <animated.mesh
            castShadow
            receiveShadow
            position={topPosition}
            geometry={nodes.top.geometry}
            material={nodes.top.material}
            onClick={() => setActiveTop(!activeTop)}
          >
            {/* <meshStandardMaterial color="blue" /> */}
          </animated.mesh>
          <animated.mesh
            castShadow
            receiveShadow
            position={faucetPosition}
            geometry={nodes.Object001.geometry}
            material={nodes.Object001.material}
          ></animated.mesh>
        </animated.group>

        {/* <Environment preset="lobby" background /> */}
        {/* <primitive castShadow receiveShadow {...props} object={scene} /> */}
      </Suspense>
      <OrbitControls />
    </>
  );
}

export default TeapotModel;
