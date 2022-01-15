import api from './api'

interface IUserData {
  name: string
  email: string
  password: string
}

export const createUser = (userData: IUserData) => 
  api.post('user/create', userData)