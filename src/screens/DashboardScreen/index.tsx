import React from "react";
import { ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Header } from "../../components/Header";
import { GameTypeButton } from "../../components/GameTypeButton";
import { Footer } from "../../components/Footer";
import { AppDispatch, RootState } from "../../store";
import { setActiveGame } from "../../store/features/activeGame/activeGameSlice";

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
  const { type, description, range } = useSelector(
    (state: RootState) => state.activeGame as IGameType
  );
  const dispatch = useDispatch<AppDispatch>();

  const createGameNumbers = () => {
    const numbers: number[] = [];

    for (let number = 1; number <= range; number++) {
      numbers.push(number);
    }

    return numbers;
  };

  return (
    <ScrollView>
      <Header />

      <Content>
        <Title>
          <Bold>New bet</Bold> for {type}
        </Title>

        <ChooseGameContainer>
          <Subtitle>Choose a game</Subtitle>

          <ButtonsContainer>
            {games.types.map(({ color, type }) => (
              <GameTypeButton
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
        <Description>{description}</Description>

        <GameNumberButtonsContainer
          data={createGameNumbers()}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <GameNumberButton onPress={() => {}}>
              <GameNumberButtonText>
                {item < 9 ? `0${item}` : item}
              </GameNumberButtonText>
            </GameNumberButton>
          )}
        />

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
