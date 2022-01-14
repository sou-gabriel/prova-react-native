import { Alert } from "react-native";

import { login } from "../../../shared/services/auth";

export const LOGIN_SUCCESSFULLY = "LOGIN_SUCCESSFULLY";
export const USER_LOGIN = "USER_LOGIN";

interface IUserData {
  email: string;
  password: string;
}

const createSuccessfulLoginAction = (token: string) => {
  return {
    type: LOGIN_SUCCESSFULLY,
    payload: {
      token,
    },
  };
};

export const createLoginAction = (userData: IUserData) => {
  return async (dispatch) => {
    try {
      const token: string | null = await login(userData);

      if (token) {
        dispatch(createSuccessfulLoginAction(token));
      }
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Login mal-sucedido",
        "Não foi possível realizar o login do usuário. Por favor tente novamente!"
      );
    }
  };
};
