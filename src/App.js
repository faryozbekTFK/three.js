import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import TeapotModel from "./threeFiber/teapot";
import Model from "./threeFiber/model";
import Combined from "./threeFiber/Combined";
import "./App.css";
import NewCombined from "./threeFiber/NewCombined";
import Crud from "./CRUD/Crud";

function App() {
  const [hide, setHide] = useState(false);

  return (
    <div className="canvasContainer">
      {/* <Crud /> */}
      {/* <h1> {hide ? "Open" : "Close"} </h1> */}
      {/* <ThreeFiber /> */}
      {/* <Controls /> */}
      <Canvas style={{ height: "100vh" }}>
        {/* <Model /> */}
        {/* <TeapotModel onHide={() => setHide(!hide)} /> */}
        <Combined />
        {/* <NewCombined /> */}
      </Canvas>
    </div>
  );
}

export default App;

// Kamerani obyektga yuborish
// Obyektga action yozish
