import React from "react";

import { Header } from "../../components/Header";
import { GameTypeButton } from "../../components/GameTypeButton";
import { SavedBet } from "../../components/SavedBet";
import { Empty } from "../../components/Empty";
import { Footer } from "../../components/Footer";

import {
  Content,
  ContentHeader,
  Title,
  FiltersContainer,
  GameFiltersButtonsContainer,
  SavedBetsContainer,
} from "./styles";

export const HomeScreen = () => {
  return (
    <>
      <Header />

      <Content>
        <ContentHeader>
          <Title>Recent Games</Title>
        </ContentHeader>

        <FiltersContainer>
          <Title>Filters</Title>
          <GameFiltersButtonsContainer>
            <GameTypeButton
              theme="#7F3992"
              title="Lotofácil"
              onPress={() => {}}
            />
            <GameTypeButton
              theme="#01AC66"
              title="Mega-Sena"
              onPress={() => {}}
            />
            <GameTypeButton theme="#F79C31" title="Quina" onPress={() => {}} />
          </GameFiltersButtonsContainer>
        </FiltersContainer>

        <SavedBetsContainer>
          <Empty message="Não há jogos salvos" />
        </SavedBetsContainer>
      </Content>

      <Footer />
    </>
  );
};
