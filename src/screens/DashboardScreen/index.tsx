import React, { useState } from "react";
import { ScrollView, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from "react-native-toast-message";

import { Header } from "../../components/Header";
import { GameTypeButton } from "../../components/GameTypeButton";
import { Footer } from "../../components/Footer";
import { CardNumber } from "../../components/CardNumber";
import { AppDispatch, RootState } from "../../store";
import { setActiveGame } from "../../store/features/activeGame/activeGameSlice";
import { addBet } from "../../store/features/cart/cartSlice";
import { useGame } from "../../shared/hooks/useGame";

import {
  Content,
  Title,
  Bold,
  ChooseGameContainer,
  Subtitle,
  ButtonsContainer,
  Description,
  GameNumberButtonsContainer,
  ActionsContainer,
  PrimaryActionButton,
  PrimaryActionButtonText,
  SecondaryActionButton,
  SecondaryActionButtonText,
  Icon,
} from "./styles";

interface IGameType {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
}

interface IListGames {
  min_cart_value: number;
  types: IGameType[];
}

export const DashboardScreen = () => {
  const games = useSelector(
    (state: RootState) => state.listGames as IListGames
  );
  const activeGame = useSelector(
    (state: RootState) => state.activeGame as IGameType
  );
  const dispatch = useDispatch<AppDispatch>();
  const {
    chosenNumbers,
    setChosenNumbers,
    getCardNumbers,
    handleCompleteGame,
    handleClearGame,
    handleAddToCart,
  } = useGame(activeGame);

  return (
    <ScrollView>
      <Header />

      <Content>
        <Title>
          <Bold>New bet</Bold> for {activeGame.type}
        </Title>

        <ChooseGameContainer>
          <Subtitle>Choose a game</Subtitle>

          <ButtonsContainer>
            {games.types.map(({ color, type }) => (
              <GameTypeButton
                key={String(Math.random())}
                theme={color}
                title={type}
                onPress={() => {
                  const newActiveGame = games.types.find(
                    (gameType) => gameType.type === type
                  );
                  dispatch(setActiveGame(newActiveGame));
                }}
              />
            ))}
          </ButtonsContainer>
        </ChooseGameContainer>

        <Subtitle>Fill your bet</Subtitle>
        <Description>{activeGame.description}</Description>

        <GameNumberButtonsContainer>
          {getCardNumbers().map((gameNumber) => (
            <CardNumber
              color={activeGame.color}
              number={gameNumber}
              isSelected={chosenNumbers.includes(gameNumber)}
              onPress={() => {
                if (chosenNumbers.includes(gameNumber)) {
                  setChosenNumbers((prevChosenNumbers) => {
                    return prevChosenNumbers.filter((prevChosenNumber) => {
                      return prevChosenNumber !== gameNumber;
                    });
                  });
                  return;
                }

                if (chosenNumbers.length < activeGame.max_number) {
                  setChosenNumbers((prevChosenNumbers) => [
                    ...prevChosenNumbers,
                    gameNumber,
                  ]);
                  return;
                }

                Alert.alert(
                  "Não é possível adicionar novos números",
                  "Você já atingiu a quantidade máxima de números selecionados nesta cartela"
                );
              }}
            />
          ))}
        </GameNumberButtonsContainer>

        <ActionsContainer>
          <PrimaryActionButton onPress={handleCompleteGame}>
            <PrimaryActionButtonText>Complete Game</PrimaryActionButtonText>
          </PrimaryActionButton>

          <PrimaryActionButton onPress={handleClearGame}>
            <PrimaryActionButtonText>Clear Game</PrimaryActionButtonText>
          </PrimaryActionButton>

          <SecondaryActionButton onPress={handleAddToCart}>
            <Icon name="cart-outline" />
            <SecondaryActionButtonText>Add to Cart</SecondaryActionButtonText>
          </SecondaryActionButton>
        </ActionsContainer>
      </Content>

      <Footer />
    </ScrollView>
  );
};
