import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchFilms from "../../redux/services/fetchFilms";
import "./SearchBar.css";
import { SORT_BY } from "../../utils";

class SearchBar extends React.Component {
  state = { term: "", sortBy: SORT_BY.TITLE };

  onInputChange = event => {
    this.setState({ term: event.target.value }, () => {
      this.props.searchFilms(this.state.term, this.state.sortBy);
    });
  };

  onRadioChange = event => {
    this.setState({ sortBy: event.target.value }, () => {
      this.props.searchFilms(this.state.term, this.state.sortBy);
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="search-bar">
        <h1 className="main-heading">Film Search</h1>
        <form className="search-form" onSubmit={this.onFormSubmit}>
          <input
            className="search-form__input"
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
            placeholder="Search"
          ></input>
        </form>
        <form className="radio-form">
          <p className="radio-form__text">Sort results by: </p>
          <label className="radio-form__label" htmlFor="title">
            Title
            <input
              className="radio-form__input"
              type="radio"
              name="sortBy"
              id="title"
              value={SORT_BY.TITLE}
              defaultChecked
              onChange={this.onRadioChange}
            ></input>
          </label>
          <label className="radio-form__label" htmlFor="year">
            Year
            <input
              className="radio-form__input"
              type="radio"
              name="sortBy"
              id="year"
              value={SORT_BY.YEAR}
              onChange={this.onRadioChange}
            ></input>
          </label>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchFilms: fetchFilms
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(SearchBar);
