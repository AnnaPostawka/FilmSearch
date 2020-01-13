import {
  fetchFilmsPending,
  fetchFilmsSuccess,
  fetchFilmsError
} from "../actions";

export default function searchFilms(title) {
  return dispatch => {
    dispatch(fetchFilmsPending());
    fetch(`http://www.omdbapi.com/?s=${title}&apikey=a88f46da`)
      .then(res => res.json())
      .then(res => {
        if (res.error || res.Response === "False") {
          const error = res.error ? res.error : { message: res.Error };
          throw error;
        }

        dispatch(fetchFilmsSuccess(res.Search));
      })
      .catch(error => {
        dispatch(fetchFilmsError(error.message));
      });
  };
}
