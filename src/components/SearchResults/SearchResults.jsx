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
      <h1>Results for "{props.search}"...</h1>
      {props.result.Response === "True" ? (
        <div className="movies-container">
          <ul>
            {props.result.Search.map((movie) => (
              <div className="movie-container">
                <div className="movie-details-container">
                  <li>
                    <form onSubmit={handleSubmit}>
                      <input type="hidden" value={movie.imdbID} name="movie" />
                      {movie.Title} ({movie.Year})
                      {checkIfNominated(movie.imdbID) ? (
                        <>Already Nominated</>
                      ) : (
                        <button>Nominate</button>
                      )}
                    </form>
                  </li>
                </div>
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <h1>There are no results!</h1>
      )}
    </div>
  );
}

export default SearchResults;
