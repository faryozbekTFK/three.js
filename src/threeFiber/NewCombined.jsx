import {
  GizmoHelper,
  OrbitControls,
  PerspectiveCamera,
  useFBX,
} from "@react-three/drei";
import { Suspense } from "react";
import shrink_wrap_1 from "./models/shrink_wrap_1.fbx";

function NewCombined() {
  const { children } = useFBX(shrink_wrap_1);

  return (
    <>
      {/* <SpotLight /> */}
      <directionalLight />
      <gridHelper />
      <Suspense>
        <GizmoHelper />
        <group scale={0.01}>
          {children.map((child) => (
            <mesh
              key={child.ID}
              geometry={child.geometry}
              material={child.material}
            ></mesh>
          ))}
        </group>
      </Suspense>
      <OrbitControls />
      <PerspectiveCamera fov={Math.PI / 4} />
    </>
  );
}

export default NewCombined;
