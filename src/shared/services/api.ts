import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "http://192.168.0.111:3333",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const user = JSON.parse(await AsyncStorage.getItem("user"));

  console.log(user.token);

  if (config.headers) {
    config.headers.Authorization = `Bearer ${user.token}}`;
  }

  return config;
});

export default api;
