import React from "react";
import { useSelector } from "react-redux";

import { getFormattedDate, getFormattedPrice } from "@shared/functions";
import { RootState } from "@store/index";

import {
  Container,
  VerticalLine,
  Content,
  ChosenNumbers,
  PurchaseInfo,
  Type,
} from "./styles";

interface IUserBetProps {
  bet: {
    choosen_numbers: string;
    created_at: string;
    price: number;
    type: {
      type: string;
    };
  };
}

export const UserBet = ({ bet }: IUserBetProps) => {
  const typeOfGames = useSelector((state: RootState) => state.listGames.types);

  const { color } = typeOfGames.find(
    (typeOfGame) => typeOfGame.type === bet.type.type
  );

  return (
    <Container>
      <VerticalLine color={color} />
      <Content>
        <ChosenNumbers>{bet.choosen_numbers}</ChosenNumbers>
        <PurchaseInfo>
          {getFormattedDate(new Date(bet.created_at))} -{" "}
          {getFormattedPrice(bet.price)}
        </PurchaseInfo>
        <Type color={color}>{bet.type.type}</Type>
      </Content>
    </Container>
  );
};
