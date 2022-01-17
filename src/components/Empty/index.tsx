import React from "react";

import { Container, Icon, Message } from "./styles";

interface IEmptyProps {
  message: string;
}

export const Empty = ({ message }: IEmptyProps) => {
  return (
    <Container>
      <Icon name="cart-remove" />
      <Message>{message}</Message>
    </Container>
  );
};
