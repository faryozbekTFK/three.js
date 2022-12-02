import { useEffect, useState } from "react";
import { getImage, uploadImage } from "./service";

function Crud() {
  const [image, setImage] = useState();

  const sendImage = async (image) => {
    console.log(image);
    await uploadImage(image);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div>
      <h1>CRUD</h1>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={() => sendImage(image)}>send</button>
    </div>
  );
}

export default Crud;
