import React from "react";
import "./FilmItem.css";

const FilmItem = ({ year, title }) => {
  return (
    <div className="film-item">
      <h2 className="film-item__title">{title}</h2>
      <p className="film-item__year">{year}</p>
    </div>
  );
};

export default FilmItem;
