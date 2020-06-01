import { createStore } from "redux";
import trelloAppReducer from "../reducers";
import initialState from "./initialState";

const persistedState = localStorage.getItem("trelloAppState")
  ? JSON.parse(localStorage.getItem("trelloAppState"))
  : initialState;

const store = createStore(trelloAppReducer, persistedState);

store.subscribe(() => {
  localStorage.setItem("trelloAppState", JSON.stringify(store.getState()));
});

export default store;
