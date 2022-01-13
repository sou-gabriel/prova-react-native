import React from "react";
import { View, TextInputProps } from "react-native";

import { Container, Field, ErrorMessage } from "./styles";

interface IInput extends TextInputProps {}

export const Input = ({ ...rest }: IInput) => {
  return (
    <Container>
      <Field {...rest} />
      <ErrorMessage>Mensagem de erro</ErrorMessage>
    </Container>
  );
};
