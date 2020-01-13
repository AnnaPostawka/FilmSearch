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
        {this.props.pending && <Loader />}
        {!this.props.pending && !this.props.error && <FilmsList />}
        {this.props.error && <ErrorMessage message={this.props.error} />}
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
