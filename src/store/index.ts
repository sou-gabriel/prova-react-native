import { configureStore } from "@reduxjs/toolkit";

import listGamesReducer from "./features/listGames/listGamesSlice";
import activeGameReducer from "./features/activeGame/activeGameSlice";

export const store = configureStore({
  reducer: {
    listGames: listGamesReducer,
    activeGame: activeGameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
