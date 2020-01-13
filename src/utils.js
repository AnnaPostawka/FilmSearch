export const SORT_BY = {
  YEAR: "Year",
  TITLE: "Title"
};

export function sortFilms(sortBy, films) {
  if (sortBy === SORT_BY.TITLE) {
    return sortFilmsByTitle(films);
  } else if (sortBy === SORT_BY.YEAR) {
    return sortFilmsByYear(films);
  }
}

function sortFilmsByTitle(films) {
  return films.sort((a, b) =>
    a[SORT_BY.TITLE] > b[SORT_BY.TITLE]
      ? 1
      : a[SORT_BY.TITLE] === b[SORT_BY.TITLE]
      ? a[SORT_BY.YEAR] > b[SORT_BY.YEAR]
        ? 1
        : -1
      : -1
  );
}

function sortFilmsByYear(films) {
  return films.sort((a, b) =>
    a[SORT_BY.YEAR] > b[SORT_BY.YEAR]
      ? 1
      : a[SORT_BY.YEAR] === b[SORT_BY.YEAR]
      ? a[SORT_BY.TITLE] > b[SORT_BY.TITLE]
        ? 1
        : -1
      : -1
  );
}
