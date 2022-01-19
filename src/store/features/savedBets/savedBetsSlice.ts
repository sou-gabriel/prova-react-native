import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISavedBet {
  id: number;
  numbers: number[];
}

export const savedBetsSlice = createSlice({
  name: "savedBets",
  initialState: [],
  reducers: {
    setSavedBets(state, action: PayloadAction<ISavedBet[]>) {
      state = action.payload;
      return state;
    },
  },
});

export const { setSavedBets } = savedBetsSlice.actions;

export default savedBetsSlice.reducer;
