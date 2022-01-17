import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Number } from "./styles";

interface ICardNumber extends TouchableOpacityProps {
  color: string;
  isSelected: boolean;
  number: number;
}

export const CardNumber = ({
  color,
  isSelected,
  number,
  ...rest
}: ICardNumber) => {
  return (
    <Container color={color} isSelected={isSelected} {...rest}>
      <Number>{number}</Number>
    </Container>
  );
};
