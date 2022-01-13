import React from "react";
import { ScrollView } from "react-native";

import { HighlightText } from "../../components/HighlightText";
import { Input } from "../../components/Form/Input";
import { SubmitButton } from "../../components/Form/SubmitButton";
import { RedirectButton } from "../../components/RedirectButton";
import { Footer } from "../../components/Footer";

import {
  AuthContainer,
  Title,
  Form,
  ChangePasswordButtonContainer,
  ChangePasswordButton,
  ChangePasswordText,
} from "./styles";

export const SignInScreen = () => {
  const handleSignInPressed = () => {
    console.log("Clicou para conectar-se!");
  };

  return (
    <ScrollView>
      <HighlightText />

      <AuthContainer>
        <Title>Authentication</Title>
        <Form>
          <Input placeholder="E-mail" />
          <Input placeholder="Password" secureTextEntry />

          <ChangePasswordButtonContainer>
            <ChangePasswordButton>
              <ChangePasswordText>I forgot my password</ChangePasswordText>
            </ChangePasswordButton>
          </ChangePasswordButtonContainer>

          <SubmitButton
            title="Login"
            onSubmitButtonClick={handleSignInPressed}
          />
        </Form>
      </AuthContainer>

      <RedirectButton
        title="Sign Up"
        onRedirectButtonClick={() => {}}
        arrowDirection="right"
      />

      <Footer />
    </ScrollView>
  );
};
