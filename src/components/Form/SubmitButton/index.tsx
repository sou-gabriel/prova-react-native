import React from "react";

import { Container, Text, Icon } from "./styles";

interface ISubmitButton {
  title: string;
  onSubmitButtonClick: () => void;
}

export const SubmitButton = ({ title, onSubmitButtonClick }: ISubmitButton) => {
  return (
    <Container onPress={onSubmitButtonClick}>
      <Text>{title}</Text>
      <Icon name="arrowright" />
    </Container>
  );
};
