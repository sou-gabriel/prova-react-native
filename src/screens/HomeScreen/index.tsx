import React from "react";

import { SavedBet } from "../../components/SavedBet";
import { Empty } from "../../components/Empty";
import { Footer } from "../../components/Footer";

import {
  Header,
  LogoContainer,
  Logo,
  HorizontalLine,
  Content,
  ContentHeader,
  Title,
  FiltersContainer,
  GameFiltersButtonsContainer,
  GameFilterButton,
  GameFilterButtonText,
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
            <GameFilterButton color="#7F3992">
              <GameFilterButtonText color="#7F3992">
                Lotofácil
              </GameFilterButtonText>
            </GameFilterButton>

            <GameFilterButton color="#01AC66">
              <GameFilterButtonText color="#01AC66">
                Mega-Sena
              </GameFilterButtonText>
            </GameFilterButton>

            <GameFilterButton color="#F79C31">
              <GameFilterButtonText color="#F79C31">Quina</GameFilterButtonText>
            </GameFilterButton>
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
