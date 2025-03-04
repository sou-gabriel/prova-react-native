import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { login, resetPassword } from "../services/auth";
import { createUser } from "../services/user";
import { showError } from "../functions";
import { addUser } from "@store/features/userData/userDataSlice";
import { AppDispatch } from "@store/index";
import { Alert } from "react-native";

type LoginData = {
  email: string;
  password: string;
};

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

type DataToRecoverPassword = {
  email: string;
};

type User = {
  name: string;
  email: string;
  created_at: string;
  token: string;
};

type UseAuth = {
  onUserLogin: (loginData: LoginData) => Promise<void>;
  onUserRegister: (registerData: RegisterData) => Promise<void>;
  onResetPassword: (
    dataToRecoverPassword: DataToRecoverPassword
  ) => Promise<void>;
};

export const useAuth = (): UseAuth => {
  const { navigate } = useNavigation<any>();
  const dispatch = useDispatch<AppDispatch>();

  const addNewUser = (user: User) => {
    AsyncStorage.setItem("user", JSON.stringify(user));
    dispatch(addUser(user));
  };

  const onUserLogin = async (loginData: LoginData) => {
    const response = await login(loginData);
    addNewUser({
      name: response.data.user.name,
      email: response.data.user.email,
      created_at: response.data.user.created_at,
      token: response.data.token.token,
    });
  };

  const onUserRegister = async (registerData: RegisterData) => {
    try {
      const { data } = await createUser(registerData);
      addNewUser({
        name: data.user.name,
        email: data.user.email,
        created_at: data.user.created_at,
        token: data.token.token,
      });
    } catch (error) {
      showError(error);
    }
  };

  const onResetPassword = async (
    dataToRecoverPassword: DataToRecoverPassword
  ) => {
    try {
      const { data } = await resetPassword(dataToRecoverPassword);
      navigate("ChangePassword", { token: data.token });
    } catch (error) {      
      if (error.status === 404) {
        Alert.alert('Endereço de e-mail não encontrado', 'Insira um endereço de e-mail que já possua cadastro na aplicação')
      }    
    }
  };

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((user) => {
        dispatch(addUser(JSON.parse(user)));
      })
      .catch(showError);
  }, []);

  return {
    onUserLogin,
    onUserRegister,
    onResetPassword,
  };
};
