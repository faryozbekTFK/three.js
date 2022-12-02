import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useSpring } from "@react-spring/three";
import * as THREE from "three";
import CameraControls from "camera-controls";
import {
  Environment,
  GradientTexture,
  OrbitControls,
  PerspectiveCamera,
  useFBX,
  useGLTF,
  useTexture,
  useCamera,
} from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import Combined_Buildings from "./models/Combined_Buildings.glb";
import shrink_wrap_1 from "./models/shrink_wrap_1.fbx";
// import box from "./models/box.fbx";
import { animated } from "@react-spring/three";

import color from "./textura/MetalPlates016B_1K_Color.png";

import vertexShader from "./material/vertexShader";
import fragmentShader from "./material/fragmentShader";

CameraControls.install({ THREE });
const randomPos = (min = 5, max = -5) => Math.random() * (max - min) + min;

function Controls({
  zoom,
  focus,
  pos = new THREE.Vector3(),
  look = new THREE.Vector3(),
}) {
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  const controls = useMemo(() => new CameraControls(camera, gl.domElement), []);
  return useFrame((state, delta) => {
    zoom ? pos.set(1, focus.y, focus.z) : pos.set(0, 0, 0);
    zoom ? look.set(focus.x, focus.y, focus.z) : look.set(0, 0, 0);

    state.camera.updateProjectionMatrix();
    controls.setLookAt(
      state.camera.position.x,
      state.camera.position.y,
      state.camera.position.z,
      look.x,
      look.y,
      look.z,
      true
    );
    return controls.update(delta);
  });
}

function Combined() {
  const { children } = useFBX(shrink_wrap_1);
  const fbx = useFBX(shrink_wrap_1);
  const [activeLayer, setActiveLayer] = useState({
    id: null,
    status: false,
    focus: null,
    zoom: false,
    position: [],
  });
  const { position, control } = useSpring({
    position:
      activeLayer.id && activeLayer.status && activeLayer.focus
        ? [
            activeLayer?.focus?.x - 30,
            activeLayer?.focus?.y + 30,
            activeLayer?.focus?.z + 30,
          ]
        : [0, 0, 0],
    control:
      activeLayer.id && activeLayer.status
        ? [activeLayer?.focus?.x, activeLayer?.focus?.y, activeLayer?.focus?.z]
        : [0, 0, 0],
    // scale: activeLayer.id &&
  });

  console.log(children);

  return (
    <>
      <spotLight
        intensity={1}
        color="red"
        // distance={0.1}
        // angle={Math.PI / 180}
        position={[0, 10, 100]}
      />
      <Controls zoom={activeLayer?.zoom} focus={activeLayer?.focus} />

      <Suspense>
        {/* <ambientLight intensity={0.1} position={[0, 10, 0]} /> */}
        <directionalLight />
        <gridHelper />
        <axesHelper />
        <PerspectiveCamera
          manual
          far={1}
          // near={0.1}
          // fov={10}
          // rotation={[0, 0, 0]}
          // position={
          //   activeLayer?.status
          //     ? [
          //         activeLayer?.focus?.x - 30,
          //         activeLayer?.focus?.y + 30,
          //         activeLayer?.focus?.z + 30,
          //       ]
          //     : [0, 0, 0]
          // }
          // controls={
          //   activeLayer?.status
          //     ? [
          //         activeLayer?.focus?.x,
          //         activeLayer?.focus?.y,
          //         activeLayer?.focus?.z,
          //       ]
          //     : [0, 0, 0]
          // }
        >
          <group scale={0.01} position={[0, 0, 0]}>
            {children.map(
              (child) =>
                child.name !== "Ground" && (
                  <mesh
                    key={child.ID}
                    castShadow
                    receiveShadow
                    geometry={child.geometry}
                    material={child.material}
                    onClick={(e) => {
                      console.log(e);
                      // console.log(child.geometry);
                      setActiveLayer({
                        id: child.ID,
                        status: !activeLayer?.status,
                        zoom:
                          activeLayer?.focus === e.point
                            ? !activeLayer?.zoom
                            : true,
                        focus: e.point,
                      });
                    }}
                    // position={activeLayer?.id === child.ID && position}
                    // onClick={(e) => {
                    //   console.log(e);
                    //   setActiveLayer({
                    //     id: child.ID,
                    //     status: !activeLayer?.status,
                    //     zoom:
                    //       activeLayer?.id === child.ID
                    //         ? !activeLayer?.zoom
                    //         : true,
                    //     focus: e.point,
                    //   });
                    // }}
                  >
                    {child.ID === 1586449280 && (
                      <meshPhysicalMaterial
                        roughness={0.3}
                        transmission={1}
                        ior={1.4}
                        color="blue"
                      />
                    )}

                    {/* <meshStandardMaterial color="#f4f" /> */}
                  </mesh>
                )
            )}
          </group>
        </PerspectiveCamera>
      </Suspense>
      <Environment preset="night" background />

      <OrbitControls
        // maxAzimuthAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        position={[0, 0, -Math.PI / 2]}
        // scale={3}
        // minAzimuthAngle={-Math.PI / 4}
        // minPolarAngle={0}
        // enableZoom={false}
        // onChange={(e) => }
      />
    </>
  );
}

export default Combined;

// https://codesandbox.io/s/rlme0?file=/src/App.js
