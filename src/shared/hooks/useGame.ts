import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";

import { showError } from "../functions";
import { addBet } from "../../store/features/cart/cartSlice";
import { AppDispatch, RootState } from "../../store";

interface IGame {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
}

export const useGame = (activeGame: IGame) => {
  const dispatch = useDispatch<AppDispatch>();
  const [chosenNumbers, setChosenNumbers] = useState<number[]>([]);
  const bets = useSelector((state: RootState) => state.cart.bets);

  const getCardNumbers = () => {
    let cardNumbers: number[] = [];

    for (let cardNumber = 1; cardNumber <= activeGame.range; cardNumber++) {
      cardNumbers.push(cardNumber);
    }

    return cardNumbers;
  };

  const getRandomNumbersWithoutRepetition = () => {
    const gameNumbers: number[] = [];

    do {
      const newGameNumber = Math.round(Math.random() * activeGame.range);

      if (!gameNumbers.includes(newGameNumber)) {
        gameNumbers.push(newGameNumber);
      }
    } while (gameNumbers.length !== activeGame.max_number);

    return gameNumbers;
  };

  const createNewBet = () => {
    const chosenNumbersOrdered = chosenNumbers
      .map((chosenNumber) => chosenNumber)
      .sort((itemA, itemB) => itemA - itemB);

    return {
      id: String(new Date().getTime()),
      game_id: activeGame.id,
      type: activeGame.type,
      color: activeGame.color,
      numbers: chosenNumbersOrdered,
      price: activeGame.price,
      date: new Intl.DateTimeFormat("pt-BR").format(new Date()),
    };
  };

  const handleCompleteGame = () => {
    const randomNumbers = getRandomNumbersWithoutRepetition();
    setChosenNumbers(randomNumbers);
    Toast.show({
      type: "success",
      text1: "Cartela preenchida com sucesso!",
    });
  };

  const handleClearGame = () => {
    setChosenNumbers([]);
    Toast.show({
      type: "success",
      text1: "Cartela limpa com sucesso!",
    });
  };

  const handleAddToCart = () => {
    const newBet = createNewBet();

    const isItARepeatBet = bets.some((bet) => {
      const isItTheSameTypeOfGame = bet.game_id === newBet.game_id;
      const areTheNumbersChosenTheSame = bet.numbers.every(
        (number, index) => number === newBet.numbers[index]
      );
      return isItTheSameTypeOfGame && areTheNumbersChosenTheSame;
    });

    if (isItARepeatBet) {
      Toast.show({
        type: "error",
        text1: "Não pode haver jogos repetidos no carrinho!",
      });
      return;
    }

    if (chosenNumbers.length === activeGame.max_number) {
      dispatch(addBet(newBet));
      setChosenNumbers([]);
      Toast.show({
        type: "success",
        text1: "Jogo adicionado com sucesso ao carrinho!",
      });
      return;
    }

    const remainingNumbers = activeGame.max_number - chosenNumbers.length;
    const numberSingularOrPlural =
      remainingNumbers === 1 ? "número" : "números";

    showError({
      name: "Não foi possível adicionar o jogo ao carrinho!",
      message: `Você precisa selecionar mais ${remainingNumbers} ${numberSingularOrPlural} na cartela.`,
    });
  };

  return {
    chosenNumbers,
    setChosenNumbers,
    getCardNumbers,
    handleCompleteGame,
    handleClearGame,
    handleAddToCart,
  };
};
