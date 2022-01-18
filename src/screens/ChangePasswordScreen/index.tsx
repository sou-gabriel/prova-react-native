import React from "react";
import { ScrollView } from "react-native";
import { useForm } from "react-hook-form";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import {
  HighlightText,
  Input,
  SubmitButton,
  RedirectButton,
  Footer,
} from "@components";
import { changePassword } from "@shared/services/auth";
import { showError } from "@shared/functions";

import { AuthContainer, Title, Form } from "./styles";

interface IUserData {
  password: string;
}

const schema = Yup.object().shape({
  password: Yup.string()
    .min(6, "É necessário pelo menos 6 caracteres")
    .required("O campo de senha é obrigatório"),
});

export const ChangePasswordScreen = (
  props: NativeStackScreenProps<ParamListBase>
) => {
  const { navigation, route } = props;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onChangePassword = async (userData: IUserData) => {
    try {
      const token = (route.params as { token: string }).token;
      const response = await changePassword(userData, token);

      if (response.status === 200) {
        navigation.navigate("SignIn");
      }
    } catch (error) {
      showError(error);
    }
  };

  return (
    <ScrollView>
      <HighlightText />

      <AuthContainer>
        <Title>Reset Password</Title>
        <Form>
          <Input
            name="password"
            control={control}
            placeholder="Password"
            autoCorrect={false}
            error={errors.email && errors.email.message}
            secureTextEntry
          />

          <SubmitButton
            title="Submit"
            onPress={handleSubmit(onChangePassword)}
          />
        </Form>
      </AuthContainer>

      <RedirectButton
        title="Back"
        onRedirectButtonClick={() => navigation.goBack()}
        arrowDirection="left"
      />

      <Footer />
    </ScrollView>
  );
};
