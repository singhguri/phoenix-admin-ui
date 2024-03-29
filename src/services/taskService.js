import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const getAllTasks = async () => {
  try {
    return await axios.get(BASE_URL + "/all-tasks");
  } catch (error) {
    console.log(error);
  }
};

export const getTasksByUser = async (userId) => {
  try {
    return await axios.get(BASE_URL + "/user-tasks/" + userId);
  } catch (error) {
    console.log(error);
  }
};

export const addTask = async (body) => {
  try {
    return await axios.post(BASE_URL + "/tasks", body);
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = async (body, id, taskLang) => {
  try {
    if (taskLang === "en")
      return await axios.put(BASE_URL + "/tasks/" + id, body);
    return await axios.put(BASE_URL + "/fr-tasks/" + id, body);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTaskById = async (id) => {
  try {
    return await axios.delete(BASE_URL + "/tasks/" + id);
  } catch (error) {
    console.log(error);
  }
};

export const deleteFrTaskById = async (id) => {
  try {
    return await axios.delete(BASE_URL + "/fr-tasks/" + id);
  } catch (error) {
    console.log(error);
  }
};

export const getTaskById = async (id, lang) => {
  try {
    if (lang === "en") return await axios.get(BASE_URL + "/tasks/" + id);

    return await axios.get(BASE_URL + "/fr-tasks/" + id);
  } catch (error) {
    console.log(error);
  }
};
