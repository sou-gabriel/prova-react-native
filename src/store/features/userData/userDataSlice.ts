import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IData {
  name: string;
  email: string;
  created_at: string;
  token: string | null;
}

interface INewUserData {
  email: string
  name: string
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
    setUserData(state, action: PayloadAction<INewUserData>) {
      const { email, name } = action.payload

      state.email = email
      state.name = name

      return state
    }
  },
});

export const { addUser, removerUser, setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
