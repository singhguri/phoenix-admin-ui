import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const getAllCoupons = async () => {
  try {
    return await axios.get(BASE_URL + "/coupons");
  } catch (error) {
    console.log(error);
  }
};

export const deleteCoupon = async (id) => {
  try {
    return await axios.delete(BASE_URL + "/coupon/" + id);
  } catch (error) {
    console.log(error);
  }
};

export const insertCoupon = async (body) => {
  try {
    return await axios.post(BASE_URL + "/coupon/create", body);
  } catch (error) {
    console.log(error);
  }
};
