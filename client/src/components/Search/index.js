import React from "react";
import "./style.css"

function Search(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="books">Search term:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="searchTerm"
          list="books"
          type="text"
          className="form-control"
          placeholder="To Kill a Mockingbird"
          id="searchTerm"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success mt-2">
          Search
        </button>
      </div>
    </form>
  )
}

export default Search;