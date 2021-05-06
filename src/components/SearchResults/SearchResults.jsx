import React from "react";
import "./SearchResults.css";

function SearchResults(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setNominated([...props.nominated, e.target.movie.value]);
    console.dir(e.target.movie.value);
  };

  return (
    <div className="SearchResults">
      <h1>Results for "{props.search}"...</h1>
      {props.result.Response === "True" ? (
        <div className="movies-container">
          <ul>
            {props.result.Search.map((movie) => (
              <div className="movie-container" key={movie.imdbID}>
                <div className="movie-details-container">
                  <li>
                    <form onSubmit={handleSubmit}>
                      <input type="hidden" value={movie.imdbID} name="movie" />
                      {movie.Title} ({movie.Year})<button>Nominate</button>
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
