import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const getAllOAuthUsers = async () => {
  try {
    return await axios.get(BASE_URL + "/OAuthUsers");
  } catch (error) {
    console.log(error);
  }
};

export const AddOAuthUsers = async (body) => {
  try {
    return await axios.post(BASE_URL + "/OAuthUsers", body);
  } catch (error) {
    console.log(error);
  }
};

export const getAllOAuthUserById = async (id) => {
  try {
    return await axios.get(BASE_URL + "/OAuthUsers/" + id);
  } catch (error) {
    console.log(error);
  }
};

export const updateOAuthUsers = async (body, id) => {
  try {
    return await axios.put(BASE_URL + "/OAuthUsers/" + id, body);
  } catch (error) {
    console.log(error);
  }
};

export const deleteOAuthUsers = async (id) => {
  try {
    return await axios.delete(BASE_URL + "/OAuthUsers/" + id);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (body) => {
  try {
    return await axios.post(BASE_URL + "/login", body);
  } catch (error) {
    console.log(error);
  }
};
