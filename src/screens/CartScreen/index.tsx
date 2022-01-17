import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

import { Header } from "../../components/Header";
import { Empty } from "../../components/Empty";
import { CartBet } from "../../components/CartBet";
import { Footer } from "../../components/Footer";
import { RootState } from "../../store";

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
  const bets = useSelector((state: RootState) => state.cart.bets);

  return (
    <>
      <Header />

      <Container>
        <Content>
          <Title>Cart</Title>
          <BetsContainer>
            {bets.length === 0 ? (
              <Empty message="Não há jogos no carrinho" />
            ) : (
              <FlatList
                data={bets}
                renderItem={({ item }) => (
                  <CartBet
                    bet={{
                      id: item.id,
                      color: item.color,
                      numbers: item.numbers,
                      date: item.date,
                      price: item.price,
                      type: item.type,
                    }}
                  />
                )}
              />
            )}
          </BetsContainer>
        </Content>
        <SubmitButton>
          <SubmitButtonText>Save</SubmitButtonText>
          <SubmitButtonIcon name="arrowright" />
        </SubmitButton>
      </Container>

      <Footer />
    </>
  );
};
