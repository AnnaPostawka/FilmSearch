import React from "react";
import { connect } from "react-redux";
import FilmItem from "./FilmItem";
import { EmptyList } from "./EmptyList";

class FilmsList extends React.Component {
  render() {
    return (
      <div className="films-list">
        {Array.isArray(this.props.films) && this.props.films.length > 0 ? (
          this.props.films.map(film => (
            <FilmItem key={film.imdbID} title={film.Title} year={film.Year} />
          ))
        ) : (
          <EmptyList />
        )}
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
