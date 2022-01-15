import api from "./api";

interface IUserData {
  email: string;
  password: string;
}

export const login = (userData: IUserData) => api.post('login', userData)
