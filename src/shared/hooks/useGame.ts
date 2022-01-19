import { useState } from "react";
import { useDispatch } from "react-redux";
import Toast from "react-native-toast-message";

import { showError } from "../functions";
import { addBet } from "../../store/features/cart/cartSlice";
import { AppDispatch } from "../../store";

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
    if (chosenNumbers.length === activeGame.max_number) {
      const newBet = createNewBet();

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
