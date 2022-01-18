import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

export const listGamesSlice = createSlice({
  name: "listGames",
  initialState: {
    min_cart_value: null,
    types: [],
  },
  reducers: {
    setListGames: (state, action: PayloadAction<IListGames>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setListGames } = listGamesSlice.actions;

export default listGamesSlice.reducer;
