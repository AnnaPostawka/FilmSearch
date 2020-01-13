import React from "react";
import "./SearchBar.css";

class Search extends React.Component {
  render() {
    return (
      <div>
        <h1 className="heading">Film Search</h1>
        <form>
          <input className="input" type="text"></input>
        </form>
      </div>
    );
  }
}

export default Search;
