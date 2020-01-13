import React from "react";
import Search from "./Search";
import "./App.css";
import { connect } from "react-redux";
import fetchFilms from "../services/fetchFilms";
import { bindActionCreators } from "redux";

class App extends React.Component {
  componentDidMount() {
    const title = "harry potter";
    this.props.searchFilms(title);
  }

  render() {
    console.log(this.props);
    return (
      <div className="app">
        <Search />
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
