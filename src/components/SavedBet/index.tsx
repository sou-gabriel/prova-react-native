import React from "react";

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
    color: string;
    numbers: string;
    date: string;
    price: string;
    type: string;
  };
}

export const SavedBet = ({ bet }: ISavedBetProps) => {
  return (
    <Container>
      <TrashButton onPress={() => {}}>
        <TrashIcon name="trash-alt" />
      </TrashButton>
      <VerticalLine color={bet.color} />
      <Content>
        <Numbers>{bet.numbers}</Numbers>
        <BetData>
          <Date>{bet.date} -</Date> ({bet.price})
        </BetData>
        <GameName color={bet.color}>{bet.type}</GameName>
      </Content>
    </Container>
  );
};
