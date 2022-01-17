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

export const activeGameSlice = createSlice({
  name: "activeGame",
  initialState: {},
  reducers: {
    setActiveGame: (state, action: PayloadAction<IGameType>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setActiveGame } = activeGameSlice.actions;

export default activeGameSlice.reducer;
