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
  name: Yup.string()
    .min(3, "O mínímo é 3 caracteres.")
    .required("O nome de usuário é obrigatório"),
  email: Yup.string()
    .email("Campo de e-mail inválido")
    .required("O campo de e-mail é obrigatório"),
  password: Yup.string().min(6, "É necessário pelo menos 6 caracteres"),
});

export const SignUpScreen = ({
  navigation,
}: NativeStackScreenProps<ParamListBase>) => {
  const { onUserRegister } = useAuth();
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
        onRedirectButtonClick={() => navigation.goBack()}
        arrowDirection="left"
      />

      <Footer />
    </ScrollView>
  );
};
