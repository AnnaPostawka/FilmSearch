import React from "react";
import "./App.css";
import { connect } from "react-redux";
import fetchFilms from "../services/fetchFilms";
import { bindActionCreators } from "redux";

import { ErrorMessage } from "./ErrorMessage";
import FilmsList from "./FilmsList";
import Loader from "./Loader";
import SearchBar from "./SearchBar";

class App extends React.Component {
  componentDidMount() {
    const title = "harry potter";
    this.props.searchFilms(title);
  }

  render() {
    console.log(this.props);
    return (
      <div className="app">
        <SearchBar />
        {this.props.pending && <Loader />}
        {this.props.error && <ErrorMessage message={this.props.error} />}
        {Array.isArray(this.props.films) && this.props.films.length > 0 && (
          <FilmsList />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.films.error,
    films: state.films.films,
    pending: state.films.pending
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchFilms: fetchFilms
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
