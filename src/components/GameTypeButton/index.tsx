import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Text } from "./styles";

interface IGameTypeButtonProps extends TouchableOpacityProps {
  theme: string;
  title: string;
}

export const GameTypeButton = ({
  theme,
  title,
  ...rest
}: IGameTypeButtonProps) => {
  return (
    <Container theme={theme} {...rest}>
      <Text theme={theme}>{title}</Text>
    </Container>
  );
};
