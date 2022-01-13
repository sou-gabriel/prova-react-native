import React from "react";
import { ScrollView } from "react-native";

import { HighlightText } from "../../components/HighlightText";
import { Input } from "../../components/Form/Input";
import { SubmitButton } from "../../components/Form/SubmitButton";
import { RedirectButton } from "../../components/RedirectButton";
import { Footer } from "../../components/Footer";

import { AuthContainer, Title, Form } from "./styles";

export const ResetPasswordScreen = () => {
  return (
    <ScrollView>
      <HighlightText />

      <AuthContainer>
        <Title>Forgot Password</Title>
        <Form>
          <Input placeholder="E-mail" />
          <SubmitButton title="Reset Password" onSubmitButtonClick={() => {}} />
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
