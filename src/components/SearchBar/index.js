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
      <div>
        <h1 className="heading">Film Search</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            className="input"
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          ></input>
        </form>
        <form>
          <p>Sort results by: </p>
          <label htmlFor="title">Title</label>
          <input
            type="radio"
            name="sortBy"
            id="title"
            value={SORT_BY.TITLE}
            defaultChecked
            onChange={this.onRadioChange}
          ></input>
          <label htmlFor="year">Year</label>
          <input
            type="radio"
            name="sortBy"
            id="year"
            value={SORT_BY.YEAR}
            onChange={this.onRadioChange}
          ></input>
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
