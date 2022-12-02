import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import flag from "./models/Bayroq.glb";
// import build from "./models/mcDonals.glb";

function Model(props) {
  const group = useRef();
  const latta = useRef();
  const { nodes } = useGLTF(flag);
  const [active, setActive] = useState("");

  const lattaAnim = (coor) => {
    if (latta.current.position.x === coor) setActive("-");
    else if (latta.current.position.x === 0) setActive("+");
    if (active === "+") return (latta.current.position.x += 1);
    if (active === "-") return (latta.current.position.x -= 1);
  };

  useFrame(() => active && lattaAnim(100));

  return (
    <>
      <Suspense fallback={null}>
        <ambientLight />
        <directionalLight />
        {/* <pointLight position={[0, 0, 0]} /> */}
        <group ref={group} scale={0.01} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TAYOQ.geometry}
            material={nodes.TAYOQ.material}
          />
          <mesh
            ref={latta}
            castShadow
            receiveShadow
            geometry={nodes.LATTA.geometry}
            material={nodes.LATTA.material}
            onClick={(e) => setActive("+")}
          ></mesh>
        </group>

        {/* <Environment preset="sunset" background /> */}
        {/* <primitive castShadow receiveShadow {...props} object={scene} /> */}
      </Suspense>
      <OrbitControls />
    </>
  );
}
useGLTF.preload("/Poimandres.gltf");

export default Model;
