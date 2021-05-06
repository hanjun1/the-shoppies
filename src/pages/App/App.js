import React, { useState } from "react";
import "./App.css";
import ResultsPage from "../ResultsPage/ResultsPage";
import HomePage from "../HomePage/HomePage";

const BASE_URL = "http://www.omdbapi.com/?apikey=f724aaa&s=";

function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [nominated, setNominated] = useState([]);

  const getMovie = async (search) => {
    try {
      let response = await fetch(BASE_URL + search);
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
      {/* <HomePage /> */}
      <ResultsPage
        getMovie={getMovie}
        setSearch={setSearch}
        search={search}
        result={result}
        setNominated={setNominated}
        nominated={nominated}
      />
    </div>
  );
}

export default App;
