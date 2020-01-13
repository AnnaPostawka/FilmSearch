import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
const initialState = {
  pending: false,
  films: [],
  error: null
};

const middlewares = [thunk];

export default createStore(
  reducers,
  { films: initialState },
  applyMiddleware(...middlewares)
);
