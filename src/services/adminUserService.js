import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const getAllAdminUsers = async () => {
  try {
    return await axios.get(BASE_URL + "/adminUsers");
  } catch (error) {
    console.log(error);
  }
};

export const addAdminUser = async (body) => {
  try {
    return await axios.post(BASE_URL + "/adminUsers", body);
  } catch (error) {
    console.log(error);
  }
};
