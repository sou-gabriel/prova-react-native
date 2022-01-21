import api from './api'

interface IUserData {
  name: string
  email: string
  password: string
}

interface INewUserData {
  email: string
  name: string
}

export const createUser = (userData: IUserData) => 
  api.post('user/create', userData)

export const updateUser = (newUserData: INewUserData) => 
  api.put('user/update', newUserData)