import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import Toast from "react-native-toast-message";

import { removeBet } from "../../store/features/cart/cartSlice";
import { AppDispatch } from "../../store";

import {
  Container,
  TrashButton,
  TrashIcon,
  VerticalLine,
  Content,
  Numbers,
  BetData,
  Date,
  GameName,
} from "./styles";

interface ISavedBetProps {
  bet: {
    id: string;
    color: string;
    numbers: string;
    date: string;
    price: string;
    type: string;
  };
}

export const SavedBet = ({ bet }: ISavedBetProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Container>
      <TrashButton
        onPress={() => {
          dispatch(removeBet({ id: bet.id }));
          Toast.show({
            type: "success",
            text1: "Aposta removida com sucesso do carrinho",
          });
        }}
      >
        <TrashIcon name="trash-alt" />
      </TrashButton>
      <VerticalLine color={bet.color} />
      <Content>
        <View style={{ flexDirection: "row" }}>
          <Numbers>{bet.numbers}</Numbers>
        </View>
        <BetData>
          <Date>{bet.date} -</Date> ({bet.price})
        </BetData>
        <GameName color={bet.color}>{bet.type}</GameName>
      </Content>
    </Container>
  );
};
