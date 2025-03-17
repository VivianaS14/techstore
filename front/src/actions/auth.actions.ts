import axios from "axios";
import { LoginResponse } from "../types/user.types";

axios.defaults.baseURL = `http://localhost:3000/api/v1/`;

export const login = async (params: {
  email: string;
  password: string;
}): Promise<LoginResponse | undefined> => {
  try {
    const { data } = await axios.post("login", params);
    return data;
  } catch (error) {
    console.log(error);
  }
};
