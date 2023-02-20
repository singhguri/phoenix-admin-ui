import axios from "axios";

const baseURL = "http://localhost:5000";

export const getAllTasks = async () => {
  try {
    return await axios.get(baseURL + "/tasks");
  } catch (error) {
    console.log(error);
  }
};

export const deleteTaskById = async (id) => {
  try {
    return await axios.delete(baseURL + "/tasks/" + id);
  } catch (error) {
    console.log(error);
  }
};
