import React, { useCallback, useContext } from "react";
import { Alert, ScrollView } from "react-native";
import { useForm } from "react-hook-form";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { HighlightText } from "../../components/HighlightText";
import { Input } from "../../components/Form/Input";
import { SubmitButton } from "../../components/Form/SubmitButton";
import { RedirectButton } from "../../components/RedirectButton";
import { Footer } from "../../components/Footer";
import { createUser } from "../../shared/services/user";
import { TokenContext } from "../../shared/context/Token";

import { AuthContainer, Title, Form } from "./styles";

interface IUserData {
  name: string;
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "O mínímo é 3 caracteres.")
    .required("O nome de usuário é obrigatório"),
  email: Yup.string()
    .email("Campo de e-mail inválido")
    .required("O campo de e-mail é obrigatório"),
  password: Yup.string().min(6, "É necessário pelo menos 6 caracteres"),
});

export const SignUpScreen = (props: NativeStackScreenProps<ParamListBase>) => {
  const { navigation } = props

  const { setToken } = useContext(TokenContext)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onUserRegister = useCallback(async (userData: IUserData) => {
    try {
      const { data } = await createUser(userData)
      const token = data.token.token

      setToken(token)
      AsyncStorage.setItem('token', token)
      navigation.navigate('Home')
    } catch (error) {
      console.log(error)
      Alert.alert(error.name, error.message)
    }
  }, []);

  return (
    <ScrollView>
      <HighlightText />

      <AuthContainer>
        <Title>Registration</Title>
        <Form>
          <Input
            name="name"
            control={control}
            placeholder="Name"
            autoCorrect={false}
            error={errors.name && errors.name.message}
          />
          <Input
            name="email"
            control={control}
            placeholder="E-mail"
            autoCorrect={false}
            error={errors.email && errors.email.message}
          />
          <Input
            name="password"
            control={control}
            placeholder="Password"
            autoCorrect={false}
            error={errors.password && errors.password.message}
            secureTextEntry
          />

          <SubmitButton
            title="Register"
            onPress={handleSubmit(onUserRegister)}
          />
        </Form>
      </AuthContainer>

      <RedirectButton
        title="Back"
        onRedirectButtonClick={() => {}}
        arrowDirection="left"
      />

      <Footer />
    </ScrollView>
  );
};
