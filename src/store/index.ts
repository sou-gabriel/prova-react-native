import { configureStore } from "@reduxjs/toolkit";

import listGamesReducer from "./features/listGames/listGamesSlice";
import activeGameReducer from "./features/activeGame/activeGameSlice";
import cartReducer from "./features/cart/cartSlice";
import userDataReducer from "./features/userData/userDataSlice";

export const store = configureStore({
  reducer: {
    listGames: listGamesReducer,
    activeGame: activeGameReducer,
    cart: cartReducer,
    userData: userDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
