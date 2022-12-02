import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
// import build from "./mcDonalc.gbl";

function ThreeFiber() {
  const mesh = useRef();
  //   const { build } = useGLTF("/mcDonalc.gbl");

  //   useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

  //   setInterval(() => {
  //     mesh.current.rotation.x += 0.1;
  //   }, 100);

  return (
    <div>
      <Canvas>
        <mesh
          visible
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
          scale={2}
          rotation={[0.5, 1, 0]}
          ref={mesh}
        >
          {/* <ambientLight intensity={0} /> */}
          <directionalLight
            position={[0, 1, 0]}
            shadow-camera-far={50}
            color="yellow"
          />
          <meshBasicMaterial attach="material" />
          <pointLight position={[10, 10, 10]} />
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default ThreeFiber;
