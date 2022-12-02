import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

function Controls() {
  const ref = useRef();
  const { invalidate, camera, gl } = useThree();

  useEffect(() => {
    ref.current.addEventListener("change", invalidate);
    return () => ref.current.removeEventListener("change", invalidate);
  }, []);

  return <orbitControls ref={ref} args={[camera, gl.domElement]} />;
}

export default Controls;
