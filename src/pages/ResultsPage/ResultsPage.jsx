import React from "react";
import "./ResultsPage.css";
import Nominations from "../../components/Nominations/Nominations";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchBar from "../../components/SearchBar/SearchBar";

function ResultsPage(props) {
  return (
    <div className="ResultsPage">
      <p className="title">
        The <span>Shoppies</span> 🎉
      </p>
      <SearchBar
        getMovie={props.getMovie}
        search={props.search}
        setSearch={props.setSearch}
      />
      <div className="results-container">
        <SearchResults
          result={props.result}
          search={props.search}
          nominated={props.nominated}
          setNominated={props.setNominated}
        />
        <Nominations
          nominated={props.nominated}
          setNominated={props.setNominated}
        />
      </div>
    </div>
  );
}

export default ResultsPage;
