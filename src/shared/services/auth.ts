import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "./api";

interface ILoginData {
  email: string;
  password: string;
}

export const login = async (userData: ILoginData) => {
  const { data } = await api.post("login", userData);

  const token: string = data.token.token;

  if (token) {
    AsyncStorage.setItem("token", token);
    return token;
  }

  return null;
};
