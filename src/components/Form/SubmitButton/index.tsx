import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Text, Icon } from "./styles";

interface ISubmitButton extends TouchableOpacityProps {
  title: string;
}

export const SubmitButton = ({ title, ...rest }: ISubmitButton) => {
  return (
    <Container {...rest}>
      <Text>{title}</Text>
      <Icon name="arrowright" />
    </Container>
  );
};
