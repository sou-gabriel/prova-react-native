import { combineReducers } from "redux";

import { userReducer } from "./user/reducer";

export interface IRootState {
  user: {
    token: string;
  };
}

export default combineReducers({
  user: userReducer,
});
