import React, { useState, useEffect } from "react";
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
  const [page, setPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [isGetMovie, setIsGetMovie] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isChangingPage, setIsChangingPage] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 695 });

  const getMovie = async () => {
    try {
      let response = await fetch(BASE_URL + "s=" + search + "&page=" + page);
      if (!response.ok) {
        console.log("fetch error!");
      }
      let searchResult = await response.json();
      if (searchResult.Response === "True") {
        setResult(result.concat(searchResult.Search));
      }
      if (isGetMovie) {
        setIsGetMovie(false);
      }
      if (isFetching) {
        setIsFetching(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!isSearching) return;
    setPage(1);
    setResult([]);
    setIsGetMovie(!isGetMovie);
  }, [isSearching]);

  useEffect(() => {
    if (!isGetMovie) return;
    getMovie();
    setIsSearching(false);
  }, [isGetMovie]);

  useEffect(() => {
    if (!isChangingPage) return;
    setPage(page + 1);
    setIsFetching(true);
    setIsChangingPage(false);
  }, [isChangingPage]);

  useEffect(() => {
    if (!isFetching) return;
    getMovie();
  }, [isFetching]);

  return (
    <div className="App">
      {nominated.length >= 5 && <Banner />}
      {search === null ? (
        <HomePage
          getMovie={getMovie}
          setSearch={setSearch}
          search={search}
          setResult={setResult}
          setPage={setPage}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
        />
      ) : isMobile ? (
        <ResultsPageMobile
          getMovie={getMovie}
          setSearch={setSearch}
          search={search}
          result={result}
          setNominated={setNominated}
          nominated={nominated}
          setPage={setPage}
          page={page}
          setResult={setResult}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          setIsFetching={setIsFetching}
          setIsChangingPage={setIsChangingPage}
        />
      ) : (
        <ResultsPage
          getMovie={getMovie}
          setSearch={setSearch}
          search={search}
          result={result}
          setNominated={setNominated}
          nominated={nominated}
          setPage={setPage}
          page={page}
          setResult={setResult}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          setIsChangingPage={setIsChangingPage}
        />
      )}
    </div>
  );
}

export default App;
