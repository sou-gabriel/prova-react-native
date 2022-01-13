import React from "react";
import { ScrollView } from "react-native";

import { HighlightText } from "../../components/HighlightText";
import { Input } from "../../components/Form/Input";
import { SubmitButton } from "../../components/Form/SubmitButton";
import { RedirectButton } from "../../components/RedirectButton";
import { Footer } from "../../components/Footer";

import { AuthContainer, Title, Form } from "./styles";

export const SignUpScreen = () => {
  return (
    <ScrollView>
      <HighlightText />

      <AuthContainer>
        <Title>Registration</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="E-mail" />
          <Input placeholder="Password" />

          <SubmitButton title="Register" onSubmitButtonClick={() => {}} />
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
