import { Alert } from "react-native";
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

  if (config.headers && user) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }

  return config;
});

api.interceptors.response.use((response) => {
  return response
}, (error) => {
  const isAnUnauthorizedUser = error.response.status === 401

  if (isAnUnauthorizedUser) {
    Alert.alert('Usuário não cadastrado', 'Este usuário ainda não possui cadastro na aplicação.')
  }

  return Promise.reject(error.response)
})

export default api;
