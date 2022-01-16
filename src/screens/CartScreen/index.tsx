import React from "react";

import { Header } from "../../components/Header";
import { Empty } from "../../components/Empty";

import {
  Container,
  Content,
  Title,
  BetsContainer,
  SubmitButton,
  SubmitButtonText,
  SubmitButtonIcon,
} from "./styles";

export const CartScreen = () => {
  return (
    <>
      <Header />

      <Container>
        <Content>
          <Title>Cart</Title>
          <BetsContainer>
            <Empty message="Não há jogos no carrinho" />
          </BetsContainer>
        </Content>
        <SubmitButton>
          <SubmitButtonText>Save</SubmitButtonText>
          <SubmitButtonIcon name="arrowright" />
        </SubmitButton>
      </Container>
    </>
  );
};
