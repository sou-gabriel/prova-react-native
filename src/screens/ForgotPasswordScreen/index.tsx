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
import { useAuth } from "@shared/hooks/useAuth";
import { AuthContainer, Title, Form } from "./styles";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Campo de e-mail inválido")
    .required("O campo de e-mail é obrigatório"),
});

export const ForgotPasswordScreen = ({
  navigation,
}: NativeStackScreenProps<ParamListBase>) => {
  const { onResetPassword } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <ScrollView>
      <HighlightText />

      <AuthContainer>
        <Title>Forgot Password</Title>
        <Form>
          <Input
            name="email"
            control={control}
            placeholder="E-mail"
            autoCorrect={false}
            error={errors.email && errors.email.message}
          />

          <SubmitButton
            title="Submit"
            onPress={handleSubmit(onResetPassword)}
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
