import React from "react";
import "./App.css";
import { connect } from "react-redux";

import { ErrorMessage } from "./ErrorMessage";
import FilmsList from "./FilmsList";
import { Loader } from "./Loader";
import SearchBar from "./SearchBar";

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="app">
        <SearchBar onFormSubmit="this.props.searchFilms(title)" />
        <div className="app__content">
          {this.props.pending && <Loader />}
          {this.props.error && <ErrorMessage message={this.props.error} />}
          {!this.props.pending && !this.props.error && <FilmsList />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.films.error,
    pending: state.films.pending
  };
};

export default connect(mapStateToProps)(App);
