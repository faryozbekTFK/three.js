import axios from "axios";

const baseURL = "http://localhost:8080/attachment";

export const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  try {
    const response = await axios.post(`${baseURL}/uploadDB`, formData);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getImage = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/attachment/getFileDB/${id}`);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};
