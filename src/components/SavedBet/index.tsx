import React from "react";

import {
  Container,
  VerticalLine,
  Content,
  Numbers,
  BetData,
  Date,
  GameName,
} from "./styles";

export const SavedBet = () => {
  return (
    <Container>
      <VerticalLine color="#7F3992" />
      <Content>
        <Numbers>0,3,5,6,8,10,11,13,15,16,17,18,19,20,21</Numbers>
        <BetData>
          <Date>15/01/2022 -</Date> (R$ 2,50)
        </BetData>
        <GameName color="#7F3992">Lotofácil</GameName>
      </Content>
    </Container>
  );
};
