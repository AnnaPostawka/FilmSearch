import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchFilms from "../../services/fetchFilms";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value }, () => {
      this.props.searchFilms(this.state.term);
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
