import {
  FETCH_FILMS_PENDING,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_ERROR
} from "../actions";

const initialState = {
  pending: false,
  films: [],
  error: null
};

export function filmsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FILMS_PENDING:
      return {
        ...state,
        pending: true,
        error: ""
      };
    case FETCH_FILMS_SUCCESS:
      return {
        ...state,
        pending: false,
        error: "",
        films: action.films
      };
    case FETCH_FILMS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}
