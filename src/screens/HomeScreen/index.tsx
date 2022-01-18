import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Header } from "../../components/Header";
import { GameTypeButton } from "../../components/GameTypeButton";
import { Empty } from "../../components/Empty";
import { Footer } from "../../components/Footer";
import { UserBet } from "../../components/UserBet";
import { listGames } from "../../shared/services/games";
import {
  getFormattedPrice,
  getFormattedDate,
  showError,
} from "../../shared/functions";
import { fetchAllBets } from "../../shared/services/bets";
import { setListGames } from "../../store/features/listGames/listGamesSlice";
import { setActiveGame } from "../../store/features/activeGame/activeGameSlice";
import { AppDispatch, RootState } from "../../store";

import {
  Content,
  ContentHeader,
  Title,
  FiltersContainer,
  GameFiltersButtonsContainer,
  UserBetListContainer,
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
interface IBet {
  created_at: string;
  choosen_numbers: string;
  game_id: number;
  id: number;
  price: number;
  type: {
    type: string;
  };
}

export const HomeScreen = () => {
  const games = useSelector(
    (state: RootState) => state.listGames as IListGames
  );
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(true);
  const [allBets, setAllBets] = useState<IBet[]>([]);

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

    const fetchSavedBets = async () => {
      const response = await fetchAllBets();
      setAllBets(response.data);
      setIsLoading(false);
    };

    fetchListGames();
    fetchSavedBets();
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

            <UserBetListContainer style={{ flex: 1, marginTop: 16 }}>
              {allBets.length === 0 ? (
                <Empty message="A lista de jogos está vazia!" />
              ) : (
                <FlatList
                  data={allBets}
                  key={String(new Date().getTime())}
                  renderItem={({ item }) => <UserBet bet={item} />}
                />
              )}
            </UserBetListContainer>
          </>
        )}
      </Content>

      <Footer />
    </>
  );
};
