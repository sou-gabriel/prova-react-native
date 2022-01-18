import { useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { TokenContext } from "../context/Token";
import { login, resetPassword } from "../services/auth";
import { createUser } from "../services/user";
import { showError } from "../functions";

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

type UseAuth = {
  onUserLogin: (loginData: LoginData) => Promise<void>;
  onUserRegister: (registerData: RegisterData) => Promise<void>;
  onResetPassword: (
    dataToRecoverPassword: DataToRecoverPassword
  ) => Promise<void>;
};

export const useAuth = (): UseAuth => {
  const { setToken } = useContext(TokenContext);
  const { navigate } = useNavigation<any>();

  const storeToken = (token: string) => {
    AsyncStorage.setItem("token", token);
    setToken(token);
  };

  const onUserLogin = async (loginData: LoginData) => {
    try {
      const response = await login(loginData);

      if (response.status === 200) {
        const token = response.data.token.token;

        await storeToken(token);
      }
    } catch (error) {
      showError(error);
    }
  };

  const onUserRegister = async (registerData: RegisterData) => {
    try {
      const response = await createUser(registerData);

      if (response.status === 200) {
        const token = response.data.token.token;

        await storeToken(token);
      }
    } catch (error) {
      showError(error);
    }
  };

  const onResetPassword = async (
    dataToRecoverPassword: DataToRecoverPassword
  ) => {
    try {
      const response = await resetPassword(dataToRecoverPassword);

      if (response.status === 200) {
        const token = response.data.token;
        navigate("ChangePassword", { token });
      }
    } catch (error) {
      showError(error);
    }
  };

  useEffect(() => {
    AsyncStorage.getItem("token").then(storeToken);
  }, []);

  return {
    onUserLogin,
    onUserRegister,
    onResetPassword,
  };
};
