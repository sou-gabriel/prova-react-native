import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IBet {
  id: string;
  color: string;
  numbers: string;
  type: string;
  date: string;
  price: string;
}

interface IState {
  bets: IBet[];
}

const initialState: IState = {
  bets: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBet(state, action: PayloadAction<IBet>) {
      state.bets.unshift(action.payload);
      return state;
    },
    removeBet() {},
  },
});

export const { addBet } = cartSlice.actions;

export default cartSlice.reducer;
