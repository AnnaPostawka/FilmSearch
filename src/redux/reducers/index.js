import { combineReducers } from "redux";

import { filmsReducer } from "./default-reducer";

export default combineReducers({
  films: filmsReducer
});
