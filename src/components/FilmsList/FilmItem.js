import React from "react";
import "./FilmItem.css";

const FilmItem = ({ year, title }) => {
  return (
    <div className="film-item">
      <h2 className="film-title">{title}</h2>
      <p className="film-year">{year}</p>
    </div>
  );
};

export default FilmItem;
