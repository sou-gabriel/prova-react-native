import React, { useState } from "react";
import { ScrollView, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Header } from "../../components/Header";
import { GameTypeButton } from "../../components/GameTypeButton";
import { Footer } from "../../components/Footer";
import { CardNumber } from "../../components/CardNumber";
import { AppDispatch, RootState } from "../../store";
import { setActiveGame } from "../../store/features/activeGame/activeGameSlice";
import { addBet } from "../../store/features/cart/cartSlice";

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
  const { type, description, range, color, max_number, price } = useSelector(
    (state: RootState) => state.activeGame as IGameType
  );
  const dispatch = useDispatch<AppDispatch>();
  const [chosenGameNumbers, setChosenGameNumbers] = useState<number[]>([]);

  const createGameNumbers = () => {
    const numbers: number[] = [];

    for (let number = 1; number <= range; number++) {
      numbers.push(number);
    }

    return numbers;
  };

  const getRandomGameNumbers = () => {
    const randomNumbers = [];

    do {
      const newRandomNumber = Math.round(Math.random() * range);

      if (!randomNumbers.includes(newRandomNumber)) {
        randomNumbers.push(newRandomNumber);
      }
    } while (randomNumbers.length !== max_number);

    return randomNumbers;
  };

  const completeGame = () => {
    const randomGameNumbers = getRandomGameNumbers();
    setChosenGameNumbers(randomGameNumbers);
  };

  const clearGame = () => {
    setChosenGameNumbers([]);
  };

  const getPluralOrSinglar = (quantity, plural, singular) =>
    quantity === 1 ? singular : plural;

  const addToCart = () => {
    if (chosenGameNumbers.length === max_number) {
      const chosenGameNumbersCopy = chosenGameNumbers.map(
        (chosenGameNumber) => chosenGameNumber
      );
      const chosenGameNumbersOrdered = chosenGameNumbersCopy.sort(
        (a, b) => a - b
      );

      const newBet = {
        id: String(new Date().getTime()),
        type,
        color,
        numbers: chosenGameNumbersOrdered.join(", "),
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price),
        date: new Intl.DateTimeFormat("pt-BR").format(new Date()),
      };
      dispatch(addBet(newBet));
      clearGame();
      return;
    }

    const remainingNumbers = max_number - chosenGameNumbers.length;

    Alert.alert(
      "Não foi possível adicionar o jogo ao carrinho",
      `Ainda restam ${remainingNumbers} ${getPluralOrSinglar(
        remainingNumbers,
        "numeros",
        "numero"
      )} a ${getPluralOrSinglar(
        remainingNumbers,
        "serem",
        "ser"
      )} ${getPluralOrSinglar(remainingNumbers, "selecionados", "selecionado")}`
    );
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
                  clearGame();
                }}
              />
            ))}
          </ButtonsContainer>
        </ChooseGameContainer>

        <Subtitle>Fill your bet</Subtitle>
        <Description>{description}</Description>

        <GameNumberButtonsContainer>
          {createGameNumbers().map((gameNumber) => (
            <CardNumber
              color={color}
              number={gameNumber}
              isSelected={chosenGameNumbers.includes(gameNumber)}
              onPress={() => {
                if (chosenGameNumbers.includes(gameNumber)) {
                  setChosenGameNumbers((prevChosenGameNumbers) => {
                    return prevChosenGameNumbers.filter(
                      (prevChosenGameNumber) => {
                        return prevChosenGameNumber !== gameNumber;
                      }
                    );
                  });
                  return;
                }

                if (chosenGameNumbers.length < max_number) {
                  setChosenGameNumbers((prevChosenGameNumbers) => [
                    ...prevChosenGameNumbers,
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
          <PrimaryActionButton onPress={completeGame}>
            <PrimaryActionButtonText>Complete Game</PrimaryActionButtonText>
          </PrimaryActionButton>

          <PrimaryActionButton onPress={clearGame}>
            <PrimaryActionButtonText>Clear Game</PrimaryActionButtonText>
          </PrimaryActionButton>

          <SecondaryActionButton onPress={addToCart}>
            <Icon name="cart-outline" />
            <SecondaryActionButtonText>Add to Cart</SecondaryActionButtonText>
          </SecondaryActionButton>
        </ActionsContainer>
      </Content>

      <Footer />
    </ScrollView>
  );
};
