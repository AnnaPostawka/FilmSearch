import {
  fetchFilmsPending,
  fetchFilmsSuccess,
  fetchFilmsError
} from "../actions";
import { sortFilms } from "../../utils";

export default function searchFilms(title, sortBy) {
  return dispatch => {
    dispatch(fetchFilmsPending());
    fetch(`http://www.omdbapi.com/?s=${title}&apikey=a88f46da`)
      .then(res => res.json())
      .then(res => {
        if (res.error || res.Response === "False") {
          const error = res.error ? res.error : { message: res.Error };
          throw error;
        }

        const sortedFilms = sortFilms(sortBy, res.Search);

        dispatch(fetchFilmsSuccess(sortedFilms));
      })
      .catch(error => {
        dispatch(fetchFilmsError(error.message));
      });
  };
}
