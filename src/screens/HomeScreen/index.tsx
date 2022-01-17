import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Header } from "../../components/Header";
import { GameTypeButton } from "../../components/GameTypeButton";
import { Empty } from "../../components/Empty";
import { Footer } from "../../components/Footer";
import { AppDispatch, RootState } from "../../store";
import { listGames } from "../../shared/services/games";
import { showError } from "../../shared/functions";
import { setListGames } from "../../store/features/listGames/listGamesSlice";
import { setActiveGame } from "../../store/features/activeGame/activeGameSlice";

import {
  Content,
  ContentHeader,
  Title,
  FiltersContainer,
  GameFiltersButtonsContainer,
  SavedBetsContainer,
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

export const HomeScreen = () => {
  const games = useSelector(
    (state: RootState) => state.listGames as IListGames
  );
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchListGames = async () => {
      try {
        const response = await listGames();

        if (response.status === 200) {
          dispatch(setListGames(response.data));
          dispatch(setActiveGame(response.data.types[0]));
          setIsLoading(false);
        }
      } catch (error) {
        showError(error);
        setIsLoading(false);
      }
    };

    fetchListGames();
  }, []);

  return (
    <>
      <Header />

      <Content>
        {isLoading ? (
          <ActivityIndicator size="large" color="#868686" />
        ) : (
          <>
            <ContentHeader>
              <Title>Recent Games</Title>
            </ContentHeader>

            <FiltersContainer>
              <Title>Filters</Title>
              <GameFiltersButtonsContainer>
                {games.types.map(({ color, type }) => (
                  <GameTypeButton
                    theme={color}
                    title={type}
                    onPress={() => {}}
                  />
                ))}
              </GameFiltersButtonsContainer>
            </FiltersContainer>

            <SavedBetsContainer>
              <Empty message="Não há jogos salvos" />
            </SavedBetsContainer>
          </>
        )}
      </Content>

      <Footer />
    </>
  );
};
