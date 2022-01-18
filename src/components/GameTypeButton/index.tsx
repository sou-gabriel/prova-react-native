import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Text } from "./styles";

interface IGameTypeButtonProps extends TouchableOpacityProps {
  theme: string;
  title: string;
  isActive: boolean;
}

export const GameTypeButton = ({
  theme,
  title,
  isActive,
  ...rest
}: IGameTypeButtonProps) => {
  return (
    <Container theme={theme} isActive={isActive} {...rest}>
      <Text theme={theme} isActive={isActive}>
        {title}
      </Text>
    </Container>
  );
};
