import React from "react";
import { connect } from "react-redux";
import FilmItem from "./FilmItem";

class FilmsList extends React.Component {
  render() {
    console.log(this.props.films);
    return (
      <div className="films-list">
        {this.props.films.map(film => (
          <FilmItem key={film.imdbID} title={film.Title} year={film.Year} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    films: state.films.films
  };
};

export default connect(mapStateToProps)(FilmsList);
