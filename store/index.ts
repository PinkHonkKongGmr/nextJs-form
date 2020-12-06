import { createStore } from "redux";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import createReducer, { rootState } from "./reducers/rootReducer";

export const makeStore: MakeStore<rootState> = (Context: Context) =>
  createStore(createReducer());

export const wrapper = createWrapper<rootState>(makeStore, { debug: true });
