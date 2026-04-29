/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "../axiosInstance";

export const handlePost = async (body: Record<string, any>) => {
  const response = await axios.post("/users", body);
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get("/users");
  return response.data;
};