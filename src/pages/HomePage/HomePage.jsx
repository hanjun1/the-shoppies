import React from "react";
import "./HomePage.css";
import SearchBar from "../../components/SearchBar/SearchBar";

function HomePage(props) {
  return (
    <div className="HomePage">
      <p class="title">
        The <span>Shoppies</span> 🎉
      </p>
      <SearchBar
        getMovie={props.getMovie}
        search={props.search}
        setSearch={props.setSearch}
      />
    </div>
  );
}

export default HomePage;
