import axios from "axios";
import { ParamsDevice } from "../types/device.types";

export const getDevices = async () => {
  try {
    const { data } = await axios.get("devices");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createDevice = async (params: ParamsDevice, token: string) => {
  try {
    const { data } = await axios.post("devices", params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateDevice = async (
  id: number,
  params: ParamsDevice,
  token: string
) => {
  try {
    const { data } = await axios.put(`device/${id}`, params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteDevice = async (id: number, token: string) => {
  try {
    const response = await axios.delete(`device/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
