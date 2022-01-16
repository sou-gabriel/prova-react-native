import api from "./api";

interface ILogin {
  email: string;
  password: string;
}

interface IResetPassword {
  email: string
}

interface IChangePassword {
  password: string
}

export const login = (data: ILogin) => api.post('login', data)

export const resetPassword = (data: IResetPassword) => api.post('reset', data)

export const changePassword = (data: IChangePassword, token: string) => api.post(`reset/${token}`, data) 