import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./SearchResults.css";

function SearchResults(props) {
  const BASE_URL = "http://www.omdbapi.com/?apikey=f724aaa&";

  const handleSubmit = (e) => {
    e.preventDefault();
    addNomination(e.target.movie.value);
  };

  const addNomination = async (movieId) => {
    try {
      let response = await fetch(BASE_URL + "i=" + movieId);
      if (!response.ok) {
        console.log("bad fetch!");
      }
      let movie = await response.json();
      props.setNominated([...props.nominated, movie]);
    } catch (err) {
      console.log(err);
    }
  };

  const checkIfNominated = (movieId) => {
    for (let i = 0; i < props.nominated.length; i++) {
      if (props.nominated[i].imdbID === movieId) {
        return true;
      }
    }
    return false;
  };

  const handleScroll = () => {
    if (
      document.getElementById("searchresults").offsetHeight +
        document.getElementById("searchresults").scrollTop !==
        document.getElementById("searchresults").scrollHeight ||
      document.getElementById("searchresults").scrollTop === 0
    )
      return;
    props.setIsChangingPage(true);
  };

  useEffect(() => {
    document
      .getElementById("searchresults")
      .addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="SearchResults" id="searchresults">
      <h2>
        Results for "<span>{props.search}</span>"...
      </h2>
      {props.result.length > 0 ? (
        <div className="movies-container">
          {props.result.map((movie) => (
            <div className="movie-container" key={uuidv4()}>
              <div className="image-container">
                <img src={movie.Poster} alt="NOT AVAILABLE" />
              </div>
              <div className="movie-details-container">
                <form onSubmit={handleSubmit}>
                  <input type="hidden" value={movie.imdbID} name="movie" />
                  <p>
                    {movie.Title} ({movie.Year}) ({movie.Type})
                  </p>
                  <div className="nominate-button-container">
                    {checkIfNominated(movie.imdbID) ? (
                      <p>Already Nominated</p>
                    ) : props.nominated.length >= 5 ? (
                      <button id="disable-button" disabled>
                        Nominate
                      </button>
                    ) : (
                      <button>Nominate</button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results">There are no results!</p>
      )}
    </div>
  );
}

export default SearchResults;
