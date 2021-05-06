import React from "react";
import "./HomePage.css";
import SearchBar from "../../components/SearchBar/SearchBar";

function HomePage(props) {
  return (
    <div className="HomePage">
      <h1>Welcome to Shoppies!</h1>
      <SearchBar />
    </div>
  );
}

export default HomePage;
