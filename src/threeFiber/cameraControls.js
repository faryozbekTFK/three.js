// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { WebGLRenderer, PerspectiveCamera, Raycaster } from "three";

// export const camera = new PerspectiveCamera(
//   80,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// export const defaultCamera = new PerspectiveCamera(
//   80,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// export const renderer = new WebGLRenderer({ antialias: true });

// camera.fov = 20;
// camera.position.x = 0;
// camera.position.y = 280;
// camera.position.z = 0;

// defaultCamera.fov = 20;
// defaultCamera.position.x = 0;
// defaultCamera.position.y = 280;
// defaultCamera.position.z = 0;

// export const controls = new OrbitControls(camera, renderer);
// controls.dampingFactor = 0.1;
// controls.enableDamping = true;
// controls.enablePan = true;
// controls.rotateSpeed = 0.5;
// controls.target.set(0, 0, 0);

// export const raycaster = new Raycaster();
// export const clickAction = (event) => {
//   raycaster.setFromCamera(
//     {
//       x: (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
//       y: (event.clientX / renderer.domElement.clientHeight) * 2 - 1,
//     },
//     camera
//   );
// };

// export default {
//   controls,
//   renderer,
//   defaultCamera,
//   camera,
//   raycaster,
//   clickAction,
// };
