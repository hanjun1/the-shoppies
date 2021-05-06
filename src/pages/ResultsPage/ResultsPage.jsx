import React from "react";
import "./ResultsPage.css";
import Nominations from "../../components/Nominations/Nominations";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchBar from "../../components/SearchBar/SearchBar";

function ResultsPage(props) {
  return (
    <div className="ResultsPage">
      <h1>Results Page</h1>
      <SearchBar
        getMovie={props.getMovie}
        search={props.search}
        setSearch={props.setSearch}
      />
      <Nominations
        nominated={props.nominated}
        setNominated={props.setNominated}
      />
      <SearchResults
        result={props.result}
        search={props.search}
        nominated={props.nominated}
        setNominated={props.setNominated}
      />
    </div>
  );
}

export default ResultsPage;
