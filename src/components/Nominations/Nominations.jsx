import React from "react";
import "./Nominations.css";

function Nominations(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setNominated(
      props.nominated.filter((movie) => movie.imdbID !== e.target.movie.value)
    );
  };

  return (
    <div className="Nominations">
      <h2>Nominations</h2>
      <div className="nomination-container">
        {props.nominated.map((movie) => (
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
                <button>Remove</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nominations;
