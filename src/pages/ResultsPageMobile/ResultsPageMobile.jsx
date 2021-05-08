import React, { useState } from "react";
import "./ResultsPageMobile.css";
import Nominations from "../../components/Nominations/Nominations";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchBar from "../../components/SearchBar/SearchBar";

function ResultsPageMobile(props) {
  const [showNomination, setShowNomination] = useState(false);

  const handleOnClick = () => {
    setShowNomination(!showNomination);
  };

  return (
    <div className="ResultsPageMobile">
      <p className="title">
        The <span>Shoppies</span> 🎉
      </p>
      <SearchBar
        getMovie={props.getMovie}
        search={props.search}
        setSearch={props.setSearch}
        setResult={props.setResult}
        result={props.result}
        setPage={props.setPage}
        isSearching={props.isSearching}
        setIsSearching={props.setIsSearching}
      />
      <div className="results-container">
        {showNomination ? (
          <Nominations
            nominated={props.nominated}
            setNominated={props.setNominated}
          />
        ) : (
          <SearchResults
            result={props.result}
            search={props.search}
            nominated={props.nominated}
            setNominated={props.setNominated}
            setPage={props.setPage}
            page={props.page}
            getMovie={props.getMovie}
            setIsFetching={props.setIsFetching}
            setIsChangingPage={props.setIsChangingPage}
            isGetMovie={props.isGetMovie}
          />
        )}
      </div>
      <div className="mobile-show-nomination">
        <button onClick={handleOnClick}>
          {showNomination ? "Search Results" : "Nominations"}
        </button>
      </div>
    </div>
  );
}

export default ResultsPageMobile;
