import React from "react";
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
      if (response.ok) {
        console.log("good fetch!");
      } else if (!response.ok) {
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

  return (
    <div className="SearchResults">
      <h2>
        Results for "<span>{props.search}</span>"...
      </h2>
      {props.result.Response === "True" ? (
        <div className="movies-container">
          {console.log(props.result)}
          {props.result.Search.map((movie) => (
            <div className="movie-container">
              <div className="image-container">
                <img src={movie.Poster} alt="" />
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
        <h1>There are no results!</h1>
      )}
    </div>
  );
}

export default SearchResults;
