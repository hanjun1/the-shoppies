import React from "react";
import "./HomePage.css";
import SearchBar from "../../components/SearchBar/SearchBar";

function HomePage(props) {
  return (
    <div className="HomePage">
      <p className="title">
        The <span>Shoppies</span> 🎉
      </p>
      <SearchBar
        setResult={props.setResult}
        getMovie={props.getMovie}
        search={props.search}
        setSearch={props.setSearch}
        setPage={props.setPage}
        isSearching={props.isSearching}
        setIsSearching={props.setIsSearching}
      />
    </div>
  );
}

export default HomePage;
