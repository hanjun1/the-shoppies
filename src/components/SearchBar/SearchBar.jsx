import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearch(searchInput);
    props.getMovie(searchInput);
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleSearchChange}
          placeholder="Search for a movie..."
          value={searchInput}
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
