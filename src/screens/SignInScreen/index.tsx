import React, { useCallback, useContext, useEffect } from "react";
import { ScrollView, Alert } from "react-native";
import { useForm } from "react-hook-form";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { HighlightText } from "../../components/HighlightText";
import { Input } from "../../components/Form/Input";
import { SubmitButton } from "../../components/Form/SubmitButton";
import { RedirectButton } from "../../components/RedirectButton";
import { Footer } from "../../components/Footer";
import { login } from "../../shared/services/auth";
import { TokenContext } from "../../shared/context/Token";

import {
  AuthContainer,
  Title,
  Form,
  ChangePasswordButtonContainer,
  ChangePasswordButton,
  ChangePasswordText,
} from "./styles";

interface IUserData {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Campo de e-mail inválido")
    .required("O campo de e-mail é obrigatório"),
  password: Yup.string()
    .min(6, "É necessário pelo menos 6 caracteres")
    .required("O campo de senha é obrigatório"),
});

export const SignInScreen = (props: NativeStackScreenProps<ParamListBase>) => {
  const { navigation } = props;

  const { setToken } = useContext(TokenContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const autoLogin = (token: string) => {
    setToken(token);
    navigation.navigate("Home");
  };

  const onUserLogin = useCallback(async (userData: IUserData) => {
    try {
      const { data } = await login(userData);
      const token = data.token.token;

      await AsyncStorage.setItem("token", token);
      autoLogin(token);
    } catch (error) {
      console.log(error);
      Alert.alert(error.name, error.message);
    }
  }, []);

  useEffect(() => {
    AsyncStorage.getItem("token").then((token) => {
      if (token !== null) {
        autoLogin(token);
      }
    });
  }, []);

  return (
    <ScrollView>
      <HighlightText />

      <AuthContainer>
        <Title>Authentication</Title>
        <Form>
          <Input
            name="email"
            control={control}
            placeholder="Email"
            autoCorrect={false}
            error={errors.email && errors.email.message}
          />
          <Input
            name="password"
            control={control}
            placeholder="Password"
            autoCorrect={false}
            secureTextEntry
            error={errors.password && errors.password.message}
          />

          <ChangePasswordButtonContainer>
            <ChangePasswordButton>
              <ChangePasswordText>I forgot my password</ChangePasswordText>
            </ChangePasswordButton>
          </ChangePasswordButtonContainer>

          <SubmitButton title="Login" onPress={handleSubmit(onUserLogin)} />
        </Form>
      </AuthContainer>

      <RedirectButton
        title="Sign Up"
        onRedirectButtonClick={() => navigation.navigate("SignUp")}
        arrowDirection="right"
      />

      <Footer />
    </ScrollView>
  );
};
