import React, { useState } from "react";
import "./App.css";
import ResultsPage from "../ResultsPage/ResultsPage";
import HomePage from "../HomePage/HomePage";
import Banner from "../../components/Banner/Banner";
import ResultsPageMobile from "../ResultsPageMobile/ResultsPageMobile";
import { useMediaQuery } from "react-responsive";

const BASE_URL = "http://www.omdbapi.com/?apikey=f724aaa&";

function App() {
  const [search, setSearch] = useState(null);
  const [result, setResult] = useState([]);
  const [nominated, setNominated] = useState([]);

  const isMobile = useMediaQuery({ maxWidth: 695 });

  const getMovie = async (search) => {
    try {
      let response = await fetch(BASE_URL + "s=" + search);
      if (response.ok) {
        console.log("okay!");
      } else {
        console.log("fetch error!");
      }
      let searchResult = await response.json();
      console.log(searchResult);
      setResult(searchResult);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      {nominated.length >= 5 && <Banner />}
      {search === null ? (
        <HomePage getMovie={getMovie} setSearch={setSearch} search={search} />
      ) : isMobile ? (
        <ResultsPageMobile
          getMovie={getMovie}
          setSearch={setSearch}
          search={search}
          result={result}
          setNominated={setNominated}
          nominated={nominated}
        />
      ) : (
        <ResultsPage
          getMovie={getMovie}
          setSearch={setSearch}
          search={search}
          result={result}
          setNominated={setNominated}
          nominated={nominated}
        />
      )}
    </div>
  );
}

export default App;
