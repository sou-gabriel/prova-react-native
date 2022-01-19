import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Header, GameTypeButton, Empty, Footer, UserBet } from "@components";
import { listGames } from "@shared/services/games";
import { showError } from "@shared/functions";
import { fetchAllBets } from "@shared/services/bets";
import { setListGames } from "@store/features/listGames/listGamesSlice";
import { setActiveGame } from "@store/features/activeGame/activeGameSlice";
import { AppDispatch, RootState } from "@store/index";

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
  const [activeGames, setActiveGames] = useState<IGameType[]>([]);

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

  useEffect(() => {
    if (activeGames.length > 0) {
      const queryParams = activeGames.reduce((acc, { type }, index) => {
        if (index === 0) {
          return `?type%5B%5D=${type}`;
        }

        return `${acc}&type%5B%5D=${type}`;
      }, "");

      fetchAllBets(queryParams)
        .then(({ data }) => {
          setAllBets(data);
        })
        .catch(showError);
    }
  }, [activeGames]);

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
                {games.types.map(({ color, type, id }) => (
                  <GameTypeButton
                    key={String(Math.random())}
                    theme={color}
                    title={type}
                    onPress={() => {
                      const game = games.types.find((game) => {
                        return game.id === id;
                      });

                      const isTheGameActive = activeGames.some(
                        (activeGame) => activeGame.id === id
                      );

                      if (isTheGameActive) {
                        setActiveGames((prevActiveGames) => {
                          return prevActiveGames.filter((prevActiveGame) => {
                            return prevActiveGame.id !== id;
                          });
                        });
                        return;
                      }

                      setActiveGames((prevActiveGames) => [
                        ...prevActiveGames,
                        game,
                      ]);
                    }}
                    isActive={activeGames.some(
                      (activeGame) => activeGame.id === id
                    )}
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
