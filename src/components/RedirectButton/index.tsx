import React from "react";

import { Container, Button, Text, Icon } from "./styles";

interface IRedirectButton {
  title: string;
  arrowDirection: "left" | "right";
  onRedirectButtonClick: () => void;
}

export const RedirectButton = ({
  title,
  arrowDirection,
  onRedirectButtonClick,
}: IRedirectButton) => {
  return (
    <Container>
      <Button onPress={onRedirectButtonClick}>
        {arrowDirection === "left" && <Icon name="arrowleft" />}
        <Text>{title}</Text>
        {arrowDirection === "right" && <Icon name="arrowright" />}
      </Button>
    </Container>
  );
};
