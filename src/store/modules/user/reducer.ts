import { Reducer } from "redux";

import { LOGIN_SUCCESSFULLY } from "./actions";

interface IUser {
  token: string | null;
}

interface IAction {
  type: string;
  payload: {
    token: string;
  };
}

const INITIAL_STATE: IUser = {
  token: null,
};

export const userReducer: Reducer<IUser> = (
  state = INITIAL_STATE,
  action: IAction
) => {
  switch (action.type) {
    case LOGIN_SUCCESSFULLY:
      return { token: action.payload.token };
    default:
      return state;
  }
};
