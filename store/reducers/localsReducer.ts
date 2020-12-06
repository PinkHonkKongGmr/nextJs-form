import { shangeLocal } from "../actions/types/types";
import { HYDRATE } from "next-redux-wrapper";

export type localsState = {
  local: string;
};

export const initState = {
  local: "ru",
};

export const localsReducer = (state = initState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, name: action.payload };
    case shangeLocal:
      return { ...state, local: action.payload };
    default:
      return state;
  }
};
