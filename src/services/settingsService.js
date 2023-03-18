import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const getAllSettingsByUserId = async (id) => {
  try {
    return await axios.get(BASE_URL + "/settings");
  } catch (error) {
    console.log(error);
  }
};
