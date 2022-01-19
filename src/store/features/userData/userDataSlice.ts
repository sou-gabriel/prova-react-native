import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IData {
  name: string;
  email: string;
  created_at: string;
  token: string | null;
}

export const userDataSlice = createSlice({
  name: "userData",
  initialState: null,
  reducers: {
    addUser(state, action: PayloadAction<IData>) {
      state = action.payload;
      return state;
    },
    removerUser(state) {
      state = null;
      return state;
    },
  },
});

export const { addUser, removerUser } = userDataSlice.actions;

export default userDataSlice.reducer;
