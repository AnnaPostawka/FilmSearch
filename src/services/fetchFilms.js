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
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchFilmsSuccess(res.Search));
        return res.Search;
      })
      .catch(error => {
        dispatch(fetchFilmsError(error));
      });
  };
}
