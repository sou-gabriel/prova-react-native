import React from "react";
import { ScrollView } from "react-native";

import { Header } from "../../components/Header";
import { GameTypeButton } from "../../components/GameTypeButton";
import { Footer } from "../../components/Footer";

import {
  Content,
  Title,
  Bold,
  ChooseGameContainer,
  Subtitle,
  ButtonsContainer,
  Description,
  GameNumberButtonsContainer,
  GameNumberButton,
  GameNumberButtonText,
  ActionsContainer,
  PrimaryActionButton,
  PrimaryActionButtonText,
  SecondaryActionButton,
  SecondaryActionButtonText,
  Icon,
} from "./styles";

export const DashboardScreen = () => {
  return (
    <ScrollView>
      <Header />

      <Content>
        <Title>
          <Bold>New bet</Bold> for lotofácil
        </Title>

        <ChooseGameContainer>
          <Subtitle>Choose a game</Subtitle>

          <ButtonsContainer>
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
          </ButtonsContainer>
        </ChooseGameContainer>

        <Subtitle>Fill your bet</Subtitle>
        <Description>
          Escolha 15 números para apostar na lotofácil. Você ganha acertando 11,
          12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você
          joga de onde estiver!
        </Description>

        <GameNumberButtonsContainer>
          <GameNumberButton onPress={() => {}}>
            <GameNumberButtonText>01</GameNumberButtonText>
          </GameNumberButton>

          <GameNumberButton onPress={() => {}}>
            <GameNumberButtonText>02</GameNumberButtonText>
          </GameNumberButton>
        </GameNumberButtonsContainer>

        <ActionsContainer>
          <PrimaryActionButton onPress={() => {}}>
            <PrimaryActionButtonText>Complete Game</PrimaryActionButtonText>
          </PrimaryActionButton>

          <PrimaryActionButton onPress={() => {}}>
            <PrimaryActionButtonText>Clear Game</PrimaryActionButtonText>
          </PrimaryActionButton>

          <SecondaryActionButton onPress={() => {}}>
            <Icon name="cart-outline" />
            <SecondaryActionButtonText>Add to Cart</SecondaryActionButtonText>
          </SecondaryActionButton>
        </ActionsContainer>
      </Content>

      <Footer />
    </ScrollView>
  );
};
