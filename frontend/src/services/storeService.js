import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const getStores = async () => {
  const response = await axios.get(`${API_URL}/stores`);

  return response.data;
};

export const getStoreById = async (storeId) => {
  const response = await axios.get(`${API_URL}/stores/${storeId}`);

  return response.data;
};